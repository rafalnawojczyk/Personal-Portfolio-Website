import { withPayload } from '@payloadcms/next/withPayload';
const nextConfig = {
    sassOptions: {
        additionalData: content => {
            return `
                 @import "@/styles/variables";
    
                ${content};
                 `;
        },
    },
    experimental: {
        reactCompiler: false,
    },
};

export default withPayload(nextConfig);
