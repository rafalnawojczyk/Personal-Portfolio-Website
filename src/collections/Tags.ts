import { CollectionConfig } from 'payload';

export const Tags: CollectionConfig = {
    slug: 'tags',
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: 'tag',
        defaultColumns: ['tag'],
    },
    fields: [
        {
            type: 'text',
            name: 'tag',
            label: 'Tag',
            required: true,
        },
        {
            type: 'text',
            name: 'slug',
            label: 'Slug',
            index: true,
            required: true,
        },
    ],
};
