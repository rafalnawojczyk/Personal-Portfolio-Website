import Link from "next/link";
import styles from "./NavLink.module.scss";

type NavLinkProps = {
    title: string;
    subtitle: string;
    href: string;
    onClick?: () => void;
};

const NavLink = ({ title, subtitle, href, onClick }: NavLinkProps) => {
    return (
        <Link onClick={onClick} href={href} className={styles["nav-link"]}>
            <span className={styles["nav-link__subtitle"]}>{subtitle} </span> {" " + title}
        </Link>
    );
};

export default NavLink;
