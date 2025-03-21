
import React from 'react';
import { translations } from '@/lib/translations';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { BarChart, TrendingUp, Leaf, Globe, Settings, Users } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface SoilQuality {
  ph: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  organicMatter: number;
  fertility: number;
}

interface CropRecommendation {
  name: string;
  profitability: number;
  suitability: number;
}

interface SoilReportData {
  soilQuality: SoilQuality;
  cropRecommendations: CropRecommendation[];
  farmingPractices: string[];
}

interface SoilReportProps {
  data: SoilReportData | null;
  language: string;
  isLoading: boolean;
}

const SoilReport: React.FC<SoilReportProps> = ({ data, language, isLoading }) => {
  const t = translations[language];
  
  if (isLoading) {
    return <SoilReportSkeleton />;
  }
  
  if (!data) {
    return (
      <Alert>
        <Settings className="h-4 w-4" />
        <AlertTitle>{t.noDataAvailable || "No Data Available"}</AlertTitle>
        <AlertDescription>
          {t.pleaseSubmitSoilTest || "Please submit your soil test data to generate a report."}
        </AlertDescription>
      </Alert>
    );
  }

  const getFertilityLabel = (score: number) => {
    if (score < 30) return t.poor || "Poor";
    if (score < 50) return t.fair || "Fair";
    if (score < 70) return t.good || "Good";
    if (score < 90) return t.veryGood || "Very Good";
    return t.excellent || "Excellent";
  };

  const getPhCategory = (ph: number) => {
    if (ph < 5.5) return t.acidic || "Acidic";
    if (ph > 7.5) return t.alkaline || "Alkaline";
    return t.neutral || "Neutral";
  };

  // Format data for the crop recommendation chart
  const cropChartData = data.cropRecommendations.map(crop => ({
    name: crop.name,
    profitability: crop.profitability,
    suitability: crop.suitability,
  }));
  
  // Format data for the soil quality chart
  const soilQualityData = [
    { name: t.nitrogen || "Nitrogen", value: data.soilQuality.nitrogen },
    { name: t.phosphorus || "Phosphorus", value: data.soilQuality.phosphorus },
    { name: t.potassium || "Potassium", value: data.soilQuality.potassium },
    { name: t.organicMatter || "Organic Matter", value: data.soilQuality.organicMatter * 10 }, // Scaled for visibility
  ];

  return (
    <div className="space-y-8">
      {/* Soil Quality Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Leaf className="mr-2 h-5 w-5 text-green-600" />
            {t.soilQualityAnalysis || "Soil Quality Analysis"}
          </h3>
          
          <div className="space-y-6">
            {/* pH Level */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{t.soilPh || "Soil pH"}: {data.soilQuality.ph.toFixed(1)}</span>
                <span className="text-sm text-gray-500">{getPhCategory(data.soilQuality.ph)}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500" 
                  style={{ 
                    width: `${(data.soilQuality.ph / 14) * 100}%`,
                    marginLeft: '0%' 
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{t.acidic || "Acidic"}</span>
                <span>{t.neutral || "Neutral"}</span>
                <span>{t.alkaline || "Alkaline"}</span>
              </div>
            </div>
            
            {/* Fertility Score */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{t.fertilityScore || "Fertility Score"}</span>
                <span className="text-sm text-gray-500">
                  {getFertilityLabel(data.soilQuality.fertility)}
                </span>
              </div>
              <Progress value={data.soilQuality.fertility} className="h-2" />
              <div className="text-sm mt-1">
                {data.soilQuality.fertility.toFixed(0)}/100
              </div>
            </div>
          </div>
        </div>
        
        {/* Soil Composition Chart */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <BarChart className="mr-2 h-5 w-5 text-green-600" />
            {t.soilComposition || "Soil Composition"}
          </h3>
          
          <div className="h-64">
            <ChartContainer
              config={{
                nitrogen: { color: "#22c55e" },
                phosphorus: { color: "#3b82f6" },
                potassium: { color: "#f59e0b" },
                organicMatter: { color: "#8b5cf6" },
              }}
            >
              <RechartsBarChart data={soilQualityData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={100} />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                />
                <Bar dataKey="value" fill="var(--color-bg)" />
              </RechartsBarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
      
      {/* Crop Recommendations */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
          {t.cropRecommendations || "Crop Recommendations for Maximum Profitability"}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64">
            <ChartContainer
              config={{
                profitability: { color: "#f59e0b" },
                suitability: { color: "#22c55e" },
              }}
            >
              <RechartsBarChart data={cropChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                />
                <Bar dataKey="profitability" fill="var(--color-profitability-bg)" name={t.profitability || "Profitability"} />
                <Bar dataKey="suitability" fill="var(--color-suitability-bg)" name={t.suitability || "Suitability"} />
              </RechartsBarChart>
            </ChartContainer>
          </div>
          
          <div>
            <div className="grid grid-cols-1 gap-3">
              {data.cropRecommendations.map((crop, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{crop.name}</span>
                      <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded">
                        {t.profitabilityScore || "Profitability"}: {crop.profitability}%
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {t.suitabilityForYourSoil || "Suitability for your soil"}: {crop.suitability}%
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Farming Practices */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Globe className="mr-2 h-5 w-5 text-green-600" />
          {t.suggestedFarmingPractices || "Suggested Farming Practices"}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.farmingPractices.map((practice, index) => (
            <Alert key={index} className="border-l-4 border-l-green-500">
              <AlertDescription>
                {practice}
              </AlertDescription>
            </Alert>
          ))}
        </div>
      </div>
    </div>
  );
};

const SoilReportSkeleton = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Skeleton className="h-6 w-48 mb-4" />
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-2 w-full" />
              <div className="flex justify-between">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-2 w-full" />
            </div>
          </div>
        </div>
        <div>
          <Skeleton className="h-6 w-48 mb-4" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
      
      <div>
        <Skeleton className="h-6 w-72 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="h-64 w-full" />
          <div className="grid grid-cols-1 gap-3">
            {[1, 2, 3, 4].map(i => (
              <Skeleton key={i} className="h-20 w-full" />
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <Skeleton className="h-6 w-64 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map(i => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoilReport;
