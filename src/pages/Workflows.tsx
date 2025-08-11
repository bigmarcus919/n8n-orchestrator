import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getN8nClient } from '@/adapters/n8n.client';
import { WorkflowSummary } from '@/adapters/n8n.types';

/**
 * Workflows page fetches and lists available workflows. It links to the
 * workflow detail page for editing and monitoring a single workflow.
 */
const Workflows: React.FC = () => {
  const [workflows, setWorkflows] = useState<WorkflowSummary[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const client = getN8nClient();
    setLoading(true);
    client
      .listWorkflows()
      .then((data) => {
        setWorkflows(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading workflows…</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Workflows</h1>
      {workflows.length === 0 ? (
        <p>No workflows found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: '8px' }}>Name</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: '8px' }}>Active</th>
            </tr>
          </thead>
          <tbody>
            {workflows.map((wf) => (
              <tr key={wf.id}>
                <td style={{ padding: '8px', borderBottom: '1px solid #f3f4f6' }}>
                  <Link to={`/workflows/${wf.id}`}>{wf.name}</Link>
                </td>
                <td style={{ padding: '8px', borderBottom: '1px solid #f3f4f6' }}>
                  {wf.active ? 'Yes' : 'No'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Workflows;
