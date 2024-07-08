import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';
import styles from './CodeBlock.module.scss';

type CodeBlockProps = {
    content: string;
};

export const CodeBlock = ({ content }: CodeBlockProps) => {
    const [html, setHtml] = useState('');

    useEffect(() => {
        const codeHighlight = async () => {
            const codes = await codeToHtml(content, {
                lang: 'jsx',
                theme: 'monokai',
            });

            setHtml(codes);
        };
        codeHighlight();
    }, [content]);

    return content.split('\n').length === 1 ? (
        <code>{content}</code>
    ) : (
        <div className={styles.code} dangerouslySetInnerHTML={{ __html: html }}></div>
    );
};
