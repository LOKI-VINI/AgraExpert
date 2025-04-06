
import React, { useState, useEffect } from 'react';
import { format, addDays } from 'date-fns';
import { 
  Calendar as CalendarIcon, 
  Tractor, 
  Play, 
  Info, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight,
  Loader2
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/integrations/supabase/client';
import { translations } from '@/lib/translations';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea";
import { Input } from '@/components/ui/input';

interface EquipmentRentalV2Props {
  language: string;
}

interface Equipment {
  id: string;
  name: string;
  image_url: string;
  price_per_day: number;
  category: string;
  available: boolean;
  description: string;
  location: string;
  owner_id?: string;
  video_url?: string;
}

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  startDate: z.date({ required_error: "A start date is required." }),
  endDate: z.date({ required_error: "An end date is required." }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const EquipmentRentalV2: React.FC<EquipmentRentalV2Props> = ({ language }) => {
  const t = translations[language];
  const { toast } = useToast();
  const [equipmentList, setEquipmentList] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [rentalSubmitted, setRentalSubmitted] = useState(false);
  
  // Animation when scrolling into view
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  
  // Fetch equipment from Supabase
  useEffect(() => {
    async function fetchEquipment() {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('equipment_rentals').select('*');
        
        if (error) {
          console.error('Error fetching equipment:', error);
          toast({
            title: t.errorOccurred || 'Error',
            description: t.couldNotLoadEquipment || 'Could not load equipment rentals',
            variant: 'destructive',
          });
          return;
        }
        
        // Add video URLs for demonstration
        const equipmentWithVideos = data.map(item => ({
          ...item,
          video_url: `https://www.youtube.com/embed/${getRandomYouTubeId()}`
        }));
        
        setEquipmentList(equipmentWithVideos);
      } catch (err) {
        console.error('Exception fetching equipment:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchEquipment();
  }, [t, toast]);
  
  // Helper function to get random YouTube video IDs for demonstration
  const getRandomYouTubeId = () => {
    const ids = [
      'dQw4w9WgXcQ', 
      'jNQXAC9IVRw', 
      'ORIgCcVT9pM', 
      'FTQbiNvZqaY',
      'hT_nvWreIhg'
    ];
    return ids[Math.floor(Math.random() * ids.length)];
  };
  
  const handleRentNow = (equipment: Equipment) => {
    setSelectedEquipment(equipment);
    setRentalSubmitted(false);
    setFormOpen(true);
    
    // Reset form when selecting new equipment
    form.reset({
      name: "",
      email: "",
      phone: "",
      message: "",
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
    });
  };
  
  const handleWatchVideo = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setVideoDialogOpen(true);
  };
  
  const onSubmit = async (data: FormValues) => {
    if (!selectedEquipment) return;
    
    setSubmitting(true);
    
    try {
      // Here we would typically submit to the database
      // For demo purposes, we're just showing a success message
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: t.requestSubmitted || 'Request Submitted',
        description: t.requestSuccessMessage || 'Your equipment rental request has been submitted successfully.',
      });
      
      setRentalSubmitted(true);
    } catch (error) {
      toast({
        title: t.errorOccurred || 'Error',
        description: t.requestFailedMessage || 'Failed to submit your request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
        <span className="ml-2 text-primary">{t.loading || 'Loading...'}</span>
      </div>
    );
  }
  
  return (
    <section 
      id="advanced-equipment-rental" 
      ref={sectionRef}
      className={cn(
        "py-12 transition-opacity duration-1000 ease-in-out",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {t.advancedFarmingEquipment || 'Advanced Farming Equipment'}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {t.equipmentRentalDescription || 'Explore our range of cutting-edge farming equipment available for rent. Enhance your agricultural productivity with modern technology.'}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Equipment Carousel - Left Side */}
          <div className="lg:col-span-7">
            <Carousel className="w-full">
              <CarouselContent>
                {equipmentList.map((equipment) => (
                  <CarouselItem key={equipment.id}>
                    <div 
                      className={cn(
                        "overflow-hidden rounded-2xl shadow-lg bg-white transition-all duration-300",
                        inView && "animate-fade-in"
                      )}
                    >
                      <div className="relative">
                        <img 
                          src={equipment.image_url} 
                          alt={equipment.name}
                          className="w-full h-60 object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                          }}
                        />
                        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          ₹{equipment.price_per_day}/day
                        </div>
                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                          equipment.available 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : 'bg-red-100 text-red-800 border border-red-200'
                        }`}>
                          {equipment.available ? t.available || 'Available' : t.rented || 'Rented'}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{equipment.name}</h3>
                        <p className="text-gray-600 mb-4">{equipment.description}</p>
                        <div className="text-sm text-gray-500 mb-4">
                          <Tractor className="inline-block mr-1 h-4 w-4" />
                          <span>{equipment.location}</span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                          <Button 
                            onClick={() => handleRentNow(equipment)}
                            disabled={!equipment.available}
                            className="flex-1 rounded-xl hover:shadow-green-700 transition-all hover:scale-105"
                          >
                            {t.rentNow || 'Rent Now'}
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => handleWatchVideo(equipment.video_url || '')}
                            className="flex-1 rounded-xl transition-all hover:scale-105"
                          >
                            <Play className="mr-2 h-4 w-4" />
                            {t.watchTraining || 'Watch Training'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static mt-0 translate-y-0 left-0 mr-2" />
                <CarouselNext className="relative static mt-0 translate-y-0 right-0" />
              </div>
            </Carousel>
          </div>
          
          {/* Booking Form - Right Side */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex-grow">
              <h3 className="text-xl font-bold mb-4">
                {selectedEquipment 
                  ? `${t.bookNow || 'Book Now'}: ${selectedEquipment.name}` 
                  : t.selectEquipment || 'Select Equipment to Rent'}
              </h3>
              
              {selectedEquipment ? (
                rentalSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-8">
                    <div className="rounded-full bg-green-100 p-3 mb-4">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h4 className="text-xl font-medium text-center mb-2">
                      {t.requestSubmitted || 'Request Submitted!'}
                    </h4>
                    <p className="text-center text-gray-600 mb-6">
                      {t.weLltContact || "We'll contact you soon to confirm your booking details."}
                    </p>
                    <Button onClick={() => setFormOpen(false)}>
                      {t.close || 'Close'}
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.name || 'Name'}</FormLabel>
                            <FormControl>
                              <Input placeholder={t.yourName || 'Your name'} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.email || 'Email'}</FormLabel>
                            <FormControl>
                              <Input placeholder={t.yourEmail || 'Your email'} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.phone || 'Phone'}</FormLabel>
                            <FormControl>
                              <Input placeholder={t.yourPhone || 'Your phone number'} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="startDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>{t.startDate || 'Start Date'}</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>{t.pickDate || 'Pick a date'}</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => date < new Date()}
                                    initialFocus
                                    className="pointer-events-auto"
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="endDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>{t.endDate || 'End Date'}</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>{t.pickDate || 'Pick a date'}</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => {
                                      const startDate = form.getValues("startDate");
                                      return date < (startDate || new Date());
                                    }}
                                    initialFocus
                                    className="pointer-events-auto"
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t.message || 'Message'} ({t.optional || 'Optional'})</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder={t.additionalRequestsOrQuestions || 'Additional requests or questions'}
                                className="min-h-[80px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="pt-4">
                        <Button 
                          type="submit" 
                          className="w-full rounded-xl transition-transform hover:scale-105"
                          disabled={submitting}
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              {t.submitting || 'Submitting...'}
                            </>
                          ) : (
                            t.submitRequest || 'Submit Request'
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                )
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Info className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    {t.clickRentNowToBegin || 'Click "Rent Now" on any equipment to begin the booking process.'}
                  </p>
                </div>
              )}
            </div>
            
            {/* Video Preview Area */}
            {selectedEquipment && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">
                  {t.trainingVideo || 'Training Video'}
                </h3>
                <div 
                  className="relative cursor-pointer rounded-xl overflow-hidden"
                  onClick={() => handleWatchVideo(selectedEquipment.video_url || '')}
                >
                  <img 
                    src={`https://img.youtube.com/vi/${selectedEquipment.video_url?.split('/').pop()}/0.jpg`}
                    alt="Video thumbnail" 
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="rounded-full bg-white/80 p-3">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Video Dialog */}
      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>{t.trainingVideo || 'Training Video'}</DialogTitle>
            <DialogDescription>
              {t.watchTheTrainingVideoToLearnMore || 'Watch the training video to learn more about this equipment.'}
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={currentVideo}
              title="Training Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EquipmentRentalV2;
