
import { useState, useEffect } from 'react';
import TabMenu from '@/components/TabMenu';
import UserHeader from '@/components/UserHeader';
import DataTable from '@/components/DataTable';
import ProgressChart from '@/components/ProgressChart';
import { SummaryItem, SummaryRow } from '@/components/SummaryCard';
import Notes from '@/components/Notes';
import { ChevronDown, ChevronRight } from 'lucide-react';

// Mock data
const mockErrorData = [
  { date: '03/01/2025', passage: 'Passage #1', attempt: 'Attempt #1', mispronunciation: 'Rat', omission: 'Man' },
  { date: '03/01/2025', passage: 'Passage #1', attempt: 'Attempt #2', mispronunciation: 'Cat' },
  { date: '03/01/2025', passage: 'Passage #2', attempt: 'Attempt #1', mispronunciation: 'Like', omission: 'Magic', insertion: 'Cat' },
  { date: '03/01/2025', passage: 'Passage #2', attempt: 'Attempt #2', insertion: 'Cat' },
  { date: '03/01/2025', passage: 'Passage #2', attempt: 'Attempt #3' },
  { date: '02/28/2025', passage: 'Passage #1', attempt: 'Attempt #1', mispronunciation: 'Rat', omission: 'Ran', insertion: 'Rabbit', substitution: 'Bit' },
  { date: '02/28/2025', passage: 'Passage #1', attempt: 'Attempt #1', mispronunciation: 'Cat', omission: 'Magic', insertion: 'Cat' },
  { date: '02/28/2025', passage: 'Passage #1', attempt: 'Attempt #1', mispronunciation: 'Sit', omission: 'Fan', insertion: 'Pin' },
];

const mockChartData = [
  { name: 'P1A1', mispronunciation: 9, omission: 5.5, insertion: 4, substitution: 3, reversal: 1.8 },
  { name: 'P1A2', mispronunciation: 10.5, omission: 9, insertion: 7, substitution: 6, reversal: 2.5 },
  { name: 'P1A3', mispronunciation: 10.8, omission: 9.8, insertion: 8.3, substitution: 6.8, reversal: 3.4 },
  { name: 'P2A1', mispronunciation: 9.5, omission: 9, insertion: 8.2, substitution: 7, reversal: 3.8 },
  { name: 'P2A2', mispronunciation: 8, omission: 8.7, insertion: 9.5, substitution: 9, reversal: 4.2 },
  { name: 'P2A3', mispronunciation: 8.2, omission: 11.7, insertion: 13, substitution: 14, reversal: 4.5 },
];

const studentImage = "/lovable-uploads/1fa85128-3b99-4807-8395-4a5e40033726.png";

const Dashboard = () => {
  const [mainTab, setMainTab] = useState('SUMMARY');
  const [subTab, setSubTab] = useState('ERROR ANALYSIS');
  const [loading, setLoading] = useState(true);
  const [renderedElements, setRenderedElements] = useState(0);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    // Increment rendered elements for staggered animation
    const interval = setInterval(() => {
      setRenderedElements(prev => {
        if (prev < 10) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 150);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container px-4 py-8 mx-auto max-w-5xl">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <div className="w-16 h-16 border-4 border-app-blue border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-lg animate-pulse">Loading dashboard...</p>
          </div>
        ) : (
          <div className="card-gradient rounded-xl p-6 shadow-lg border border-white/10 animate-fade-in">
            {/* User Header with Notes button */}
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <UserHeader 
                  userName="Mike Davis" 
                  studentName="Emily Johnson" 
                  studentImage={studentImage} 
                />
              </div>
              <div className="flex items-center space-x-2 py-2">
                <Notes />
              </div>
            </div>
            
            {/* Main Tabs */}
            <TabMenu 
              tabs={['SUMMARY', 'RECENT SESSION', 'HISTORY']} 
              activeTab={mainTab} 
              onTabChange={setMainTab}
              className={renderedElements >= 1 ? 'animate-fade-in' : 'opacity-0'}
            />
            
            {mainTab === 'SUMMARY' && (
              <div className={`mt-4 ${renderedElements >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
                <SummaryItem 
                  title="On Track" 
                  status="success"
                  isExpanded={false}
                />
                
                <SummaryItem 
                  title="Celeration" 
                  isExpanded={true}
                >
                  <SummaryRow title="Corrects">
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div>
                        <div className="text-gray-400">Celeration:</div>
                        <div className="text-app-blue font-medium">x1.5</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Prior Average Corrects:</div>
                        <div className="text-app-blue font-medium">40%</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Last Session Corrects:</div>
                        <div className="text-green-500 font-medium">60%</div>
                      </div>
                    </div>
                  </SummaryRow>
                  
                  <SummaryRow title="Incorrects">
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div>
                        <div className="text-gray-400">Celeration:</div>
                        <div className="text-app-blue font-medium">x1.5</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Prior Average Incorrects:</div>
                        <div className="text-app-blue font-medium">50%</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Last Session Incorrects:</div>
                        <div className="text-green-500 font-medium">25%</div>
                      </div>
                    </div>
                  </SummaryRow>
                </SummaryItem>
                
                <SummaryItem 
                  title="Improvement" 
                  additionalInfo={<span className="text-green-500 font-medium">x1.8</span>}
                  isExpanded={false}
                />
                
                <SummaryItem 
                  title="Intervention" 
                  isExpanded={false}
                  additionalInfo={
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">No of days since last intervention:</div>
                        <div>3</div>
                      </div>
                      <div>
                        <div className="text-gray-400">No of days of current intervention:</div>
                        <div>0</div>
                      </div>
                    </div>
                  }
                />
              </div>
            )}
            
            {mainTab === 'RECENT SESSION' && (
              <div className={`mt-4 ${renderedElements >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
                {/* Sub Tabs */}
                <TabMenu 
                  tabs={['ERROR ANALYSIS', 'METRICS']} 
                  activeTab={subTab} 
                  onTabChange={setSubTab} 
                />
                
                {subTab === 'ERROR ANALYSIS' && (
                  <div className={`mt-4 ${renderedElements >= 3 ? 'animate-fade-in' : 'opacity-0'}`}>
                    <DataTable data={mockErrorData.slice(0, 6)} />
                  </div>
                )}
                
                {subTab === 'METRICS' && (
                  <div className={`mt-4 ${renderedElements >= 3 ? 'animate-fade-in' : 'opacity-0'}`}>
                    <ProgressChart data={mockChartData} />
                  </div>
                )}
              </div>
            )}
            
            {mainTab === 'HISTORY' && (
              <div className={`mt-4 ${renderedElements >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
                {/* Sub Tabs */}
                <TabMenu 
                  tabs={['ERROR ANALYSIS', 'METRICS']} 
                  activeTab={subTab} 
                  onTabChange={setSubTab} 
                />
                
                {subTab === 'ERROR ANALYSIS' && (
                  <div className={`mt-4 ${renderedElements >= 3 ? 'animate-fade-in' : 'opacity-0'}`}>
                    <DataTable data={mockErrorData} />
                  </div>
                )}
                
                {subTab === 'METRICS' && (
                  <div className={`mt-4 ${renderedElements >= 3 ? 'animate-fade-in' : 'opacity-0'}`}>
                    <ProgressChart data={mockChartData} />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
