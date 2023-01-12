export default interface FeaturedProjectModel {
    githubLink: string;
    previewLink: string;
    altText: string;
    imageSrc: string;
    projectTitle: string;
    projectDescription: string;
    technologies: string[];
    side: "left" | "right";
}
