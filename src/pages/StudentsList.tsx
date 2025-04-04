
import { useState } from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Grid, List, LogOut, User, Settings as SettingsIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// Student data type
interface Student {
  id: string;
  name: string;
  image: string;
}

// Mock data for students
const mockStudents: Student[] = [
  { id: '1', name: 'Jacob Smith', image: '/placeholders/boy-1.png' },
  { id: '2', name: 'Carter Moore', image: '/placeholders/boy-2.png' },
  { id: '3', name: 'Ethan Brown', image: '/placeholders/boy-3.png' },
  { id: '4', name: 'Priya Patel', image: '/placeholders/girl-1.png' },
  { id: '5', name: 'Liam Davis', image: '/placeholders/boy-4.png' },
  { id: '6', name: 'Ava Hill', image: '/placeholders/girl-2.png' },
  { id: '7', name: 'Jacob Smith', image: '/placeholders/boy-1.png' },
  { id: '8', name: 'Carter Moore', image: '/placeholders/boy-2.png' },
  { id: '9', name: 'Ethan Brown', image: '/placeholders/boy-3.png' },
  { id: '10', name: 'Priya Patel', image: '/placeholders/girl-1.png' },
  { id: '11', name: 'Liam Davis', image: '/placeholders/boy-4.png' },
  { id: '12', name: 'Ava Hill', image: '/placeholders/girl-2.png' },
  { id: '13', name: 'Jacob Smith', image: '/placeholders/boy-1.png' },
  { id: '14', name: 'Carter Moore', image: '/placeholders/boy-2.png' },
  { id: '15', name: 'Ethan Brown', image: '/placeholders/boy-3.png' },
  { id: '16', name: 'Priya Patel', image: '/placeholders/girl-1.png' },
  { id: '17', name: 'Liam Davis', image: '/placeholders/boy-4.png' },
  { id: '18', name: 'Ava Hill', image: '/placeholders/girl-2.png' },
];

// Define a placeholder component for the student images
const StudentImagePlaceholder = ({ gender, className }: { gender: 'boy' | 'girl', className?: string }) => {
  return (
    <div className={`bg-blue-100 rounded-full ${className}`}>
      <img 
        src={`/lovable-uploads/${gender === 'boy' ? 'a580cb9d-693a-4f3a-b264-15a20fd4588f.png' : 'e793b907-4730-4381-ac10-290da4a8f4d0.png'}`} 
        alt="Student" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const StudentsList = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="w-[280px] bg-sidebar flex flex-col border-r border-border/30">
        <div className="p-4 border-b border-border/30">
          <h1 className="text-2xl font-bold text-primary">GIGLIO.AI<span className="text-white">Dashboard</span></h1>
        </div>
        
        <div className="flex-1 flex flex-col p-4 gap-2">
          <Button variant="ghost" className="justify-start gap-3" asChild>
            <Link to="/profile">
              <Avatar className="h-9 w-9 bg-muted">
                <User className="h-5 w-5" />
              </Avatar>
              <span>Profile</span>
            </Link>
          </Button>
          
          <Button variant="default" className="justify-start gap-3 bg-primary text-background" asChild>
            <Link to="/students">
              <Avatar className="h-9 w-9 bg-white text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </Avatar>
              <span>Students</span>
            </Link>
          </Button>
          
          <Button variant="ghost" className="justify-start gap-3" asChild>
            <Link to="/settings">
              <Avatar className="h-9 w-9 bg-muted">
                <SettingsIcon className="h-5 w-5" />
              </Avatar>
              <span>Settings</span>
            </Link>
          </Button>
        </div>
        
        <div className="p-4 border-t border-border/30">
          <Button variant="secondary" className="w-full justify-start gap-2">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">List Of Students</h1>
            
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <Button 
                  variant={viewMode === 'grid' ? 'default' : 'outline'} 
                  size="icon" 
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant={viewMode === 'list' ? 'default' : 'outline'} 
                  size="icon" 
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Avatar className="w-10 h-10 ring-2 ring-primary bg-primary/5">
                  <img src="/lovable-uploads/1fa85128-3b99-4807-8395-4a5e40033726.png" alt="Mike Davis" />
                </Avatar>
                <span className="font-medium">Mike Davis</span>
              </div>
            </div>
          </div>
          
          {/* Students grid */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {mockStudents.map((student, index) => (
                <Link 
                  key={`${student.id}-${index}`} 
                  to="/"
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-accent/5 transition-colors border border-transparent hover:border-accent/20"
                >
                  <div className="w-24 h-24 mb-3">
                    <StudentImagePlaceholder 
                      gender={student.name.includes('Priya') || student.name.includes('Ava') ? 'girl' : 'boy'} 
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-center font-medium">{student.name}</span>
                </Link>
              ))}
            </div>
          )}
          
          {/* Students list */}
          {viewMode === 'list' && (
            <div className="border rounded-lg divide-y">
              {mockStudents.map((student, index) => (
                <Link 
                  key={`${student.id}-${index}`} 
                  to="/"
                  className="flex items-center p-4 hover:bg-accent/5 transition-colors"
                >
                  <div className="w-12 h-12 mr-4">
                    <StudentImagePlaceholder 
                      gender={student.name.includes('Priya') || student.name.includes('Ava') ? 'girl' : 'boy'} 
                      className="w-full h-full"
                    />
                  </div>
                  <span className="font-medium">{student.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentsList;
