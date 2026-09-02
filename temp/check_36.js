const vm = require('vm');
const fs = require('fs');

const fname = process.argv[2];
const code = fs.readFileSync(fname, 'utf8');
try {
  new vm.Script(code, { filename: fname });
  console.log('OK');
} catch(e) {
  console.log('ERROR: ' + e.message);
  // Try to show the line number from stack
  const m = e.stack.match(/line (\d+)/);
  if (m) console.log('Near line: ' + m[1]);
}
