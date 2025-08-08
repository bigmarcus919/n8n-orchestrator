
import workflows from '@/mocks/workflows.json'
import executions from '@/mocks/executions.json'
import versions from '@/mocks/versions.json'
import type { IN8nClient, Workflow, WorkflowDetail, Execution, VersionInfo } from './n8n.types'

export function createMockClient(): IN8nClient {
  return {
    async listWorkflows(){ return workflows as unknown as Workflow[] },
    async getWorkflow(_env, id){
      const w = (workflows as any[]).find(x => x.id === id);
      return { ...(w ?? {id, name:'未知', active:false, tags:[], version:'v0', updatedAt:new Date().toISOString(), createdAt:new Date().toISOString()}), json: { nodes: [], connections: [] }, nodes: 3, connections: 2 } as WorkflowDetail;
    },
    async saveWorkflow(_env, payload){
      return { id: payload.id ?? 'w_new', name: payload.name, active: false, tags: payload.tags ?? [], version: 'v1',
               updatedAt: new Date().toISOString(), createdAt: new Date().toISOString(), json: payload.json } as any;
    },
    async activateWorkflow(){ return },
    async listExecutions(_env, q){ return (executions as unknown as Execution[]).filter(e => (notset(q?.workflowId) || e.workflowId == q?.workflowId)); },
    async getExecution(){ return { id:'e1', data:{ nodes: [] } } as any },
    async listVersions(wfId){ return (versions as unknown as VersionInfo[]).filter(v => v.workflowId === wfId) },
    async getVersion(vId){ return (versions as unknown as VersionInfo[]).find(v => v.id === vId)! },
  }
}

function notset(v:any){ return v===undefined || v===null || v==='' }
