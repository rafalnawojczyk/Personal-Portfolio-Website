import styles from "./Button.module.scss";

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    href: string;
    className?: string;
    title: string;
    newTab?: boolean;
};

const Button = ({ type, className, title, href, newTab }: ButtonProps) => {
    const markup = newTab ? (
        <a
            target="_blank"
            rel="noreferrer"
            className={`${className} ${styles.button}`}
            href={href}
            type={`${type ? type : "button"}`}
        >
            {title}
        </a>
    ) : (
        <a
            className={`${className} ${styles.button}`}
            href={href}
            type={`${type ? type : "button"}`}
        >
            {title}
        </a>
    );

    return markup;
};

export default Button;
