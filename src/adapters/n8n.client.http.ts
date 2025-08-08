
import { AppConfig } from '@/config/app.config'
import type { IN8nClient } from './n8n.types'

function headers(env: keyof typeof AppConfig.environments){
  const t = AppConfig.environments[env];
  return { 'Authorization': `Bearer ${t.token}`, 'Content-Type': 'application/json' };
}

function base(env: keyof typeof AppConfig.environments){
  return AppConfig.environments[env].baseURL;
}

export function createHttpClient(): IN8nClient {
  return {
    async listWorkflows(env){
      const res = await fetch(`${base(env)}/rest/workflows`, { headers: headers(env) });
      const data = await res.json(); return (data.data ?? data);
    },
    async getWorkflow(env, id){
      const res = await fetch(`${base(env)}/rest/workflows/${id}`, { headers: headers(env) });
      return await res.json();
    },
    async saveWorkflow(env, payload){
      const url = payload.id ? `${base(env)}/rest/workflows/${payload.id}` : `${base(env)}/rest/workflows`;
      const method = payload.id ? 'PATCH' : 'POST';
      const res = await fetch(url, { method, headers: headers(env), body: JSON.stringify(payload.json ? payload : { name: payload.name }) });
      return await res.json();
    },
    async activateWorkflow(env, id, active){
      const action = active ? 'activate' : 'deactivate';
      await fetch(`${base(env)}/rest/workflows/${id}/${action}`, { method: 'POST', headers: headers(env) });
    },
    async listExecutions(env, q){
      const sp = new URLSearchParams();
      if(q?.workflowId) sp.set('workflowId', q.workflowId);
      if(q?.status) sp.set('status', q.status as any);
      const res = await fetch(`${base(env)}/rest/executions?${sp.toString()}`, { headers: headers(env) });
      const data = await res.json(); return (data.data ?? data);
    },
    async getExecution(env, id){
      const res = await fetch(`${base(env)}/rest/executions/${id}`, { headers: headers(env) });
      return await res.json();
    },
    async listVersions(){ return []; },
    async getVersion(){ return { id:'', workflowId:'', version:'', author:'', createdAt:'', summary:'' }; },
  }
}
