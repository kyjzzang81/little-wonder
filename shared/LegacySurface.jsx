import {useLayoutEffect, useMemo} from 'react';

export function parseLegacyDocument(source) {
  const parser = new DOMParser();
  const document = parser.parseFromString(source, 'text/html');
  document.querySelectorAll('script, link[rel="stylesheet"]').forEach((node) => node.remove());
  return {
    title: document.title,
    body: document.body.innerHTML,
    styles: [...document.querySelectorAll('style')].map((style) => style.textContent).join('\n'),
  };
}

export function useLegacyStyles(source, theme) {
  const page = useMemo(() => parseLegacyDocument(source), [source]);
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.dataset.legacySurface = 'true';
    style.textContent = `${page.styles}\n${theme}`;
    document.head.append(style);
    return () => style.remove();
  }, [page, theme]);
  return page;
}
