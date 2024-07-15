import { UnorderedList } from '@/components/blog/UnorderedList';
import payloadConfig from '@/payload.config';
import { mergeOpenGraph, metadataIcons } from '@/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import { getPayload } from 'payload';

const Blog = async () => {
    const payload = await getPayload({
        config: payloadConfig,
    });

    const docs = await payload.find({
        collection: 'blog',
        where: {},
        limit: 50,
    });

    const filteredBlogs = docs.docs.filter(el => el.slug);

    return (
        <UnorderedList
            content={filteredBlogs.map(doc => (
                <li key={doc.id}>
                    <Link href={`/blog/${doc.slug}`}>{doc.metaTitle}</Link>
                </li>
            ))}
        />
    );
};

export default Blog;

export function generateMetadata(): Metadata {
    return {
        metadataBase: new URL('https://rafalnawojczyk.pl'),
        alternates: {
            canonical: '/blog',
        },
        title: 'Latest Articles, Tutorials and Great Content!',
        description: 'Diving deep into interesting topics from around the world of Javascript.',
        openGraph: mergeOpenGraph({
            title: 'Latest Articles, Tutorials and Great Content!',
            description: 'Diving deep into interesting topics from around the world of Javascript.',
            url: '/blog',
        }),
        robots: null,
        icons: metadataIcons,
    };
}
