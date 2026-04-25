import scriptureLogo from '../assets/scripture.png';
import theledateLogo from '../assets/theledate.jpg';
import liber777Logo from '../assets/liber777.svg';

export interface Tool {
    id: string;
    title: string;
    description: string;
    icon: any; // Using the imported image object
    link: string;
    categories: ('Gematria' | 'Divination' | 'Logic' | 'Thelema' | 'Other')[];
}

export const tools: Tool[] = [
    {
        id: 'scripture-code',
        title: 'Scripture Code',
        description: 'An explorer to study and search Bible Gematria.',
        icon: scriptureLogo,
        link: 'https://scripturecode.org/explorer',
        categories: ['Gematria']
    },
    {
        id: 'theledate',
        title: 'Theledate',
        description: 'A precision computational calculator for Thelemic date and time.',
        icon: theledateLogo,
        link: 'https://fraterr.github.io/thelemicdate',
        categories: ['Thelema']
    },
    {
        id: 'liber-777',
        title: 'Liber 777 Explorer',
        description: 'Utility that digitizes the complex data sets of Liber 777, facilitating the study of the Qabalah and universal correspondences.',
        icon: liber777Logo,
        link: 'https://fraterr.github.io/Liber-777-Explorer/',
        categories: ['Thelema', 'Gematria']
    }
];
