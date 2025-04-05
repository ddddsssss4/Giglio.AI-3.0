
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutGrid, List, LogOut, Settings, User, GraduationCap } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useMediaQuery } from '@/hooks/use-mobile';

// Mock student data
const students = [
  { id: 1, name: 'Jacob Smith', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 2, name: 'Carter Moore', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 3, name: 'Ethan Brown', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 4, name: 'Priya Patel', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 5, name: 'Liam Devis', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 6, name: 'Ava Hill', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 7, name: 'Jacob Smith', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 8, name: 'Carter Moore', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 9, name: 'Ethan Brown', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 10, name: 'Priya Patel', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 11, name: 'Liam Devis', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 12, name: 'Ava Hill', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 13, name: 'Jacob Smith', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 14, name: 'Carter Moore', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 15, name: 'Ethan Brown', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 16, name: 'Priya Patel', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 17, name: 'Liam Devis', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
  { id: 18, name: 'Ava Hill', image: '/lovable-uploads/c8576e8c-d20f-4218-a43f-8d787c7f417e.png' },
];

// Teacher data
const teacher = {
  name: 'Mike Davis',
  image: '/lovable-uploads/1fa85128-3b99-4807-8395-4a5e40033726.png'
};

const StudentsList = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const isLandscape = useMediaQuery('(orientation: landscape)');
  
  // Responsive grid column count
  const getGridColumns = () => {
    if (isTablet) {
      return isLandscape ? 'grid-cols-4' : 'grid-cols-3';
    }
    return 'grid-cols-6';
  };
  
  const handleStudentClick = (studentId: number) => {
    // Navigate to student details page (current Dashboard)
    navigate('/');
  };
  
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-[330px] bg-slate-100 border-r border-border flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold">GIGLIO.AI<span className="text-app-blue">Dashboard</span></h1>
        </div>
        
        <nav className="flex-1 px-3 py-6 space-y-2">
          <a 
            href="#" 
            className="flex items-center gap-3 px-4 py-3 rounded-full text-gray-700 hover:bg-slate-200 transition-colors"
          >
            <User size={24} />
            <span className="font-medium">Profile</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-3 px-4 py-3 rounded-full bg-app-blue text-white hover:bg-app-blue/90 transition-colors"
          >
            <GraduationCap size={24} />
            <span className="font-medium">Students</span>
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-3 px-4 py-3 rounded-full text-gray-700 hover:bg-slate-200 transition-colors"
          >
            <Settings size={24} />
            <span className="font-medium">Settings</span>
          </a>
        </nav>
        
        {/* Logout button */}
        <div className="p-4 mt-auto">
          <button className="flex items-center gap-2 px-6 py-3 w-full text-red-500 hover:bg-red-50 rounded-full transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6 max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">List Of Students</h1>
            
            <div className="flex items-center gap-4">
              {/* View toggle */}
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button 
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <LayoutGrid size={20} />
                </button>
                <button 
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white'}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={20} />
                </button>
              </div>
              
              {/* Teacher avatar */}
              <div className="flex items-center gap-2">
                <span className="font-medium">{teacher.name}</span>
                <Avatar className="h-10 w-10 border-2 border-app-blue">
                  <AvatarImage src={teacher.image} alt={teacher.name} />
                  <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          
          {/* Students grid */}
          {viewMode === 'grid' && (
            <div className={`grid ${getGridColumns()} gap-6 md:gap-8`}>
              {students.map(student => (
                <div 
                  key={student.id} 
                  className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => handleStudentClick(student.id)}
                >
                  <Avatar className="h-24 w-24 mb-3">
                    <AvatarImage src={student.image} alt={student.name} />
                    <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-center">{student.name}</span>
                </div>
              ))}
            </div>
          )}
          
          {/* Students list */}
          {viewMode === 'list' && (
            <div className="space-y-3">
              {students.map(student => (
                <div 
                  key={student.id} 
                  className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-slate-50"
                  onClick={() => handleStudentClick(student.id)}
                >
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={student.image} alt={student.name} />
                    <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{student.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default StudentsList;
