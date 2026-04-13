import type { SocialFormat, SpiritualCategory, SpiritualCategoryKey } from './types';
import { MessageIcon } from './components/icons/MessageIcon';
import { MeditationIcon } from './components/icons/MeditationIcon';
import { TeaIcon } from './components/icons/TeaIcon';
import { LightworkIcon } from './components/icons/LightworkIcon';

export const spiritualCategories: Record<SpiritualCategoryKey, SpiritualCategory> = {
  motivacionais: {
    id: 'motivacionais',
    title: 'Frases Motivacionais',
    description: 'Energia para foco, atitude e superação diária.',
    prompt: 'Crie 1 frase motivacional curta, poderosa e original em português do Brasil. Máximo 22 palavras.',
    icon: MessageIcon,
  },
  espirituais: {
    id: 'espirituais',
    title: 'Espirituais',
    description: 'Reflexões de paz, elevação e luz interior.',
    prompt: 'Crie 1 frase espiritual curta, acolhedora e profunda em português do Brasil. Máximo 22 palavras.',
    icon: MeditationIcon,
  },
  lideranca: {
    id: 'lideranca',
    title: 'Liderança',
    description: 'Visão, exemplo e coragem para liderar com propósito.',
    prompt: 'Crie 1 frase de liderança curta, inspiradora e prática em português do Brasil. Máximo 22 palavras.',
    icon: LightworkIcon,
  },
  deus: {
    id: 'deus',
    title: 'Deus',
    description: 'Mensagens de fé e confiança no caminho divino.',
    prompt: 'Crie 1 frase sobre Deus com tom respeitoso e esperançoso em português do Brasil. Máximo 22 palavras.',
    icon: TeaIcon,
  },
  proverbios: {
    id: 'proverbios',
    title: 'Provérbios',
    description: 'Sabedoria prática em linguagem simples e forte.',
    prompt: 'Crie 1 frase no estilo de provérbio (original, sem citar versículos) em português do Brasil. Máximo 20 palavras.',
    icon: MessageIcon,
  },
  salmos: {
    id: 'salmos',
    title: 'Salmos',
    description: 'Tom poético de conforto, adoração e esperança.',
    prompt: 'Crie 1 frase poética no estilo de salmo (original, sem copiar textos bíblicos) em português do Brasil. Máximo 22 palavras.',
    icon: MeditationIcon,
  },
  exu_umbanda: {
    id: 'exu_umbanda',
    title: 'Exu e Umbanda',
    description: 'Respeito, proteção e caminhos abertos.',
    prompt: 'Crie 1 frase sobre Exu e Umbanda com respeito, dignidade e proteção espiritual, sem estereótipos. Português do Brasil. Máximo 22 palavras.',
    icon: LightworkIcon,
  },
  fraternidade_branca: {
    id: 'fraternidade_branca',
    title: 'Fraternidade Branca',
    description: 'Consciência elevada, serviço e amor universal.',
    prompt: 'Crie 1 frase sobre Fraternidade Branca com tom de elevação, amor universal e serviço. Português do Brasil. Máximo 22 palavras.',
    icon: TeaIcon,
  },
};

export const socialFormats: SocialFormat[] = [
  { id: 'linkedin', label: 'LinkedIn (1200x627)', width: 1200, height: 627 },
  { id: 'instagram', label: 'Instagram (1080x1350)', width: 1080, height: 1350 },
  { id: 'facebook', label: 'Facebook (1200x630)', width: 1200, height: 630 },
  { id: 'whatsapp', label: 'Status WhatsApp (1080x1920)', width: 1080, height: 1920 },
];
