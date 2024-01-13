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
        year: '2023 - Present time',
        title: 'Umbrella IT',
        duration: '1 Year',
        details:
            '• Developing functionality using React, TypeScript and Styled Components\n' +
            '• Creating new functional blocks on company websites and integrating them with existing systems\n' +
            '• Refinement and optimization of existing code to improve performance and user experience\n' +
            '• Integration with external APIs and processing of received data\n' +
            '• Participating in code reviews and ensuring high quality code, continuous code improvement\n' + '- Participating in code reviews and ensuring high quality code, continuous code improvement\n' +
            '• Work in a team of developers, designers, analysts, testers and other stakeholders to achieve overall project goals',
    },
    {
        year: '2022 - 2023',
        title: 'Professional partner',
        duration: '1 Year',
        details:
            '• Developing an administration panel using React, TypeScript and Antd\n' +
            '• Creation of new functional blocks on the company\'s websites and their integration with existing systems\n' +
            '• Refine and optimize existing code to improve performance and user experience\n' +
            '• Integration with external APIs and processing of received data\n' +
            '• Participating in code reviews and ensuring high code quality\n' +
            '• Work in a team of developers, designers and other stakeholders to achieve common project goals',
    },
    {
        year: '2021 - 2022',
        title: 'Bk company',
        duration: '1.6 Years',
        details:
            '• Website layout of various complexity, including adaptive, cross-browser and rubber layout, as well as other digital projects\n' +
            '• Developing client-side applications using HTML, SCSS and JavaScript\n' +
            '• Creating web applications based on React.js\n' +
            '• Development of web interface components\n' +
            '• Complete redesign and development of new functionality for all sections of the site\n' +
            '• Identification and elimination of errors on websites\n' +
            '• Interaction with backend developers',
    },
    {
        year: '2019 - 2021',
        title: 'Alidi',
        duration: '2 Years',
        details:
            '• Producing web pages of varying complexity, including adaptive, multi-browser compatible and flexible formatting, as well as other digital technology projects\n' +
            '• Creating client-side applications using HTML, CSS and JavaScript.\n' +
            '• Creating web interface components\n' +
            '• Complete redesign and development of new functionality for all sections of the site\n' +
            '• Detecting and eliminating errors on websites\n' +
            '• Optimization and extension of program code functionality',
    },
];

// nawbar data
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
