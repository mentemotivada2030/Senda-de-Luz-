
import React from 'react';

export const SparkleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M12 3v18"></path>
    <path d="M3 12h18"></path>
    <path d="M16.2 7.8l-8.4 8.4"></path>
    <path d="M16.2 16.2l-8.4 -8.4"></path>
  </svg>
);
