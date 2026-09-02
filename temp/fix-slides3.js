const fs = require('fs');
const path = require('path');

const baseDir = 'D:/新课开发/供应链/AI版/11 文化基建：供应链自动化推进中不能松手的一线信任与安全感/PPT/slides';

const files = [
  'slide-29.js', 'slide-37.js', 'slide-40.js', 'slide-41.js',
  'slide-43.js', 'slide-44.js', 'slide-46.js', 'slide-54.js',
  'slide-56.js', 'slide-77.js', 'slide-79.js', 'slide-80.js',
  'slide-99.js', 'slide-100.js', 'slide-101.js', 'slide-105.js',
  'slide-106.js', 'slide-108.js'
];

function fixFileContent(content) {
  const lines = content.split('\n');
  const fixedLines = [];

  for (let line of lines) {
    // Skip lines that don't have string-containing quotes that could be inner quotes
    if (!line.includes('"')) {
      fixedLines.push(line);
      continue;
    }

    // For lines with property assignments that contain strings with inner quotes
    // Pattern: propertyName("content with "inner quotes" here", ...)
    // We need to find the string boundaries and replace inner quotes

    // Simple heuristic: find patterns like "text"text" where quotes appear consecutively
    // or patterns like "text" followed by more Chinese chars and another "

    // Replace all " that appear to be inner quotes (not string delimiters)
    // with full-width brackets. We detect inner quotes as:
    // - quotes that are NOT at position 0 (after indentation) or just before , {
    // - specifically: a quote that follows a Chinese/full-width character

    // First handle simple case: ""something"" (triple or more consecutive quotes)
    // Replace all " in sequences of 3+ with 「
    line = line.replace(/"+([^"]*)"+/g, (match, content) => {
      if (match.includes('"')) {
        // There are consecutive quotes or inner quotes
        // Replace all quotes in this segment with 「 or 」 alternating
        let result = '';
        let open = true;
        for (const char of match) {
          if (char === '"') {
            result += open ? '「' : '」';
            open = !open;
          } else {
            result += char;
          }
        }
        return result;
      }
      return match;
    });

    // For other cases with inner quotes, find addText/property patterns
    // Match: (whatever is before) "content" (whatever after)
    // where content has more than 2 quotes total

    // More general fix: replace quotes that are between Chinese characters
    // with full-width brackets
    // Pattern: Chinese char followed by " or " followed by Chinese char

    // Use a different approach: for each " in the line, check if it's an inner quote
    // An inner quote is one that:
    // - is NOT the opening delimiter (first " after some text like addText(")
    // - is NOT the closing delimiter (last " before , { or similar)
    // - is preceded by a non-quote char and followed by a non-quote char

    // Let's try a regex that matches string: "content" where content may have inner quotes
    // and replace the inner quotes

    // Match: after addText( or similar, find "..." where ... has quotes inside
    const stringPattern = /(\brequire\s*\(\s*"[^"]*")|(\b\w+\s*\(\s*"[^"]*")/g;

    fixedLines.push(line);
  }

  return fixedLines.join('\n');
}

function fixFileContentV2(content) {
  // Process line by line with a state machine approach
  const lines = content.split('\n');
  const fixedLines = [];

  for (let line of lines) {
    // Check if line has problematic inner quotes
    // A line has inner quotes if:
    // 1. It contains a string assignment with more than 2 quotes total
    // 2. Or it has consecutive quotes

    // First, handle the case of triple+ quotes: addText(""content"" or similar
    // This is where we have "" at start (empty string) or "" at end or "" in middle

    // Pattern: addText(""something"", {  -> addText("「something」", {
    // The issue is quotes appearing where they shouldn't - as content

    // Replace patterns like:
    // - slide.addText(""text"", { -> slide.addText("「text」", {
    // - title: "text"text", -> title: "text「text」,

    // General pattern: within a string "..." if we see ", " patterns where a quote appears
    // immediately after a Chinese char (or vice versa), it's an inner quote

    // Use a simple char-by-char analysis for each line
    let result = '';
    let i = 0;
    let inString = false;
    let stringStartQuote = -1;

    while (i < line.length) {
      const char = line[i];

      if (char === '"' && !inString) {
        // Entering string
        inString = true;
        stringStartQuote = i;
        result += char;
        i++;
      } else if (char === '"' && inString) {
        // Could be closing quote or inner quote
        // Look ahead: is there more content after this quote before another " or , { etc?

        // Find the next significant character after this quote
        let nextNonSpace = i + 1;
        while (nextNonSpace < line.length && line[nextNonSpace] === ' ') nextNonSpace++;

        // Find the previous significant character before this quote
        let prevNonSpace = i - 1;
        while (prevNonSpace >= 0 && line[prevNonSpace] === ' ') prevNonSpace--;

        // If next char is " followed by Chinese or alpha, this might be inner quote
        // If next char is , or { after this quote, it's likely closing
        // If prev char is Chinese/alpha and next is Chinese/alpha, this is inner quote

        const prevChar = prevNonSpace >= 0 ? line[prevNonSpace] : '';
        const nextChar = nextNonSpace < line.length ? line[nextNonSpace] : '';

        const isPrevChinese = /[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]/.test(prevChar);
        const isNextChinese = /[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef]/.test(nextChar);
        const isNextQuote = nextChar === '"';
        const isNextCommaOrBrace = nextChar === ',' || nextChar === '{';

        if (isPrevChinese && isNextChinese) {
          // This quote is between two Chinese chars - it's an inner quote
          result += '「';
          i++;
        } else if (isPrevChinese && isNextQuote) {
          // Quote after Chinese followed by another quote - inner quote
          result += '」';
          i++;
        } else if (isNextCommaOrBrace || (isNextChinese && prevChar !== '"')) {
          // This is likely the closing quote
          result += '"';
          inString = false;
          i++;
        } else if (isNextQuote) {
          // Next char is a quote - could be inner or start of new string
          // If we're deep in the string and see another quote, it's inner
          result += '」';
          i++;
        } else {
          // Default - treat as closing or keep as is
          result += '"';
          inString = false;
          i++;
        }
      } else {
        result += char;
        i++;
      }
    }

    fixedLines.push(result);
  }

  return fixedLines.join('\n');
}

// Better approach: use AST-style parsing
function fixFileContentV3(content) {
  const lines = content.split('\n');
  const fixedLines = [];

  for (let line of lines) {
    // Skip lines that don't look like they have the issue
    if (!line.includes('"') || !line.match(/["\"].*["\"]/)) {
      fixedLines.push(line);
      continue;
    }

    // Handle specific problematic patterns

    // Pattern 1: slide.addText(""content"", {  -> slide.addText("「content」", {
    // Here we have: addText(" + " + content + " + " + , {
    // The middle quotes are actually content (a decorative quote character)
    line = line.replace(/addText\("\""/g, 'addText("「"');
    line = line.replace(/""\s*,\s*\{/g, '」, {');

    // Pattern 2: title: "text"text", -> title: "text「text」,
    line = line.replace(/"([^"]*)"([^",\n]+)"(,\s*)$/g, (m, p1, p2, p3) => {
      return `"${p1}「${p2}」${p3}`;
    });

    // Pattern 3: slide.addText("text"text"", { -> slide.addText("text「text」", {
    // This is when we have addText("content1"content2", {
    line = line.replace(/addText\("([^"]*)"([^"]*)""\s*,\s*\{/g, (m, p1, p2) => {
      return `addText("${p1}「${p2}」", {`;
    });

    // Pattern 4: Other property assignments with inner quotes
    // title: "text"text" -> title: "text「text」
    line = line.replace(/:\s*"([^"]*)"([^"'\n]+)"(,\s*)$/g, (m, p1, p2, p3) => {
      return `: "${p1}「${p2}」${p3}`;
    });

    // Pattern 5: More general - any quote that appears after a Chinese char
    // and before Chinese char or another quote, within a string
    // Replace " that appears between Chinese chars with 「 or 」

    fixedLines.push(line);
  }

  return fixedLines.join('\n');
}

let fixed = 0;
let verified = 0;
let errors = [];

for (const file of files) {
  const filePath = path.join(baseDir, file);

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixFileContentV3(content);

    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      fixed++;
      console.log(`Fixed: ${file}`);
    } else {
      console.log(`No changes: ${file}`);
    }

    // Verify by requiring the module
    try {
      require(filePath);
      verified++;
      console.log(`  Verified OK: ${file}`);
    } catch (e) {
      errors.push({ file, error: e.message });
      console.log(`  Verification FAILED: ${file} - ${e.message}`);
    }

  } catch (e) {
    console.log(`Error: ${file} - ${e.message}`);
    errors.push({ file, error: e.message });
  }
}

console.log('\n--- Summary ---');
console.log(`Fixed: ${fixed} files`);
console.log(`Verified OK: ${verified} files`);
console.log(`Errors: ${errors.length} files`);
if (errors.length > 0) {
  console.log('\nFailed files:');
  errors.forEach(e => console.log(`  ${e.file}: ${e.error}`));
}
