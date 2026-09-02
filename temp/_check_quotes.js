const fs = require('fs');
const base = 'D:/新课开发/内训师和表达/系列进阶课';
const entries = fs.readdirSync(base);
const target = entries.find(e => e.includes('12') && e.includes('内训'));
const slidesDir = base + '/' + target + '/授课PPT/slides';
const code = fs.readFileSync(slidesDir + '/slide-98.js', 'utf8');
const lines = code.split('\n');
const line36 = lines[35];
const line38 = lines[37];

// Find all curly quotes and their positions
function findCurlyQuotes(line, label) {
    const results = [];
    for (let i = 0; i < line.length; i++) {
        const c = line.charCodeAt(i);
        if (c === 0x201C || c === 0x201D) {
            results.push({label, pos: i, char: c === 0x201C ? 'LEFT' : 'RIGHT', code: c.toString(16)});
        }
    }
    return results;
}

const quotes = [];
quotes.push(...findCurlyQuotes(line36, 'L36'));
quotes.push(...findCurlyQuotes(line38, 'L38'));

quotes.forEach(q => {
    console.log(q.label + ' pos ' + q.pos + ': ' + q.char + ' U+' + q.code);
    console.log('  Context: ' + JSON.stringify(line36.substring(Math.max(0,q.pos-3), q.pos+5)));
});

console.log('\nTotal curly quotes found:', quotes.length);
