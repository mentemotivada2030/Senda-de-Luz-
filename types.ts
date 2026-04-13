import type { ComponentType } from 'react';

export type SpiritualCategoryKey =
  | 'motivacionais'
  | 'espirituais'
  | 'lideranca'
  | 'deus'
  | 'proverbios'
  | 'salmos'
  | 'exu_umbanda'
  | 'fraternidade_branca';

export interface SpiritualCategory {
  id: SpiritualCategoryKey;
  title: string;
  description: string;
  prompt: string;
  icon: ComponentType<{ className?: string }>;
}

export interface SocialFormat {
  id: 'linkedin' | 'instagram' | 'facebook' | 'whatsapp';
  label: string;
  width: number;
  height: number;
}
