'use client';

import { Clock, MapPin, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Visit Us</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-700 rounded-lg p-6">
                <MapPin className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-300">
                  Via dei Tavolini, 12<br />
                  50122 Florence, Italy
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-6">
                <Clock className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <p className="text-gray-300">
                  Mon-Sun: 12:00 - 22:30<br />
                  Kitchen closes at 22:00
                </p>
              </div>
              
              <div className="bg-gray-700 rounded-lg p-6">
                <Phone className="h-12 w-12 text-amber-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p className="text-gray-300">
                  +39 055 123 4567<br />
                  info@labellavita.it
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl">
                Make a Reservation
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}
