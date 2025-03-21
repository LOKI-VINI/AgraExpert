
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Upload } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface SoilTestSubmissionFormProps {
  onSubmit: (data: any) => void;
  language: string;
  isLoading: boolean;
}

const SoilTestSubmissionForm: React.FC<SoilTestSubmissionFormProps> = ({ 
  onSubmit, 
  language,
  isLoading 
}) => {
  const t = translations[language];
  const [inputMethod, setInputMethod] = useState<"manual" | "upload">("manual");
  const [fileUploaded, setFileUploaded] = useState<File | null>(null);

  const formSchema = z.object({
    ph: z.string()
      .refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0 && parseFloat(val) <= 14, {
        message: "pH must be between 0 and 14",
      }),
    nitrogen: z.string()
      .refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
        message: "Nitrogen must be a positive number",
      }),
    phosphorus: z.string()
      .refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
        message: "Phosphorus must be a positive number",
      }),
    potassium: z.string()
      .refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
        message: "Potassium must be a positive number",
      }),
    organicMatter: z.string()
      .refine(val => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
        message: "Organic matter must be a positive number",
      }),
    soilType: z.string().min(1, {
      message: "Please select a soil type",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ph: "",
      nitrogen: "",
      phosphorus: "",
      potassium: "",
      organicMatter: "",
      soilType: "",
    },
  });

  function handleFormSubmit(values: z.infer<typeof formSchema>) {
    onSubmit(values);
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setFileUploaded(e.target.files[0]);
    }
  }

  function handleUploadSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (fileUploaded) {
      onSubmit({ fileUpload: fileUploaded });
    }
  }

  return (
    <Tabs value={inputMethod} onValueChange={(v) => setInputMethod(v as "manual" | "upload")}>
      <TabsList className="grid grid-cols-2 mb-6">
        <TabsTrigger value="manual">{t.manualEntry || "Manual Entry"}</TabsTrigger>
        <TabsTrigger value="upload">{t.uploadResults || "Upload Results"}</TabsTrigger>
      </TabsList>
      
      <TabsContent value="manual">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="ph"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.soilPh || "Soil pH"}</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 6.5" {...field} />
                    </FormControl>
                    <FormDescription>
                      {t.phRange || "Range: 0-14, 7 is neutral"}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="nitrogen"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.nitrogen || "Nitrogen (N) mg/kg"}</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 40" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phosphorus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.phosphorus || "Phosphorus (P) mg/kg"}</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 35" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="potassium"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.potassium || "Potassium (K) mg/kg"}</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="organicMatter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.organicMatter || "Organic Matter %"}</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 3.5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="soilType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.soilType || "Soil Type"}</FormLabel>
                    <FormControl>
                      <select
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                        {...field}
                      >
                        <option value="">{t.selectSoilType || "Select soil type"}</option>
                        <option value="sandy">Sandy</option>
                        <option value="clay">Clay</option>
                        <option value="silt">Silt</option>
                        <option value="loam">Loam</option>
                        <option value="chalky">Chalky</option>
                        <option value="peaty">Peaty</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button 
              type="submit" 
              className="bg-agro-700 hover:bg-agro-800"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t.analyzing || "Analyzing..."}
                </>
              ) : (
                t.analyzeSoil || "Analyze Soil"
              )}
            </Button>
          </form>
        </Form>
      </TabsContent>
      
      <TabsContent value="upload">
        <form onSubmit={handleUploadSubmit} className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Label htmlFor="soil-report" className="cursor-pointer block">
              <div className="flex flex-col items-center justify-center gap-2">
                <Upload className="h-12 w-12 text-gray-400" />
                <h3 className="text-lg font-medium">{t.uploadSoilReport || "Upload Soil Report"}</h3>
                <p className="text-sm text-gray-500">
                  {t.dragAndDropFile || "Drag and drop your file here, or click to browse"}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {t.supportedFormats || "Supported formats: PDF, JPG, PNG (max 10MB)"}
                </p>
                {fileUploaded && (
                  <p className="text-sm text-green-600 mt-2">
                    {t.fileUploaded || "File uploaded"}: {fileUploaded.name}
                  </p>
                )}
              </div>
              <Input 
                id="soil-report"
                type="file" 
                accept=".pdf,.jpg,.jpeg,.png" 
                className="hidden" 
                onChange={handleFileUpload}
              />
            </Label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-agro-700 hover:bg-agro-800"
            disabled={!fileUploaded || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t.processingFile || "Processing..."}
              </>
            ) : (
              t.submitForAnalysis || "Submit for Analysis"
            )}
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  );
};

export default SoilTestSubmissionForm;
