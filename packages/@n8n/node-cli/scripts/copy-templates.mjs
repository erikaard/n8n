#!/usr/bin/env node

import glob from 'fast-glob';
import { cp } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Emulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templateFiles = glob.sync(['src/template/templates/**/*'], {
  cwd: path.resolve(__dirname, '..'),
  ignore: ['**/node_modules', '**/dist'],
  dot: true,
});

await Promise.all(
  templateFiles.map((template) =>
    cp(template, `dist/${template.replace('src/', '')}`, { recursive: true }),
  ),
);
