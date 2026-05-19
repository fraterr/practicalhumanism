import scriptureLogo from '../assets/scripture.png';
import theledateLogo from '../assets/theledate.jpg';
import liber777Logo from '../assets/liber777.svg';
import cosLogo from '../assets/cos.svg';
import yikingLogo from '../assets/yiking.png';
import notetakerLogo from '../assets/notetaker.jpg';

export interface Tool {
    id: string;
    title: string;
    description: string;
    icon: any; // Using the imported image object
    link: string;
    categories: ('Gematria' | 'Divination' | 'Logic' | 'Thelema' | 'B.O.T.A.' | 'Qabalah' | 'Productivity' | 'Other')[];
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
    },
    {
        id: 'cube-of-space',
        title: 'Cube of Space 3D Explorer',
        description: 'Cube of Space Explorer, according to the teachings of Paul Foster Case.',
        icon: cosLogo,
        link: 'https://fraterr.github.io/Cube-of-Space/',
        categories: ['B.O.T.A.', 'Qabalah']
    },
    {
        id: 'yi-king-oracle',
        title: 'Yi-King Oracle',
        description: "Digital oracle, based on Aleister Crowley's Liber 216, that provides mathematically precise hexagram generation.",
        icon: yikingLogo,
        link: 'https://fraterr.github.io/yikingoracle',
        categories: ['Divination']
    },
    {
        id: 'youtube-note-taker',
        title: 'YouTube Note Taker PRO',
        description: 'Firefox extension to integrate a distraction-free notepad directly into the YouTube player. It auto-pauses when you type, saves clickable timestamps, captures screenshots, and effortlessly exports your insights to PDF or Markdown.',
        icon: notetakerLogo,
        link: 'https://addons.mozilla.org/it/firefox/addon/youtube-note-taker-pro',
        categories: ['Productivity']
    },
    {
        id: 'tree-of-life',
        title: 'Cabalistic Tree of Life',
        description: 'Interactive visualization of the Cabalistic Tree of Life, featuring the 10 Sephiroth and 22 Paths with their corresponding Hebrew letters.',
        icon: liber777Logo,
        link: '/tree-of-life',
        categories: ['Qabalah']
    },
    {
        id: 'bota-tree-of-life',
        title: 'B.O.T.A. Tree of Life',
        description: 'Interactive study guide and contemplation tool dedicated to the Builders of the Adytum (B.O.T.A.) system of Hermetic Qabalah. It maps the 10 Sephiroth (Emanations) and the 22 Paths of Wisdom, which correspond to the 22 letters of the Hebrew alphabet and the 22 Keys of the Tarot Major Arcana.',
        icon: cosLogo,
        link: 'https://fraterr.github.io/B.O.T.A.-Tree-of-Life',
        categories: ['B.O.T.A.', 'Qabalah']
    }
];
