
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MessageSquare, Heart, Share2, ArrowDown10, ArrowUp10 } from 'lucide-react';
import { translations } from '@/lib/translations';

interface PostsListProps {
  language: string;
  category: string;
  sortOption: string;
  setSortOption: (option: string) => void;
}

// Mock data for posts
const mockPosts = [
  {
    id: 1,
    title: "Best practices for organic rice farming",
    content: "I've been experimenting with organic methods for rice cultivation and wanted to share some insights. Using neem oil as a natural pesticide has significantly reduced pest issues without harming beneficial insects...",
    author: {
      name: "Rajesh Kumar",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      location: "Punjab, India",
      expertise: "Rice Farming"
    },
    category: "expertTips",
    date: "2023-04-15T10:30:00Z",
    likes: 124,
    comments: 32,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Wheat yellow rust alert in northern regions",
    content: "I'm seeing early signs of yellow rust in my wheat fields after the recent rains. Anyone else noticing this? I'm planning to apply fungicide this week as a preventive measure. Any recommendations on which products work best?",
    author: {
      name: "Amina Patel",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      location: "Haryana, India",
      expertise: "Wheat Farming"
    },
    category: "cropDiscussions",
    date: "2023-04-12T15:45:00Z",
    likes: 87,
    comments: 45,
    image: null
  },
  {
    id: 3,
    title: "Heavy rainfall expected next week - preparation tips",
    content: "Meteorological department has forecast heavy rainfall across the central region next week. Based on past experience, I recommend checking all drainage systems now. Also consider delaying any planned chemical applications as they might get washed away.",
    author: {
      name: "Vijay Singh",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      location: "Madhya Pradesh, India",
      expertise: "Agricultural Extension Officer"
    },
    category: "weatherUpdates",
    date: "2023-04-10T09:15:00Z",
    likes: 156,
    comments: 28,
    image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  }
];

const PostsList: React.FC<PostsListProps> = ({ 
  language, 
  category, 
  sortOption, 
  setSortOption
}) => {
  const t = translations[language];
  
  // Filter posts by selected category
  const filteredPosts = mockPosts.filter(post => 
    category === 'all' || post.category === category
  );
  
  // Sort posts based on the selected sort option
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOption === 'mostRecent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOption === 'mostLiked') {
      return b.likes - a.likes;
    } else { // trending - combination of recency and engagement
      const recencyA = new Date(a.date).getTime();
      const recencyB = new Date(b.date).getTime();
      const engagementA = a.likes + a.comments * 2; // Comments weighted more for "trending"
      const engagementB = b.likes + b.comments * 2;
      
      return (engagementB + recencyB) - (engagementA + recencyA);
    }
  });
  
  // Format date
  const formatPostDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {category === 'expertTips' && t.expertTips}
          {category === 'cropDiscussions' && t.cropDiscussions}
          {category === 'weatherUpdates' && t.weatherUpdates}
        </h2>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">{t.sortBy}:</span>
          <select 
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="text-sm border-none focus:ring-0 bg-transparent text-gray-800 cursor-pointer"
          >
            <option value="mostRecent">{t.mostRecent}</option>
            <option value="mostLiked">{t.mostLiked}</option>
            <option value="trending">{t.trending}</option>
          </select>
        </div>
      </div>
      
      {sortedPosts.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-6 text-center text-gray-500">
          No posts found in this category.
        </div>
      ) : (
        <div className="space-y-6">
          {sortedPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-agro-100 animate-fade-in">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-gray-900">{post.author.name}</h3>
                      <p className="text-xs text-gray-500">
                        {post.author.expertise} • {post.author.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatPostDate(post.date)}
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 hover:text-agro-700 transition-colors cursor-pointer">
                  {post.title}
                </h2>
              </CardHeader>
              
              <CardContent className="pb-3">
                <p className="text-gray-700 mb-4">{post.content}</p>
                
                {post.image && (
                  <div className="mt-3 mb-4 rounded-md overflow-hidden">
                    <img
                      src={post.image}
                      alt="Post image"
                      className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                
                <div className="flex items-center text-sm text-gray-500 gap-4 mt-4">
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {post.comments}
                  </span>
                </div>
              </CardContent>
              
              <Separator />
              
              <CardFooter className="py-3 flex justify-between">
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-agro-700 hover:bg-agro-50">
                  <Heart className="h-4 w-4 mr-1" />
                  {t.like}
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-agro-700 hover:bg-agro-50">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {t.reply}
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-agro-700 hover:bg-agro-50">
                  <Share2 className="h-4 w-4 mr-1" />
                  {t.share}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsList;
