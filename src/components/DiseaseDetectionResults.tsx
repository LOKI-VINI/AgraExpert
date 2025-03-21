
import React from 'react';
import { translations } from '@/lib/translations';
import { AlertCircle, Bug, Info, Leaf, Loader2, ThumbsUp, BellRing } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Pesticide {
  name: string;
  usage: string;
}

interface DetectionResult {
  diseaseName: string;
  cause: string;
  remedies: string[];
  pesticides: Pesticide[];
  confidence: number;
}

interface DiseaseDetectionResultsProps {
  isProcessing: boolean;
  result: DetectionResult | null;
  error: string | null;
  language: string;
}

const DiseaseDetectionResults: React.FC<DiseaseDetectionResultsProps> = ({
  isProcessing,
  result,
  error,
  language
}) => {
  const t = translations[language];

  if (isProcessing) {
    return (
      <div className="h-64 flex flex-col items-center justify-center text-gray-600">
        <Loader2 className="animate-spin h-10 w-10 mb-4 text-green-600" />
        <p className="text-lg font-medium mb-2">{t.processingImage || "Processing your image"}</p>
        <p className="text-sm text-gray-500 text-center max-w-md">
          {t.aiAnalysing || "Our AI is analyzing your plant image to identify any diseases and recommend treatments..."}
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-64 flex flex-col items-center justify-center text-gray-600">
        <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-start max-w-md w-full mb-4">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">{t.detectionError || "Detection Error"}</p>
            <p className="text-sm text-red-600 mt-1">{error}</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 text-center">
          {t.tryAgain || "Please try uploading a different image or try again later."}
        </p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="h-64 flex flex-col items-center justify-center text-gray-600">
        <Leaf className="h-12 w-12 text-green-200 mb-4" />
        <p className="text-lg font-medium mb-2">{t.noImageUploaded || "No results yet"}</p>
        <p className="text-sm text-gray-500 text-center max-w-md">
          {t.uploadToDetect || "Upload a plant image and click 'Detect Disease' to get analysis results."}
        </p>
      </div>
    );
  }

  const confidencePercent = Math.round(result.confidence * 100);
  const confidenceColor = confidencePercent > 80 
    ? 'text-green-700' 
    : confidencePercent > 60 
      ? 'text-yellow-700' 
      : 'text-red-700';

  return (
    <div className="overflow-y-auto max-h-[500px] pr-2">
      <div className="space-y-6">
        {/* Disease Name and Confidence */}
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center">
              <Bug className="h-5 w-5 text-green-700 mr-2" />
              <h3 className="font-semibold text-green-800">{t.disease || "Disease"}</h3>
            </div>
            <div className="flex items-center bg-white px-2 py-1 rounded-md shadow-sm">
              <span className="text-xs mr-1">{t.confidence || "Confidence"}:</span>
              <span className={`text-xs font-semibold ${confidenceColor}`}>{confidencePercent}%</span>
            </div>
          </div>
          <Progress value={confidencePercent} className="h-1.5 mb-3" />
          <p className="text-lg font-medium text-gray-800">{result.diseaseName}</p>
        </div>
        
        {/* Cause */}
        <div className="bg-orange-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Info className="h-5 w-5 text-orange-700 mr-2" />
            <h3 className="font-semibold text-orange-800">{t.cause || "Cause"}</h3>
          </div>
          <p className="text-gray-700">{result.cause}</p>
        </div>
        
        {/* Remedies */}
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <ThumbsUp className="h-5 w-5 text-blue-700 mr-2" />
            <h3 className="font-semibold text-blue-800">{t.remedies || "Remedies & Prevention"}</h3>
          </div>
          <ul className="space-y-2">
            {result.remedies.map((remedy, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block h-5 w-5 rounded-full bg-blue-100 text-blue-700 text-xs flex items-center justify-center mr-2 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700">{remedy}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Pesticides */}
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <BellRing className="h-5 w-5 text-purple-700 mr-2" />
            <h3 className="font-semibold text-purple-800">{t.recommendedPesticides || "Recommended Pesticides"}</h3>
          </div>
          <div className="space-y-4">
            {result.pesticides.map((pesticide, index) => (
              <div key={index} className="bg-white rounded-md p-3 shadow-sm">
                <p className="font-medium text-gray-800 mb-1">{pesticide.name}</p>
                <p className="text-sm text-gray-600">{pesticide.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetectionResults;
