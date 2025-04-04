
import { useState, useEffect } from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { StickyNote, Plus, X } from 'lucide-react';

// Define a note interface
interface Note {
  id: string;
  content: string;
  createdAt: Date;
  title: string;
}

const Notes = () => {
  // Load notes from localStorage or use empty array if none
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = localStorage.getItem('studentNotes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [newNote, setNewNote] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isAddingNote, setIsAddingNote] = useState(false);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('studentNotes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim()) {
      const newNoteObj: Note = {
        id: Date.now().toString(),
        content: newNote,
        createdAt: new Date(),
        title: newTitle.trim() || 'Untitled Note'
      };
      
      setNotes([newNoteObj, ...notes]);
      setNewNote('');
      setNewTitle('');
      setIsAddingNote(false);
    }
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
    if (selectedNote?.id === id) {
      setSelectedNote(null);
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative group"
        >
          <StickyNote className="h-5 w-5" />
          <span className="sr-only">Notes</span>
          {notes.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center animate-fade-in">
              {notes.length}
            </span>
          )}
          <span className="absolute -bottom-9 scale-0 transition-all rounded bg-foreground text-background text-sm p-1 group-hover:scale-100">
            Notes
          </span>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Student Notes</DialogTitle>
          <DialogDescription>
            Add and view notes about this student's progress.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-4 py-4">
          {/* Notes list */}
          <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-border/30 pb-4 md:pb-0 md:pr-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-medium">All Notes</h4>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setIsAddingNote(true);
                  setSelectedNote(null);
                }}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add note</span>
              </Button>
            </div>
            
            <ScrollArea className="h-[40vh] pr-3">
              {notes.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No notes yet</p>
                  <Button 
                    variant="outline" 
                    className="mt-2" 
                    onClick={() => setIsAddingNote(true)}
                  >
                    Add your first note
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  {notes.map(note => (
                    <div 
                      key={note.id}
                      onClick={() => {
                        setSelectedNote(note);
                        setIsAddingNote(false);
                      }}
                      className={`p-3 rounded-md cursor-pointer transition-all ${
                        selectedNote?.id === note.id 
                          ? 'bg-accent text-accent-foreground' 
                          : 'hover:bg-accent/50'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium truncate">{note.title}</h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 opacity-0 hover:opacity-100 focus:opacity-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteNote(note.id);
                          }}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDate(note.createdAt)}
                      </p>
                      <p className="text-sm mt-1 line-clamp-2">{note.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </div>
          
          {/* Note content or add new note */}
          <div className="flex-1 flex flex-col">
            {isAddingNote ? (
              <div className="space-y-3 h-full flex flex-col">
                <div>
                  <label className="text-sm font-medium">Title</label>
                  <input 
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Note title"
                    className="w-full p-2 mt-1 bg-background border border-input rounded-md"
                  />
                </div>
                
                <div className="flex-1">
                  <label className="text-sm font-medium">Content</label>
                  <Textarea 
                    value={newNote} 
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Write your note here..."
                    className="min-h-[160px] h-full mt-1"
                  />
                </div>
              </div>
            ) : selectedNote ? (
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{selectedNote.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(selectedNote.createdAt)}
                  </p>
                </div>
                <ScrollArea className="flex-1">
                  <div className="whitespace-pre-wrap">
                    {selectedNote.content}
                  </div>
                </ScrollArea>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <p className="text-muted-foreground mb-2">
                    Select a note to view or create a new one
                  </p>
                  <Button
                    onClick={() => setIsAddingNote(true)}
                    variant="outline"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    New Note
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <DialogFooter>
          {isAddingNote && (
            <>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsAddingNote(false);
                  setNewNote('');
                  setNewTitle('');
                }}
              >
                Cancel
              </Button>
              <Button type="button" onClick={addNote}>
                Save Note
              </Button>
            </>
          )}
          {!isAddingNote && !selectedNote && (
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          )}
          {selectedNote && !isAddingNote && (
            <>
              <Button
                variant="outline"
                onClick={() => setSelectedNote(null)}
              >
                Back to List
              </Button>
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Notes;
