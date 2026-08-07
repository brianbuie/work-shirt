import { palette, hexYeah } from './colors.js';

const hexy = hexYeah(palette);

const root = `:root {
${Object.entries(hexy)
  .map(([name, hex]) => `\t--shirt-${name}: ${hex};`)
  .join('\n')}
}`;

export default root;
