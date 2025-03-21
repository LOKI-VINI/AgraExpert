
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface FarmerRegistrationFormProps {
  onComplete: (data: any) => void;
  language: string;
}

const FarmerRegistrationForm: React.FC<FarmerRegistrationFormProps> = ({ onComplete, language }) => {
  const t = translations[language];

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    phone: z.string().min(10, {
      message: "Please enter a valid phone number.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    location: z.string().min(2, {
      message: "Location must be at least 2 characters.",
    }),
    farmSize: z.string().min(1, {
      message: "Please enter your farm size.",
    }),
    farmDetails: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      location: "",
      farmSize: "",
      farmDetails: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onComplete(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.yourName || "Your Name"}</FormLabel>
                <FormControl>
                  <Input placeholder={t.enterYourName || "Enter your full name"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.phoneNumber || "Phone Number"}</FormLabel>
                <FormControl>
                  <Input placeholder={t.enterPhoneNumber || "Enter your phone number"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.email || "Email"}</FormLabel>
                <FormControl>
                  <Input placeholder={t.enterEmail || "Enter your email address"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.location || "Location"}</FormLabel>
                <FormControl>
                  <Input placeholder={t.enterLocation || "City, State"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="farmSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t.farmSize || "Farm Size"}</FormLabel>
                <FormControl>
                  <Input placeholder={t.enterFarmSize || "Size in acres"} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="farmDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.farmDetails || "Farm Details"}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={t.additionalDetails || "Tell us more about your farm (current crops, challenges, etc.)"}
                  className="min-h-[100px]"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                {t.farmDetailsDescription || "This information helps us provide better recommendations"}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full md:w-auto bg-agro-700 hover:bg-agro-800"
        >
          {t.registerAndContinue || "Register & Continue"}
        </Button>
      </form>
    </Form>
  );
};

export default FarmerRegistrationForm;
