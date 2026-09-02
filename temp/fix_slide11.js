const fs = require('fs');
const c = fs.readFileSync('slide-11.js', 'utf8');
const lines = c.split('\n');
const line = lines[60];
console.log('Before:', JSON.stringify(line));

// The issue: '从'招人'到'找人' has inner single quotes (U+0027) at positions 19, 22, 24
// Fix: Escape them with backslash
// From: '从'招人'到'找人'
// To: '从\'招人\'到\'找人\'

let fixed = line;
// Find the pattern '从'招人'到'找人' and replace with proper escaping
// Split on the problematic string and reassemble
const bad = "'从'招人'到'找人'";
const good = "'从\\'招人\\'到\\'找人\\'";
fixed = fixed.split(bad).join(good);

lines[60] = fixed;
console.log('After:', JSON.stringify(lines[60]));

fs.writeFileSync('slide-11.js', lines.join('\n'));
console.log('Fixed!');