import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItem {
  to: string;
  label: string;
}

const navItems: NavItem[] = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/workflows', label: 'Workflows' },
  { to: '/executions', label: 'Executions' },
  { to: '/monitoring', label: 'Monitoring' },
  { to: '/versions', label: 'Versions' },
  { to: '/credentials', label: 'Credentials' },
  { to: '/settings', label: 'Settings' },
];

/**
 * SideNav renders a vertical list of navigation links. Active routes are
 * highlighted via the `.active` class defined in global CSS.
 */
const SideNav: React.FC = () => {
  return (
    <nav
      style={{
        width: '200px',
        borderRight: '1px solid #e5e7eb',
        padding: '16px',
        background: '#ffffff',
        overflowY: 'auto',
      }}
    >
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {navItems.map((item) => (
          <li key={item.to} style={{ marginBottom: '8px' }}>
            <NavLink
              to={item.to}
              style={{ textDecoration: 'none', color: 'inherit' }}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
