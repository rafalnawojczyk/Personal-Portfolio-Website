import { ReactNode } from 'react';
import styles from './Heading.module.scss';

type HeadingProps = {
    heading: 'h1' | 'h2' | 'h3' | 'h4';
    content: ReactNode;
};

const classMap: Record<HeadingProps['heading'], string> = {
    h1: styles.h1,
    h2: styles.h2,
    h3: styles.h3,
    h4: styles.h4,
};

export const Heading = ({ heading, content }: HeadingProps) => {
    const Component = heading;

    return <Component className={classMap[heading]}>{content}</Component>;
};
