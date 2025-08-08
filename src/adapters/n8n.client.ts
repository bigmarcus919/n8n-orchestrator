
import { AppConfig } from '@/config/app.config'
import { createHttpClient } from './n8n.client.http'
import { createMockClient } from './n8n.client.mock'

export const n8nClient = AppConfig.mode === 'live' ? createHttpClient() : createMockClient();
