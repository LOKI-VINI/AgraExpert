
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { translations } from '@/lib/translations';

interface BuyerRegistrationProps {
  language: string;
}

const BuyerRegistration: React.FC<BuyerRegistrationProps> = ({ language }) => {
  const t = translations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define form schema
  const formSchema = z.object({
    buyerName: z.string().min(2, { message: "Buyer name is required" }),
    productName: z.string().min(2, { message: "Product name is required" }),
    pricePerUnit: z.string().min(1, { message: "Price is required" }),
    quantity: z.string().min(1, { message: "Quantity is required" }),
    contactEmail: z.string().email({ message: "Valid email is required" }),
    contactPhone: z.string().min(10, { message: "Valid phone number is required" }),
    additionalInfo: z.string().optional(),
  });
  
  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      buyerName: "",
      productName: "",
      pricePerUnit: "",
      quantity: "",
      contactEmail: "",
      contactPhone: "",
      additionalInfo: "",
    },
  });
  
  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Submitted buyer registration:", values);
      toast.success(t.buyerRegistrationSuccess);
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <Card className="shadow-md animate-fade-in hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle>{t.buyerRegistrationTitle}</CardTitle>
        <CardDescription>{t.buyerRegistrationDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="buyerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.buyerName}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t.buyerNamePlaceholder} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.productName}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t.productNamePlaceholder} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="pricePerUnit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.pricePerUnit}</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" placeholder={t.pricePerUnitPlaceholder} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.quantity}</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" placeholder={t.quantityPlaceholder} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.contactEmail}</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder={t.contactEmailPlaceholder} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contactPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.contactPhone}</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder={t.contactPhonePlaceholder} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t.additionalInfo}</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder={t.additionalInfoPlaceholder} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-agro-700 hover:bg-agro-800" 
              disabled={isSubmitting}
            >
              {isSubmitting ? t.submitting : t.registerAsBuyer}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BuyerRegistration;
