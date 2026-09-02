const fs = require("fs");
const vm = require("vm");

// Use the actual working directory where Node.js runs
const slidesDir = process.cwd();
const slidePath = slidesDir + "/slide-98.js";

console.log("CWD:", slidesDir);
console.log("Loading:", slidePath);

const code = fs.readFileSync(slidePath, "utf8");
console.log("File size:", code.length);

// Show the problematic section - lines around the error
const lines = code.split("\n");
console.log("Total lines:", lines.length);

// Show lines 1-5
for (let i = 0; i < 5; i++) {
    console.log("L" + (i+1) + ": " + JSON.stringify(lines[i].substring(0, 80)));
}

// Show lines 34-42
console.log("\n--- Critical section ---");
for (let i = 33; i < 42; i++) {
    console.log("L" + (i+1) + ": " + JSON.stringify(lines[i].substring(0, 100)));
}

// Try to find exact position of error using incremental parsing
const out = [];
for (let i = 0; i < code.length; i++) {
    try {
        new vm.Script(code.substring(0, i), { filename: "slide-98.js" });
    } catch(e) {
        out.push("Error around char " + i + ": " + JSON.stringify(code.substring(Math.max(0,i-20), i+20)));
        out.push("Near: " + JSON.stringify(code.substring(0, i)));
        break;
    }
}
if (out.length === 0) {
    out.push("No parse error found in incremental parse");
}
fs.writeFileSync("D:/CC/temp/bom_result4.txt", out.join("\n"));
console.log(out.join("\n"));
