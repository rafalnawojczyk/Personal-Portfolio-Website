import NavLink from "./NavLink";
import styles from "./Navigation.module.scss";
import Button from "../UI/Button";

const Navigation = () => {
    //TODO: Add resume as onClick download

    return (
        <>
            <a className={styles.navigation__skip} href="#hero-title">
                Skip to Content
            </a>
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    <NavLink href={"#about"} title="About" subtitle="00." />
                    <NavLink href={"#projects"} title="Projects" subtitle="01." />
                    <NavLink href={"#contact"} title="Contact" subtitle="02." />
                    <Button title={"Resume"} href={"#resume"} />
                </nav>
            </header>
        </>
    );
};

export default Navigation;
