
import { StickyNote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

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

interface DataTableProps {
  data: ErrorData[];
  className?: string;
}

export const DataTable = ({ data, className }: DataTableProps) => {
  const [rows, setRows] = useState<ErrorData[]>(data);
  const [activeNote, setActiveNote] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const saveNote = (index: number) => {
    const updatedRows = [...rows];
    updatedRows[index] = { ...updatedRows[index], notes: activeNote };
    setRows(updatedRows);
    setActiveIndex(null);
  };
  
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
            <th className="data-cell text-center w-10">Notes</th>
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
                <Popover>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-app-blue hover:text-app-dark-blue transition-colors"
                      onClick={() => {
                        setActiveNote(row.notes || '');
                        setActiveIndex(index);
                      }}
                    >
                      <StickyNote size={18} className={row.notes ? 'text-primary' : ''} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-medium">Session Notes</h4>
                      <Textarea 
                        value={activeNote}
                        onChange={(e) => setActiveNote(e.target.value)}
                        placeholder="Add notes about this session..."
                        className="min-h-[100px]"
                      />
                      <div className="flex justify-end gap-2 mt-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            setActiveIndex(null);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => activeIndex !== null && saveNote(activeIndex)}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
