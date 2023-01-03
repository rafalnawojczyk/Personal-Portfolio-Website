import NavLink from "./NavLink";
import styles from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <NavLink title="About" subtitle="01." />
                <NavLink title="Projects" subtitle="02." />
                <NavLink title="Contact" subtitle="03." />
            </nav>
        </header>
    );
};

export default Navigation;
