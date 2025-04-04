
import { cn } from '@/lib/utils';
import { useState } from 'react';

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
        'py-2 px-4 text-center rounded-t-md transition-all duration-300 font-medium text-sm',
        isActive ? 'tab-active' : 'tab-inactive'
      )}
    >
      {label}
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
    <div className={cn('flex mb-0', className)}>
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
