
// Fix: Import ComponentType from 'react' to resolve 'React' namespace error.
import type { ComponentType } from 'react';

export type SpiritualCategoryKey = 'messages' | 'meditations' | 'teas' | 'lightwork';

export interface SpiritualCategory {
  id: SpiritualCategoryKey;
  title: string;
  description: string;
  prompt: string;
  icon: ComponentType<{ className?: string }>;
}