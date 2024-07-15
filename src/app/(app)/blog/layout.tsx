import { Footer } from '@/components/blog/Footer/Footer';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <main style={{ maxWidth: 900, marginInline: 'auto', position: 'relative', paddingTop: `6rem` }}>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default BlogLayout;
