import { ReactNode } from 'react';
import styles from './Heading.module.scss';
import { Subheading } from '../Subheading';

export type HeadingProps = {
    heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    content: ReactNode;
};

const classMap: Record<HeadingProps['heading'], string> = {
    h1: styles.h1,
    h2: styles.h2,
    h3: styles.h3,
    h4: styles.h4,
    h5: styles.h5,
    h6: styles.h6,
};

export const Heading = ({ heading, content }: HeadingProps) => {
    const Component = heading;

    if (heading === 'h6') {
        return <Subheading content={content} />;
    }

    return <Component className={classMap[heading]}>{content}</Component>;
};
