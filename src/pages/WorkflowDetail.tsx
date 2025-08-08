
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { n8nClient } from '@/adapters/n8n.client'
import { useUiStore } from '@/store/ui'

export default function WorkflowDetail(){
  const { id } = useParams()
  const { env } = useUiStore()
  const [wf, setWf] = useState<any>()

  useEffect(()=>{ (async()=> setWf(await n8nClient.getWorkflow(env, id!)))() }, [env, id])

  if(!wf) return <div>加载中…</div>;
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-9 h-[70vh] border rounded flex items-center justify-center text-gray-400">
        Canvas Placeholder
      </div>
      <div className="col-span-3 h-[70vh] border rounded p-3 space-y-2">
        <div className="font-semibold">节点属性</div>
        <div className="text-sm text-gray-500">选择节点以编辑属性…</div>
        <button className="w-full py-2 rounded bg-blue-600 text-white">提交发布</button>
        <button className="w-full py-2 rounded border">激活/禁用</button>
      </div>
      <div className="col-span-12 border rounded p-3">
        <div className="font-semibold mb-2">调试日志</div>
        <div className="text-sm text-gray-500">运行后显示最近一次执行输入/输出</div>
      </div>
    </div>
  )
}
