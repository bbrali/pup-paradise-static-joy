
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Subscription successful!",
        description: "Thank you for joining our dog-loving community!",
        duration: 3000,
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-dog-gold/10 relative overflow-hidden" id="newsletter">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-dog-brown/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-20 w-80 h-80 bg-dog-gold/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dog-brown mb-6">
            Join Our Pawsome Community
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for heartwarming stories, training tips, health advice, and special offers for your canine companion.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow border-2 border-dog-brown/20 focus:border-dog-gold focus:ring-dog-gold px-4 py-3 rounded-full"
              required
            />
            <Button 
              type="submit" 
              className="bg-dog-brown hover:bg-dog-brown/90 text-white px-6 py-3 rounded-full"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
