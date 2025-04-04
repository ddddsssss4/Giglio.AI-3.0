
import ProgressChart from '@/components/ProgressChart';

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
      <ProgressChart data={data} />
    </div>
  );
};

export default MetricsTab;
