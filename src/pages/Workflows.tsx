
import { useEffect, useState } from 'react'
import { n8nClient } from '@/adapters/n8n.client'
import { useUiStore } from '@/store/ui'
import { Link } from 'react-router-dom'

export default function Workflows(){
  const { env } = useUiStore()
  const [rows, setRows] = useState<any[]>([])
  const [q, setQ] = useState('')

  useEffect(()=>{ (async()=>{
    const data = await n8nClient.listWorkflows(env, q?{q}:{}) ; setRows(data)
  })() },[env,q])

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">工作流</h1>
        <div className="flex gap-2">
          <input className="px-2 py-1 rounded border" placeholder="搜索…" value={q} onChange={e=>setQ(e.target.value)} />
          <button className="px-3 py-1 rounded bg-blue-600 text-white">新建</button>
        </div>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b"><th className="py-2">名称</th><th>版本</th><th>状态</th><th>成功率</th><th>最近更新</th></tr>
        </thead>
        <tbody>
          {rows.map((r:any)=> (
            <tr key={r.id} className="border-b hover:bg-gray-50">
              <td className="py-2"><Link className="text-blue-600" to={`/workflows/${r.id}`}>{r.name}</Link></td>
              <td>{r.version ?? '—'}</td>
              <td>{r.active? '启用':'禁用'}</td>
              <td>—</td>
              <td>{r.updatedAt ? new Date(r.updatedAt).toLocaleString() : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
