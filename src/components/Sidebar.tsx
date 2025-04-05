
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { User, Settings, GraduationCap, PanelLeft, PanelRight } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader, 
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  return (
    <Sidebar variant="sidebar" collapsible={isCollapsed ? "icon" : "none"}>
      <SidebarHeader className="px-4 py-2">
        <div className="flex justify-between items-center">
          <h1 className={`text-xl font-bold ${isCollapsed ? 'hidden' : 'block'}`}>
            GIGLIO.AI<span className="text-app-blue">Dashboard</span>
          </h1>
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-sidebar-accent/50"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <PanelRight size={20} /> : <PanelLeft size={20} />}
          </button>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Profile">
              <NavLink 
                to="/profile" 
                className={({ isActive }) => 
                  `w-full flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'}`
                }
              >
                <User size={20} />
                <span className={isCollapsed ? 'hidden' : 'block'}>Profile</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Students">
              <NavLink 
                to="/students" 
                className={({ isActive }) => 
                  `w-full flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'}`
                }
              >
                <GraduationCap size={20} />
                <span className={isCollapsed ? 'hidden' : 'block'}>Students</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <NavLink 
                to="/settings" 
                className={({ isActive }) => 
                  `w-full flex items-center gap-3 px-3 py-2 rounded-lg ${isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/50'}`
                }
              >
                <Settings size={20} />
                <span className={isCollapsed ? 'hidden' : 'block'}>Settings</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-border">
        <div className={`flex ${isCollapsed ? 'justify-center' : 'justify-between'} items-center`}>
          {!isCollapsed && <span className="text-sm text-muted-foreground">Theme</span>}
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
