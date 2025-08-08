import React from 'react';

interface ReleaseDrawerProps {
  isOpen: boolean;
  environments: string[];
  selectedEnv: string;
  onEnvironmentChange: (env: string) => void;
  onClose: () => void;
  onConfirm: () => void;
}

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
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black bg-opacity-30" onClick={onClose} />
      <div className="w-80 bg-white shadow-lg p-4">
        <h3 className="text-lg font-semibold mb-4">发布工作流</h3>
        <label className="block mb-2 text-sm font-medium">选择环境</label>
        <select
          value={selectedEnv}
          onChange={(e) => onEnvironmentChange(e.target.value)}
          className="border w-full p-2 mb-4"
        >
          {environments.map((env) => (
            <option key={env} value={env}>
              {env}
            </option>
          ))}
        </select>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-3 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
          >
            取消
          </button>
          <button
            onClick={onConfirm}
            className="px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded"
          >
            确认发布
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReleaseDrawer;