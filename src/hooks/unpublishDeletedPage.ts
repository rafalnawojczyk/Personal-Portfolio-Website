import { CollectionAfterDeleteHook } from 'payload';

export const unpublishDeletedPageFactory =
    (prefix = '/'): CollectionAfterDeleteHook =>
    async ({ req: { payload }, doc }) => {
        let path = `${prefix}${doc.slug}`;

        if (path === '/home') {
            path = '/';
        }

        const searchParams = new URLSearchParams();
        searchParams.append('secret', process.env.PAYLOAD_PRIVATE_REGENERATION_SECRET!);
        searchParams.append('path', path);

        try {
            const res = await fetch(`${process.env.REVALIDATE_PATH}${searchParams.toString()}`);
            if (res.ok) {
                payload.logger.info(`Now deleting path '${path}'`);
            } else {
                payload.logger.info(`Error deleting path '${path}'`);
            }
        } catch (err) {
            payload.logger.info(`Error hitting deleting route for '${path}'`);
        }
    };
