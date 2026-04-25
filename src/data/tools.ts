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
        id: 'scripture-code',
        title: 'Scripture Code',
        description: 'An explorer to study and search Bible Gematria.',
        icon: '/assets/scripture.png',
        link: 'https://scripturecode.org/explorer',
        category: 'Gematria'
    }
];
