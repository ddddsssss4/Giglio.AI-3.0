
import { ChevronsUpDown } from 'lucide-react';
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
      <div className="flex items-center justify-between p-2 bg-primary/10 backdrop-blur-sm rounded-md mb-3 border border-primary/20 animate-fade-in">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10 ring-2 ring-primary/30 bg-primary/5">
            <div className="flex items-center justify-center h-full">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
          </Avatar>
          <div className="font-medium text-foreground">{userName}</div>
          <div className="rounded-full h-5 w-5 bg-primary/10 flex items-center justify-center">
            <ChevronsUpDown size={12} className="text-primary" />
          </div>
        </div>
      </div>
      <div className="bg-card/50 p-4 rounded-md mb-4 animate-fade-in delay-100 backdrop-blur-sm border border-border/40">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 ring-2 ring-primary shadow-lg">
            <img src={studentImage} alt={studentName} className="object-cover" />
          </Avatar>
          <div>
            <span className="text-xs text-muted-foreground">STUDENT</span>
            <h2 className="text-lg font-medium text-foreground">{studentName}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHeader;
