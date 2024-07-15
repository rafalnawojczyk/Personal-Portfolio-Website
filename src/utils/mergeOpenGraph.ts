import type { Metadata } from 'next';

const defaultOpenGraph: Metadata['openGraph'] = {
    type: 'website',
    siteName: 'Rafal Nawojczyk',
    title: 'Software Engineer - web enthusiast website with interesting tutorials and in-depth guides.',
    description:
        'Explore the portfolio of Rafał Nawojczyk, a dedicated Front-End Developer specializing in React.js, Next.js, and React Native. Discover innovative web and mobile applications, showcasing expertise in modern JavaScript technologies, document-based databases, and backend solutions.',
    images: [
        {
            url: '',
        },
    ],
};

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
    return {
        ...defaultOpenGraph,
        ...og,
        images: og?.images ? og.images : defaultOpenGraph.images,
    };
};
