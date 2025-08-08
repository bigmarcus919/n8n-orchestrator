
import { useUiStore } from '@/store/ui'

export default function TopBar(){
  const { env, setEnv } = useUiStore()
  return (
    <header className="h-14 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
      <div className="font-semibold">n8n Orchestrator</div>
      <div className="flex items-center gap-3">
        <select className="px-2 py-1 rounded border" value={env} onChange={e=>setEnv(e.target.value as any)}>
          <option value="dev">Dev</option>
          <option value="test">Test</option>
          <option value="prod">Prod</option>
        </select>
        <input className="px-2 py-1 rounded border w-64" placeholder="搜索工作流/标签/执行…" />
      </div>
    </header>
  )
}
