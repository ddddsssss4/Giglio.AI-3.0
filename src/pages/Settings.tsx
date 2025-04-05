
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from '@/components/ThemeToggle';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);
  
  return (
    <div className="container py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      
      <Tabs defaultValue="account">
        <TabsList className="mb-6">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account information and preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Mike Davis" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="mike.davis@giglio.ai" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value="********" />
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <Label htmlFor="data-sharing" className="flex-1">
                  Data Sharing
                  <p className="text-sm text-muted-foreground">
                    Allow GIGLIO.AI to use anonymized data to improve services
                  </p>
                </Label>
                <Switch 
                  id="data-sharing" 
                  checked={dataSharing}
                  onCheckedChange={setDataSharing}
                />
              </div>
              
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize how GIGLIO.AI Dashboard looks for you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Theme</h3>
                  <p className="text-sm text-muted-foreground">
                    Switch between light and dark mode.
                  </p>
                </div>
                <ThemeToggle />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Compact Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduce spacing between elements for a more dense interface.
                  </p>
                </div>
                <Switch defaultChecked={false} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Large Text</h3>
                  <p className="text-sm text-muted-foreground">
                    Increase text size for better readability.
                  </p>
                </div>
                <Switch defaultChecked={false} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage your notification preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications" className="flex-1">
                  Enable Notifications
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about student progress and system updates
                  </p>
                </Label>
                <Switch 
                  id="notifications" 
                  checked={notificationsEnabled}
                  onCheckedChange={setNotificationsEnabled}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="flex-1">
                  Email Notifications
                  <p className="text-sm text-muted-foreground">
                    Receive email notifications for important updates
                  </p>
                </Label>
                <Switch 
                  id="email-notifications" 
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                  disabled={!notificationsEnabled}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
