import React from 'react';
import { SparkleIcon } from './icons/SparkleIcon';
import type { SocialFormat } from '../types';

interface ContentDisplayProps {
  categoryTitle: string;
  content: string;
  isLoading: boolean;
  error: string | null;
  onGenerateNew: () => void;
  onDownload: (format: SocialFormat) => void;
  formats: SocialFormat[];
}

const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center space-y-4 text-indigo-300">
    <svg className="animate-spin h-10 w-10 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <p className="text-lg">Gerando frase em estilo realista dark...</p>
  </div>
);

export const ContentDisplay: React.FC<ContentDisplayProps> = ({
  categoryTitle,
  content,
  isLoading,
  error,
  onGenerateNew,
  onDownload,
  formats,
}) => {
  return (
    <div className="w-full max-w-4xl mt-12 animate-fade-in-up">
      <div className="bg-slate-950/60 backdrop-blur-lg border border-indigo-700 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50">
        <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
          {categoryTitle}
        </h2>
        <div className="min-h-[180px] flex items-center justify-center text-indigo-200 leading-relaxed text-center">
          {isLoading && <LoadingSpinner />}
          {error && <p className="text-red-400 text-center">{error}</p>}
          {!isLoading && !error && (
            <p className="font-serif text-2xl md:text-3xl italic leading-relaxed max-w-3xl">“{content}”</p>
          )}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={onGenerateNew}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed transition-all duration-300"
          >
            <SparkleIcon className="h-5 w-5" />
            {isLoading ? 'Gerando...' : 'Gerar Nova Frase'}
          </button>

          {!isLoading && !error && content &&
            formats.map((format) => (
              <button
                key={format.id}
                onClick={() => onDownload(format)}
                className="px-4 py-2 text-sm font-semibold rounded-full bg-indigo-700 hover:bg-indigo-600 transition-colors"
              >
                Baixar {format.label}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
