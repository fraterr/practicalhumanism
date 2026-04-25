export interface Tool {
    id: string;
    title: string;
    description: string;
    icon: string; // URL to the image/icon
    link: string;
    category: 'Gematria' | 'Divination' | 'Logic' | 'Other';
}

export const tools: Tool[] = [
    {
        id: 'digital-pendulum',
        title: 'Digital Pendulum',
        description: 'A precise algorithm for chaotic oscillation and rhythmic contemplation.',
        icon: '/assets/separator.png', // Using the existing skull as a placeholder icon
        link: '#',
        category: 'Logic'
    },
    {
        id: 'gematria-engine',
        title: 'Gematria Engine',
        description: 'An advanced calculator for numeric linguistic analysis and esoteric research.',
        icon: '/assets/separator.png',
        link: '#',
        category: 'Gematria'
    }
];
