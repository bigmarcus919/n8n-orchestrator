import React from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  Edge,
  Node,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface CanvasProps {
  nodes: Node[];
  edges: Edge[];
  onNodeSelect?: (node: Node | null) => void;
}

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