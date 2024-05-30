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
import Footer from "../components/sections/footer/Footer";
import { useState } from "react";

const Home = () => {
    const [blur, setBlur] = useState(false);

    const blurToggler = (blur: boolean) => {
        setBlur(blur);
    };

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
            <Navigation blurToggler={blurToggler} />
            <main className={`${styles.homepage} ${blur ? styles.blur : ""}`}>
                <Sidebar side="right">
                    <SidebarLink ariaLabel="Mailto rafalnawojczyk@gmail.ocm" href="mailto:rafalnawojczyk@gmail.com">
                        <p className={styles["homepage__sidebar-email"]}>
                            rafalnawojczyk@gmail.com
                        </p>
                    </SidebarLink>
                </Sidebar>
                <Sidebar side="left">
                    <SidebarLink ariaLabel="Github link to rafalnawojczyk account - opens in new tab" href="https://github.com/rafalnawojczyk">
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
