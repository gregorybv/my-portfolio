import img1 from './assets/image/1.avif';
import img2 from './assets/image/2.avif';
import img3 from './assets/image/3.avif';
import img4 from './assets/image/4.avif';
import img5 from './assets/image/5.avif';
import img6 from './assets/image/6.avif';
import img7 from './assets/image/7.avif';
import img8 from './assets/image/8.avif';
import img9 from './assets/image/9.avif';

import {
    AiOutlineAppstore,
    AiOutlineArrowUp,
    AiOutlineHome,
    AiOutlineMail,
    AiOutlineProject,
    AiOutlineRead,
    AiOutlineTool,
    AiOutlineUser,
} from 'react-icons/ai';
import type { IconType } from 'react-icons';

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

export interface Project {
    id: ProjectTranslationKey;
    img: string;
    titleKey: ProjectTranslationKey;
    stack: string;
    href: string;
    featured: boolean;
}

export type WorkId = 'umbrella' | 'professionalPartner';

interface Work {
    id: WorkId;
    title: string;
}

interface Navbar {
    id: NavigationTranslationKey | 'backToTop';
    href: string;
    Icon: IconType;
    labelKey: NavigationTranslationKey | 'backToTop';
    mobile: boolean;
}

type NavigationTranslationKey =
    | 'home'
    | 'about'
    | 'work'
    | 'caseStudies'
    | 'expertise'
    | 'projects'
    | 'contact';

export const siteConfig = {
    canonicalUrl: 'https://gregorybv.github.io/my-portfolio/',
    socialLinks: {
        telegram: 'https://t.me/MrGregorybv',
        github: 'https://github.com/gregorybv',
        linkedin: 'https://www.linkedin.com/in/gregory-berezin-58444a23a/',
    },
} as const;

// project data
export const project: Project[] = [
    {
        id: 'sports',
        img: img1,
        titleKey: 'sports',
        stack: 'react css',
        href: 'https://gregorybv.github.io/gym-website-react/',
        featured: true,
    },
    {
        id: 'tour',
        img: img2,
        titleKey: 'tour',
        stack: 'react hooks css aos',
        href: 'https://gregorybv.github.io/tour-app-react/',
        featured: true,
    },
    {
        id: 'weekaway',
        img: img3,
        titleKey: 'weekaway',
        stack: 'react tailwindcss',
        href: 'https://gregorybv.github.io/weekaway-website/',
        featured: true,
    },
    {
        id: 'music',
        img: img4,
        titleKey: 'music',
        stack: 'react rrd tailwindcss',
        href: 'https://gregorybv.github.io/music-app/',
        featured: false,
    },
    {
        id: 'data',
        img: img5,
        titleKey: 'data',
        stack: 'react tailwindcss',
        href: 'https://gregorybv.github.io/grow-with-data/',
        featured: false,
    },
    {
        id: 'drive',
        img: img6,
        titleKey: 'drive',
        stack: 'react css hooks',
        href: 'https://gregorybv.github.io/drive-website/',
        featured: false,
    },
    {
        id: 'travel',
        img: img7,
        titleKey: 'travel',
        stack: 'react tailwind hooks',
        href: 'https://gregorybv.github.io/travel-app/',
        featured: false,
    },
    {
        id: 'trading',
        img: img8,
        titleKey: 'trading',
        stack: 'react tailwind hooks',
        href: 'https://gregorybv.github.io/trading-protocol/',
        featured: false,
    },
    {
        id: 'kraftex',
        img: img9,
        titleKey: 'kraftex',
        stack: 'react css hooks',
        href: 'https://gregorybv.github.io/kraftex-app/',
        featured: false,
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
        id: 'home',
        href: '#main',
        Icon: AiOutlineHome,
        labelKey: 'home',
        mobile: true,
    },
    {
        id: 'about',
        href: '#about',
        Icon: AiOutlineUser,
        labelKey: 'about',
        mobile: true,
    },
    {
        id: 'work',
        href: '#work',
        Icon: AiOutlineAppstore,
        labelKey: 'work',
        mobile: true,
    },
    {
        id: 'caseStudies',
        href: '#case-studies',
        Icon: AiOutlineRead,
        labelKey: 'caseStudies',
        mobile: true,
    },
    {
        id: 'expertise',
        href: '#expertise',
        Icon: AiOutlineTool,
        labelKey: 'expertise',
        mobile: true,
    },
    {
        id: 'projects',
        href: '#projects',
        Icon: AiOutlineProject,
        labelKey: 'projects',
        mobile: true,
    },
    {
        id: 'contact',
        href: '#contact',
        Icon: AiOutlineMail,
        labelKey: 'contact',
        mobile: true,
    },
    {
        id: 'backToTop',
        href: '#main',
        Icon: AiOutlineArrowUp,
        labelKey: 'backToTop',
        mobile: false,
    },
];
