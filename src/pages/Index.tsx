
import { useState, useEffect } from 'react';
import TabMenu from '@/components/TabMenu';
import DashboardLayout from '@/layouts/DashboardLayout';
import SummaryTab from '@/components/dashboard/SummaryTab';
import ErrorAnalysisTab from '@/components/dashboard/ErrorAnalysisTab';
import MetricsTab from '@/components/dashboard/MetricsTab';
import { mockErrorData, mockChartData } from '@/data/mockData';

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
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <DashboardLayout
      userName="Mike Davis"
      studentName="Emily Johnson"
      studentImage={studentImage}
      loading={loading}
    >
      {/* Main Tabs */}
      <TabMenu 
        tabs={['SUMMARY', 'RECENT SESSION', 'HISTORY']} 
        activeTab={mainTab} 
        onTabChange={setMainTab}
        className={renderedElements >= 1 ? 'animate-fade-in' : 'opacity-0'}
      />
      
      {mainTab === 'SUMMARY' && <SummaryTab renderedElements={renderedElements} />}
      
      {mainTab === 'RECENT SESSION' && (
        <div className={`mt-4 ${renderedElements >= 2 ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Sub Tabs */}
          <TabMenu 
            tabs={['ERROR ANALYSIS', 'METRICS']} 
            activeTab={subTab} 
            onTabChange={setSubTab} 
          />
          
          {subTab === 'ERROR ANALYSIS' && (
            <ErrorAnalysisTab data={mockErrorData.slice(0, 6)} renderedElements={renderedElements} />
          )}
          
          {subTab === 'METRICS' && (
            <MetricsTab data={mockChartData} renderedElements={renderedElements} />
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
            <ErrorAnalysisTab data={mockErrorData} renderedElements={renderedElements} />
          )}
          
          {subTab === 'METRICS' && (
            <MetricsTab data={mockChartData} renderedElements={renderedElements} />
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
