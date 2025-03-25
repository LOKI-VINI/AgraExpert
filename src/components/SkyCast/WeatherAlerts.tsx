
import React, { useState } from 'react';
import { Bell, AlertTriangle, CheckCircle, BellOff, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import { translations } from '@/lib/translations';

interface WeatherAlertsProps {
  language: string;
  location: string;
}

const WeatherAlerts: React.FC<WeatherAlertsProps> = ({ language, location }) => {
  const t = translations[language];
  const [alertsEnabled, setAlertsEnabled] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const toggleAlerts = () => {
    if (!alertsEnabled && !phoneNumber) {
      toast({
        title: t.phoneNumberRequired,
        description: t.enterPhoneNumberForAlerts,
        variant: "destructive",
      });
      return;
    }
    
    setAlertsEnabled(!alertsEnabled);
    
    if (!alertsEnabled) {
      toast({
        title: t.alertsEnabled,
        description: t.alertsEnabledDescription.replace('{location}', location),
        variant: "default",
      });
    } else {
      toast({
        title: t.alertsDisabled,
        description: t.alertsDisabledDescription,
        variant: "default",
      });
    }
  };
  
  // Mock alerts - in a real app, these would come from a weather API
  const alerts = [
    { 
      type: 'warning',
      title: t.heavyRainWarning,
      description: t.heavyRainWarningDescription.replace('{location}', location),
      time: '2 hours ago'
    },
    { 
      type: 'info',
      title: t.moderateWindsAlert,
      description: t.moderateWindsAlertDescription,
      time: 'Yesterday'
    },
    { 
      type: 'success',
      title: t.idealConditionsAlert,
      description: t.idealConditionsAlertDescription.replace('{location}', location),
      time: '3 days ago'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>{t.weatherAlerts}</CardTitle>
          <CardDescription>{t.weatherAlertsDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch id="alerts" checked={alertsEnabled} onCheckedChange={toggleAlerts} />
              <Label htmlFor="alerts">{alertsEnabled ? t.alertsEnabled : t.enableAlerts}</Label>
            </div>
            {alertsEnabled ? <Bell className="h-5 w-5 text-agro-600" /> : <BellOff className="h-5 w-5 text-gray-400" />}
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-sm text-gray-500 mb-1 block">{t.phoneNumber}</Label>
            <div className="flex">
              <PhoneCall className="h-5 w-5 text-gray-400 mr-2 mt-2" />
              <Input
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={t.phoneNumberPlaceholder}
                type="tel"
                className="flex-1"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-agro-600 hover:bg-agro-700" onClick={toggleAlerts}>
            {alertsEnabled ? t.disableAlerts : t.enableAlerts}
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>{t.recentAlerts}</CardTitle>
          <CardDescription>{t.recentAlertsDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {alerts.map((alert, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg flex gap-3 ${
                alert.type === 'warning' ? 'bg-orange-50 text-orange-800 border-l-4 border-orange-500' :
                alert.type === 'info' ? 'bg-blue-50 text-blue-800 border-l-4 border-blue-500' :
                'bg-green-50 text-green-800 border-l-4 border-green-500'
              }`}
            >
              {alert.type === 'warning' ? (
                <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
              ) : alert.type === 'info' ? (
                <Bell className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
              ) : (
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              )}
              
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-medium">{alert.title}</h4>
                  <span className="text-xs opacity-70">{alert.time}</span>
                </div>
                <p className="text-sm mt-1">{alert.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherAlerts;
