
import { NavLink } from 'react-router-dom'

const items = [
  { to:'/dashboard', label:'Dashboard' },
  { to:'/workflows', label:'工作流' },
  { to:'/executions', label:'执行监控' },
  { to:'/versions', label:'版本管理' },
  { to:'/credentials', label:'凭据&变量' },
  { to:'/settings', label:'设置' },
]

export default function SideNav(){
  return (
    <aside className="w-56 border-r border-gray-200 dark:border-gray-800 p-3 space-y-1">
      {items.map(i=> (
        <NavLink key={i.to} to={i.to} className={({isActive})=>`block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${isActive?'bg-gray-200 dark:bg-gray-700':''}`}>
          {i.label}
        </NavLink>
      ))}
    </aside>
  )
}
