import styles from './SidebarLink.module.scss';

type SidebarLinkProps = {
    href: string;
    ariaLabel: string;
    children: React.ReactNode | React.ReactNode[];
};

const SidebarLink = ({ children, href, ariaLabel }: SidebarLinkProps) => {
    return (
        <a aria-label={ariaLabel} target="_blank" rel="noreferrer" href={href} className={styles.sidebar__link}>
            {children}
        </a>
    );
};

export default SidebarLink;
