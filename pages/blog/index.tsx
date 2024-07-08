import Head from 'next/head';
import Navigation from '../../components/navigation/Navigation';
import { useState } from 'react';

const Blog = () => {
    const [blur, setBlur] = useState(false);

    const blurToggler = (blur: boolean) => {
        setBlur(blur);
    };
    return (
        <>
            <Head>
                <title>Rafał Nawojczyk - Front-End Developer Portfolio</title>
                <meta name="description" content="Front-end developer portfolio website made by Rafał Nawojczyk. " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation blurToggler={blurToggler} />
        </>
    );
};

export default Blog;
