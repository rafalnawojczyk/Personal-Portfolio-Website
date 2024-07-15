import styles from "./ListOfTechnologies.module.scss";

type ListOfTechnologiesProps = {
    list: string[];
};

const ListOfTechnologies = ({ list }: ListOfTechnologiesProps) => {
    return (
        <ul className={styles.list}>
            {list.map((el, i) => {
                return <li key={i}>{el}</li>;
            })}
        </ul>
    );
};

export default ListOfTechnologies;
