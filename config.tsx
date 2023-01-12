import FeaturedProjectModel from "./models/FeaturedProjectModel";
import FeaturedImage from "./public/featured-project.jpg";
import MinesweeperImage from "./public/minesweeper-project.jpg";
import _2048Image from "./public/2048-project.jpg";

export const twitchStatisticsData: FeaturedProjectModel = {
    githubLink: "https://github.com/rafalnawojczyk/Twitch-Statistics-Project",
    previewLink: "https://twitch-statistics.vercel.app/",
    altText: "Preview image showing homepage of Twitch Statistics project website",
    imageSrc: FeaturedImage.src,
    projectTitle: "Twitch Statistics",
    projectDescription: `Advanced full-stack web application, written in Typescript using Next.js.
  App is fetching data from Twitch API, saves that into MongoDB using Next.js
  API routes, and renders all data in a modern looking charts and tables.`,
    technologies: ["Next.js", "React", "Typescript", "SASS", "Jest", "Firebase"],
    side: "right",
};
export const minesweeperData: FeaturedProjectModel = {
    githubLink: "https://github.com/rafalnawojczyk/Minesweeper",
    previewLink: "https://rafalnawojczyk.pl/minesweeper/",
    altText: "Preview image showing Minesweeper game made by Rafal Nawojczyk",
    imageSrc: MinesweeperImage.src,
    projectTitle: "Minesweeper Game",
    projectDescription: `Modern looking Minesweeper game made in Vanilla Javascript using classes, MVC architecture, SASS, private methods and properties. `,
    technologies: ["ES6+ Javascript", "SASS"],
    side: "left",
};

export const game2048Data: FeaturedProjectModel = {
    githubLink: "https://github.com/rafalnawojczyk/2048",
    previewLink: "https://rafalnawojczyk.pl/2048/",
    altText: "Preview image showing 2048 game made by Rafal Nawojczyk",
    imageSrc: _2048Image.src,
    projectTitle: "2048 Game",
    projectDescription: `2048 - great game made in Vanilla Javascript ES6+ and SASS preprocessor.`,
    technologies: ["ES6+ Javascript", "SASS"],
    side: "right",
};
