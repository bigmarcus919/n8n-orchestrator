export interface WorkflowSummary {
  id: string;
  name: string;
  active: boolean;
  versionId?: string;
}

export interface Workflow extends WorkflowSummary {
  data: any;
}

export type ExecutionStatus = 'success' | 'error' | 'running';

export interface Execution {
  id: string;
  workflowId: string;
  status: ExecutionStatus;
  startedAt: string;
  finishedAt?: string;
}

export interface N8NClient {
  listWorkflows(): Promise<WorkflowSummary[]>;
  getWorkflow(id: string): Promise<Workflow>;
  listExecutions(workflowId?: string): Promise<Execution[]>;
}
