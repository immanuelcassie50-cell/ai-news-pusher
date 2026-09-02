// Test: does \u201C parse correctly when inside a string?
const testStr = '\u201C';  // This should be literal backslash-u-201C
console.log('Test string length:', testStr.length);
console.log('First char code:', testStr.charCodeAt(0).toString(16));
console.log('First char:', testStr[0]);

// The actual line from the file
const line = '  slide.addText(\u201C机器哪有真人靠谱？\u201D, {';
console.log('\nActual line:', line);

try {
  new Function(line);
  console.log('Line parses OK');
} catch(e) {
  console.log('Line error:', e.message);
}
