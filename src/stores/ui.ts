import create from 'zustand';
import { appConfig } from '@/config/app.config';

export type ThemeMode = 'light' | 'dark';

interface UiState {
  environment: string;
  setEnvironment: (env: string) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
}

/**
 * Global UI store using Zustand. Manages the currently selected environment and
 * theme mode. The environment is used to determine which n8n instance to talk to.
 */
export const useUiStore = create<UiState>((set) => ({
  environment: appConfig.defaultEnv,
  setEnvironment: (env) => set({ environment: env }),
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));
