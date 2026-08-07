import os from 'node:os';
import fs from 'node:fs';
import YAML from 'yaml';
import vscode from '../src/vscode.js';
import warp from '../src/warp.js';
import css from '../src/css.js';

const builds = [
  {
    filename: 'work-shirt-vscode.json',
    contents: JSON.stringify(vscode, null, 2),
  },
  {
    filename: 'work-shirt-warp.yaml',
    contents: YAML.stringify(warp),
  },
  {
    filename: 'work-shirt.css',
    contents: css,
  },
];

for (const { filename, contents } of builds) {
  fs.writeFileSync(`themes/${filename}`, contents);
}

console.log(`\x1b[3${Math.ceil(Math.random() * 10)}m[${new Date().toLocaleTimeString()}] Built!\x1b[0m`);
