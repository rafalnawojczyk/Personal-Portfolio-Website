import { RichText } from '@/components/blog/RichText/RichText';
import { SerializedLexicalNode } from '@/components/blog/RichText/types';
import { Tags } from '@/components/blog/Tags';
import payloadConfig from '@/payload.config';
import { mergeOpenGraph, metadataIcons } from '@/utils';
import { formatDate } from '@/utils/formatDate';
import { generateSchemaScript } from '@/utils/generateSchema';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';

const Post = async ({ params: { slug } }: { params: { slug: string[] | string } }) => {
    const payloadSlug = Array.isArray(slug) ? slug.join('/') : slug;

    const payload = await getPayload({
        config: payloadConfig,
    });

    const doc = await payload.find({
        collection: 'blog',
        where: {
            slug: {
                equals: payloadSlug,
            },
        },
    });

    const page = doc.docs[0];

    if (!page) {
        return notFound();
    }

    const schemaScript = generateSchemaScript({
        article: {
            headline: page.metaTitle,
            description: page.metaDescription || '',
            datePublished: new Date(page.createdAt).toISOString(),
            dateModified: new Date(page.updatedAt).toISOString(),
            image: {
                url: page.featuredImage,
                width: '1200',
                height: '630',
            },
        },
        breadcrumbs: {
            links: [
                {
                    link: 'https://rafalnawojczyk.pl',
                    label: 'rafalnawojczyk.pl',
                },
                {
                    link: 'https://rafalnawojczyk.pl/blog',
                    label: 'Blog',
                },
                {
                    label: page.metaTitle,
                    link: `https://rafalnawojczyk.pl/blog/${page.slug}`,
                },
            ],
        },
    });

    return (
        <>
            {schemaScript}
            {page.tags && page.tags.length > 0 && (
                <Tags
                    content={page.tags.map(tag => {
                        if (typeof tag === 'string') {
                            return tag;
                        } else {
                            return tag.tag;
                        }
                    })}
                    date={formatDate(new Date(page.createdAt))}
                />
            )}
            <RichText nodes={page.richText.root.children as SerializedLexicalNode[]} />
        </>
    );
};

export default Post;

export async function generateStaticParams() {
    const payload = await getPayload({
        config: payloadConfig,
    });

    const pages = await payload.find({
        collection: 'blog',
        where: {},
        limit: 99999,
    });

    return pages.docs.map(({ slug }: { slug: string }) => ({
        slug: slug.split('/'),
    }));
}

export async function generateMetadata({
    params: { slug },
}: {
    params: { slug: string[] | string };
}): Promise<Metadata> {
    const payloadSlug = Array.isArray(slug) ? slug.join('/') : slug;

    const payload = await getPayload({
        config: payloadConfig,
    });

    const page = await payload.find({
        collection: 'blog',
        where: {
            slug: {
                equals: payloadSlug,
            },
        },
    });

    const blog = page.docs[0];

    if (!blog) {
        return {};
    }

    return {
        metadataBase: new URL('https://rafalnawojczyk.pl'),
        alternates: {
            canonical: `/blog/${blog.slug}`,
        },
        title: blog.metaTitle,
        description: blog.metaDescription,
        openGraph: mergeOpenGraph({
            title: 'Latest Articles, Tutorials and Great Content!',
            description: blog.metaDescription,
            url: `/blog/${blog.slug}`,
            images: {
                // TODO: add here a fallback image
                url: '',
            },
        }),
        robots: null,
        icons: metadataIcons,
    };
}
