
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dog } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-dog-cream to-dog-beige min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-dog-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-dog-brown/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-16 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dog-brown mb-6">
              <span className="block">Where Every</span>
              <span className="block">
                <span className="text-dog-gold">Woof</span> Matters
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Join our community of dog lovers celebrating the joy, love, and endless happiness our four-legged friends bring to our lives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="bg-dog-brown hover:bg-dog-brown/90 text-white px-6 py-6 rounded-full text-lg group">
                Explore Dog Breeds
                <Dog className="ml-2 h-5 w-5 group-hover:animate-bounce-slow" />
              </Button>
              <Button variant="outline" className="border-dog-brown text-dog-brown hover:bg-dog-brown/10 px-6 py-6 rounded-full text-lg">
                Join Our Community
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Happy golden retriever dog" 
                className="w-full h-full object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 bg-white p-4 md:p-6 rounded-2xl shadow-lg transform rotate-6 animate-bounce-slow">
                <p className="text-dog-brown font-bold text-lg md:text-xl">100% Good Boy!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
