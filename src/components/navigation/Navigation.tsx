'use client';
import NavLink from './NavLink';
import styles from './Navigation.module.scss';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import Button from '../UI/Button';
import { Logo } from './Logo';
import Link from 'next/link';

type NavigationProps = {};

const Navigation = ({}: NavigationProps) => {
    const scrollDirection = useScrollDirection();

    return (
        <>
            <header className={`${styles.header} ${scrollDirection === 'down' ? styles.header__sticky : ''} `}>
                <Link className={styles.navigation__skip} href="#hero-title">
                    Skip to Content
                </Link>
                <nav>
                    <div className={`${styles.navigation}`}>
                        <ul className={styles.list}>
                            <NavLink href={'/'} title="Home" subtitle="00." />
                            <NavLink href={'/blog'} title="Blog" subtitle="01." />
                        </ul>
                        <Link href="/" aria-label="Link to homepage - rafalnawojczyk.pl">
                            <Logo className={styles.logo} color={'#DADADA'} />
                        </Link>
                        <Button href="/#contact" title="Send a message" className={styles.button} />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navigation;
