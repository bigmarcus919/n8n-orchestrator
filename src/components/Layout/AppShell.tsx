import React from 'react';
import TopBar from './TopBar';
import SideNav from './SideNav';

interface AppShellProps {
  children: React.ReactNode;
}

/**
 * AppShell composes the main layout with a side navigation, top bar, and
 * scrolling content area. The children represent the routed page content.
 */
const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="app-shell" style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <SideNav />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <TopBar />
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '16px' }}>{children}</div>
      </div>
    </div>
  );
};

export default AppShell;
