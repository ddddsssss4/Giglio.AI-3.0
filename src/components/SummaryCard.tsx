
import { ChevronDown, ChevronRight, FilePenLine } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SummaryRowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SummaryRow = ({ title, children, className }: SummaryRowProps) => {
  return (
    <div className={cn('flex items-center justify-between p-3 border-b border-app-blue/10', className)}>
      <div className="font-medium text-lg">{title}</div>
      <div className="flex items-center gap-2">
        {children}
        <button className="text-app-blue hover:text-app-dark-blue transition-colors">
          <FilePenLine size={18} />
        </button>
      </div>
    </div>
  );
};

interface SummaryItemProps {
  title: string;
  isExpanded?: boolean;
  status?: 'success' | 'warning' | 'danger' | 'info';
  children?: React.ReactNode;
  additionalInfo?: React.ReactNode;
}

const SummaryItem = ({ title, isExpanded = false, status, children, additionalInfo }: SummaryItemProps) => {
  const [expanded, setExpanded] = useState(isExpanded);
  
  const getStatusColor = () => {
    switch (status) {
      case 'success': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'danger': return 'bg-red-500';
      case 'info': return 'bg-blue-500';
      default: return '';
    }
  };
  
  return (
    <div className="mb-2 bg-card rounded-md overflow-hidden animate-fade-in">
      <div 
        className="flex items-center p-3 cursor-pointer hover:bg-accent/10 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 
          <ChevronDown size={18} className="text-app-blue mr-2" /> : 
          <ChevronRight size={18} className="text-app-blue mr-2" />
        }
        
        {status && <div className={`w-4 h-4 rounded-full mr-2 ${getStatusColor()}`} />}
        <span className="font-medium">{title}</span>
        
        {additionalInfo && <div className="ml-auto">{additionalInfo}</div>}
      </div>
      
      {expanded && children && (
        <div className="bg-accent/5 animate-accordion-down">
          {children}
        </div>
      )}
    </div>
  );
};

export { SummaryItem, SummaryRow };
