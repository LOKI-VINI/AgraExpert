
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import ImageUploader from '@/components/ImageUploader';
import DiseaseDetectionResults from '@/components/DiseaseDetectionResults';
import { translations } from '@/lib/translations';
import { Leaf, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface DetectionResult {
  diseaseName: string;
  cause: string;
  remedies: string[];
  pesticides: {
    name: string;
    usage: string;
  }[];
  confidence: number;
}

const GreenVita: React.FC = () => {
  const [language, setLanguage] = useState('en');
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [detectionResult, setDetectionResult] = useState<DetectionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const t = translations[language];
  
  const handleImageUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl);
    setDetectionResult(null);
    setError(null);
  };
  
  const detectDisease = async () => {
    if (!uploadedImage) {
      toast.error(t.pleaseUploadImage || "Please upload an image first");
      return;
    }
    
    setIsProcessing(true);
    setError(null);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      // Mock detection result - in a real app, this would come from an AI API
      const mockResult: DetectionResult = {
        diseaseName: "Leaf Rust (Puccinia)",
        cause: "Fungal infection spread through water splash and wind",
        remedies: [
          "Remove and destroy infected leaves",
          "Ensure proper air circulation around plants",
          "Water at the base of plants to avoid wetting leaves",
          "Practice crop rotation to prevent reinfection"
        ],
        pesticides: [
          {
            name: "Organic Copper Fungicide",
            usage: "Apply every 7-10 days as a preventative measure. Spray evenly on all leaf surfaces."
          },
          {
            name: "Neem Oil Solution",
            usage: "Mix 2-3 ml of neem oil with 1 liter of water and a few drops of dish soap. Apply weekly."
          }
        ],
        confidence: 0.92
      };
      
      setDetectionResult(mockResult);
    } catch (err) {
      console.error("Error detecting disease:", err);
      setError(t.errorDetecting || "An error occurred during disease detection. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };
  
  const resetDetection = () => {
    setUploadedImage(null);
    setDetectionResult(null);
    setError(null);
  };

  const heroSection = (
    <section className="relative pt-32 pb-12 bg-[url('https://images.unsplash.com/photo-1501014834244-3b17ba7a97cd?auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-green-800/40 backdrop-blur-sm"></div>
      <div className="container relative mx-auto px-4 z-10">
        <div className="flex items-center gap-3 mb-2">
          <Leaf className="h-8 w-8 text-green-400" />
          <div className="text-sm text-green-200">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">GreenVita</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
          GreenVita
        </h1>
        <p className="text-xl md:text-2xl text-green-100 max-w-3xl mb-6 animate-fade-in">
          {t.greenvitaDescription || "AI-Powered Plant Disease Detection & Care"}
        </p>
        <p className="text-md text-green-200 max-w-2xl mb-10 animate-fade-in">
          {t.greenvitaTagline || "Upload images of your plants to identify diseases, get treatment recommendations, and protect your crops."}
        </p>
      </div>
    </section>
  );
  
  return (
    <PageLayout 
      language={language} 
      setLanguage={setLanguage}
      heroSection={heroSection}
      className="bg-gradient-to-b from-green-50 to-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8 animate-fade-in">
          <h2 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2">
            <Leaf className="h-5 w-5" />
            {t.uploadImage || "Upload Plant Image"}
          </h2>
          <ImageUploader 
            onImageUpload={handleImageUpload} 
            uploadedImage={uploadedImage}
            language={language}
            isProcessing={isProcessing}
          />
          
          {uploadedImage && !isProcessing && !detectionResult && (
            <Button 
              onClick={detectDisease} 
              className="w-full mt-6 bg-green-600 hover:bg-green-700"
            >
              {t.detectDisease || "Detect Disease"} <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
          
          {uploadedImage && detectionResult && (
            <Button 
              variant="outline" 
              onClick={resetDetection} 
              className="w-full mt-6 border-green-600 text-green-700 hover:bg-green-50"
            >
              {t.newDetection || "Start New Detection"}
            </Button>
          )}
        </section>
        
        {/* Results Section */}
        <section className="bg-white rounded-xl shadow-md p-6 md:p-8 animate-fade-in">
          <h2 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-2">
            <Leaf className="h-5 w-5" />
            {t.detectionResults || "Detection Results"}
          </h2>
          
          <DiseaseDetectionResults
            isProcessing={isProcessing}
            result={detectionResult}
            error={error}
            language={language}
          />
        </section>
      </div>
    </PageLayout>
  );
};

export default GreenVita;
