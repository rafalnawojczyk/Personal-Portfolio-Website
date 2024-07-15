import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Blog } from './collections/Blog';
import { Tags } from './collections/Tags';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
    },
    collections: [Users, Media, Blog, Tags],
    editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
            ...defaultFeatures,
            BlocksFeature({
                blocks: [{ slug: 'codeBlock', interfaceName: 'CodeBlock', fields: [{ name: 'code', type: 'code' }] }],
            }),
        ],
    }),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: process.env.NEXT_PRIVATE_DATABASE_URI || '',
    }),
    sharp,
    plugins: [],
});
