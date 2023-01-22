import NavLink from "./NavLink";
import styles from "./Navigation.module.scss";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useScrollDirection } from "../../hooks/useScrollDirection";

type NavigationProps = {
    blurToggler: (blur: boolean) => void;
};

const Navigation = ({ blurToggler }: NavigationProps) => {
    const buttonRef = useRef(null);
    const asideRef = useRef(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const scrollDirection = useScrollDirection();

    const mobileMenuToggle = () => {
        setMobileMenuOpen(prevState => {
            blurToggler(!prevState);
            return !prevState;
        });
    };

    const hideMobileMenu = () => {
        setMobileMenuOpen(false);
        blurToggler(false);
    };

    return (
        <>
            <a className={styles.navigation__skip} href="#hero-title">
                Skip to Content
            </a>
            <header
                className={`${styles.header} ${mobileMenuOpen ? styles.blur : ""} ${
                    scrollDirection === "down" ? styles.header__sticky : ""
                } `}
            >
                <nav>
                    <div className={`${styles.navigation}`}>
                        <NavLink href={"#about"} title="About" subtitle="00." />
                        <NavLink href={"#projects"} title="Projects" subtitle="01." />
                        <NavLink href={"#contact"} title="Contact" subtitle="02." />
                        <Button title={"Resume"} href={"/resume.pdf"} newTab={true} />
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

                        <CSSTransition
                            nodeRef={asideRef}
                            in={mobileMenuOpen}
                            timeout={500}
                            classNames={{
                                enterActive: styles["mobile-nav__sidebar-active"],
                                enterDone: styles["mobile-nav__sidebar-active"],
                            }}
                        >
                            <aside
                                aria-hidden={!mobileMenuOpen}
                                ref={asideRef}
                                className={styles["mobile-nav__sidebar"]}
                            >
                                <NavLink
                                    onClick={hideMobileMenu}
                                    href={"#about"}
                                    title="About"
                                    subtitle="00."
                                />
                                <NavLink
                                    onClick={hideMobileMenu}
                                    href={"#projects"}
                                    title="Projects"
                                    subtitle="01."
                                />
                                <NavLink
                                    onClick={hideMobileMenu}
                                    href={"#contact"}
                                    title="Contact"
                                    subtitle="02."
                                />
                                <Button title={"Resume"} href={"#resume"} />
                            </aside>
                        </CSSTransition>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navigation;
