
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MapPin, Award, MessageSquare } from 'lucide-react';
import { translations } from '@/lib/translations';

interface UserProfileProps {
  language: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ language }) => {
  const t = translations[language];
  
  // Mock user data
  const user = {
    name: "Rahul Sharma",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    location: "Karnataka, India",
    expertise: "Organic Farming, Rice Cultivation",
    posts: 24,
    followers: 156,
    following: 89,
    joinDate: "March 2023"
  };

  return (
    <div className="space-y-6 sticky top-24">
      <Card className="border-agro-100 animate-fade-in" style={{ animationDelay: '100ms' }}>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">{t.yourProfile}</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-20 w-20 mb-3">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <h3 className="font-semibold text-xl text-gray-900">{user.name}</h3>
            
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>{user.location}</span>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
              <Award className="h-3.5 w-3.5" />
              <span>{user.expertise}</span>
            </div>
            
            <div className="flex justify-center gap-6 mt-4">
              <div className="text-center">
                <div className="font-semibold text-gray-900">{user.posts}</div>
                <div className="text-xs text-gray-500">Posts</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">{user.followers}</div>
                <div className="text-xs text-gray-500">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">{user.following}</div>
                <div className="text-xs text-gray-500">Following</div>
              </div>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full border-agro-200 text-agro-700 hover:bg-agro-50"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            {t.joinTheConversation}
          </Button>
        </CardContent>
      </Card>
      
      <Card className="border-agro-100 animate-fade-in" style={{ animationDelay: '200ms' }}>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">Trending Topics</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-3">
          <div className="space-y-2">
            {['#OrganicFarming', '#DroughtResistant', '#SustainableAg', '#FarmTech', '#Permaculture'].map((tag, index) => (
              <div 
                key={index}
                className="inline-block mr-2 mb-2 px-3 py-1 bg-gray-100 hover:bg-agro-100 text-gray-800 hover:text-agro-700 rounded-full text-sm cursor-pointer transition-colors"
              >
                {tag}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
