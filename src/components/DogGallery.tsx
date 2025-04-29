
import React from 'react';

type DogBreed = {
  name: string;
  description: string;
  imageUrl: string;
};

const dogBreeds: DogBreed[] = [
  {
    name: 'Golden Retriever',
    description: 'Friendly, reliable, and trustworthy companions with a heart of gold.',
    imageUrl: 'https://images.unsplash.com/photo-1591769225440-811ad6d608ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Border Collie',
    description: 'Highly intelligent and energetic dogs with an incredible work ethic.',
    imageUrl: 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Corgi',
    description: 'Short-legged but big-hearted dogs with a playful personality.',
    imageUrl: 'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Labrador',
    description: 'Outgoing, even-tempered, and gentle companions for all ages.',
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Husky',
    description: 'Athletic, intelligent, and independent dogs with striking features.',
    imageUrl: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Beagle',
    description: 'Curious, clever, and sociable dogs with an exceptional sense of smell.',
    imageUrl: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

const DogGallery: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dog-brown mb-4">Beloved Dog Breeds</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore some of the most cherished dog breeds that fill our hearts with joy and our homes with love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogBreeds.map((breed, index) => (
            <div 
              key={index} 
              className="bg-dog-beige/30 rounded-xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={breed.imageUrl} 
                  alt={breed.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-dog-brown mb-2">{breed.name}</h3>
              <p className="text-gray-600">{breed.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DogGallery;
