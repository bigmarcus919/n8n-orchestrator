import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Node, Edge } from 'reactflow';
import Canvas from '@/components/Workflows/Canvas';
import NodeInspector from '@/components/Workflows/NodeInspector';
import ReleaseDrawer from '@/components/Workflows/ReleaseDrawer';

const WorkflowDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedEnv, setSelectedEnv] = useState('dev');

  // Placeholder 示例数据，后续可以从 n8nClient 加载实际节点和连线
  const nodes: Node[] = [
    { id: '1', type: 'default', data: { label: '开始' }, position: { x: 0, y: 50 } },
    { id: '2', type: 'default', data: { label: '处理' }, position: { x: 200, y: 50 } },
    { id: '3', type: 'default', data: { label: '结束' }, position: { x: 400, y: 50 } },
  ];

  const edges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
  ];

  return (
    <div className="flex h-full">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">工作流详情</h2>
          <div className="space-x-2">
            <button
              className="px-3 py-2 text-sm bg-blue-600 text-white rounded"
              onClick={() => setDrawerOpen(true)}
            >
              发布工作流
            </button>
          </div>
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
          // TODO: 接入真正的发布逻辑
          console.log(`发布到 ${selectedEnv} 环境`);
          setDrawerOpen(false);
        }}
      />
    </div>
  );
};

export default WorkflowDetail;