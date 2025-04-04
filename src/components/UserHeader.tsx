
import { ChevronsUpDown, X } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';

interface UserHeaderProps {
  userName: string;
  studentName: string;
  studentImage: string;
  onClose?: () => void;
}

const UserHeader = ({ userName, studentName, studentImage, onClose }: UserHeaderProps) => {
  return (
    <>
      <div className="flex items-center justify-between p-2 bg-app-blue rounded-md mb-1 animate-fade-in">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10 border-2 border-amber-400 bg-white/20">
            <div className="flex items-center justify-center h-full">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
          </Avatar>
          <div className="text-white font-medium">{userName}</div>
          <ChevronsUpDown size={16} className="text-white/70" />
        </div>
      </div>
      <div className="bg-app-light-blue p-4 rounded-md mb-4 animate-fade-in delay-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-app-blue">
              <img src={studentImage} alt={studentName} className="object-cover" />
            </Avatar>
            <span className="text-app-navy font-medium">{studentName}</span>
          </div>
          {onClose && (
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default UserHeader;
