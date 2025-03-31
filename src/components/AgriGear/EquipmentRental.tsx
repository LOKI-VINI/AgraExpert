
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Tractor, Check, Clock, AlertTriangle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { translations } from '@/lib/translations';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface EquipmentRentalProps {
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
}

const EquipmentRental: React.FC<EquipmentRentalProps> = ({ language }) => {
  const t = translations[language];
  const [isDetailsOpen, setIsDetailsOpen] = useState<Record<string, boolean>>({});
  const [equipmentList, setEquipmentList] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('all');
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [requestMessage, setRequestMessage] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  
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
        
        // Map the data to our Equipment interface
        const mappedData = data.map(item => ({
          id: item.id,
          name: item.name,
          image_url: item.image_url,
          price_per_day: item.price_per_day,
          category: determineCategory(item.name), // Derive category from name for demo
          available: item.available,
          description: item.description || '',
          location: item.location,
          owner_id: item.owner_id
        }));
        
        setEquipmentList(mappedData);
      } catch (err) {
        console.error('Exception fetching equipment:', err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchEquipment();
  }, [t]);
  
  // Helper function to determine equipment category based on name
  const determineCategory = (name: string): string => {
    name = name.toLowerCase();
    if (name.includes('tractor')) return 'tractors';
    if (name.includes('plow')) return 'plows';
    if (name.includes('drone')) return 'drones';
    if (name.includes('harvest')) return 'harvesters';
    return 'other';
  };
  
  const toggleDetails = (id: string) => {
    setIsDetailsOpen(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const handleRentRequest = (equipment: Equipment) => {
    setSelectedEquipment(equipment);
    setDialogOpen(true);
  };
  
  const submitRentRequest = async () => {
    if (!selectedEquipment) return;
    
    const session = await supabase.auth.getSession();
    const user = session?.data?.session?.user;
    
    if (!user) {
      toast({
        title: t.loginRequired || 'Login Required',
        description: t.pleaseLoginToRent || 'Please login to request equipment rental',
      });
      setDialogOpen(false);
      return;
    }
    
    // Here you would typically submit the rental request to your database
    // For now, we'll just show a success message
    toast({
      title: t.rentRequestSubmitted || 'Request Submitted',
      description: `${t.rentRequestFor || 'Your rental request for'} ${selectedEquipment.name} ${t.hasBeenSubmitted || 'has been submitted'}`,
    });
    
    setDialogOpen(false);
    setRequestMessage('');
  };
  
  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };
  
  // Filter equipment based on current tab
  const filteredEquipment = equipmentList.filter(item => 
    currentTab === 'all' || item.category === currentTab
  );
  
  return (
    <section id="equipment-rental" className="py-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.equipmentRentalTitle}</h2>
        <p className="text-gray-600 mb-6">{t.equipmentRentalDescription}</p>
      </div>
      
      <Tabs defaultValue="all" onValueChange={handleTabChange}>
        <TabsList className="mb-6 overflow-x-auto flex no-scrollbar">
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
        ) : filteredEquipment.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">{t.noEquipmentFound || 'No equipment found in this category'}</p>
          </div>
        ) : (
          <TabsContent value={currentTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEquipment.map((equipment) => (
                <Card key={equipment.id} className="overflow-hidden h-full">
                  <div className="relative">
                    <img 
                      src={equipment.image_url} 
                      alt={equipment.name} 
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        // Fallback image if the URL is invalid
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium ${
                      equipment.available 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}>
                      {equipment.available ? (
                        <div className="flex items-center gap-1">
                          <Check className="h-3 w-3" />
                          {t.available}
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {t.rented}
                        </div>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-4 flex flex-col h-full">
                    <h3 className="font-semibold text-lg mb-2">{equipment.name}</h3>
                    
                    <div className="flex justify-between items-center text-agro-700 font-medium mb-3">
                      <div className="flex items-center">
                        <Tractor className="h-4 w-4 mr-1" />
                        <span>₹{equipment.price_per_day}/day</span>
                      </div>
                      <div className="text-xs text-gray-500">{equipment.location}</div>
                    </div>
                    
                    <Collapsible open={isDetailsOpen[equipment.id]} onOpenChange={() => toggleDetails(equipment.id)}>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="mb-3 justify-start px-0">
                          {isDetailsOpen[equipment.id] ? t.hideDetails : t.viewDetails}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mb-4">
                        <p className="text-gray-600 text-sm">{equipment.description}</p>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <div className="mt-auto space-y-2">
                      <Button 
                        className="w-full" 
                        disabled={!equipment.available}
                        onClick={() => handleRentRequest(equipment)}
                      >
                        {t.requestRental}
                      </Button>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Phone className="h-4 w-4 mr-1" />
                          {t.call}
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Mail className="h-4 w-4 mr-1" />
                          {t.email}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {t.requestRentalFor || 'Request Rental for'} {selectedEquipment?.name}
            </DialogTitle>
            <DialogDescription>
              {t.rentalRequestDescription || 'Please provide details about your rental needs.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium" htmlFor="message">
                {t.message || 'Message'}
              </label>
              <Textarea 
                id="message"
                value={requestMessage}
                onChange={(e) => setRequestMessage(e.target.value)}
                placeholder={t.rentalMessagePlaceholder || 'When and for how long do you need this equipment?'}
                className="mt-1"
              />
            </div>
            
            <div className="bg-amber-50 p-3 rounded border border-amber-200 flex items-start gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm">
                {t.rentalDisclaimer || 'Rental is subject to availability and owner approval. Payment details will be arranged after approval.'}
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              {t.cancel || 'Cancel'}
            </Button>
            <Button onClick={submitRentRequest}>
              {t.submitRequest || 'Submit Request'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EquipmentRental;
