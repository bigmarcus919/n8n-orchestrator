import React, { useEffect, useState } from 'react';
import { getN8nClient } from '@/adapters/n8n.client';
import { Execution } from '@/adapters/n8n.types';

/**
 * Executions page lists past and running workflow executions. It fetches
 * data from the n8n API or mock client and renders a table.
 */
const Executions: React.FC = () => {
  const [executions, setExecutions] = useState<Execution[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const client = getN8nClient();
    setLoading(true);
    client
      .listExecutions()
      .then((data) => {
        setExecutions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading executions…</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Executions</h1>
      {executions.length === 0 ? (
        <p>No executions found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: '8px' }}>ID</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: '8px' }}>Workflow</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: '8px' }}>Status</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: '8px' }}>Started</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: '8px' }}>Finished</th>
            </tr>
          </thead>
          <tbody>
            {executions.map((exec) => (
              <tr key={exec.id}>
                <td style={{ padding: '8px', borderBottom: '1px solid #f3f4f6' }}>{exec.id}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #f3f4f6' }}>{exec.workflowId}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #f3f4f6' }}>{exec.status}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #f3f4f6' }}>{new Date(exec.startedAt).toLocaleString()}</td>
                <td style={{ padding: '8px', borderBottom: '1px solid #f3f4f6' }}>{exec.finishedAt ? new Date(exec.finishedAt).toLocaleString() : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Executions;
