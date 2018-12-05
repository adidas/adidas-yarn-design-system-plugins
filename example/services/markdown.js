import { get } from 'lodash';

export function getMarkdownFile(name, lang) {
  const file = name ? `${ name }.${ lang }` : lang;

  return get(process.env.markdown, file);
}
