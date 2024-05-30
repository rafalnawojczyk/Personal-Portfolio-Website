import FeaturedProjectModel from './models/FeaturedProjectModel';
import FeaturedImage from './public/featured-project.jpg';
import CubeRivalsImage from './public/cube-rivals-project.png';
import MinesweeperImage from './public/minesweeper-project.jpg';
import _2048Image from './public/2048-project.jpg';
import creativetimImage from './public/creativetim-project.jpg';

export const twitchStatisticsData: FeaturedProjectModel = {
    githubLink: 'https://github.com/rafalnawojczyk/Twitch-Statistics-Project',
    previewLink: 'https://twitch-statistics.vercel.app/',
    altText: 'Preview image showing homepage of Twitch Statistics project website',
    imageSrc: FeaturedImage.src,
    projectTitle: 'Twitch Statistics',
    projectDescription: `Advanced full-stack web application, written in Typescript using Next.js. The app fetches data from Twitch API, saves it into MongoDB using Next.js API routes, and renders all data in modern-looking charts and tables. `,
    technologies: ['Next.js', 'React', 'Typescript', 'SASS', 'Jest', 'Firebase'],
};
export const minesweeperData: FeaturedProjectModel = {
    githubLink: 'https://github.com/rafalnawojczyk/Minesweeper',
    previewLink: 'https://rafalnawojczyk.pl/minesweeper/index.html',
    altText: 'Preview image showing Minesweeper game made by Rafal Nawojczyk',
    imageSrc: MinesweeperImage.src,
    projectTitle: 'Minesweeper Game',
    projectDescription: `A modern-looking Minesweeper game made in Vanilla Javascript using classes, MVC architecture, SASS, private methods and properties. `,
    technologies: ['ES6+ Javascript', 'SASS'],
};

export const game2048Data: FeaturedProjectModel = {
    githubLink: 'https://github.com/rafalnawojczyk/2048',
    previewLink: 'https://rafalnawojczyk.pl/2048/index.html',
    altText: 'Preview image showing 2048 game made by Rafal Nawojczyk',
    imageSrc: _2048Image.src,
    projectTitle: '2048 Game',
    projectDescription: `2048 - great game made in Vanilla Javascript ES6+ and SASS preprocessor.`,
    technologies: ['ES6+ Javascript', 'SASS'],
};

export const creativeTimData: FeaturedProjectModel = {
    githubLink: 'https://github.com/rafalnawojczyk/Copy-of-Creative-tim-webiste',
    previewLink: 'https://rafalnawojczyk.pl/creativetim/index.html',
    altText: 'Preview image showing Creative Tim website built by Rafal Nawojczyk',
    imageSrc: creativetimImage.src,
    projectTitle: 'Creative Tim website',
    projectDescription: `Creative Tim - a beautiful website created around an UX/UI book that I tried to rewrite nearly pixel-perfect. There is some cool JS functionality added as well.`,
    technologies: ['ES6+ Javascript', 'SASS', 'HTML'],
};

export const cubeRivalsData: FeaturedProjectModel = {
    githubLink: 'https://github.com/rafalnawojczyk',
    previewLink: 'https://play.google.com/store/apps/details?id=com.anonymous.Cuberivals',
    altText: 'Preview image showing Cube Rivals app made by Rafal Nawojczyk',
    imageSrc: CubeRivalsImage.src,
    projectTitle: 'Cube Rivals - Mobile App',
    projectDescription: `Fully functional mobile app that is published on Google Play Store. It's a speedcubing timer with a lot of features and statistics to help cubers improve their times.`,
    technologies: ['React Native', 'Expo', 'Expo-Router', 'RealmDB', 'RN Skia'],
};
