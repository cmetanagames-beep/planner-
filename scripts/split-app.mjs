import { copyFileSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const appDir = path.join(root, 'app');
const htmlPath = path.join(appDir, 'index.html');
const backupPath = path.join(appDir, 'index.pre-split.html');
const cssPath = path.join(appDir, 'assets', 'css', 'app.css');
const jsPath = path.join(appDir, 'assets', 'js', 'app.js');

mkdirSync(path.dirname(cssPath), { recursive: true });
mkdirSync(path.dirname(jsPath), { recursive: true });
copyFileSync(htmlPath, backupPath);

try {
  const html = readFileSync(htmlPath, 'utf8');
  const style = html.match(/\s*<style>\s*([\s\S]*?)\s*<\/style>/);
  const script = html.match(/\s*<script>\s*([\s\S]*?)\s*<\/script>/);
  if (!style || !script) throw new Error('Не найден единый встроенный CSS или JavaScript');

  writeFileSync(cssPath, style[1].trim() + '\n', 'utf8');
  writeFileSync(jsPath, script[1].trim() + '\n', 'utf8');
  const split = html
    .replace(style[0], '\n<link rel="stylesheet" href="assets/css/app.css">')
    .replace(script[0], '\n<script src="assets/js/app.js"></script>\n');
  writeFileSync(htmlPath, split, 'utf8');
  rmSync(backupPath);
  console.log(`Готово: HTML ${split.length} байт, CSS ${style[1].length}, JS ${script[1].length}`);
} catch (error) {
  renameSync(backupPath, htmlPath);
  throw error;
}
