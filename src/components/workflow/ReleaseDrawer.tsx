import React from 'react';

export interface ReleaseDrawerProps {
  isOpen: boolean;
  environments: string[];
  selectedEnv: string;
  onEnvironmentChange: (env: string) => void;
  onClose: () => void;
  onConfirm: () => void;
}

/**
 * ReleaseDrawer presents a side panel for selecting an environment and
 * confirming a workflow release. It is controlled via `isOpen` and emits
 * callbacks on close and confirm.
 */
const ReleaseDrawer: React.FC<ReleaseDrawerProps> = ({
  isOpen,
  environments,
  selectedEnv,
  onEnvironmentChange,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;
  return (
    <div className="release-drawer" style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex' }}>
      <div style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} onClick={onClose} />
      <div
        style={{
          width: '320px',
          backgroundColor: '#ffffff',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          padding: '16px',
        }}
      >
        <h3 style={{ marginTop: 0 }}>Release Workflow</h3>
        <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '4px' }}>
          Select environment
        </label>
        <select
          value={selectedEnv}
          onChange={(e) => onEnvironmentChange(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
        >
          {environments.map((env) => (
            <option key={env} value={env}>
              {env}
            </option>
          ))}
        </select>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <button onClick={onClose} style={{ padding: '8px 12px', background: '#e5e7eb', borderRadius: '4px' }}>
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
            }}
            style={{ padding: '8px 12px', background: '#3b82f6', color: 'white', borderRadius: '4px' }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReleaseDrawer;
