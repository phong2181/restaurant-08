import { Dispatch, SetStateAction } from 'react';

type MenuSectionKey = 'antipasti' | 'primi' | 'secondi' | 'dolci';

type Props = {
  sections: Record<MenuSectionKey, any>;
  activeSection: MenuSectionKey;
  setActiveSection: Dispatch<SetStateAction<MenuSectionKey>>;
};

export default function MenuNavigation({ sections, activeSection, setActiveSection }: Props) {
  return (
    <div className="flex flex-wrap justify-center space-x-4 mb-12">
      {Object.keys(sections).map((section) => {
        const key = section as MenuSectionKey; // ✅ ép kiểu
        return (
            <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`px-6 py-3 rounded-full font-semibold transition duration-300 mb-2 ${
                activeSection === key
                ? 'bg-red-800 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-800'
            }`}
            >
            {sections[key].title}
            </button>
        );
    })}

    </div>
  );
}
