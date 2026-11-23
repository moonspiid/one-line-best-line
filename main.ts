const fs = require('node:fs');

const line = 'I wrote a program that writes my best line — which is: programs that write programs.';
const out = '/output/entry.txt';

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync(out, line);
