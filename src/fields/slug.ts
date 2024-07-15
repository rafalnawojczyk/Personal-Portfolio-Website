import formatSlug from '@/utils/formatSlug';

import { deepMerge, Field } from 'payload';

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

export const slugField: Slug = (fieldToUse = 'title', overrides) =>
    deepMerge(
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            index: true,
            required: true,
            hooks: {
                beforeValidate: [formatSlug(fieldToUse)],
            },
        },
        overrides || {}
    );
