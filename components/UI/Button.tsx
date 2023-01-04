import styles from "./Button.module.scss";

type ButtonProps = {
    type?: "button" | "submit" | "reset";
    href: string;
    className?: string;
    title: string;
};

const Button = ({ type, className, title, href }: ButtonProps) => {
    return (
        <a
            className={`${className} ${styles.button}`}
            href={href}
            type={`${type ? type : "button"}`}
        >
            {title}
        </a>
    );
};

export default Button;
