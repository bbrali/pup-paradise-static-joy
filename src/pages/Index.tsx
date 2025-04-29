
import React from 'react';
import HeroSection from '@/components/HeroSection';
import DogGallery from '@/components/DogGallery';
import FactsSection from '@/components/FactsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen paw-cursor">
      <HeroSection />
      <DogGallery />
      <FactsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
