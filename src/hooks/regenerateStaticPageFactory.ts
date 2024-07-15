import { AfterChangeHook } from 'payload/dist/collections/config/types';

import { regeneratePath } from '@/utils/regeneratePath';

export const regenerateStaticPageFactory =
    (prefix = '/'): AfterChangeHook =>
    async ({ req: { payload }, doc }) => {
        let path = `${prefix}${doc.slug}`;

        await regeneratePath(path, payload);
    };
