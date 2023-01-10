import { Html, Head, Main, NextScript } from "next/document";
import Favicon from "../components/Favicon";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <Favicon />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
