
import React, { useState, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { CategorySelector } from './components/CategorySelector';
import { ContentDisplay } from './components/ContentDisplay';
import { generateSpiritualContent } from './services/geminiService';
// Fix: The 'SpiritualCategory' type is defined in './types', not './constants'.
import { spiritualCategories } from './constants';
import type { SpiritualCategory, SpiritualCategoryKey } from './types';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SpiritualCategory | null>(null);
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateContent = useCallback(async (category: SpiritualCategory) => {
    setIsLoading(true);
    setError(null);
    setGeneratedContent('');
    setSelectedCategory(category);

    try {
      const content = await generateSpiritualContent(category.prompt);
      setGeneratedContent(content);
    } catch (e) {
      console.error(e);
      setError('Não foi possível gerar o conteúdo. Por favor, tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const categoryList = useMemo(() => Object.values(spiritualCategories), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800 text-white font-sans">
      <main className="container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        <Header />
        
        {!selectedCategory && (
           <p className="text-center text-lg text-indigo-300 mt-4 mb-8 max-w-2xl animate-fade-in">
            Explore sua espiritualidade em um ambiente seguro e aberto. Escolha uma prática abaixo para começar sua jornada de hoje.
          </p>
        )}

        <CategorySelector 
          categories={categoryList}
          onSelectCategory={handleGenerateContent}
          selectedCategoryId={selectedCategory?.id}
          isLoading={isLoading}
        />

        {selectedCategory && (
          <ContentDisplay
            categoryTitle={selectedCategory.title}
            content={generatedContent}
            isLoading={isLoading}
            error={error}
            onGenerateNew={() => handleGenerateContent(selectedCategory)}
          />
        )}
      </main>
      <footer className="text-center p-4 text-xs text-indigo-400">
        <p>Criado com amor para a sua jornada espiritual.</p>
      </footer>
    </div>
  );
};

export default App;