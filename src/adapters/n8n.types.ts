
export type Workflow = {
  id: string; name: string; active: boolean; tags: string[];
  version: string; updatedAt: string; createdAt: string;
};

export type WorkflowDetail = Workflow & {
  json: any;
  nodes?: number; connections?: number;
};

export type Execution = {
  id: string; workflowId: string; status: 'success'|'error'|'running';
  startedAt: string; durationMs: number; trigger: 'manual'|'webhook'|'schedule';
};

export type VersionInfo = {
  id: string; workflowId: string; version: string; author: string; createdAt: string;
  summary: string; diff?: any;
};

export interface IN8nClient {
  listWorkflows(env: string, query?: { tag?: string; q?: string }): Promise<Workflow[]>;
  getWorkflow(env: string, id: string): Promise<WorkflowDetail>;
  saveWorkflow(env: string, payload: { id?: string; json: any; name: string; tags?: string[] }): Promise<WorkflowDetail>;
  activateWorkflow(env: string, id: string, active: boolean): Promise<void>;

  listExecutions(env: string, query?: { workflowId?: string; status?: string; limit?: number; offset?: number }): Promise<Execution[]>;
  getExecution(env: string, id: string): Promise<any>;

  listVersions(workflowId: string): Promise<VersionInfo[]>;
  getVersion(versionId: string): Promise<VersionInfo>;
}
