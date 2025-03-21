
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { translations } from '@/lib/translations';

interface PriceUpdate {
  id: number;
  productName: string;
  currentPrice: number;
  previousPrice: number;
  buyerName: string;
  timestamp: string;
}

interface PriceUpdatesProps {
  language: string;
}

const PriceUpdates: React.FC<PriceUpdatesProps> = ({ language }) => {
  const t = translations[language];
  
  // Mock data for demonstration
  const updates: PriceUpdate[] = [
    {
      id: 1,
      productName: "Organic Wheat",
      currentPrice: 37.50,
      previousPrice: 35.50,
      buyerName: "Green Harvest Co.",
      timestamp: "10 minutes ago"
    },
    {
      id: 2,
      productName: "Premium Rice",
      currentPrice: 42.75,
      previousPrice: 44.00,
      buyerName: "Nature's Best Foods",
      timestamp: "1 hour ago"
    },
    {
      id: 3,
      productName: "Turmeric",
      currentPrice: 125.00,
      previousPrice: 120.00,
      buyerName: "Spice Trade Inc.",
      timestamp: "3 hours ago"
    },
    {
      id: 4,
      productName: "Organic Maize",
      currentPrice: 28.50,
      previousPrice: 26.75,
      buyerName: "Fresh Fields Market",
      timestamp: "5 hours ago"
    }
  ];
  
  return (
    <Card className="shadow-md animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '300ms' }}>
      <CardHeader>
        <CardTitle>{t.recentPriceUpdates}</CardTitle>
        <CardDescription>{t.recentPriceUpdatesDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {updates.map((update) => {
            const priceChange = update.currentPrice - update.previousPrice;
            const isPriceUp = priceChange > 0;
            
            return (
              <div key={update.id} className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-sm">{update.productName}</h3>
                    <p className="text-muted-foreground text-xs">{update.buyerName}</p>
                  </div>
                  <div className={`flex items-center ${isPriceUp ? 'text-green-600' : 'text-red-600'}`}>
                    {isPriceUp ? (
                      <ArrowUp className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-1" />
                    )}
                    <span className="text-xs font-medium">
                      {Math.abs(priceChange).toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="text-lg font-bold">₹{update.currentPrice.toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground">{update.timestamp}</div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceUpdates;
