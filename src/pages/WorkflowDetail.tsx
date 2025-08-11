import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getN8nClient } from '@/adapters/n8n.client';
import { Node, Edge } from 'reactflow';
import Canvas from '@/components/workflow/Canvas';
import NodeInspector from '@/components/workflow/NodeInspector';
import ReleaseDrawer from '@/components/workflow/ReleaseDrawer';

/**
 * WorkflowDetail displays an individual workflow. It renders the workflow
 * structure on a canvas and offers a drawer to release new versions to
 * different environments. Node details are shown in a side panel.
 */
const WorkflowDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedEnv, setSelectedEnv] = useState('dev');
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    const client = getN8nClient();
    if (id) {
      // Future: fetch workflow details and convert to nodes/edges.
      // For now, use placeholder nodes and edges.
      client.getWorkflow(id).then(() => {
        setNodes([
          { id: '1', type: 'default', data: { label: 'Start' }, position: { x: 0, y: 50 } },
          { id: '2', type: 'default', data: { label: 'Process' }, position: { x: 200, y: 50 } },
          { id: '3', type: 'default', data: { label: 'End' }, position: { x: 400, y: 50 } },
        ]);
        setEdges([
          { id: 'e1-2', source: '1', target: '2' },
          { id: 'e2-3', source: '2', target: '3' },
        ]);
      });
    }
  }, [id]);

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flex: '1' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <h1>Workflow Detail</h1>
          <button
            onClick={() => setDrawerOpen(true)}
            style={{ padding: '8px 12px', background: '#3b82f6', color: 'white', borderRadius: '4px', border: 'none' }}
          >
            Release
          </button>
        </div>
        <Canvas nodes={nodes} edges={edges} onNodeSelect={setSelectedNode} />
      </div>
      <NodeInspector node={selectedNode} />
      <ReleaseDrawer
        isOpen={drawerOpen}
        environments={['dev', 'test', 'prod']}
        selectedEnv={selectedEnv}
        onEnvironmentChange={setSelectedEnv}
        onClose={() => setDrawerOpen(false)}
        onConfirm={() => {
          // TODO: integrate with release API
          setDrawerOpen(false);
        }}
      />
    </div>
  );
};

export default WorkflowDetail;
