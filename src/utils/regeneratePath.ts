import { Payload } from 'payload';

export const regeneratePath = async (path: string, payload: Payload) => {
    const searchParams = new URLSearchParams();
    searchParams.append('secret', process.env.PAYLOAD_PRIVATE_REGENERATION_SECRET!);
    searchParams.append('path', path);

    try {
        const res = await fetch(`${process.env.REVALIDATE_PATH}${searchParams.toString()}`);
        if (res.ok) {
            payload.logger.info(`Now regenerating path '${path}'`);
        } else {
            payload.logger.info(`Error regenerating path '${path}'`);
        }
    } catch (err) {
        payload.logger.info(`Error hitting regeneration route for '${path}'`);
    }
};
