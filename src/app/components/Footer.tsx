'use client';

import { ChefHat } from 'lucide-react';

export default function About() {
  return (
    <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <ChefHat className="h-6 w-6 text-amber-300" />
            <span className="text-2xl font-bold italic">La Bella Vita</span>
          </div>
          <p className="text-gray-400">
            © 2025 La Bella Vita. Bringing authentic Italian flavors to Florence since 1985.
          </p>
        </div>
      </footer>
  );
}
