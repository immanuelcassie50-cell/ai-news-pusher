const fs = require("fs");
const vm = require("vm");
const path = require("path");

// Find the slides directory
const base = "D:/新课开发/内训师和表达/系列进阶课";
const entries = fs.readdirSync(base);
const targetDir = entries.find(e => e.includes("12") && e.includes("内训"));
const slidesDir = path.join(base, targetDir, "授课PPT", "slides");
const slidePath = path.join(slidesDir, "slide-98.js");

console.log("Loading:", slidePath);
console.log("File exists:", fs.existsSync(slidePath));

const code = fs.readFileSync(slidePath, "utf8");
console.log("File size:", code.length);
console.log("First 50 chars:", JSON.stringify(code.substring(0, 50)));
console.log("Line 36:", JSON.stringify(code.split("\n")[35].substring(0, 80)));

const out = [];
try {
    new vm.Script(code, { filename: "slide-98.js" });
    out.push("vm:OK");
} catch(e) {
    out.push("vm:ERR:" + e.message);
}
try {
    require(slidePath);
    out.push("require:OK");
} catch(e) {
    out.push("require:ERR:" + e.message);
}

fs.writeFileSync("D:/CC/temp/bom_result3.txt", out.join("\n"));
console.log("Result:", out.join(", "));
