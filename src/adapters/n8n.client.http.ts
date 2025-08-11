import { appConfig } from '@/config/app.config';
import { useUiStore } from '@/stores/ui';
import { N8NClient, WorkflowSummary, Workflow, Execution } from './n8n.types';

/**
 * HTTP implementation of the N8NClient interface.
 * Uses fetch to communicate with the n8n REST API. Automatically includes
 * authorization tokens and switches base URLs based on the selected environment.
 */
export const createHttpClient = (): N8NClient => {
  /**
   * Construct headers for API requests. Pulls the current environment and token
   * from the UI store and global config.
   */
  const getHeaders = () => {
    const env = useUiStore.getState().environment;
    const envConfig = appConfig.environments[env];
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${envConfig.token}`,
    };
  };

  /**
   * Resolve the base URL for the current environment.
   */
  const getBaseURL = () => {
    const env = useUiStore.getState().environment;
    return appConfig.environments[env].baseURL;
  };

  /**
   * Normalize API responses. Some n8n endpoints wrap the payload in a `data`
   * property. This helper returns the payload regardless of format.
   */
  const handleResponse = async <T>(res: Response): Promise<T> => {
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`${res.status} ${res.statusText}: ${text}`);
    }
    const json = await res.json();
    return (json.data ?? json) as T;
  };

  return {
    async listWorkflows(): Promise<WorkflowSummary[]> {
      const res = await fetch(`${getBaseURL()}/rest/workflows`, {
        headers: getHeaders(),
      });
      return handleResponse<WorkflowSummary[]>(res);
    },
    async getWorkflow(id: string): Promise<Workflow> {
      const res = await fetch(`${getBaseURL()}/rest/workflows/${id}`, {
        headers: getHeaders(),
      });
      return handleResponse<Workflow>(res);
    },
    async listExecutions(workflowId?: string): Promise<Execution[]> {
      const url = workflowId
        ? `${getBaseURL()}/rest/executions?workflowId=${workflowId}`
        : `${getBaseURL()}/rest/executions`;
      const res = await fetch(url, {
        headers: getHeaders(),
      });
      return handleResponse<Execution[]>(res);
    },
  };
};
