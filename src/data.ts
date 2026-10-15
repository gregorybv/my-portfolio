import img1 from './assets/image/1.png';
import img2 from './assets/image/2.png';
import img3 from './assets/image/3.png';
import img4 from './assets/image/4.png';
import img5 from './assets/image/5.png';
import img6 from './assets/image/6.png';
import img7 from './assets/image/7.png';
import img8 from './assets/image/8.png';
import img9 from './assets/image/9.png';

import {
    AiOutlineHome,
    AiOutlineMail,
    AiOutlineProject,
    AiOutlineAppstore,
    AiOutlineArrowUp,
} from 'react-icons/all';

type ProjectTranslationKey =
    | 'sports'
    | 'tour'
    | 'weekaway'
    | 'music'
    | 'data'
    | 'drive'
    | 'travel'
    | 'trading'
    | 'kraftex';

type NavigationTranslationKey = 'home' | 'work' | 'projects' | 'contact';

interface Project {
    img: string;
    titleKey: ProjectTranslationKey;
    stack: string;
    href: string;
}

interface Work {
    id: 'umbrella' | 'professionalPartner';
    title: string;
}

interface Navbar {
    href: string;
    Icon: any;
    labelKey: NavigationTranslationKey | 'backToTop';
}

interface Navbarmin {
    href: string;
    Iconmin: any;
    labelKey: NavigationTranslationKey;
}

// project data
export const project: Project[] = [
    {
        img: img1,
        titleKey: 'sports',
        stack: 'react css',
        href: 'https://gregorybv.github.io/gym-website-react/',
    },
    {
        img: img2,
        titleKey: 'tour',
        stack: 'react hooks css aos',
        href: 'https://gregorybv.github.io/tour-app-react/',
    },
    {
        img: img3,
        titleKey: 'weekaway',
        stack: 'react tailwindcss',
        href: 'https://gregorybv.github.io/weekaway-website/',
    },
    {
        img: img4,
        titleKey: 'music',
        stack: 'react rrd tailwindcss',
        href: 'https://gregorybv.github.io/music-app/',
    },
    {
        img: img5,
        titleKey: 'data',
        stack: 'react tailwindcss',
        href: 'https://gregorybv.github.io/grow-with-data/',
    },
    {
        img: img6,
        titleKey: 'drive',
        stack: 'react css hooks',
        href: 'https://gregorybv.github.io/drive-website/',
    },
    {
        img: img7,
        titleKey: 'travel',
        stack: 'react tailwind hooks',
        href: 'https://gregorybv.github.io/travel-app/',
    },
    {
        img: img8,
        titleKey: 'trading',
        stack: 'react tailwind hooks',
        href: 'https://gregorybv.github.io/trading-protocol/',
    },
    {
        img: img9,
        titleKey: 'kraftex',
        stack: 'react css hooks',
        href: 'https://gregorybv.github.io/kraftex-app/',
    },
];

// work data
export const work: Work[] = [
    {
        id: 'umbrella',
        title: 'Umbrella IT',
    },
    {
        id: 'professionalPartner',
        title: 'Professional Partner',
    },
];

// navbar data
export const navbar: Navbar[] = [
    {
        href: '#main',
        Icon: AiOutlineHome,
        labelKey: 'home',
    },
    {
        href: '#work',
        Icon: AiOutlineAppstore,
        labelKey: 'work',
    },
    {
        href: '#projects',
        Icon: AiOutlineProject,
        labelKey: 'projects',
    },
    {
        href: '#contact',
        Icon: AiOutlineMail,
        labelKey: 'contact',
    },
    {
        href: '#main',
        Icon: AiOutlineArrowUp,
        labelKey: 'backToTop',
    },
];

// navbarmin data
export const navbarmin: Navbarmin[] = [
    {
        href: '#main',
        Iconmin: AiOutlineHome,
        labelKey: 'home',
    },
    {
        href: '#work',
        Iconmin: AiOutlineAppstore,
        labelKey: 'work',
    },
    {
        href: '#projects',
        Iconmin: AiOutlineProject,
        labelKey: 'projects',
    },
    {
        href: '#contact',
        Iconmin: AiOutlineMail,
        labelKey: 'contact',
    },
];
