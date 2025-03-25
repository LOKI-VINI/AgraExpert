
import React from 'react';
import { 
  Cloud, CloudRain, CloudSnow, CloudLightning, 
  CloudDrizzle, Sun, Wind, Droplets, Thermometer,
  Loader2, CloudSun, ArrowUp, ArrowDown
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { translations } from '@/lib/translations';
import { Badge } from '@/components/ui/badge';

interface WeatherDisplayProps {
  language: string;
  location: string;
  isLoading: boolean;
}

// Mock weather data - in a real app, this would come from an API
const currentWeather = {
  temperature: 28,
  humidity: 65,
  windSpeed: 12,
  condition: 'mostly-cloudy'
};

const forecast = [
  { day: 'Mon', high: 30, low: 22, condition: 'sunny' },
  { day: 'Tue', high: 28, low: 21, condition: 'partly-cloudy' },
  { day: 'Wed', high: 25, low: 20, condition: 'rain' },
  { day: 'Thu', high: 24, low: 19, condition: 'rain' },
  { day: 'Fri', high: 26, low: 20, condition: 'cloudy' },
  { day: 'Sat', high: 29, low: 22, condition: 'sunny' },
  { day: 'Sun', high: 31, low: 23, condition: 'sunny' },
];

// Helper function to get weather icon based on condition
const getWeatherIcon = (condition: string, size = 6) => {
  const iconProps = { className: `h-${size} w-${size}` };
  
  switch (condition) {
    case 'sunny':
      return <Sun {...iconProps} className={`h-${size} w-${size} text-yellow-500`} />;
    case 'partly-cloudy':
      return <CloudSun {...iconProps} className={`h-${size} w-${size} text-gray-400`} />;
    case 'cloudy':
      return <Cloud {...iconProps} className={`h-${size} w-${size} text-gray-400`} />;
    case 'mostly-cloudy':
      return <Cloud {...iconProps} className={`h-${size} w-${size} text-gray-500`} />;
    case 'rain':
      return <CloudRain {...iconProps} className={`h-${size} w-${size} text-blue-400`} />;
    case 'drizzle':
      return <CloudDrizzle {...iconProps} className={`h-${size} w-${size} text-blue-300`} />;
    case 'snow':
      return <CloudSnow {...iconProps} className={`h-${size} w-${size} text-blue-100`} />;
    case 'thunderstorm':
      return <CloudLightning {...iconProps} className={`h-${size} w-${size} text-purple-500`} />;
    default:
      return <Cloud {...iconProps} className={`h-${size} w-${size} text-gray-400`} />;
  }
};

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ language, location, isLoading }) => {
  const t = translations[language];
  
  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center py-16">
        <Loader2 className="h-12 w-12 animate-spin mx-auto text-agro-600" />
        <p className="text-gray-500 mt-4">{t.loadingWeather}</p>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-agro-100 to-blue-50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{location}</h2>
            <p className="text-sm text-gray-500">{new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'hi-IN', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
          </div>
          
          <Badge className="bg-agro-600 hover:bg-agro-600">{t.currentWeather}</Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex items-center gap-4">
            {getWeatherIcon(currentWeather.condition, 16)}
            <div>
              <div className="text-5xl font-bold text-gray-800">
                {currentWeather.temperature}°C
              </div>
              <p className="text-gray-500">{t.feelsLike} {currentWeather.temperature - 2}°C</p>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">{t.humidity}</p>
                  <p className="text-xl font-semibold">{currentWeather.humidity}%</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-agro-600" />
                <div>
                  <p className="text-sm text-gray-500">{t.windSpeed}</p>
                  <p className="text-xl font-semibold">{currentWeather.windSpeed} km/h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Separator />

      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">{t.sevenDayForecast}</h3>
        
        <div className="grid grid-cols-7 gap-2">
          {forecast.map((day, index) => (
            <div key={index} className="text-center">
              <p className="font-medium">{day.day}</p>
              {getWeatherIcon(day.condition, 8)}
              <div className="mt-2 flex items-center justify-center gap-1 text-sm">
                <span className="text-red-500 font-medium flex items-center">
                  <ArrowUp className="h-3 w-3" />{day.high}°
                </span>
                <span className="text-blue-500 font-medium flex items-center">
                  <ArrowDown className="h-3 w-3" />{day.low}°
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
