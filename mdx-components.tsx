import type { MDXComponents } from 'mdx/types';
import { Heading } from './components/blog/Heading';
import { Quote } from './components/blog/Quote';
import { Paragraph } from './components/blog/Paragraph';
import { CodeBlock } from './components/blog/Code';
import { Subheading } from './components/blog/Subheading';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => <Heading content={children} heading="h1" />,
        h2: ({ children }) => <Heading content={children} heading="h2" />,
        h3: ({ children }) => <Heading content={children} heading="h3" />,
        h4: ({ children }) => <Heading content={children} heading="h4" />,
        h6: ({ children }) => <Subheading content={children} />,
        pre: ({ children }) => <>{children}</>,
        blockquote: ({ children }) => <Quote content={children} />,
        p: ({ children }) => <Paragraph content={children} />,
        code: prop => <CodeBlock content={prop.children as string} />,
        ...components,
    };
}
