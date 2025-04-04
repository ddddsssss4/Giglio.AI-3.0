
import { File } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

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

interface DataTableProps {
  data: ErrorData[];
  className?: string;
}

export const DataTable = ({ data, className }: DataTableProps) => {
  const [rows, setRows] = useState<ErrorData[]>(data);
  
  return (
    <div className={cn('w-full overflow-auto rounded-md', className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="data-row-header">
            <th className="data-cell text-left">Date</th>
            <th className="data-cell text-left">Passage</th>
            <th className="data-cell text-left">Attempt</th>
            <th className="data-cell text-left">Mispronunciation</th>
            <th className="data-cell text-left">Omission</th>
            <th className="data-cell text-left">Insertion</th>
            <th className="data-cell text-left">Substitution</th>
            <th className="data-cell text-left">Reversal</th>
            <th className="data-cell text-center w-10">Edit</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="data-row border-b border-app-blue/10">
              <td className="data-cell">{row.date}</td>
              <td className="data-cell">
                <a href="#" className="text-app-blue hover:underline">
                  {row.passage}
                </a>
              </td>
              <td className="data-cell">
                <a href="#" className="text-app-blue hover:underline">
                  {row.attempt}
                </a>
              </td>
              <td className="data-cell">{row.mispronunciation || "-"}</td>
              <td className="data-cell">{row.omission || "-"}</td>
              <td className="data-cell">{row.insertion || "-"}</td>
              <td className="data-cell">{row.substitution || "-"}</td>
              <td className="data-cell">{row.reversal || "-"}</td>
              <td className="data-cell text-center">
                <button className="text-app-blue hover:text-app-dark-blue transition-colors">
                  <File size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
