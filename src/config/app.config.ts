
export type EnvKey = 'dev' | 'test' | 'prod';

export const AppConfig = {
  appName: 'n8n Orchestrator',
  mode: 'mock' as 'mock' | 'live',
  environments: {
    dev:  { label: 'Dev',  baseURL: 'http://localhost:5678', token: 'REPLACE_DEV_TOKEN' },
    test: { label: 'Test', baseURL: 'http://localhost:5678', token: 'REPLACE_TEST_TOKEN' },
    prod: { label: 'Prod', baseURL: 'http://localhost:5678', token: 'REPLACE_PROD_TOKEN' },
  },
  defaultEnv: 'dev' as EnvKey,
  ui: {
    theme: 'system' as 'light'|'dark'|'system',
    primary: '#1F4B99',
    accent: '#3FA9F5',
  }
};
