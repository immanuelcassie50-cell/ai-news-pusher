// compile-slides-v2.js
// Robust compilation of slide JS files into a single PPTX

const path = require("path");
const fs = require("fs");
const vm = require("vm");
const pptxgen = require("pptxgenjs");

const SLIDES_DIR = "D:/新课开发/安全/4.特种作业AI考评-应对智能化资质认证新常态/授课PPT/slides";
const OUTPUT_FILE = "D:/新课开发/安全/4.特种作业AI考评-应对智能化资质认证新常态/授课PPT/特种作业AI考评-应对智能化资质认证新常态.pptx";

const NODE_PATH = "/d/新课开发/AI时代系列课/AI时代的内容创作/授课PPT/slides/node_modules";

// Theme: Chinese red + deep red + gray
const theme = {
  primary: "C41E3A",
  secondary: "8B0000",
  deepGray: "2D3436",
  mediumGray: "636E72",
  light: "B2BEC3",
  bg: "F5F5F5"
};

// Get all slide files sorted numerically
function getSlideFiles() {
  const files = fs.readdirSync(SLIDES_DIR).filter(f => f.startsWith("slide-") && f.endsWith(".js"));
  files.sort((a, b) => {
    const numA = parseInt(a.match(/^slide-(\d+)\.js$/)[1], 10);
    const numB = parseInt(b.match(/^slide-(\d+)\.js$/)[1], 10);
    return numA - numB;
  });
  return files;
}

// Clean slide code - remove require("pptxgenjs") line
function cleanSlideCode(code) {
  // Remove the const pptxgen = require("pptxgenjs"); line
  return code.replace(/const\s+pptxgen\s*=\s*require\s*\(\s*["']pptxgenjs["']\s*\)\s*;?\s*\n?/g, '');
}

// Load and execute slide module in isolated context
function loadSlideModule(filePath, pres, theme) {
  const code = fs.readFileSync(filePath, "utf8");
  
  // Create a clean module code
  let cleanCode = cleanSlideCode(code);
  
  // Create sandbox with minimal globals
  const sandbox = {
    console: console,
    require: (mod) => {
      if (mod === "pptxgenjs") {
        return pptxgen;
      }
      // Try to load from NODE_PATH
      try {
        const modPath = require.resolve(mod, { paths: [NODE_PATH] });
        return require(modPath);
      } catch (e) {
        return require(mod);
      }
    },
    module: { exports: {} },
    exports: {},
    setTimeout,
    setInterval,
    clearTimeout,
    clearInterval,
    Buffer,
    process,
    __dirname: path.dirname(filePath),
    __filename: filePath
  };
  sandbox.global = sandbox;
  
  try {
    const script = new vm.Script(cleanCode, { filename: path.basename(filePath) });
    const context = vm.createContext(sandbox);
    script.runInContext(context);
    
    if (typeof sandbox.module.exports.createSlide === "function") {
      sandbox.module.exports.createSlide(pres, theme);
      return { success: true };
    } else {
      return { success: false, error: "createSlide not a function" };
    }
  } catch (err) {
    return { success: false, error: err.message };
  }
}

async function compile() {
  console.log("Starting robust slide compilation...");
  console.log("Theme:", theme);

  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "特种作业AI考评-应对智能化资质认证新常态";
  pres.author = "Course 4";

  const slideFiles = getSlideFiles();
  console.log("Found " + slideFiles.length + " slide files");
  console.log("First 10:", slideFiles.slice(0, 10));
  console.log("Last 5:", slideFiles.slice(-5));

  let successCount = 0;
  let errorCount = 0;
  const errors = [];

  for (let i = 0; i < slideFiles.length; i++) {
    const file = slideFiles[i];
    const filePath = path.join(SLIDES_DIR, file);
    process.stdout.write((i + 1) + "/" + slideFiles.length + " " + file + "... ");
    
    const result = loadSlideModule(filePath, pres, theme);
    if (result.success) {
      successCount++;
      console.log("OK");
    } else {
      errorCount++;
      errors.push({ file, reason: result.error });
      console.log("ERROR: " + result.error);
    }
  }

  console.log("\n===================");
  console.log("Compilation complete: " + successCount + " slides added, " + errorCount + " errors");

  if (errors.length > 0) {
    console.log("\nErrors summary:");
    errors.forEach(e => console.log("  " + e.file + ": " + e.reason));
  }

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  await pres.writeFile({ fileName: OUTPUT_FILE });
  console.log("\nPPTX saved to: " + OUTPUT_FILE);

  const stats = fs.statSync(OUTPUT_FILE);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log("File size: " + sizeMB + " MB (" + stats.size + " bytes)");
}

compile().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
