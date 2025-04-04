
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useState, useEffect } from 'react';

interface DataPoint {
  name: string;
  mispronunciation: number;
  omission: number;
  insertion: number;
  substitution: number;
  reversal: number;
}

interface ProgressChartProps {
  data: DataPoint[];
  className?: string;
}

const ProgressChart = ({ data, className }: ProgressChartProps) => {
  const [chartData, setChartData] = useState<DataPoint[]>([]);
  
  useEffect(() => {
    // Animate data loading
    const timer = setTimeout(() => {
      setChartData(data);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div className={`w-full ${className}`}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(25, 33, 50, 0.8)', 
              borderColor: '#30B9D6',
              color: 'white',
              borderRadius: '8px'
            }} 
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="mispronunciation" 
            stroke="#FFCD39" 
            activeDot={{ r: 8 }} 
            strokeWidth={2}
            animationDuration={1500}
          />
          <Line 
            type="monotone" 
            dataKey="omission" 
            stroke="#FF5A5A" 
            strokeWidth={2} 
            animationDuration={1700}
          />
          <Line 
            type="monotone" 
            dataKey="insertion" 
            stroke="#57D2E8" 
            strokeWidth={2} 
            animationDuration={1900}
          />
          <Line 
            type="monotone" 
            dataKey="substitution" 
            stroke="#8884d8" 
            strokeWidth={2} 
            animationDuration={2100}
          />
          <Line 
            type="monotone" 
            dataKey="reversal" 
            stroke="#4CAF50" 
            strokeWidth={2} 
            animationDuration={2300}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-center text-sm text-muted-foreground mt-2">
        Data for various attempts on most recent session on 03/01/2025
      </div>
    </div>
  );
};

export default ProgressChart;
