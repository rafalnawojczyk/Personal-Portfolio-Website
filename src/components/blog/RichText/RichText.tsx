/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { Fragment } from 'react';

import escapeHTML from 'escape-html';

import styles from './RichText.module.scss';
import { IS_BOLD, IS_ITALIC, IS_CODE } from './RichTextNodeFormat';

import type { SerializedLexicalNode } from './types';
import { Paragraph } from '../Paragraph';
import { Heading } from '../Heading';
import { HeadingProps } from '../Heading/Heading';
import { UnorderedList } from '../UnorderedList';
import { Quote } from '../Quote';
import { CodeBlock } from '../Code';

interface Props {
    nodes: SerializedLexicalNode[];
}

export function RichText({ nodes }: Props): JSX.Element {
    return (
        <Fragment>
            {nodes?.map((node, index): JSX.Element | null => {
                if (node.type === 'text') {
                    let text = <span key={index} dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />;
                    if (node.format & IS_BOLD) {
                        text = <strong key={index}>{text}</strong>;
                    }
                    if (node.format & IS_ITALIC) {
                        text = <em key={index}>{text}</em>;
                    }
                    // if (node.format & IS_STRIKETHROUGH) {
                    //     text = (
                    //         <span key={index} className="line-through">
                    //             {text}
                    //         </span>
                    //     );
                    // }
                    // if (node.format & IS_UNDERLINE) {
                    //     text = (
                    //         <span key={index} className="underline">
                    //             {text}
                    //         </span>
                    //     );
                    // }
                    if (node.format & IS_CODE) {
                        text = (
                            <code key={index} className={styles.code}>
                                {text}
                            </code>
                        );
                    }
                    // if (node.format & IS_SUBSCRIPT) {
                    //     text = <sub key={index}>{text}</sub>;
                    // }
                    // if (node.format & IS_SUPERSCRIPT) {
                    //     text = <sup key={index}>{text}</sup>;
                    // }

                    return text;
                }

                if (node == null) {
                    return null;
                }

                // which does not return checked: false (only true - i.e. there is no prop for false)
                const serializedChildrenFn = (node: SerializedLexicalNode): JSX.Element | null => {
                    if (node.children == null) {
                        return null;
                    } else {
                        if (node?.type === 'list' && node?.listType === 'check') {
                            for (const item of node.children) {
                                if (!item?.checked) {
                                    item.checked = false;
                                }
                            }
                            return RichText({ nodes: node.children });
                        } else {
                            return RichText({ nodes: node.children });
                        }
                    }
                };

                const serializedChildren = serializedChildrenFn(node);

                switch (node.type) {
                    case 'linebreak': {
                        return <br key={index} />;
                    }
                    case 'paragraph': {
                        return <Paragraph key={index} content={serializedChildren} />;
                    }
                    case 'heading': {
                        const tag = node?.tag as HeadingProps['heading'];
                        return <Heading key={index} heading={tag} content={serializedChildren} />;
                    }
                    case 'list': {
                        return <UnorderedList key={index} content={serializedChildren} />;
                    }
                    case 'listitem': {
                        return (
                            <li key={index} value={node?.value}>
                                {serializedChildren}
                            </li>
                        );
                    }
                    case 'quote': {
                        return <Quote key={index} content={serializedChildren} />;
                    }
                    case 'link': {
                        return (
                            <a key={index} href={node.fields.url || ''} className={styles.link} target={'target="_blank"'}>
                                {serializedChildren}
                            </a>
                        );

                        // TODO: internal links
                        // return `<a href="${getLinkForPage(attributes.doc)}"${
                        //   attributes.newTab ? ' target=_"blank"' : ''
                        // } rel="${attributes?.rel ?? ''}${
                        //   attributes?.sponsored ? ' sponsored' : ''
                        // }${attributes?.nofollow ? ' nofollow' : ''}">${serializedChildren}</a>` // TODO: Check doc link handling
                    }
                    case 'inline-image': {
                        // TODO: inline-images based on InlineImagePlugin
                        return (
                            <span key={index} style={{ fontStyle: 'italic' }}>
                                {' '}
                                (An inline image will appear here! Honest!){' '}
                            </span>
                        );
                    }
                    case 'block': {
                        if (node.fields.blockType === 'codeBlock') {
                            return <CodeBlock content={node.fields.code} />;
                        }
                    }
                    default:
                        return null;
                }
            })}
        </Fragment>
    );
}
