import scriptureLogo from '../assets/scripture.png';

export interface Tool {
    id: string;
    title: string;
    description: string;
    icon: any; // Using the imported image object
    link: string;
    category: 'Gematria' | 'Divination' | 'Logic' | 'Other';
}

export const tools: Tool[] = [
    {
        id: 'scripture-code',
        title: 'Scripture Code',
        description: 'An explorer to study and search Bible Gematria.',
        icon: scriptureLogo,
        link: 'https://scripturecode.org/explorer',
        category: 'Gematria'
    }
];
