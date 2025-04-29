
import React from 'react';
import { Dog } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dog-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Dog className="h-8 w-8" />
            <span className="text-2xl font-bold">DogLovers</span>
          </div>
          
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              <li><a href="#gallery" className="hover:text-dog-gold transition-colors">Gallery</a></li>
              <li><a href="#facts" className="hover:text-dog-gold transition-colors">Facts</a></li>
              <li><a href="#testimonials" className="hover:text-dog-gold transition-colors">Stories</a></li>
              <li><a href="#newsletter" className="hover:text-dog-gold transition-colors">Subscribe</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} DogLovers. All rights reserved. Made with ❤️ for dogs everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
