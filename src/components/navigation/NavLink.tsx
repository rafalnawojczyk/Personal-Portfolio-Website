'use client';
import Link from 'next/link';
import styles from './NavLink.module.scss';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
    title: string;
    subtitle: string;
    href: string;
    onClick?: () => void;
};

const NavLink = ({ title, subtitle, href, onClick }: NavLinkProps) => {
    const [isCurrent, setIsCurrent] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsCurrent(pathname === href);
    }, [pathname]);

    return (
        <Link
            onClick={onClick}
            href={href}
            className={`${styles['nav-link']} ${isCurrent && styles['nav-link--current']}`}
        >
            <span className={styles['nav-link__subtitle']}>{subtitle} </span> {' ' + title}
        </Link>
    );
};

export default NavLink;
