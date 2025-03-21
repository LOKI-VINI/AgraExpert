
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Phone, Mail } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { translations } from '@/lib/translations';

interface BuyerData {
  id: number;
  buyerName: string;
  productName: string;
  pricePerUnit: number;
  quantity: number;
  contactEmail: string;
  contactPhone: string;
  registrationDate: string;
}

interface FarmerViewProps {
  language: string;
}

const FarmerView: React.FC<FarmerViewProps> = ({ language }) => {
  const t = translations[language];
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for demonstration
  const buyersList: BuyerData[] = [
    {
      id: 1,
      buyerName: "Green Harvest Co.",
      productName: "Organic Wheat",
      pricePerUnit: 35.50,
      quantity: 1000,
      contactEmail: "buy@greenharvest.com",
      contactPhone: "+91 9876543210",
      registrationDate: "2023-05-15"
    },
    {
      id: 2,
      buyerName: "Nature's Best Foods",
      productName: "Premium Rice",
      pricePerUnit: 42.75,
      quantity: 500,
      contactEmail: "purchase@naturesbestfoods.com",
      contactPhone: "+91 8765432109",
      registrationDate: "2023-05-14"
    },
    {
      id: 3,
      buyerName: "Spice Trade Inc.",
      productName: "Turmeric",
      pricePerUnit: 120.00,
      quantity: 250,
      contactEmail: "orders@spicetrade.com",
      contactPhone: "+91 7654321098",
      registrationDate: "2023-05-13"
    },
    {
      id: 4,
      buyerName: "Fresh Fields Market",
      productName: "Organic Maize",
      pricePerUnit: 28.50,
      quantity: 750,
      contactEmail: "buy@freshfields.com",
      contactPhone: "+91 6543210987",
      registrationDate: "2023-05-12"
    }
  ];
  
  // Filter buyers based on search term
  const filteredBuyers = searchTerm 
    ? buyersList.filter(buyer => 
        buyer.buyerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        buyer.productName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : buyersList;
  
  return (
    <Card className="shadow-md animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '200ms' }}>
      <CardHeader>
        <CardTitle>{t.farmersViewTitle}</CardTitle>
        <CardDescription>{t.farmersViewDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-6">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t.searchBuyersPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t.buyerName}</TableHead>
                <TableHead>{t.productDetails}</TableHead>
                <TableHead>{t.contactOptions}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBuyers.length > 0 ? (
                filteredBuyers.map((buyer) => (
                  <TableRow key={buyer.id} className="hover:bg-agro-50/50">
                    <TableCell className="font-medium">{buyer.buyerName}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{buyer.productName}</div>
                        <div className="text-sm text-muted-foreground">
                          ₹{buyer.pricePerUnit.toFixed(2)} per kg • {buyer.quantity} kg {t.available}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          <span className="hidden sm:inline">{t.call}</span>
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          <span className="hidden sm:inline">{t.email}</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-4 text-muted-foreground">
                    {t.noBuyersFound}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default FarmerView;
