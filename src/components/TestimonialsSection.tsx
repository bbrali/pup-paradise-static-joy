
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type Testimonial = {
  quote: string;
  author: string;
  dogName: string;
  breed: string;
  imageUrl: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Having Max in my life has completely transformed it for the better. He's not just a pet, he's my loyal companion through life's ups and downs.",
    author: "Sarah Johnson",
    dogName: "Max",
    breed: "Golden Retriever",
    imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "My Bella has the most intuitive nature. She always knows when I need comfort and when I'm ready to play. Dogs truly understand us in ways other humans can't.",
    author: "Michael Chen",
    dogName: "Bella",
    breed: "Border Collie",
    imageUrl: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Adopting Rocky was the best decision I ever made. He came with so much love to give, and watching him grow confident and happy has been incredibly rewarding.",
    author: "Emma Rodriguez",
    dogName: "Rocky",
    breed: "Mixed Rescue",
    imageUrl: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-dog-brown/5" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dog-brown mb-4">Pawsitive Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from dog parents about the joy, love, and transformation their furry friends have brought into their lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden">
              <CardHeader className="pb-2 pt-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.imageUrl}
                    alt={`${testimonial.dogName} the ${testimonial.breed}`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-dog-gold"
                  />
                  <div>
                    <h3 className="font-bold text-dog-brown">{testimonial.author}</h3>
                    <p className="text-sm text-gray-500">with {testimonial.dogName} the {testimonial.breed}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <span className="text-5xl text-dog-gold/20 absolute top-0 left-0">"</span>
                  <p className="text-gray-600 pt-4 pl-6">{testimonial.quote}</p>
                  <span className="text-5xl text-dog-gold/20 absolute bottom-0 right-4">"</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
