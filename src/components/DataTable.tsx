
import { StickyNote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
  const [activeNote, setActiveNote] = useState<string>("");
  const [rowIndex, setRowIndex] = useState<number | null>(null);
  
  const handleSaveNote = () => {
    if (rowIndex !== null) {
      const updatedRows = [...rows];
      updatedRows[rowIndex] = {
        ...updatedRows[rowIndex],
        notes: activeNote
      };
      setRows(updatedRows);
    }
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
                <Dialog>
                  <DialogTrigger asChild>
                    <button 
                      className="text-app-blue hover:text-app-dark-blue transition-colors"
                      onClick={() => {
                        setActiveNote(row.notes || "");
                        setRowIndex(index);
                      }}
                    >
                      <StickyNote size={18} />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Notes for {row.passage} - {row.attempt}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <Textarea 
                        placeholder="Add notes about this error..." 
                        value={activeNote}
                        onChange={(e) => setActiveNote(e.target.value)}
                        className="min-h-[150px]"
                      />
                      <Button type="submit" onClick={handleSaveNote}>Save Note</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
