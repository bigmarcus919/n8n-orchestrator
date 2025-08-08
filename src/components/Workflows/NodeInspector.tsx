import React from 'react';
import { Node } from 'reactflow';

interface NodeInspectorProps {
  node: Node | null;
}

const NodeInspector: React.FC<NodeInspectorProps> = ({ node }) => {
  if (!node) {
    return (
      <div className="p-4 border-l border-gray-200">
        <h3 className="text-lg font-semibold mb-2">节点属性</h3>
        <p>选择一个节点查看详细信息。</p>
      </div>
    );
  }

  return (
    <div className="p-4 border-l border-gray-200">
      <h3 className="text-lg font-semibold mb-2">节点属性</h3>
      <div className="space-y-2">
        <div>
          <span className="font-medium">ID:</span> {node.id}
        </div>
        <div>
          <span className="font-medium">Label:</span> {node.data?.label ?? node.id}
        </div>
      </div>
    </div>
  );
};

export default NodeInspector;