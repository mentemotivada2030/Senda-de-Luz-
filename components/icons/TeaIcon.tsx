
import React from 'react';

export const TeaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 11h16v-1a4 4 0 0 0 -4 -4h-8a4 4 0 0 0 -4 4v1"></path>
    <path d="M17.5 11l-1.5 6h-8l-1.5 -6"></path>
    <path d="M6 8v-1"></path>
    <path d="M12 8v-1"></path>
    <path d="M18 8v-1"></path>
  </svg>
);
