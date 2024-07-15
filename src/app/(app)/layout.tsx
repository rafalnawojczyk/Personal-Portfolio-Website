import { Roboto_Mono } from 'next/font/google';
import '@/styles/globals.scss';
import Navigation from '../../components/navigation/Navigation';

const roboto = Roboto_Mono({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={roboto.className}>
            <body>
                <>
                    <Navigation />
                    {children}
                </>
            </body>
        </html>
    );
}
