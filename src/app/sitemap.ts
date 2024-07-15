import payloadConfig from '@/payload.config';
import { MetadataRoute } from 'next';
import { getPayload } from 'payload';

export const dynamic = 'force-dynamic';

export default async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
    const payload = await getPayload({
        config: payloadConfig,
    });

    const pages = await payload.find({
        collection: 'blog',
        where: {},
        limit: 99999,
    });

    const locations: MetadataRoute.Sitemap = [
        {
            url: 'https://rafalnawojczyk.pl',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://rafalnawojczyk.pl/blog',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...(pages.docs.map(page => ({
            url: `https://rafalnawojczyk.pl/blog/${page.slug}`,
            lastModified: page.updatedAt,
            changeFrequency: 'daily',
            priority: 1,
        })) as MetadataRoute.Sitemap),
    ];

    return [...locations];
}
