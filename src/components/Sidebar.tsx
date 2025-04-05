
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { User, Settings, GraduationCap, PanelLeft, PanelRight, LogOut } from 'lucide-react';
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
import { toast } from "sonner";

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  const handleLogout = () => {
    toast.success("Logged out successfully");
    // In a real app, you would handle actual logout logic here
  };
  
  return (
    <Sidebar variant="sidebar" collapsible={isCollapsed ? "icon" : "none"}>
      <SidebarHeader className="px-4 py-2">
        <div className="flex justify-between items-center">
          <h1 className={`text-lg font-bold text- ${isCollapsed ? 'hidden' : 'block'}`}>
            GIGLIO.AI
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
        <div className="flex flex-col gap-4">
          <div className={`flex ${isCollapsed ? 'justify-center' : 'justify-between'} items-center`}>
            {!isCollapsed && <span className="text-sm text-muted-foreground">Theme</span>}
            <ThemeToggle />
          </div>
          
          <SidebarMenuButton 
            asChild 
            tooltip="Logout"
            className="mt-2 w-full flex items-center gap-3 px-3 py-2 rounded-lg text-destructive hover:bg-destructive/10"
            onClick={handleLogout}
          >
            <button>
              <LogOut size={20} />
              <span className={isCollapsed ? 'hidden' : 'block'}>Logout</span>
            </button>
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
