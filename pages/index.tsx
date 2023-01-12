import Head from "next/head";
import Hero from "../components/sections/hero/Hero";
import Navigation from "../components/navigation/Navigation";
import Sidebar from "../components/sidebar/Sidebar";
import SidebarLink from "../components/sidebar/SidebarLink";
import GitHubLogo from "../components/svg/GithubLogo";
import styles from "./index.module.scss";
import About from "../components/sections/about/About";
import Projects from "../components/sections/projects/Projects";
import Contact from "../components/sections/contact/Contact";

const Home = () => {
    return (
        <>
            <Head>
                <title>Rafał Nawojczyk - Front-End Developer Portfolio</title>
                <meta
                    name="description"
                    content="Front-end developer portfolio website made by Rafał Nawojczyk. "
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <main className={styles.homepage}>
                <Sidebar side="right">
                    <SidebarLink href="mailto:rafalnawojczyk@gmail.com">
                        <p className={styles["homepage__sidebar-email"]}>
                            rafalnawojczyk@gmail.com
                        </p>
                    </SidebarLink>
                </Sidebar>
                <Sidebar side="left">
                    <SidebarLink href="https://github.com/rafalnawojczyk">
                        <GitHubLogo className={styles.homepage__logo} />
                    </SidebarLink>
                </Sidebar>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
        </>
    );
};

export default Home;
