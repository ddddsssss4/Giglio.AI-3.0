
import { ReactNode, useState, useEffect } from 'react';
import UserHeader from '@/components/UserHeader';
import Notes from '@/components/Notes';
import { useMediaQuery } from '@/hooks/use-mobile';

interface DashboardLayoutProps {
  children: ReactNode;
  userName: string;
  studentName: string;
  studentImage: string;
  loading?: boolean;
}

const DashboardLayout = ({
  children,
  userName,
  studentName,
  studentImage,
  loading = false
}: DashboardLayoutProps) => {
  const [renderedElements, setRenderedElements] = useState(0);
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  
  useEffect(() => {
    // Increment rendered elements for staggered animation
    const interval = setInterval(() => {
      setRenderedElements(prev => {
        if (prev < 10) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 150);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="w-16 h-16 border-4 border-app-blue border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg animate-pulse">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="container px-2 sm:px-4 py-4 sm:py-8 mx-auto max-w-5xl">
        <div className="card-gradient rounded-xl p-3 sm:p-6 shadow-lg border border-white/10 animate-fade-in">
          {/* User Header with Notes button */}
          <div className={`flex ${isTablet ? 'flex-col sm:flex-row' : 'flex-row'} justify-between items-start gap-2`}>
            <div className="flex-1">
              <UserHeader 
                userName={userName} 
                studentName={studentName} 
                studentImage={studentImage} 
              />
            </div>
            <div className="flex items-center space-x-2 py-2">
              <Notes />
            </div>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
