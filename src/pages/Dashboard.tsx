import React from 'react';

/**
 * Dashboard serves as the default landing page. Here you can surface high-level
 * metrics, quick actions, or guidance on how to use the platform.
 */
const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Welcome to n8n Orchestrator. Use the navigation on the left to manage
        your workflows, monitor executions, and configure settings.
      </p>
    </div>
  );
};

export default Dashboard;
