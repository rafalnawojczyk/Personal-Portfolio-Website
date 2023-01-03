import Head from "next/head";
import Navigation from "../components/navigation/Navigation";
import styles from "./index.module.scss";

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
            <main className={styles.homepage}></main>
        </>
    );
};

export default Home;
