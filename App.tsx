import React, { useState, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { CategorySelector } from './components/CategorySelector';
import { ContentDisplay } from './components/ContentDisplay';
import { generateSpiritualContent } from './services/geminiService';
import { socialFormats, spiritualCategories } from './constants';
import type { SocialFormat, SpiritualCategory } from './types';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SpiritualCategory | null>(null);
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [logoDataUrl, setLogoDataUrl] = useState<string>('');

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
      setError('Não foi possível gerar a frase. Tente novamente em instantes.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLogoUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setLogoDataUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }, []);

  const drawWrappedText = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number): number => {
    const words = text.split(' ');
    let line = '';
    let cursorY = y;

    words.forEach((word) => {
      const testLine = `${line}${word} `;
      if (ctx.measureText(testLine).width > maxWidth && line) {
        ctx.fillText(line.trim(), x, cursorY);
        line = `${word} `;
        cursorY += lineHeight;
      } else {
        line = testLine;
      }
    });

    if (line) {
      ctx.fillText(line.trim(), x, cursorY);
      cursorY += lineHeight;
    }

    return cursorY;
  };

  const handleDownloadImage = useCallback(
    (format: SocialFormat) => {
      if (!generatedContent || !selectedCategory) return;

      const canvas = document.createElement('canvas');
      canvas.width = format.width;
      canvas.height = format.height;
      const ctx = canvas.getContext('2d');

      if (!ctx) return;

      const gradient = ctx.createLinearGradient(0, 0, format.width, format.height);
      gradient.addColorStop(0, '#030712');
      gradient.addColorStop(0.5, '#111827');
      gradient.addColorStop(1, '#1e1b4b');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, format.width, format.height);

      ctx.strokeStyle = 'rgba(167, 139, 250, 0.35)';
      ctx.lineWidth = 4;
      ctx.strokeRect(24, 24, format.width - 48, format.height - 48);

      ctx.textAlign = 'center';
      ctx.fillStyle = '#a5b4fc';
      ctx.font = `700 ${Math.max(24, Math.floor(format.width * 0.03))}px serif`;
      ctx.fillText(selectedCategory.title.toUpperCase(), format.width / 2, Math.floor(format.height * 0.14));

      ctx.fillStyle = '#ffffff';
      ctx.font = `italic ${Math.max(34, Math.floor(format.width * 0.046))}px Georgia`;
      const maxQuoteWidth = format.width * 0.8;
      drawWrappedText(ctx, `“${generatedContent}”`, format.width / 2, Math.floor(format.height * 0.34), maxQuoteWidth, Math.max(46, Math.floor(format.height * 0.06)));

      if (logoDataUrl) {
        const logo = new Image();
        logo.onload = () => {
          const logoWidth = Math.min(Math.floor(format.width * 0.23), 270);
          const ratio = logo.naturalHeight / logo.naturalWidth;
          const logoHeight = logoWidth * ratio;
          ctx.drawImage(logo, format.width / 2 - logoWidth / 2, format.height - logoHeight - 55, logoWidth, logoHeight);

          ctx.fillStyle = '#c4b5fd';
          ctx.font = `500 ${Math.max(16, Math.floor(format.width * 0.016))}px Arial`;
          ctx.fillText('Senda de Luz · Realista Dark', format.width / 2, format.height - 22);

          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = `${selectedCategory.id}-${format.id}.png`;
          link.click();
        };
        logo.src = logoDataUrl;
      } else {
        ctx.fillStyle = '#c4b5fd';
        ctx.font = `500 ${Math.max(16, Math.floor(format.width * 0.016))}px Arial`;
        ctx.fillText('Carregue seu logo para fixar no rodapé', format.width / 2, format.height - 24);

        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `${selectedCategory.id}-${format.id}.png`;
        link.click();
      }
    },
    [generatedContent, logoDataUrl, selectedCategory],
  );

  const categoryList = useMemo(() => Object.values(spiritualCategories), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-indigo-950 text-white font-sans">
      <main className="container mx-auto px-4 py-8 md:py-12 flex flex-col items-center pb-24">
        <Header />

        <p className="text-center text-lg text-indigo-300 mt-4 mb-5 max-w-3xl animate-fade-in">
          Gere frases em estilo <strong>realista dark</strong> para Motivacional, Espiritual, Liderança, Deus, Provérbios, Salmos,
          Exu/Umbanda e Fraternidade Branca.
        </p>

        <label className="mb-8 text-sm bg-black/40 border border-indigo-700 rounded-xl px-4 py-3 hover:border-purple-400 transition-colors cursor-pointer">
          Upload do seu logo (PNG/JPG) para fixar no rodapé das imagens
          <input type="file" accept="image/png, image/jpeg, image/webp" className="hidden" onChange={handleLogoUpload} />
        </label>

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
            onDownload={handleDownloadImage}
            formats={socialFormats}
          />
        )}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 border-t border-indigo-900 bg-black/80 backdrop-blur-sm py-3 text-center text-xs text-indigo-300 z-20">
        {logoDataUrl ? (
          <img src={logoDataUrl} alt="Logo carregado" className="h-9 mx-auto object-contain mb-1" />
        ) : (
          <p>Seu logo aparecerá fixo aqui no rodapé.</p>
        )}
      </footer>
    </div>
  );
};

export default App;
