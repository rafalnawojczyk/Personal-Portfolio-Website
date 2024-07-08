import { ReactNode, useState } from 'react';
import Navigation from '../../navigation/Navigation';
import { Footer } from '../Footer/Footer';

export default function MDXLayout({ children }: { children: ReactNode }) {
    const [blur, setBlur] = useState(false);

    const blurToggler = (blur: boolean) => {
        setBlur(blur);
    };

    return (
        <>
            <Navigation blurToggler={blurToggler} />
            <main style={{ maxWidth: 900, marginInline: 'auto' }}>{children}</main>
            <Footer />
        </>
    );
}
