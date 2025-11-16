
import React from 'react';
import type { SpiritualCategory } from '../types';

interface CategorySelectorProps {
  categories: SpiritualCategory[];
  onSelectCategory: (category: SpiritualCategory) => void;
  selectedCategoryId?: string;
  isLoading: boolean;
}

const CategoryCard: React.FC<{ category: SpiritualCategory; onClick: () => void; isSelected: boolean; isDisabled: boolean; }> = ({ category, onClick, isSelected, isDisabled }) => {
  const Icon = category.icon;
  const baseClasses = "relative group flex flex-col items-center justify-center p-6 text-center rounded-2xl border-2 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden";
  const borderClasses = isSelected ? "border-purple-400" : "border-indigo-700 hover:border-purple-500";
  const bgClasses = "bg-indigo-900/40 backdrop-blur-sm";
  const disabledClasses = isDisabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <div className={`${baseClasses} ${borderClasses} ${bgClasses} ${disabledClasses}`} onClick={!isDisabled ? onClick : undefined}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <Icon className={`h-12 w-12 mb-4 transition-colors duration-300 ${isSelected ? 'text-purple-400' : 'text-indigo-300 group-hover:text-purple-400'}`} />
        <h3 className="font-bold text-lg text-white">{category.title}</h3>
        <p className="text-sm text-indigo-300 mt-1">{category.description}</p>
      </div>
    </div>
  );
};

export const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, onSelectCategory, selectedCategoryId, isLoading }) => {
  return (
    <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
      {categories.map((category) => (
        <CategoryCard 
          key={category.id}
          category={category}
          onClick={() => onSelectCategory(category)}
          isSelected={selectedCategoryId === category.id}
          isDisabled={isLoading}
        />
      ))}
    </div>
  );
};
