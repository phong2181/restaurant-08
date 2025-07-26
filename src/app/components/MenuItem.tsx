type Props = {
  section: any;
};

export default function MenuItems({ section }: Props) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-red-800 mb-2">{section.title}</h3>
        <p className="text-gray-600 text-lg italic">{section.subtitle}</p>
      </div>
      <div className="grid gap-8">
        {section.items.map((item: any, index: number) => (
          <div key={index} className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img src={item.image} alt={item.name} className="w-full h-48 md:h-full object-cover" />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-2xl font-bold text-gray-800">{item.name}</h4>
                  <span className="text-2xl font-bold text-red-800">{item.price}</span>
                </div>
                <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>
                <div className="border-t border-amber-200 pt-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Ingredients:</span> {item.ingredients}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
