import appleIcon from "../public/favicon/apple-touch-icon.png";
import favicon32 from "../public/favicon/favicon-32x32.png";
import favicon16 from "../public/favicon/favicon-16x16.png";
import safariIcon from "../public/favicon/safari-pinned-tab.svg";
import favicon from "../public/favicon/favicon.ico";

const Favicon = () => {
    return (
        <>
            <link rel="apple-touch-icon" sizes="180x180" href={appleIcon.src} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32.src} />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16.src} />
            <link rel="manifest" href="/favicon/manifest.json" />
            <link rel="mask-icon" href={safariIcon.src} color="#5bbad5" />
            <link rel="shortcut icon" href={favicon.src} />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
            <meta name="theme-color" content="#ffffff"></meta>
        </>
    );
};

export default Favicon;
