
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AppSidebar from './Sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Redirect from / to /students/1 (first student) if on the root path

  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

export default Layout;
