'use client';

import { ChefHat } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-red-900 to-red-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ChefHat className="h-8 w-8 text-amber-300" />
            <h1 className="text-3xl font-bold italic">La Bella Vita</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-amber-300">Home</a>
            <a href="#menu" className="hover:text-amber-300">Menu</a>
            <a href="#about" className="hover:text-amber-300">About</a>
            <a href="#contact" className="hover:text-amber-300">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
