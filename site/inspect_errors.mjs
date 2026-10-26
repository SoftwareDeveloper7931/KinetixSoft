import fs from 'fs';
import path from 'path';
import { compile } from '@mdx-js/mdx';

const dir = 'src/content/tutorials';
const files = fs.readdirSync(dir);

async function inspect() {
  for (const file of files) {
    if (!file.endsWith('.mdx')) continue;
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    try {
      await compile(content);
    } catch (err) {
      const lineNum = err.line;
      const lines = content.split('\n');
      console.log(`\n================== ${file} ==================`);
      console.log(`Error at line ${lineNum}: ${err.message}`);
      const start = Math.max(0, lineNum - 3);
      const end = Math.min(lines.length - 1, lineNum + 2);
      for (let i = start; i <= end; i++) {
        console.log(`${i + 1}: ${lines[i]}`);
      }
    }
  }
}

inspect();
