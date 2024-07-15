import { bundledLanguages, getHighlighter } from 'shiki/bundle/web';



export const codeToHtml = async ({ code, language }) => {
    const highlighter = await getHighlighter({
        themes: ['github-light', 'github-dark'],
        langs: [
            ...Object.keys(bundledLanguages),
            {
                id: 'antlers',
                scopeName: 'text.html.statamic',
                embeddedLangs: ['html'],
                ...antlers,
            },
            {
                id: 'blade',
                scopeName: 'text.html.php.blade',
                embeddedLangs: ['html', 'php'],
                ...blade,
            },
        ],
    });

    return highlighter.codeToHtml(code, {
        lang: lang,
        themes: {
            dark: 'github-dark',
            light: 'github-light',
        },
    });
};
