'use client';

import { useState } from 'react';
import MenuNavigation from './MenuNavigation';
import MenuItems from './MenuItem';
import DrinksSection from './DrinksSection';

// 1️⃣ Định nghĩa kiểu key cho các section
type MenuSectionKey = 'antipasti' | 'primi' | 'secondi' | 'dolci';

// 2️⃣ Định nghĩa kiểu dữ liệu cho items
export interface MenuItem {
  name: string;
  price: string;
  description: string;
  ingredients: string;
  image: string;
}

export interface MenuSection {
  title: string;
  subtitle: string;
  items: MenuItem[];
}

// 3️⃣ Khai báo menuSections có kiểu an toàn
const menuSections: Record<MenuSectionKey, MenuSection> = {
  antipasti: {
    title: 'Antipasti',
    subtitle: 'Starters',
    items: [
      {
        name: 'Bruschetta al Pomodoro',
        price: '€6',
        description: 'Toasted rustic bread topped with fresh tomatoes, garlic, basil, and extra virgin olive oil.',
        ingredients: 'Tuscan bread, cherry tomatoes, garlic, fresh basil, olive oil',
        image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Tagliere di Salumi e Formaggi',
        price: '€14',
        description: 'Selection of cured meats (Prosciutto, Salami) and local cheeses (Pecorino, Parmigiano).',
        ingredients: 'Prosciutto di Parma, Salame Toscano, Pecorino, Parmigiano Reggiano, honey, walnuts',
        image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  primi: {
    title: 'Primi Piatti',
    subtitle: 'First Courses',
    items: [
      {
        name: 'Spaghetti alla Carbonara',
        price: '€12',
        description: 'Classic Roman pasta with egg yolk, Pecorino Romano, guanciale, and black pepper.',
        ingredients: 'Spaghetti, guanciale (cured pork cheek), eggs, Pecorino Romano, black pepper',
        image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Risotto ai Funghi Porcini',
        price: '€16',
        description: 'Creamy risotto with wild porcini mushrooms and Parmigiano.',
        ingredients: 'Arborio rice, porcini mushrooms, onion, vegetable broth, butter, Parmigiano Reggiano',
        image: 'https://images.pexels.com/photos/8477552/pexels-photo-8477552.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  secondi: {
    title: 'Secondi Piatti',
    subtitle: 'Main Courses',
    items: [
      {
        name: 'Bistecca alla Fiorentina',
        price: '€40/kg',
        description: 'Traditional Florentine T-bone steak, grilled rare and served with rosemary potatoes.',
        ingredients: 'Chianina beef, rosemary, olive oil, sea salt, potatoes',
        image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Saltimbocca alla Romana',
        price: '€18',
        description: 'Veal escalopes wrapped in prosciutto and sage, cooked in white wine and butter.',
        ingredients: 'Veal, Prosciutto di Parma, fresh sage, white wine, butter',
        image: 'https://images.pexels.com/photos/8477551/pexels-photo-8477551.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },
  dolci: {
    title: 'Dolci',
    subtitle: 'Desserts',
    items: [
      {
        name: 'Tiramisu',
        price: '€7',
        description: 'Layers of espresso-soaked ladyfingers, mascarpone cream, cocoa powder.',
        ingredients: 'Ladyfingers, espresso, mascarpone, eggs, sugar, cocoa powder',
        image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        name: 'Panna Cotta ai Frutti di Bosco',
        price: '€6',
        description: 'Creamy panna cotta with mixed berry sauce.',
        ingredients: 'Fresh cream, sugar, gelatin, vanilla bean, mixed berries',
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  }
};

const drinks = [
  { name: 'House Wine (Red/White)', price: '€4/glass' },
  { name: 'Espresso', price: '€2' },
  { name: 'Limoncello', price: '€3/shot' }
];

export default function MenuSection() {
  // 4️⃣ Khai báo state với kiểu key cụ thể
  const [activeSection, setActiveSection] = useState<MenuSectionKey>('antipasti');

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600">Crafted with love using authentic Italian ingredients</p>
        </div>

        <MenuNavigation
          sections={menuSections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <MenuItems
          section={menuSections[activeSection]}
        />

        <DrinksSection drinks={drinks} />
      </div>
    </section>
  );
}
