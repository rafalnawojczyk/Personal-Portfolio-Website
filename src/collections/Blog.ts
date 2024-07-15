import { slugField } from '@/fields/slug';
import { regenerateStaticPageFactory } from '@/hooks/regenerateStaticPageFactory';
import { unpublishDeletedPageFactory } from '@/hooks/unpublishDeletedPage';
import { CollectionConfig } from 'payload';

export const Blog: CollectionConfig = {
    slug: 'blog',
    admin: {
        listSearchableFields: ['title', 'slug'],
        useAsTitle: 'title',
        defaultColumns: ['metaTitle', 'slug', 'author', 'createdAt', 'updatedAt', 'featuredImage'],
        preview: doc => {
            if (doc?.slug) {
                return `https://rafalnawojczyk.pl/blog/${doc.slug}`;
            }

            return '';
        },
    },
    access: {
        read: () => true,
    },
    hooks: {
        afterChange: [regenerateStaticPageFactory('/blog/')],
        afterDelete: [unpublishDeletedPageFactory('/blog/')],
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Blog settings',
                    fields: [
                        slugField(),
                        {
                            name: 'featuredImage',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'tags',
                            type: 'relationship',
                            relationTo: 'tags',
                            hasMany: true,
                        },
                    ],
                },
                {
                    label: 'SEO',
                    fields: [
                        {
                            name: 'metaTitle',
                            type: 'text',
                            label: 'SEO Title',
                            required: true,
                        },
                        {
                            name: 'metaDescription',
                            type: 'text',
                            label: 'SEO Description',
                            required: true,
                        },
                        {
                            name: 'metaImage',
                            type: 'upload',
                            relationTo: 'media',
                        },
                    ],
                },
            ],
        },
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'Content',
                    fields: [
                        {
                            name: 'richText',
                            type: 'richText',
                            required: true,
                        },
                    ],
                },
            ],
        },
    ],
};
