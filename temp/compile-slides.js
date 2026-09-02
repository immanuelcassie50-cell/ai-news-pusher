// compile-slides.js
// Compiles all slide JS files into a single PPTX presentation

const path = require("path");
const fs = require("fs");
const pptxgen = require("pptxgenjs");

const SLIDES_DIR = "D:/新课开发/安全/4.特种作业AI考评-应对智能化资质认证新常态/授课PPT/slides";
const OUTPUT_FILE = "D:/新课开发/安全/4.特种作业AI考评-应对智能化资质认证新常态/授课PPT/特种作业AI考评-应对智能化资质认证新常态.pptx";

// Theme: Chinese red + deep red + gray
const theme = {
  primary: "C41E3A",      // Chinese red
  secondary: "8B0000",    // Deep red
  deepGray: "2D3436",     // Deep gray
  mediumGray: "636E72",   // Medium gray
  light: "B2BEC3",        // Light gray
  bg: "F5F5F5"            // Background
};

// Get all slide files and sort them properly
function getSlideFiles() {
  const files = fs.readdirSync(SLIDES_DIR).filter(f => f.startsWith("slide-") && f.endsWith(".js"));

  // Sort with natural/numeric ordering
  files.sort((a, b) => {
    // Extract number from slide-NNN.js
    const numA = parseInt(a.match(/^slide-(\d+)\.js$/)[1], 10);
    const numB = parseInt(b.match(/^slide-(\d+)\.js$/)[1], 10);
    return numA - numB;
  });

  return files;
}

async function compile() {
  console.log("Starting slide compilation...");
  console.log("Theme:", theme);

  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "特种作业AI考评-应对智能化资质认证新常态";
  pres.author = "Course 4";

  const slideFiles = getSlideFiles();
  console.log("Found " + slideFiles.length + " slide files");

  // Show first 10 and last 5 for verification
  console.log("First 10:", slideFiles.slice(0, 10));
  console.log("Last 5:", slideFiles.slice(-5));

  let successCount = 0;
  let errorCount = 0;
  const errors = [];

  for (const file of slideFiles) {
    const filePath = path.join(SLIDES_DIR, file);
    try {
      const slideModule = require(filePath);
      if (typeof slideModule.createSlide === "function") {
        slideModule.createSlide(pres, theme);
        successCount++;
      } else {
        console.error("[WARN] " + file + " - createSlide is not a function");
        errorCount++;
        errors.push({ file, reason: "createSlide not a function" });
      }
    } catch (err) {
      console.error("[ERROR] " + file + ": " + err.message);
      errorCount++;
      errors.push({ file, reason: err.message });
    }
  }

  console.log("\nCompilation complete: " + successCount + " slides added, " + errorCount + " errors");

  if (errors.length > 0) {
    console.log("\nErrors:");
    errors.forEach(e => console.log("  " + e.file + ": " + e.reason));
  }

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  await pres.writeFile({ fileName: OUTPUT_FILE });
  console.log("\nPPTX saved to: " + OUTPUT_FILE);

  // Report file size
  const stats = fs.statSync(OUTPUT_FILE);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log("File size: " + sizeMB + " MB (" + stats.size + " bytes)");
}

compile().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
