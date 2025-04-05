
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
