
import React from 'react';
import { useForm } from 'react-hook-form';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';

interface FeedbackFormProps {
  language: string;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ language }) => {
  const t = translations[language];
  
  // Define form
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  
  // Form submission handler
  const onSubmit = (data: any) => {
    console.log('Feedback submitted:', data);
    
    // Show toast notification
    toast({
      title: 'Feedback Submitted',
      description: 'Thank you for your feedback!',
    });
    
    // Reset form
    form.reset();
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-agro-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-agro-800">
              {t.feedbackTitle}
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.yourName}</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                      <FormLabel>{t.yourEmail}</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.yourMessage}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please share your thoughts with us..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-agro-600 hover:bg-agro-700 text-white transition-colors"
                >
                  {t.submit}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
