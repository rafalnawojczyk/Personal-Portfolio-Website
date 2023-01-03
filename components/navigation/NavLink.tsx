import styles from "./NavLink.module.scss";

type NavLinkProps = {
    title: string;
    subtitle: string;
};

const NavLink = ({ title, subtitle }: NavLinkProps) => {
    return (
        <a className={styles["nav-link"]}>
            <span className={styles["nav-link__subtitle"]}>{subtitle} </span> {" " + title}
        </a>
    );
};

export default NavLink;
