const tests = [
  { name: 'basic with escaped quote at end', code: 'const x = "hello\\""' },
  { name: 'basic with escaped quote at start', code: 'const x = "\\"hello"' },
  { name: 'with Chinese text', code: 'const x = "创意不错"' },
  { name: 'with Chinese and escaped quote', code: 'const x = "\\"创意不错\\""' },
  { name: 'full line 113 variant', code: 'const x = "\\"创意不错，但是不是太激进了？\\""' },
];

for (const t of tests) {
  try {
    eval(t.code);
    console.log(t.name + ': SUCCESS');
  } catch(e) {
    console.log(t.name + ': FAILED - ' + e.message);
  }
}
