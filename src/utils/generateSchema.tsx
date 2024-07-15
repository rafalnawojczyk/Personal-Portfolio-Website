import Script from 'next/script';
import { Article, BreadcrumbList, Graph, ImageObject, Person, Thing } from 'schema-dts';

type GenerateSchemaProps = {
    breadcrumbs?: { links: { link: string; label: string }[] } & Omit<BreadcrumbList, 'itemListElement' | '@type'>;
    article?: {
        headline: string;
        description: string;
        datePublished: string;
        dateModified: string;
        image: {
            url: string;
            width: string;
            height: string;
        } & Omit<ImageObject, '@type' | 'width' | 'height' | 'url'>;
    } & Omit<Article, '@type' | 'headline' | 'description' | 'datePublished' | 'dateModified' | 'author' | 'image'>;
};

const generateBreadcrumbSchema = (data: GenerateSchemaProps['breadcrumbs']) => {
    if (!data) {
        return;
    }

    const { links, ...restData } = data;

    const breadcrumbSchema: BreadcrumbList = {
        ...restData,
        '@type': 'BreadcrumbList',
        itemListElement: data.links
            .filter(el => el.label)
            .map((link, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: link.label,
                ...(index + 1 === data.links.length ? {} : { item: link.link }),
            })),
    };

    return breadcrumbSchema;
};

const generateArticleSchema = (data: GenerateSchemaProps['article']) => {
    if (!data) {
        return;
    }

    const articleSchema: Article = {
        ...data,
        '@type': 'Article',
        headline: data.headline,
        description: data.description,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        image: {
            ...data.image,
            '@type': 'ImageObject',
        },
        author: {
            '@type': 'Person',
            name: 'Rafal Nawojczyk',
            jobTitle: 'Front-End Developer',
            email: 'rafalnawojczyk@gmail.com',
            description:
                'Rafał Nawojczyk is a software engineer from Poland with expertise in React.js, Next.js, and React Native. He enjoys creating web and mobile applications and is continuously expanding his skill set.',
            knowsAbout: [
                'JavaScript',
                'TypeScript',
                'React.js',
                'Next.js',
                'React Native',
                'Expo',
                'Node.js',
                'Express.js',
                'Jest',
                'Vitest',
                'React Testing Library',
                'MongoDB',
                'RealmDB',
                'Firebase',
                'Zustand',
                'Redux',
                'CSS',
                'SASS',
                'TailwindCSS',
                'Webflow',
                'WordPress',
            ],
            sameAs: [
                'https://github.com/rafalnawojczyk',
                'https://www.linkedin.com/in/rafalnawojczyk',
                'https://x.com/rafalnawojczyk',
            ],
            url: 'https://rafalnawojczyk.pl',
        },
    };

    return articleSchema;
};

export const generateSchemaScript = (data: GenerateSchemaProps): React.JSX.Element => {
    const graphData: Thing[] = [];

    if (data.article && data.article.headline) {
        const articleData = generateArticleSchema(data.article);

        graphData.push(articleData as Thing);
    }

    if (data.breadcrumbs && data.breadcrumbs.links.length > 0) {
        const breadcrumbsData = generateBreadcrumbSchema(data.breadcrumbs);

        graphData.push(breadcrumbsData as Thing);
    }

    const jsonLd: Graph = {
        '@context': 'https://schema.org',
        '@graph': graphData,
    };

    const script = (
        <Script id="page-schema" type="application/ld+json">
            {JSON.stringify(jsonLd)}
        </Script>
    );

    return script;
};
