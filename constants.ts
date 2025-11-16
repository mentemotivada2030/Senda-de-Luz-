
import type { SpiritualCategory, SpiritualCategoryKey } from './types';
import { MessageIcon } from './components/icons/MessageIcon';
import { MeditationIcon } from './components/icons/MeditationIcon';
import { TeaIcon } from './components/icons/TeaIcon';
import { LightworkIcon } from './components/icons/LightworkIcon';

export const spiritualCategories: Record<SpiritualCategoryKey, SpiritualCategory> = {
  messages: {
    id: 'messages',
    title: 'Mensagens Inspiradoras',
    description: 'Receba orientação dos Mestres Ascensos.',
    prompt: `Aja como um guia espiritual empático e sábio, canalizando a energia dos Mestres Ascensos. Gere uma mensagem curta (3-4 parágrafos), inspiradora e profunda para alguém buscando crescimento pessoal e expansão de consciência. A mensagem deve focar em temas universais como amor incondicional, autoconhecimento, superação de desafios e a conexão com o Eu Superior. O tom deve ser acolhedor, sereno e sem dogmas religiosos, usando uma linguagem poética e elevada. Fale em português do Brasil. Comece a mensagem com um título impactante e temático em negrito.`,
    icon: MessageIcon,
  },
  meditations: {
    id: 'meditations',
    title: 'Meditações Guiadas',
    description: 'Encontre paz e clareza interior.',
    prompt: `Aja como um instrutor de meditação experiente. Crie um roteiro detalhado para uma meditação guiada de 5 a 7 minutos com um tema claro (ex: 'Ancoramento e Conexão com a Terra', 'Abrindo o Coração para o Amor', 'Limpando a Mente para a Clareza'). O roteiro deve ser estruturado em seções: Introdução (preparação e respiração), Visualização Principal (o coração da meditação) e Conclusão (retorno suave à consciência). Use uma linguagem calma, descritiva e sensorial. Fale em português do Brasil. Dê um título para a meditação em negrito no início.`,
    icon: MeditationIcon,
  },
  teas: {
    id: 'teas',
    title: 'Rituais com Chás',
    description: 'Descubra o poder curativo das ervas.',
    prompt: `Como um especialista em ervas e práticas holísticas, descreva um ritual simples e poderoso usando um chá. Escolha uma erva comum (ex: Camomila, Hortelã, Erva-doce, Lavanda) e explique suas propriedades energéticas. Detalhe o ritual passo a passo: a preparação consciente do chá, a definição de uma intenção clara (ex: calma, purificação, intuição) e como consumir a bebida de forma meditativa. O tom deve ser prático, mágico e acessível. Fale em português do Brasil. Coloque o nome do ritual em negrito no topo.`,
    icon: TeaIcon,
  },
  lightwork: {
    id: 'lightwork',
    title: 'Trabalho com a Luz',
    description: 'Práticas para limpeza e proteção energética.',
    prompt: `Aja como um guia de trabalho de luz (lightwork). Descreva uma técnica simples, porém eficaz, de limpeza e proteção energética para iniciantes. O foco deve ser a visualização de luz. Exemplos de temas: 'Criando um Escudo de Luz Dourada', 'A Cascata de Luz Branca para Purificação', 'Ancorando a Luz no Coração'. Explique o propósito da técnica e forneça um guia passo a passo claro e fácil de seguir. O tom deve ser empoderador, seguro e amoroso. Fale em português do Brasil. Dê um título em negrito para a prática.`,
    icon: LightworkIcon,
  },
};
