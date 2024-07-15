import type { CollectionAfterChangeHook } from 'payload';

import { regeneratePath } from '@/utils/regeneratePath';

export const regenerateStaticPageFactory =
    (prefix = '/'): CollectionAfterChangeHook =>
    async ({ req: { payload }, doc }) => {
        let path = `${prefix}${doc.slug}`;

        await regeneratePath(path, payload);
    };
