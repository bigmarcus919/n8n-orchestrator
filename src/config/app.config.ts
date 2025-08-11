export type EnvironmentConfig = {
  name: string;
  baseURL: string;
  token: string;
};

export type AppMode = 'mock' | 'live';

export interface AppConfig {
  mode: AppMode;
  environments: Record<string, EnvironmentConfig>;
  defaultEnv: string;
}

/**
 * Global application configuration. Adjust baseURL and token values to point to your
 * n8n instances for each environment. The `mode` property controls whether the
 * application uses mocked data ("mock") or performs real HTTP requests ("live").
 */
export const appConfig: AppConfig = {
  mode: 'mock',
  defaultEnv: 'dev',
  environments: {
    dev: {
      name: 'Development',
      baseURL: 'http://localhost:5678',
      token: '',
    },
    test: {
      name: 'Test',
      baseURL: 'http://localhost:5678',
      token: '',
    },
    prod: {
      name: 'Production',
      baseURL: 'http://localhost:5678',
      token: '',
    },
  },
};
