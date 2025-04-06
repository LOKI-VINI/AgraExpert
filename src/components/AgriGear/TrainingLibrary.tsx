import React, { useState, useEffect } from 'react';
import { Search, PlayCircle, Filter, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { translations } from '@/lib/translations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface TrainingLibraryProps {
  language: string;
}

interface VideoTutorial {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
  featured: boolean;
  video_url: string;
  description?: string;
}

const TrainingLibrary: React.FC<{ language: string }> = ({ language }) => {
  // Ensure we use a valid language or fallback to English
  const validLanguage = translations[language] ? language : 'en';
  const t = translations[validLanguage];
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [videoTutorials, setVideoTutorials] = useState<VideoTutorial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('all');
  
  // Fetch video tutorials from Supabase
  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('training_videos')
          .select('*');
        
        if (error) {
          console.error('Error fetching videos:', error);
          toast({
            title: t.errorOccurred || 'Error',
            description: t.couldNotLoadVideos || 'Could not load training videos',
            variant: 'destructive',
          });
          return;
        }
        
        setVideoTutorials(data as VideoTutorial[]);
      } catch (err) {
        console.error('Exception fetching videos:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchVideos();
  }, [t, toast]);
  
  // Filter videos based on search query and current tab
  const filteredVideos = videoTutorials.filter((video) => {
    const matchesSearch = 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (video.description && video.description.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesSearch && (currentTab === 'all' || video.category === currentTab);
  });
  
  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };
  
  const handleVideoClick = (video: VideoTutorial) => {
    // Open the video URL in a new tab
    window.open(video.video_url, '_blank');
  };
  
  return (
    <section id="training-library" className="py-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.trainingLibraryTitle}</h2>
        <p className="text-gray-600 mb-6">{t.trainingLibraryDescription}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder={t.searchVideoPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            {t.filter}
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="all" onValueChange={handleTabChange}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">{t.allEquipment}</TabsTrigger>
          <TabsTrigger value="tractors">{t.tractors}</TabsTrigger>
          <TabsTrigger value="plows">{t.plows}</TabsTrigger>
          <TabsTrigger value="drones">{t.drones}</TabsTrigger>
          <TabsTrigger value="harvesters">{t.harvesters}</TabsTrigger>
        </TabsList>
        
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <Loader2 className="h-8 w-8 text-agro-700 animate-spin" />
            <span className="ml-2 text-agro-700">{t.loading || 'Loading...'}</span>
          </div>
        ) : filteredVideos.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">{t.noVideosFound || 'No videos found matching your criteria'}</p>
          </div>
        ) : (
          <TabsContent value={currentTab} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredVideos.map((video) => (
                <Card 
                  key={video.id} 
                  className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleVideoClick(video)}
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <PlayCircle className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    {video.featured && (
                      <div className="absolute top-2 left-2 bg-agro-700 text-white text-xs px-2 py-1 rounded">
                        {t.featured}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium line-clamp-2">{video.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </section>
  );
};

export default TrainingLibrary;
