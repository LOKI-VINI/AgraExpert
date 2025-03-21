
import React, { useState } from 'react';
import { Search, PlayCircle, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { translations } from '@/lib/translations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
}

const TrainingLibrary: React.FC<TrainingLibraryProps> = ({ language }) => {
  const t = translations[language];
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock video tutorials data
  const videoTutorials: VideoTutorial[] = [
    {
      id: '1',
      title: 'Modern Tractor Operation Basics',
      thumbnail: 'https://images.unsplash.com/photo-1568115286200-a7c91cbc2575?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '15:20',
      category: 'tractors',
      featured: true
    },
    {
      id: '2',
      title: 'Efficient Plowing Techniques',
      thumbnail: 'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '10:45',
      category: 'plows',
      featured: false
    },
    {
      id: '3',
      title: 'Agricultural Drone Piloting Guide',
      thumbnail: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '22:15',
      category: 'drones',
      featured: true
    },
    {
      id: '4',
      title: 'Harvester Maintenance and Operation',
      thumbnail: 'https://images.unsplash.com/photo-1591672854444-22bdf60ca868?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      duration: '18:30',
      category: 'harvesters',
      featured: false
    }
  ];
  
  // Filter videos based on search query
  const filteredVideos = videoTutorials.filter((video) => 
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
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
      
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">{t.allEquipment}</TabsTrigger>
          <TabsTrigger value="tractors">{t.tractors}</TabsTrigger>
          <TabsTrigger value="plows">{t.plows}</TabsTrigger>
          <TabsTrigger value="drones">{t.drones}</TabsTrigger>
          <TabsTrigger value="harvesters">{t.harvesters}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
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
        
        {['tractors', 'plows', 'drones', 'harvesters'].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredVideos
                .filter(video => video.category === category)
                .map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
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
        ))}
      </Tabs>
    </section>
  );
};

export default TrainingLibrary;
