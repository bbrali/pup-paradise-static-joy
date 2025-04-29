
import React from 'react';
import { Dog } from 'lucide-react';

type Fact = {
  title: string;
  description: string;
};

const dogFacts: Fact[] = [
  {
    title: "Dog's Sense of Smell",
    description: "Dogs have up to 300 million olfactory receptors in their noses, compared to about 6 million in humans. This gives them a sense of smell that's up to 100,000 times better than ours!"
  },
  {
    title: "Unique Nose Prints",
    description: "Just like human fingerprints, a dog's nose print is unique. The pattern of ridges and creases on a dog's nose can be used for identification purposes."
  },
  {
    title: "Incredible Hearing",
    description: "Dogs can hear sounds at frequencies higher than humans can detect, and can locate the source of a sound in 1/600th of a second."
  },
  {
    title: "Tail Communication",
    description: "A dog's tail serves as an important communication tool. The position and movement reveal their emotional state from happy and excited to fearful or aggressive."
  }
];

const FactsSection: React.FC = () => {
  return (
    <section className="py-20 bg-dog-sky/10" id="facts">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1602557765306-a0bbf73f80d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Curious dog" 
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-dog-brown rounded-full flex items-center justify-center">
                <Dog className="h-10 w-10 text-white animate-wag" />
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-dog-brown mb-6">
              Fascinating Dog Facts
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our canine companions are more amazing than we often realize. Here are some incredible facts about dogs that demonstrate just how special they are.
            </p>
            
            <div className="space-y-6">
              {dogFacts.map((fact, index) => (
                <div key={index} className="bg-white p-5 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-dog-brown mb-2">{fact.title}</h3>
                  <p className="text-gray-600">{fact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
