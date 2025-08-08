
import { createBrowserRouter } from 'react-router-dom'
import AppShell from '@/components/Layout/AppShell'
import Dashboard from '@/pages/Dashboard'
import Workflows from '@/pages/Workflows'
import WorkflowDetail from '@/pages/WorkflowDetail'
import Executions from '@/pages/Executions'
import Versions from '@/pages/Versions'
import Credentials from '@/pages/Credentials'
import Settings from '@/pages/Settings'

export const router = createBrowserRouter([
  { path: '/', element: <AppShell />, children: [
    { index: true, element: <Dashboard /> },
    { path: 'dashboard', element: <Dashboard /> },
    { path: 'workflows', element: <Workflows /> },
    { path: 'workflows/:id', element: <WorkflowDetail /> },
    { path: 'executions', element: <Executions /> },
    { path: 'versions', element: <Versions /> },
    { path: 'credentials', element: <Credentials /> },
    { path: 'settings', element: <Settings /> },
  ]}
])
