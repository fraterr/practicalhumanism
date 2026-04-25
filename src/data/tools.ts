import scriptureLogo from '../assets/scripture.png';
import hexagramLogo from '../assets/thelemic_hexagram.png';

export interface Tool {
    id: string;
    title: string;
    description: string;
    icon: any; // Using the imported image object
    link: string;
    category: 'Gematria' | 'Divination' | 'Logic' | 'Thelema' | 'Other';
}

export const tools: Tool[] = [
    {
        id: 'scripture-code',
        title: 'Scripture Code',
        description: 'An explorer to study and search Bible Gematria.',
        icon: scriptureLogo,
        link: 'https://scripturecode.org/explorer',
        category: 'Gematria'
    },
    {
        id: 'theledate',
        title: 'Theledate',
        description: 'A precision computational calculator for Thelemic date and time.',
        icon: hexagramLogo,
        link: 'https://fraterr.github.io/thelemicdate',
        category: 'Thelema'
    }
];
