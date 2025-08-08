
import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import SideNav from './SideNav'

export default function AppShell(){
  return (
    <div className="h-screen w-screen flex bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <SideNav />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
