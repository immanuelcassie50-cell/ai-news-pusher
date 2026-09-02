// Test the exact sequence
const line = 'slide.addText(\u201C机器哪有真人靠谱？\u201D, {';
console.log('Line:', line);

// Try to create a function with this
try {
  const fn = new Function(line);
  console.log('OK - parsed as:', fn.toString().substring(0, 60));
} catch(e) {
  console.log('Error:', e.message);
}

// Also test with a simple version
const simple = 'slide.addText("\u201Ctest\u201D, {';
try {
  new Function(simple);
  console.log('Simple version OK');
} catch(e) {
  console.log('Simple version error:', e.message);
}
