import NavLink from "./NavLink";
import styles from "./Navigation.module.scss";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Navigation = () => {
    //TODO: Add resume as onClick download
    const buttonRef = useRef(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const mobileMenuToggle = () => {
        setMobileMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <a className={styles.navigation__skip} href="#hero-title">
                Skip to Content
            </a>
            <header className={styles.header}>
                <nav>
                    <div className={styles.navigation}>
                        <NavLink href={"#about"} title="About" subtitle="00." />
                        <NavLink href={"#projects"} title="Projects" subtitle="01." />
                        <NavLink href={"#contact"} title="Contact" subtitle="02." />
                        <Button title={"Resume"} href={"#resume"} />
                    </div>

                    <div className={styles["mobile-nav"]}>
                        <button
                            onClick={mobileMenuToggle}
                            aria-label="Menu"
                            className={styles["mobile-nav__button"]}
                        >
                            <CSSTransition
                                nodeRef={buttonRef}
                                in={mobileMenuOpen}
                                timeout={500}
                                classNames={{
                                    enterActive: styles["mobile-nav__icon-active"],
                                    enterDone: styles["mobile-nav__icon-active"],
                                }}
                            >
                                <div
                                    ref={buttonRef}
                                    className={`${styles["mobile-nav__icon"]}`}
                                ></div>
                            </CSSTransition>
                        </button>

                        <aside className={styles["mobile-nav__sidebar"]}>
                            <NavLink href={"#about"} title="About" subtitle="00." />
                            <NavLink href={"#projects"} title="Projects" subtitle="01." />
                            <NavLink href={"#contact"} title="Contact" subtitle="02." />
                            <Button title={"Resume"} href={"#resume"} />
                        </aside>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navigation;
