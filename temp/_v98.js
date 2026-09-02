
const fs = require('fs');
const vm = require('vm');
const path = process.argv[1];
const code = fs.readFileSync(path, 'utf8');
try {
  new vm.Script(code, { filename: path });
  console.log('OK');
} catch(e) {
  const m = e.stack.match(/line (\d+)/);
  const line = m ? ' at line '+m[1] : '';
  console.log('ERROR: ' + e.message + line);
}
