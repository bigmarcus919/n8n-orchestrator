
import { create } from 'zustand'
import { AppConfig, type EnvKey } from '@/config/app.config'

type Theme = 'light'|'dark'|'system';

type UiState = {
  env: EnvKey; setEnv: (e: EnvKey)=>void;
  theme: Theme; setTheme: (t:Theme)=>void;
}

export const useUiStore = create<UiState>((set)=> ({
  env: AppConfig.defaultEnv,
  setEnv: (env)=> set({ env }),
  theme: AppConfig.ui.theme,
  setTheme: (theme)=> set({ theme }),
}))
