
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { translations } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { User, MessageSquare, Calendar } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface YieldSalesFormProps {
  onSubmit: (data: any) => void;
  language: string;
}

interface InquiryProps {
  id: number;
  buyer: string;
  message: string;
  date: string;
  status: 'new' | 'replied';
}

const YieldSalesForm: React.FC<YieldSalesFormProps> = ({ onSubmit, language }) => {
  const t = translations[language];
  const [yieldListings, setYieldListings] = useState<any[]>([]);
  const [inquiries, setInquiries] = useState<InquiryProps[]>([
    {
      id: 1,
      buyer: "Green Harvest Co.",
      message: "We're interested in your rice crop. Can you provide details about the quality and when it will be available for purchase?",
      date: "2023-06-15",
      status: 'new'
    },
    {
      id: 2,
      buyer: "Farm Fresh Markets",
      message: "Looking to buy your wheat. What's your best price for 5 tons?",
      date: "2023-06-12",
      status: 'replied'
    },
    {
      id: 3,
      buyer: "Organic Foods Inc.",
      message: "We specialize in organic produce. Is your corn organically grown? We're interested in setting up a long-term purchase agreement.",
      date: "2023-06-10",
      status: 'new'
    }
  ]);

  const formSchema = z.object({
    productName: z.string().min(2, {
      message: "Product name must be at least 2 characters.",
    }),
    quantity: z.string()
      .refine(val => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
        message: "Quantity must be a positive number.",
      }),
    unit: z.string().min(1, {
      message: "Please select a unit.",
    }),
    price: z.string()
      .refine(val => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
        message: "Price must be a positive number.",
      }),
    availableFrom: z.string().min(1, {
      message: "Please enter an availability date.",
    }),
    description: z.string().optional(),
    organic: z.boolean().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      quantity: "",
      unit: "kg",
      price: "",
      availableFrom: "",
      description: "",
      organic: false,
    },
  });

  function handleFormSubmit(values: z.infer<typeof formSchema>) {
    const newListing = {
      id: yieldListings.length + 1,
      ...values,
      listedOn: new Date().toISOString().split('T')[0],
      status: 'active'
    };
    
    setYieldListings([newListing, ...yieldListings]);
    form.reset();
    onSubmit(newListing);
  }
  
  function handleInquiryReply(id: number) {
    setInquiries(inquiries.map(inquiry => 
      inquiry.id === id ? { ...inquiry, status: 'replied' as const } : inquiry
    ));
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* List New Yield */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t.listYourYield || "List Your Yield"}</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.productName || "Product Name"}</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Rice, Wheat, Corn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.quantity || "Quantity"}</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 1000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="unit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.unit || "Unit"}</FormLabel>
                        <FormControl>
                          <select
                            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                            {...field}
                          >
                            <option value="kg">kg</option>
                            <option value="ton">ton</option>
                            <option value="quintal">quintal</option>
                            <option value="bushel">bushel</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.pricePerUnit || "Price per Unit (₹)"}</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 25" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="availableFrom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.availableFrom || "Available From"}</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.description || "Description"}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t.describeYourProduct || "Describe your product, quality, etc."}
                        className="min-h-[80px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="organic"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {t.organicProduct || "This is an organic product"}
                    </FormLabel>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-agro-700 hover:bg-agro-800"
              >
                {t.listProduct || "List Product"}
              </Button>
            </form>
          </Form>
        </div>
        
        {/* Buyer Inquiries */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t.buyerInquiries || "Buyer Inquiries"}</h3>
          {inquiries.length > 0 ? (
            <div className="space-y-4">
              {inquiries.map((inquiry) => (
                <Card key={inquiry.id} className={`border-l-4 ${inquiry.status === 'new' ? 'border-l-blue-500' : 'border-l-gray-300'}`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="font-medium">{inquiry.buyer}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {inquiry.date}
                      </div>
                    </div>
                    <div className="flex items-start mb-3">
                      <MessageSquare className="h-4 w-4 mr-2 text-gray-500 mt-1 shrink-0" />
                      <p className="text-sm text-gray-700">{inquiry.message}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className={`text-xs px-2 py-1 rounded ${
                        inquiry.status === 'new' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {inquiry.status === 'new' ? t.newInquiry || 'New Inquiry' : t.replied || 'Replied'}
                      </span>
                      <div className="space-x-2">
                        {inquiry.status === 'new' && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleInquiryReply(inquiry.id)}
                          >
                            {t.reply || "Reply"}
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          variant={inquiry.status === 'new' ? 'default' : 'outline'}
                          className={inquiry.status === 'new' ? 'bg-agro-700 hover:bg-agro-800' : ''}
                        >
                          {t.viewDetails || "View Details"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-gray-500">
                  {t.noInquiriesYet || "No inquiries yet. Once you list your products, buyers will be able to contact you."}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      {/* Your Listings */}
      <div>
        <h3 className="text-lg font-semibold mb-4">{t.yourListings || "Your Listings"}</h3>
        {yieldListings.length > 0 ? (
          <div className="overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.product || "Product"}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.quantity || "Quantity"}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.price || "Price"}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.availableFrom || "Available From"}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.status || "Status"}
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {t.actions || "Actions"}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {yieldListings.map((item, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {item.productName}
                          </div>
                          {item.organic && (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {t.organic || "Organic"}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.quantity} {item.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ₹{item.price}/{item.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item.availableFrom}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {t.active || "Active"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-agro-700 hover:text-agro-800 mr-3">
                        {t.edit || "Edit"}
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        {t.delete || "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-gray-500">
                {t.noListingsYet || "You haven't listed any products yet. Use the form above to list your agricultural products for sale."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default YieldSalesForm;
