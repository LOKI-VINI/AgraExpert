
import React, { useState } from 'react';
import { Phone, Mail, Tractor, Check, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { translations } from '@/lib/translations';
import { toast } from '@/hooks/use-toast';

interface EquipmentRentalProps {
  language: string;
}

interface Equipment {
  id: string;
  name: string;
  image: string;
  pricePerDay: number;
  category: string;
  available: boolean;
  description: string;
}

const EquipmentRental: React.FC<EquipmentRentalProps> = ({ language }) => {
  const t = translations[language];
  const [isDetailsOpen, setIsDetailsOpen] = useState<Record<string, boolean>>({});
  
  // Mock equipment data
  const equipmentList: Equipment[] = [
    {
      id: '1',
      name: 'Modern Compact Tractor',
      image: 'https://images.unsplash.com/photo-1505855265981-d52719d9d6ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      pricePerDay: 2500,
      category: 'tractors',
      available: true,
      description: 'Compact tractor with 40HP engine, ideal for small to medium farms. Includes basic attachments.'
    },
    {
      id: '2',
      name: 'Advanced Plowing Equipment',
      image: 'https://images.unsplash.com/photo-1635428431099-99218b0ad71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      pricePerDay: 1200,
      category: 'plows',
      available: false,
      description: 'Heavy-duty plow for deep soil preparation. Compatible with most standard tractors.'
    },
    {
      id: '3',
      name: 'Agricultural Monitoring Drone',
      image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      pricePerDay: 900,
      category: 'drones',
      available: true,
      description: 'Advanced drone with multispectral imaging capability. Battery life of 25 minutes per charge.'
    },
    {
      id: '4',
      name: 'Mini Harvester',
      image: 'https://images.unsplash.com/photo-1592982573555-c9e64df3c7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      pricePerDay: 3000,
      category: 'harvesters',
      available: true,
      description: 'Compact harvester suitable for small to medium farms. Easy to operate with training.'
    }
  ];
  
  const toggleDetails = (id: string) => {
    setIsDetailsOpen(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const handleRentRequest = (equipmentName: string) => {
    toast({
      title: t.rentRequestSubmitted,
      description: `${t.rentRequestFor} ${equipmentName}`,
    });
  };
  
  return (
    <section id="equipment-rental" className="py-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.equipmentRentalTitle}</h2>
        <p className="text-gray-600 mb-6">{t.equipmentRentalDescription}</p>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">{t.allEquipment}</TabsTrigger>
          <TabsTrigger value="tractors">{t.tractors}</TabsTrigger>
          <TabsTrigger value="plows">{t.plows}</TabsTrigger>
          <TabsTrigger value="drones">{t.drones}</TabsTrigger>
          <TabsTrigger value="harvesters">{t.harvesters}</TabsTrigger>
        </TabsList>
        
        {['all', 'tractors', 'plows', 'drones', 'harvesters'].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipmentList
                .filter(item => category === 'all' || item.category === category)
                .map((equipment) => (
                  <Card key={equipment.id} className="overflow-hidden h-full">
                    <div className="relative">
                      <img 
                        src={equipment.image} 
                        alt={equipment.name} 
                        className="w-full h-48 object-cover"
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
                      
                      <div className="flex items-center text-agro-700 font-medium mb-3">
                        <Tractor className="h-4 w-4 mr-1" />
                        <span>₹{equipment.pricePerDay}/day</span>
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
                          onClick={() => handleRentRequest(equipment.name)}
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
        ))}
      </Tabs>
    </section>
  );
};

export default EquipmentRental;
