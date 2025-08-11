import React from 'react';
import { Node } from 'reactflow';

export interface NodeInspectorProps {
  node: Node | null;
}

/**
 * NodeInspector displays information about the currently selected node on the
 * workflow canvas. If no node is selected, it displays a placeholder message.
 */
const NodeInspector: React.FC<NodeInspectorProps> = ({ node }) => {
  if (!node) {
    return (
      <div style={{ width: '240px', borderLeft: '1px solid #e5e7eb', padding: '16px' }}>
        <h3 style={{ marginTop: 0 }}>Node Inspector</h3>
        <p>Select a node to see its details.</p>
      </div>
    );
  }
  return (
    <div style={{ width: '240px', borderLeft: '1px solid #e5e7eb', padding: '16px' }}>
      <h3 style={{ marginTop: 0 }}>Node Inspector</h3>
      <div style={{ marginBottom: '8px' }}>
        <strong>ID:</strong> {node.id}
      </div>
      <div>
        <strong>Label:</strong> {node.data?.label ?? node.id}
      </div>
    </div>
  );
};

export default NodeInspector;
