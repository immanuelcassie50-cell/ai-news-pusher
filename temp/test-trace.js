// Debug trace for fixLine function
const line = '    { icon: "○", title: "团队"小病", desc: "被按下去了，所以看起来没什么问题" }';

console.log('Input line:', JSON.stringify(line));
console.log('');

let result = '';
let i = 0;
let step = 0;

while (i < line.length && step < 100) {
  step++;
  const char = line[i];
  const code = char.charCodeAt(0);

  if (line[i] === '\\' && i + 1 < line.length) {
    console.log(`Step ${step}: pos ${i}, char='\\\\', adding escaped char`);
    result += line[i] + line[i + 1];
    i += 2;
    continue;
  }

  if (line[i] === '"') {
    console.log(`Step ${step}: pos ${i}, char='"', STRING START`);
    i++; // skip opening quote
    let content = '';

    while (i < line.length) {
      if (line[i] === '\\') {
        console.log(`  Inner: pos ${i}, escaped char '${line[i]}${line[i+1]}'`);
        content += line[i] + line[i + 1];
        i += 2;
      } else if (line[i] === '"') {
        console.log(`  Inner: pos ${i}, char='"', STRING END, content=${JSON.stringify(content)}`);
        i++; // skip closing quote
        break;
      } else {
        content += line[i];
        i++;
      }
    }

    console.log(`  Adding string: ${JSON.stringify(content)}`);
    result += '"' + content + '"';
  } else {
    result += line[i];
    i++;
  }
}

console.log('');
console.log('Result:', JSON.stringify(result));
console.log('Match:', result === line);