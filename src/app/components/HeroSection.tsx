import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-b from-red-800 to-red-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 italic">
          Benvenuti alla Bella Vita
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-amber-100">
          Authentic Italian cuisine in the heart of Florence
        </p>
        <div className="flex items-center justify-center space-x-2 mb-8">
          {[1,2,3,4,5].map((star) => (
            <Star key={star} className="h-6 w-6 text-amber-300 fill-current" />
          ))}
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed">
            Experience the warmth of traditional Italian hospitality with rustic charm,
            hand-made pasta, and recipes passed down through generations.
          </p>
        </div>
      </div>
    </section>
  );
}
