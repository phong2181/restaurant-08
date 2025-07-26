import type { Drink } from './MenuSection';

type Props = {
  drinks: Drink[];
};

export default function DrinksSection({ drinks }: Props) {
  return (
    <div className="max-w-2xl mx-auto mt-16">
      <h3 className="text-3xl font-bold text-red-800 mb-8 text-center">Beverages</h3>
      <div className="bg-amber-50 rounded-lg p-6 shadow-md">
        {drinks.map((drink, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-amber-200 last:border-b-0">
            <span className="text-lg font-medium text-gray-800">{drink.name}</span>
            <span className="text-lg font-bold text-red-800">{drink.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
