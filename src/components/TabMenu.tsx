
import { cn } from '@/lib/utils';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ label, isActive, onClick }: TabProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'py-2 px-4 text-sm font-medium transition-all duration-300 relative',
        isActive 
          ? 'text-primary' 
          : 'text-muted-foreground hover:text-foreground'
      )}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-fade-in" />
      )}
    </button>
  );
};

interface TabMenuProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const TabMenu = ({ tabs, activeTab, onTabChange, className }: TabMenuProps) => {
  return (
    <div className={cn('flex space-x-1 mb-0 border-b border-border/40 bg-gradient-to-r from-background to-background/80 backdrop-blur-sm sticky top-0 z-10', className)}>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          label={tab}
          isActive={tab === activeTab}
          onClick={() => onTabChange(tab)}
        />
      ))}
    </div>
  );
};

export default TabMenu;
