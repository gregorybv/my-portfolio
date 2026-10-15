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

interface Project {
    img: string;
    title: string;
    stack: string;
    href: string;
}

interface Work {
    year: string;
    title: string;
    duration: string;
    details: string;
}

interface Navbar {
    href: string;
    Icon: any;
}

interface Navbarmin {
    href: string;
    Iconmin: any;
    name: string;
}

// project data
export const project: Project[] = [
    {
        img: img1,
        title: 'Sports site',
        stack: 'react css',
        href: 'https://gregorybv.github.io/gym-website-react/',
    },
    {
        img: img2,
        title: 'Your tour',
        stack: 'react hooks css aos',
        href: 'https://gregorybv.github.io/tour-app-react/',
    },
    {
        img: img3,
        title: 'Weekaway site',
        stack: 'react tailwindcss',
        href: 'https://gregorybv.github.io/weekaway-website/',
    },
    {
        img: img4,
        title: 'Music app',
        stack: 'react rrd tailwindcss',
        href: 'https://gregorybv.github.io/music-app/',
    },
    {
        img: img5,
        title: 'Grow with data',
        stack: 'react tailwindcss',
        href: 'https://gregorybv.github.io/grow-with-data/',
    },
    {
        img: img6,
        title: 'Drive site',
        stack: 'react css hooks',
        href: 'https://gregorybv.github.io/drive-website/',
    },
    {
        img: img7,
        title: 'Your travel',
        stack: 'react tailwind hooks',
        href: 'https://gregorybv.github.io/travel-app/',
    },
    {
        img: img8,
        title: 'Trading Protocol',
        stack: 'react tailwind hooks',
        href: 'https://gregorybv.github.io/trading-protocol/',
    },
    {
        img: img9,
        title: 'Kraftex site',
        stack: 'react css hooks',
        href: 'https://gregorybv.github.io/kraftex-app/',
    },
];

// work data
export const work: Work[] = [
    {
        year: 'Oct 2023 - Present',
        title: 'Umbrella IT',
        duration: '3 Years 1 Month',
        details:
            'Senior Frontend Developer\n' +
            '• Developing and enhancing commercial web applications with React, TypeScript, and Next.js\n' +
            '• Designed and implemented an interactive task management module, improving usability and product engagement\n' +
            '• Optimized critical interface areas, significantly reducing page load times and improving user experience\n' +
            '• Integrated external services and APIs, including OAuth authentication and real-time data retrieval\n' +
            '• Contributed to frontend architecture and internal engineering standards\n' +
            '• Established code review practices and unified static analysis rules, improving code quality and maintainability\n' +
            '• Introduced Storybook for UI component development and documentation\n' +
            '• Mentored junior developers and participated in onboarding, technical planning, and task decomposition\n' +
            'Stack: React, TypeScript, Next.js, Redux Toolkit, TanStack Query, Effector, MobX, Axios, Storybook, SCSS, Tailwind CSS, Ant Design, Material UI, Vite, Webpack, GitLab, CI/CD',
    },
    {
        year: 'Sep 2019 - Oct 2023',
        title: 'Professional Partner',
        duration: '4 Years 2 Months',
        details:
            'Lead Frontend Developer\n' +
            '• Developed a corporate CRM platform, SPA, and administration panel with React and TypeScript\n' +
            '• Designed and implemented a bank guarantee calculator with configurable calculations, application forms, and data processing workflows\n' +
            '• Improved large dataset rendering through virtualization and React rendering optimizations\n' +
            '• Introduced Storybook and React Testing Library, improving UI component quality and stability\n' +
            '• Integrated external services, maps, and data visualization systems\n' +
            '• Migrated part of the project from JavaScript to TypeScript, improving reliability and maintainability\n' +
            '• Optimized administration interfaces and tables with complex filtering and large datasets\n' +
            '• Collaborated with analysts, designers, and backend developers on user flows and financial modules\n' +
            '• Participated in sprint planning, task estimation, and technical design discussions\n' +
            'Stack: React, TypeScript, Redux, TanStack Query, Axios, Next.js, Vite, Styled Components, CSS Modules, Tailwind CSS, Ant Design, GitLab, Agile (Scrum)',
    },
];

// navbar data
export const navbar: Navbar[] = [
    {
        href: '#main',
        Icon: AiOutlineHome,
    },
    {
        href: '#work',
        Icon: AiOutlineAppstore,
    },
    {
        href: '#projects',
        Icon: AiOutlineProject,
    },
    {
        href: '#contact',
        Icon: AiOutlineMail,
    },
    {
        href: '#main',
        Icon: AiOutlineArrowUp,
    },
];

// navbarmin data
export const navbarmin: Navbarmin[] = [
    {
        href: '#main',
        Iconmin: AiOutlineHome,
        name: 'Home',
    },
    {
        href: '#work',
        Iconmin: AiOutlineAppstore,
        name: 'Work',
    },
    {
        href: '#projects',
        Iconmin: AiOutlineProject,
        name: 'Projects',
    },
    {
        href: '#contact',
        Iconmin: AiOutlineMail,
        name: 'Contact',
    },
];
