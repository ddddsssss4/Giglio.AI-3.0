
import { User, Mail, Phone, Briefcase, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import teacherIcon from '/Group.svg'

const Profile = () => {
  // Mock teacher data
  const teacher = {
    name: 'Mike Davis',
    email: 'mike.davis@giglio.ai',
    image: teacherIcon,
    role: 'Senior Teacher',
    department: 'Special Education',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    bio: 'Experienced special education teacher with a focus on literacy and reading interventions. Passionate about helping students with learning disabilities achieve their full potential through personalized education approaches.',
    expertise: ['Reading Intervention', 'Phonemic Awareness', 'Dyslexia Support', 'IEP Development']
  };

  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="h-24 w-24 mx-auto mb-2">
                <AvatarImage src={teacher.image} alt={teacher.name} />
                <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardTitle>{teacher.name}</CardTitle>
              <CardDescription>{teacher.role}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-muted-foreground" />
                <span>{teacher.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-muted-foreground" />
                <span>{teacher.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase size={18} className="text-muted-foreground" />
                <span>{teacher.department}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-muted-foreground" />
                <span>{teacher.location}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Edit Profile</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{teacher.bio}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Areas of Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {teacher.expertise.map((skill, index) => (
                  <div key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
