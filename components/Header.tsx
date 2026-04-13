import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 md:mb-10 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
        Senda de Luz Creator
      </h1>
      <p className="mt-2 text-lg text-indigo-200">Frases + Arte Social para LinkedIn, Instagram, Facebook e WhatsApp</p>
    </header>
  );
};
