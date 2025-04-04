
import ProgressChart from '@/components/ProgressChart';
import { Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DataPoint {
  name: string;
  mispronunciation: number;
  omission: number;
  insertion: number;
  substitution: number;
  reversal: number;
}

interface MetricsTabProps {
  data: DataPoint[];
  renderedElements: number;
}

const MetricsTab = ({ data, renderedElements }: MetricsTabProps) => {
  return (
    <div className={`mt-4 ${renderedElements >= 3 ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Reading Progress Metrics</h2>
        <Button variant="outline" className="gap-2">
          <Award size={18} className="text-yellow-500" />
          <span>Celebration Goals</span>
        </Button>
      </div>
      <ProgressChart data={data} />
    </div>
  );
};

export default MetricsTab;
