
import DataTable from '@/components/DataTable';

interface ErrorData {
  date: string;
  passage: string;
  attempt: string;
  mispronunciation?: string;
  omission?: string;
  insertion?: string;
  substitution?: string;
  reversal?: string;
}

interface ErrorAnalysisTabProps {
  data: ErrorData[];
  renderedElements: number;
}

const ErrorAnalysisTab = ({ data, renderedElements }: ErrorAnalysisTabProps) => {
  return (
    <div className={`mt-4 ${renderedElements >= 3 ? 'animate-fade-in' : 'opacity-0'}`}>
      <DataTable data={data} />
    </div>
  );
};

export default ErrorAnalysisTab;
