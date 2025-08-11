import workflowsData from '@/mocks/workflows.json';
import executionsData from '@/mocks/executions.json';
import {
  WorkflowSummary,
  Workflow,
  Execution,
  N8NClient,
} from './n8n.types';

/**
 * Mock implementation of the N8NClient interface.
 * Reads from static JSON files under src/mocks to simulate API responses.
 */
export const createMockClient = (): N8NClient => {
  return {
    async listWorkflows(): Promise<WorkflowSummary[]> {
      return workflowsData as unknown as WorkflowSummary[];
    },
    async getWorkflow(id: string): Promise<Workflow> {
      const wf = (workflowsData as unknown as WorkflowSummary[]).find((w) => w.id === id);
      if (!wf) {
        throw new Error(`Workflow ${id} not found`);
      }
      // Add empty data field to satisfy the Workflow type
      return { ...(wf as any), data: {} } as Workflow;
    },
    async listExecutions(workflowId?: string): Promise<Execution[]> {
      let list = executionsData as unknown as Execution[];
      if (workflowId) {
        list = list.filter((exec) => exec.workflowId === workflowId);
      }
      return list;
    },
  };
};
