'use client';

import { Heart, Wine } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About La Bella Vita</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Our Story</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Located in the heart of Florence, La Bella Vita brings you the authentic taste of Italy 
                  with rustic charm and modern touches. Our warm terracotta walls, wooden beams, and 
                  marble countertops create the perfect atmosphere for an unforgettable dining experience.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Watch our chefs prepare fresh pasta by hand in our open kitchen, while you enjoy 
                  carefully selected wines from our vintage wine racks.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
                  <Heart className="h-6 w-6 mr-2 text-red-600" />
                  Special Ingredients
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Extra virgin olive oil from Tuscany</li>
                  <li>• Guanciale for authentic Carbonara</li>
                  <li>• Parmigiano Reggiano DOP</li>
                  <li>• Wild porcini mushrooms</li>
                  <li>• Chianina beef for Bistecca alla Fiorentina</li>
                  <li>• Fresh herbs: basil, rosemary, sage</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-800 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <Wine className="h-8 w-8 mr-3 text-amber-300" />
                Dining Experience
              </h3>
              <p className="text-lg leading-relaxed">
                Guests are welcomed with homemade bread and olive oil. The atmosphere is warm and lively, 
                with soft Italian music playing. Our terrace is ideal for sunset dinners with fairy lights 
                and stunning Tuscan countryside vibes. Wine shelves display local Chianti and Brunello di Montalcino bottles.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
