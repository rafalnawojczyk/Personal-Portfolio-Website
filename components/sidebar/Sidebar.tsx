import styles from "./Sidebar.module.scss";

type SidebarProps = {
    side: "left" | "right";
    children: React.ReactNode | React.ReactNode[];
};

const Sidebar = ({ side, children }: SidebarProps) => {
    return <div className={`${styles.sidebar} ${styles[`sidebar__${side}`]}`}>{children}</div>;
};

export default Sidebar;
