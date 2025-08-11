import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, Node, Edge } from 'reactflow';
import 'reactflow/dist/style.css';

export interface CanvasProps {
  nodes: Node[];
  edges: Edge[];
  onNodeSelect?: (node: Node | null) => void;
}

/**
 * Canvas component renders a React Flow graph given nodes and edges. It
 * exposes an optional callback for when a node is selected.
 */
const Canvas: React.FC<CanvasProps> = ({ nodes, edges, onNodeSelect }) => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={(_, node) => onNodeSelect?.(node)}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Canvas;
