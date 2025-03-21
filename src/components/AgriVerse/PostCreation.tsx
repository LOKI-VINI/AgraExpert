
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Image } from 'lucide-react';
import { translations } from '@/lib/translations';
import { useToast } from '@/hooks/use-toast';

interface PostCreationProps {
  language: string;
  category: string;
}

const PostCreation: React.FC<PostCreationProps> = ({ language, category }) => {
  const t = translations[language];
  const { toast } = useToast();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the post data to your backend
    // For now, just show a success toast
    toast({
      title: "Post created successfully!",
      description: "Your post has been published to the forum.",
    });
    
    // Reset form
    setTitle('');
    setContent('');
    setImage(null);
    setImagePreview(null);
  };

  return (
    <Card className="mb-8 border-agro-100 animate-fade-in" style={{ animationDelay: '200ms' }}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Plus className="h-5 w-5 text-agro-600" />
          {t.createPost}
        </CardTitle>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Input
              placeholder={t.postTitle}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-agro-200 focus-visible:ring-agro-500"
              required
            />
          </div>
          
          <div>
            <Textarea
              placeholder={t.postContent}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[120px] border-agro-200 focus-visible:ring-agro-500"
              required
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <Select 
                value={selectedCategory} 
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="border-agro-200">
                  <SelectValue placeholder={t.selectCategory} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="expertTips">{t.expertTips}</SelectItem>
                  <SelectItem value="cropDiscussions">{t.cropDiscussions}</SelectItem>
                  <SelectItem value="weatherUpdates">{t.weatherUpdates}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full sm:w-1/2">
              <div className="relative">
                <Input
                  type="file"
                  accept="image/*"
                  id="post-image"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <label
                  htmlFor="post-image"
                  className="flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-agro-200 bg-white text-sm cursor-pointer hover:bg-gray-50 transition-colors w-full"
                >
                  <Image className="h-4 w-4 text-agro-600" />
                  {t.uploadImage}
                </label>
              </div>
            </div>
          </div>
          
          {imagePreview && (
            <div className="relative w-full h-40 overflow-hidden rounded-md">
              <img 
                src={imagePreview} 
                alt="Post preview" 
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                className="absolute top-2 right-2 bg-white/80 p-1 rounded-full hover:bg-white"
                onClick={() => {
                  setImage(null);
                  setImagePreview(null);
                }}
              >
                <span className="sr-only">Remove image</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
        </CardContent>
        
        <CardFooter>
          <Button 
            type="submit" 
            className="bg-agro-600 hover:bg-agro-700 text-white w-full sm:w-auto"
          >
            {t.publishPost}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default PostCreation;
