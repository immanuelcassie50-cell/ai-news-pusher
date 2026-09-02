const fs = require("fs");
const vm = require("vm");
const path = require("path");

try {
    const base = "D:/新课开发/内训师和表达/系列进阶课";
    const entries = fs.readdirSync(base);
    const targetEntry = entries.find(e => e.includes("12") && e.includes("内训"));
    const slidesDir = path.join(base, targetEntry, "授课PPT", "slides");
    const slidePath = path.join(slidesDir, "slide-98.js");

    const code = fs.readFileSync(slidePath, "utf8");
    const lines = code.split("\n");

    const crlfCount = (code.match(/\r\n/g) || []).length;
    const lfCount = (code.match(/\n/g) || []).length - crlfCount;

    const result = [];
    result.push("Size: " + code.length);
    result.push("Has BOM: " + (code.charCodeAt(0) === 0xFEFF));
    result.push("CRLF: " + crlfCount + ", LF: " + lfCount);
    result.push("Line1: " + JSON.stringify(lines[0]));
    result.push("Line36: " + JSON.stringify(lines[35]));
    result.push("Line38: " + JSON.stringify(lines[37]));
    result.push("Line39: " + JSON.stringify(lines[38]));

    try {
        new vm.Script(code, { filename: "slide-98.js" });
        result.push("vm:OK");
    } catch(e) {
        result.push("vm:ERROR: " + e.message);
        const match = e.message.match(/line (\d+)/);
        if (match) {
            result.push("errLine:" + match[1]);
        }
    }

    try {
        require(slidePath);
        result.push("require:OK");
    } catch(e) {
        result.push("require:ERROR: " + e.message);
    }

    fs.writeFileSync("D:/CC/temp/node98_parse.txt", result.join("\n"));
} catch(e) {
    fs.writeFileSync("D:/CC/temp/node98_parse.txt", "OUTER ERROR: " + e.message);
}
