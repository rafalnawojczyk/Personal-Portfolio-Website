import Hero from '@/components/sections/hero/Hero';
import Sidebar from '@/components/sidebar/Sidebar';
import SidebarLink from '@/components/sidebar/SidebarLink';
import GitHubLogo from '@/components/svg/GithubLogo';
import About from '@/components/sections/about/About';
import Projects from '@/components/sections/projects/Projects';
import Contact from '@/components/sections/contact/Contact';
import Footer from '@/components/sections/footer/Footer';
import styles from './index.module.scss';
import { Metadata } from 'next';
import { mergeOpenGraph, metadataIcons } from '@/utils';

const Home = () => {
    return (
        <>
            <main className={`${styles.homepage}`}>
                <Sidebar side="right">
                    <SidebarLink ariaLabel="Mailto rafalnawojczyk@gmail.ocm" href="mailto:rafalnawojczyk@gmail.com">
                        <p className={styles['homepage__sidebar-email']}>rafalnawojczyk@gmail.com</p>
                    </SidebarLink>
                </Sidebar>
                <Sidebar side="left">
                    <SidebarLink
                        ariaLabel="Github link to rafalnawojczyk account - opens in new tab"
                        href="https://github.com/rafalnawojczyk"
                    >
                        <GitHubLogo className={styles.homepage__logo} />
                    </SidebarLink>
                </Sidebar>
                <Hero />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </>
    );
};

export default Home;

export function generateMetadata(): Metadata {
    return {
        metadataBase: new URL('https://rafalnawojczyk.pl'),
        alternates: {
            canonical: '/',
        },
        title: 'Rafał Nawojczyk - Front-End Developer Portfolio',
        description: 'Software Engineer portfolio website made by Rafał Nawojczyk.',
        openGraph: mergeOpenGraph({
            title: 'Rafał Nawojczyk - Front-End Developer Portfolio',
            description: 'Software Engineer portfolio website made by Rafał Nawojczyk.',
            url: '/blog',
        }),
        robots: null,
        icons: metadataIcons,
    };
}
