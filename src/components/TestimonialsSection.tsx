
import React from 'react';
import { User, Star, Quote } from 'lucide-react';
import { translations } from '@/lib/translations';

interface TestimonialsSectionProps {
  language: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language }) => {
  const t = translations[language];
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wheat Farmer",
      content: "AgroXpert's SoilXpert feature increased my crop yield by 30% in just one season. The crop recommendations were spot on!",
      rating: 5,
      delay: 100
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Organic Farm Owner",
      content: "GreenVita helped us identify a fungal disease before it spread to our entire crop. Saved us thousands in potential losses.",
      rating: 5,
      delay: 200
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Rice Cultivator",
      content: "The weather forecasting is incredibly accurate. We've been able to plan our planting and harvesting with confidence.",
      rating: 4,
      delay: 300
    }
  ];
  
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-testimonial-pattern opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-agro-50/80 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials || 'Success Stories'}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.testimonialsSubtitle || 'Hear from farmers who have transformed their agricultural practices with AgroXpert'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-agro-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{ 
                opacity: 0, 
                animation: 'fade-in 0.6s ease-out forwards',
                animationDelay: `${testimonial.delay}ms`
              }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-agro-100 rounded-full p-3 mr-3">
                  <User className="h-6 w-6 text-agro-700" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="h-8 w-8 text-agro-200 absolute -top-1 -left-2 opacity-50" />
                <p className="text-foreground/90 pl-4 italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
