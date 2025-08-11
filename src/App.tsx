import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import Dashboard from '@/pages/Dashboard';
import Workflows from '@/pages/Workflows';
import WorkflowDetail from '@/pages/WorkflowDetail';
import Executions from '@/pages/Executions';
import Monitoring from '@/pages/Monitoring';
import Versions from '@/pages/Versions';
import Credentials from '@/pages/Credentials';
import Settings from '@/pages/Settings';

const App: React.FC = () => {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workflows" element={<Workflows />} />
        <Route path="/workflows/:id" element={<WorkflowDetail />} />
        <Route path="/executions" element={<Executions />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/versions" element={<Versions />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AppShell>
  );
};

export default App;
