
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutGrid, List, Check, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useMediaQuery } from '@/hooks/use-media-query';
import girlIcon from '/Group (1).png';
import boyIcon from '/Group (2).png';
import teacherIcon from '/Group.svg'

// Enhanced student data with performance metrics
interface StudentData {
  id: number;
  name: string;
  image: string;
  gender: 'girl' | 'boy';
  status: 'On Track' | 'Off Track';
  corrects: string;
  incorrects: string;
  improvement: string;
}

// Mock student data with unique details
const students: StudentData[] = [
  { 
    id: 1, 
    name: 'Emily Johnson', 
    image: girlIcon,
    gender: 'girl',
    status: 'On Track',
    corrects: 'x1.5 Corrects',
    incorrects: '+2.0 Incorrects',
    improvement: 'x1.8 Improvement Index'
  },
  { 
    id: 2, 
    name: 'Jacob Smith', 
    image: boyIcon,
    gender: 'boy',
    status: 'Off Track',
    corrects: '+2.0 Corrects',
    incorrects: 'x1.5 Incorrects',
    improvement: '+1.8 Improvement Index'
  },
  { 
    id: 3, 
    name: 'Olivia Taylor', 
    image: girlIcon,
    gender: 'girl',
    status: 'On Track',
    corrects: 'x1.5 Corrects',
    incorrects: '+2.0 Incorrects',
    improvement: 'x1.8 Improvement Index'
  },
  { 
    id: 4, 
    name: 'Ethan Brown', 
    image: boyIcon,
    gender: 'boy',
    status: 'On Track',
    corrects: 'x1.5 Corrects',
    incorrects: '+2.0 Incorrects',
    improvement: 'x1.8 Improvement Index'
  },
  { 
    id: 5, 
    name: 'Madison Miller', 
    image: girlIcon,
    gender: 'girl',
    status: 'Off Track',
    corrects: '+2.0 Corrects',
    incorrects: 'x1.5 Incorrects',
    improvement: '+1.8 Improvement Index'
  },
  { 
    id: 6, 
    name: 'Ava Hill', 
    image: girlIcon,
    gender: 'girl',
    status: 'On Track',
    corrects: 'x1.5 Corrects',
    incorrects: '+2.0 Incorrects',
    improvement: 'x1.8 Improvement Index'
  },
  { 
    id: 7, 
    name: 'Noah Wilson', 
    image: boyIcon,
    gender: 'boy',
    status: 'Off Track',
    corrects: '+2.0 Corrects',
    incorrects: 'x1.5 Incorrects',
    improvement: '+1.8 Improvement Index'
  },
  { 
    id: 8, 
    name: 'Sophia Martinez', 
    image: girlIcon,
    gender: 'girl',
    status: 'On Track',
    corrects: 'x1.5 Corrects',
    incorrects: '+2.0 Incorrects',
    improvement: 'x1.8 Improvement Index'
  },
  { 
    id: 9, 
    name: 'Liam Anderson', 
    image: boyIcon,
    gender: 'boy',
    status: 'On Track',
    corrects: 'x1.5 Corrects',
    incorrects: '+2.0 Incorrects',
    improvement: 'x1.8 Improvement Index'
  },
  { 
    id: 10, 
    name: 'Isabella Thomas', 
    image: girlIcon,
    gender: 'girl',
    status: 'Off Track',
    corrects: '+2.0 Corrects',
    incorrects: 'x1.5 Incorrects',
    improvement: '+1.8 Improvement Index'
  },
  { 
    id: 11, 
    name: 'Mason White', 
    image: boyIcon,
    gender: 'boy',
    status: 'On Track',
    corrects: 'x1.5 Corrects',
    incorrects: '+2.0 Incorrects',
    improvement: 'x1.8 Improvement Index'
  },
  { 
    id: 12, 
    name: 'Charlotte Harris', 
    image: girlIcon,
    gender: 'girl',
    status: 'Off Track',
    corrects: '+2.0 Corrects',
    incorrects: 'x1.5 Incorrects',
    improvement: '+1.8 Improvement Index'
  },
  { 
    id: 13, 
    name: 'James Lewis', 
    image: boyIcon,
    gender: 'boy',
    status: 'On Track',
    corrects: 'x1.5 Corrects',
    incorrects: '+2.0 Incorrects',
    improvement: 'x1.8 Improvement Index'
  },
  { 
    id: 14, 
    name: 'Amelia Walker', 
    image: girlIcon,
    gender: 'girl',
    status: 'Off Track',
    corrects: '+2.0 Corrects',
    incorrects: 'x1.5 Incorrects',
    improvement: '+1.8 Improvement Index'
  },
  { 
    id: 15, 
    name: 'Benjamin Scott', 
    image: boyIcon,
    gender: 'boy',
    status: 'On Track',
    corrects: 'x1.5 Corrects',
    incorrects: '+2.0 Incorrects',
    improvement: 'x1.8 Improvement Index'
  },
  { 
    id: 16, 
    name: 'Harper Green', 
    image: girlIcon,
    gender: 'girl',
    status: 'Off Track',
    corrects: '+2.0 Corrects',
    incorrects: 'x1.5 Incorrects',
    improvement: '+1.8 Improvement Index'
  },
  { 
    id: 17, 
    name: 'Elijah Baker', 
    image: boyIcon,
    gender: 'boy',
    status: 'On Track',
    corrects: 'x1.5 Corrects',
    incorrects: '+2.0 Incorrects',
    improvement: 'x1.8 Improvement Index'
  },
  { 
    id: 18, 
    name: 'Evelyn Adams', 
    image: girlIcon,
    gender: 'girl',
    status: 'Off Track',
    corrects: '+2.0 Corrects',
    incorrects: 'x1.5 Incorrects',
    improvement: '+1.8 Improvement Index'
  },
];

// Teacher data
const teacher = {
  name: 'Mike Davis',
  image: teacherIcon
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
    // Navigate to student details page with the student ID
    navigate(`/students/${studentId}`);
  };
  
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">List Of Students</h1>
          
          <div className="flex items-center gap-4">
            {/* View toggle */}
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button 
                className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-background text-foreground'}`}
                onClick={() => setViewMode('grid')}
              >
                <LayoutGrid size={20} />
              </button>
              <button 
                className={`p-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-background text-foreground'}`}
                onClick={() => setViewMode('list')}
              >
                <List size={20} />
              </button>
            </div>
            
            {/* Teacher avatar */}
            <div className="flex items-center gap-2">
              <span className="font-medium">{teacher.name}</span>
              <Avatar className="h-8 w-8 border-2 border-app-blue">
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
        
        {/* Students list with detailed info */}
        {viewMode === 'list' && (
          <div className="space-y-3">
            {students.map(student => (
              <div 
                key={student.id} 
                className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-secondary/50 transition-all"
                onClick={() => handleStudentClick(student.id)}
              >
                <div className="flex items-center w-full">
                  <Avatar className="h-16 w-16 mr-4">
                    <AvatarImage src={student.image} alt={student.name} />
                    <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 grid grid-cols-5 gap-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-lg">{student.name}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <div className={`mr-2 rounded-full p-1 ${student.status === 'On Track' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'}`}>
                        {student.status === 'On Track' ? 
                          <Check size={16} className="text-green-600 dark:text-green-400" /> : 
                          <X size={16} className="text-red-600 dark:text-red-400" />
                        }
                      </div>
                      <span className={`${student.status === 'On Track' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} font-medium`}>
                        {student.status}
                      </span>
                    </div>
                    
                    <div className="text-center">
                      <span className={`font-medium ${student.corrects.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}>
                        {student.corrects}
                      </span>
                    </div>
                    
                    <div className="text-center">
                      <span className={`font-medium ${student.incorrects.startsWith('+') ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'}`}>
                        {student.incorrects}
                      </span>
                    </div>
                    
                    <div className="text-center">
                      <span className={`font-medium ${student.improvement.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}>
                        {student.improvement}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentsList;
