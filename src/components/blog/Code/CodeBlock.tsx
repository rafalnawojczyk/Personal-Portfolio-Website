import { codeToHtml } from 'shiki';
import styles from './CodeBlock.module.scss';

type CodeBlockProps = {
    content: string;
};

export const CodeBlock = async ({ content }: CodeBlockProps) => {
    const codes = await codeToHtml(content, {
        lang: 'jsx',
        theme: 'monokai',
    });

    return content.split('\n').length === 1 ? (
        <code>{content}</code>
    ) : (
        <div className={styles.code} dangerouslySetInnerHTML={{ __html: codes }}></div>
    );
};
