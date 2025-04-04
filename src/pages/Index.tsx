import { useState, useEffect } from 'react';
import TabMenu from '@/components/TabMenu';
import UserHeader from '@/components/UserHeader';
import DataTable from '@/components/DataTable';
import ProgressChart from '@/components/ProgressChart';
import { SummaryItem, SummaryRow } from '@/components/SummaryCard';
import Notes from '@/components/Notes';
import { ChevronDown, ChevronRight, TrendingUp, Clock, AlertCircle, CheckCircle } from 'lucide-react';

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
                  isExpanded={true}
                  icon={<CheckCircle className="text-green-500 h-5 w-5" />}
                >
                  <div className="p-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-500/10 p-3 rounded-md border border-green-500/20">
                        <div className="text-sm text-gray-400">Weekly Progress</div>
                        <div className="text-lg font-medium text-green-500">+12% improvement</div>
                        <div className="text-xs text-gray-400 mt-1">Above target by 5%</div>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-md border border-primary/20">
                        <div className="text-sm text-gray-400">Accuracy Rate</div>
                        <div className="text-lg font-medium text-primary">87% accuracy</div>
                        <div className="text-xs text-gray-400 mt-1">Target: 80%</div>
                      </div>
                    </div>
                    <div className="bg-card/50 p-3 rounded-md border border-border/40">
                      <div className="text-sm font-medium">Notes</div>
                      <div className="text-xs text-gray-400 mt-1">
                        Student is progressing well with reading fluency. Continue with current program.
                      </div>
                    </div>
                  </div>
                </SummaryItem>
                
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
                  isExpanded={true}
                  icon={<TrendingUp className="text-blue-500 h-5 w-5" />}
                >
                  <div className="p-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-500/10 p-3 rounded-md border border-blue-500/20">
                        <div className="text-sm text-gray-400">Weekly Change</div>
                        <div className="text-lg font-medium text-blue-500">+15%</div>
                        <div className="text-xs text-gray-400 mt-1">Last week: +10%</div>
                      </div>
                      <div className="bg-green-500/10 p-3 rounded-md border border-green-500/20">
                        <div className="text-sm text-gray-400">Monthly Progress</div>
                        <div className="text-lg font-medium text-green-500">+42%</div>
                        <div className="text-xs text-gray-400 mt-1">Above expected: 12%</div>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-md border border-primary/20">
                        <div className="text-sm text-gray-400">Reading Speed</div>
                        <div className="text-lg font-medium text-primary">+8 wpm</div>
                        <div className="text-xs text-gray-400 mt-1">Target: +5 wpm</div>
                      </div>
                    </div>
                    <div className="bg-card/50 p-3 rounded-md border border-border/40">
                      <div className="text-sm font-medium">Improvement Areas</div>
                      <div className="text-xs mt-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-green-500"></div>
                          <span className="text-gray-400">Mispronunciation: -20%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-green-500"></div>
                          <span className="text-gray-400">Omission: -15%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-amber-500"></div>
                          <span className="text-gray-400">Insertion: -5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SummaryItem>
                
                <SummaryItem 
                  title="Intervention" 
                  isExpanded={true}
                  icon={<Clock className="text-amber-500 h-5 w-5" />}
                  additionalInfo={
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <div className="text-gray-400">Days since last:</div>
                        <div>3</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Days of current:</div>
                        <div>0</div>
                      </div>
                    </div>
                  }
                >
                  <div className="p-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-amber-500/10 p-3 rounded-md border border-amber-500/20">
                        <div className="text-sm text-gray-400">Current Intervention</div>
                        <div className="text-lg font-medium text-amber-500">Phonemic Awareness</div>
                        <div className="text-xs text-gray-400 mt-1">Started: 03/01/2025</div>
                      </div>
                      <div className="bg-purple-500/10 p-3 rounded-md border border-purple-500/20">
                        <div className="text-sm text-gray-400">Next Review</div>
                        <div className="text-lg font-medium text-purple-500">03/15/2025</div>
                        <div className="text-xs text-gray-400 mt-1">Days remaining: 11</div>
                      </div>
                    </div>
                    <div className="bg-card/50 p-3 rounded-md border border-border/40">
                      <div className="text-sm font-medium">Intervention Details</div>
                      <div className="text-xs text-gray-400 mt-2 space-y-2">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                          <div>
                            <span className="font-medium text-gray-300">Focus Area:</span> Sound blending and segmentation with emphasis on vowel sounds
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                          <div>
                            <span className="font-medium text-gray-300">Frequency:</span> 3 sessions per week, 20 minutes each
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                          <div>
                            <span className="font-medium text-gray-300">Materials:</span> Sound cards, decodable texts level 2-3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SummaryItem>
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
