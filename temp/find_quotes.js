const fs = require('fs');
const path = '/d/新课开发/金融/6、保险增员面谈与代理人团队裂变——从招人到留人/授课PPT/slides';

const failed = [9,10,11,12,13,14,32,34,35,37,39,40,41,50,58,61,68,73,79];

failed.forEach(n => {
  const fname = path + '/slide-' + n + '.js';
  if (!fs.existsSync(fname)) { console.log('NOT FOUND:', fname); return; }
  const content = fs.readFileSync(fname, 'utf8');
  const lines = content.split('\n');
  const problematic = [];
  lines.forEach((line, i) => {
    if (line.includes('‘') || line.includes('’') || 
        line.includes('“') || line.includes('”')) {
      problematic.push(i+1);
    }
  });
  if (problematic.length > 0) {
    console.log('slide-' + n + '.js:', problematic.join(','), 'lines have curly quotes');
  } else {
    console.log('slide-' + n + '.js: no curly quotes');
  }
});
