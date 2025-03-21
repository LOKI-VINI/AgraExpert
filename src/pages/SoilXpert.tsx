
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { translations } from "@/lib/translations";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FarmerRegistrationForm from "@/components/SoilXpert/FarmerRegistrationForm";
import SoilTestSubmissionForm from "@/components/SoilXpert/SoilTestSubmissionForm";
import SoilReport from "@/components/SoilXpert/SoilReport";
import YieldSalesForm from "@/components/SoilXpert/YieldSalesForm";
import SoilHero from "@/components/SoilXpert/SoilHero";

const SoilXpert = () => {
  const [language, setLanguage] = useState("en");
  const [activeTab, setActiveTab] = useState("register");
  const [formData, setFormData] = useState({});
  const [soilData, setSoilData] = useState(null);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const { toast } = useToast();
  const t = translations[language];

  const handleRegistrationComplete = (data: any) => {
    setFormData(data);
    setActiveTab("soil-test");
    toast({
      title: "Registration Successful",
      description: "You can now submit your soil test data",
    });
  };

  const handleSoilTestSubmit = (data: any) => {
    setIsGeneratingReport(true);
    // Simulate AI processing
    setTimeout(() => {
      setSoilData({
        soilQuality: {
          ph: Math.random() * (8.5 - 5.5) + 5.5,
          nitrogen: Math.random() * 100,
          phosphorus: Math.random() * 100,
          potassium: Math.random() * 100,
          organicMatter: Math.random() * 10,
          fertility: Math.random() * 100,
        },
        cropRecommendations: [
          { name: "Rice", profitability: 85, suitability: 90 },
          { name: "Wheat", profitability: 75, suitability: 80 },
          { name: "Corn", profitability: 90, suitability: 70 },
          { name: "Cotton", profitability: 70, suitability: 65 },
        ],
        farmingPractices: [
          "Apply organic compost to improve soil structure",
          "Implement crop rotation to maintain soil fertility",
          "Consider drip irrigation to optimize water usage",
          "Use mulching to control weeds and retain moisture",
        ],
      });
      setIsGeneratingReport(false);
      setActiveTab("soil-report");
      toast({
        title: "Soil Analysis Complete",
        description: "Your personalized report is ready to view",
      });
    }, 3000);
  };

  const handleYieldSaleSubmit = (data: any) => {
    toast({
      title: "Yield Listed Successfully",
      description: "Buyers will be able to see your listing",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-white">
      <NavBar language={language} setLanguage={setLanguage} />
      
      <SoilHero language={language} />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="register">{t.register || "Register"}</TabsTrigger>
            <TabsTrigger value="soil-test">{t.soilTest || "Soil Test"}</TabsTrigger>
            <TabsTrigger value="soil-report">{t.soilReport || "Soil Report"}</TabsTrigger>
            <TabsTrigger value="yield-sales">{t.yieldSales || "Yield Sales"}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>{t.farmerRegistration || "Farmer Registration"}</CardTitle>
                <CardDescription>{t.registerToGetStarted || "Register to get started with SoilXpert services"}</CardDescription>
              </CardHeader>
              <CardContent>
                <FarmerRegistrationForm onComplete={handleRegistrationComplete} language={language} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="soil-test">
            <Card>
              <CardHeader>
                <CardTitle>{t.soilTestSubmission || "Soil Test Submission"}</CardTitle>
                <CardDescription>{t.submitSoilSample || "Submit your soil sample data for analysis"}</CardDescription>
              </CardHeader>
              <CardContent>
                <SoilTestSubmissionForm onSubmit={handleSoilTestSubmit} language={language} isLoading={isGeneratingReport} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="soil-report">
            <Card>
              <CardHeader>
                <CardTitle>{t.soilAnalysisReport || "Soil Analysis Report"}</CardTitle>
                <CardDescription>{t.aiGeneratedInsights || "AI-generated insights for your soil"}</CardDescription>
              </CardHeader>
              <CardContent>
                <SoilReport data={soilData} language={language} isLoading={isGeneratingReport} />
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button 
                  onClick={() => setActiveTab("yield-sales")} 
                  variant="default"
                  className="bg-agro-700 hover:bg-agro-800"
                >
                  {t.proceedToYieldSales || "Proceed to Yield Sales"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="yield-sales">
            <Card>
              <CardHeader>
                <CardTitle>{t.yieldSales || "Yield Sales"}</CardTitle>
                <CardDescription>{t.listYourProducts || "List your agricultural products for buyers"}</CardDescription>
              </CardHeader>
              <CardContent>
                <YieldSalesForm onSubmit={handleYieldSaleSubmit} language={language} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer language={language} />
    </div>
  );
};

export default SoilXpert;
