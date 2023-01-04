import styles from "./SidebarLink.module.scss";

type SidebarLinkProps = {
    href: string;
    children: React.ReactNode | React.ReactNode[];
};

const SidebarLink = ({ children, href }: SidebarLinkProps) => {
    return (
        <a href={href} className={styles.sidebar__link}>
            {children}
        </a>
    );
};

export default SidebarLink;
