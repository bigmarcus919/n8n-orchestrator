import { appConfig } from '@/config/app.config';
import { N8NClient } from './n8n.types';
import { createMockClient } from './n8n.client.mock';
import { createHttpClient } from './n8n.client.http';

/**
 * Factory to return the appropriate n8n client based on the global application config.
 */
export const getN8nClient = (): N8NClient => {
  return appConfig.mode === 'mock' ? createMockClient() : createHttpClient();
};
