const fs = require('fs');
const path = "D:/新课开发/专精特新/03核心技术人才招募与保留对抗大厂虹吸效应/03演示文稿/slides/";
const files = [
    "slide-07.js", "slide-08.js", "slide-09.js", "slide-10.js", "slide-11.js", "slide-12.js",
    "slide-18.js", "slide-20.js", "slide-21.js", "slide-23.js", "slide-24.js", "slide-25.js",
    "slide-29.js", "slide-30.js", "slide-31.js", "slide-32.js", "slide-37.js", "slide-39.js",
    "slide-42.js", "slide-43.js", "slide-45.js", "slide-49.js", "slide-60.js", "slide-62.js"
];

function isChinese(char) {
    const code = char.codePointAt(0);
    return code >= 0x4E00 && code <= 0x9FFF;
}

files.forEach(f => {
    const filePath = path + f;
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    let result = [];
    let i = 0;

    while (i < content.length) {
        const char = content[i];

        if (char === '\\' && i + 1 < content.length) {
            const nextChar = content[i + 1];

            if (nextChar === '"') {
                // Find character that precedes the backslash sequence
                let precedingChar = null;
                let j = i - 1;
                while (j >= 0 && content[j] === '\\') {
                    j--;
                }
                if (j >= 0) {
                    precedingChar = content[j];
                }

                // Find character that follows the quote
                let followingChar = null;
                let k = i + 2;
                while (k < content.length && (content[k] === ' ' || content[k] === '\t')) {
                    k++;
                }
                if (k < content.length) {
                    followingChar = content[k];
                }

                // Keep escape if Chinese context
                if ((precedingChar && isChinese(precedingChar)) || (followingChar && isChinese(followingChar))) {
                    result.push('\\');
                    result.push('"');
                    i += 2;
                } else {
                    // Wrongly escaped - remove backslash
                    result.push('"');
                    i += 2;
                }
            } else {
                result.push(char);
                i++;
            }
        } else {
            result.push(char);
            i++;
        }
    }

    content = result.join('');

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log("Fixed: " + f);
    } else {
        console.log("No change: " + f);
    }
});