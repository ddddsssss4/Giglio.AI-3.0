
import DataTable from '@/components/DataTable';
import { Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorData {
  date: string;
  passage: string;
  attempt: string;
  mispronunciation?: string;
  omission?: string;
  insertion?: string;
  substitution?: string;
  reversal?: string;
  notes?: string;
}

interface ErrorAnalysisTabProps {
  data: ErrorData[];
  renderedElements: number;
}

const ErrorAnalysisTab = ({ data, renderedElements }: ErrorAnalysisTabProps) => {
  return (
    <div className={`mt-4 ${renderedElements >= 3 ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Reading Errors Analysis</h2>
        <Button variant="outline" className="gap-2">
          <Award size={18} className="text-yellow-500" />
          <span>Celebration Goals</span>
        </Button>
      </div>
      <DataTable data={data} />
    </div>
  );
};

export default ErrorAnalysisTab;
