const fs = require('node:fs');

const line = 'I wrote a program that writes my best line — which is: programs that write programs.';

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', line);
