import React from 'react';
import { useUiStore } from '@/stores/ui';
import { appConfig } from '@/config/app.config';

/**
 * TopBar provides a header with the application title, environment selector,
 * and theme toggle. It reads and updates state via the UI store.
 */
const TopBar: React.FC = () => {
  const environment = useUiStore((state) => state.environment);
  const setEnvironment = useUiStore((state) => state.setEnvironment);
  const theme = useUiStore((state) => state.theme);
  const toggleTheme = useUiStore((state) => state.toggleTheme);

  return (
    <header
      style={{
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        borderBottom: '1px solid #e5e7eb',
        background: '#ffffff',
      }}
    >
      <div>
        <strong>n8n Orchestrator</strong>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <select
          value={environment}
          onChange={(e) => setEnvironment(e.target.value)}
          style={{ padding: '4px 8px' }}
        >
          {Object.keys(appConfig.environments).map((key) => (
            <option key={key} value={key}>
              {appConfig.environments[key].name}
            </option>
          ))}
        </select>
        <button onClick={toggleTheme} style={{ padding: '4px 8px' }}>
          {theme === 'light' ? '🌞' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default TopBar;
