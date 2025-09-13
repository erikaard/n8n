import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templateFiles = glob.sync(['src/template/templates/**/*'], {
  cwd: path.resolve(__dirname, '..'),
  ignore: ['**/node_modules', '**/dist'],
  dot: true,
});
