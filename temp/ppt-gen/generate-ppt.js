// generate-ppt.js - Generate full course PPT
const pptxgen = require("pptxgenjs");
const path = require("path");
const fs = require("fs");

// Theme configuration
const theme = {
  primary: "8B0000",    // Dark red
  secondary: "4A4A4A",  // Dark gray
  accent: "C41E3A",     // Red
  light: "D4D4D4",      // Light gray
  bg: "FAFAFA"          // Light background
};

// Output directory
const outputDir = path.join(__dirname, "output");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create presentation
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "文化基建：数字化转型推进中不能松手的员工信任与变革共识";
pres.author = "课程开发团队";
pres.subject = "第11章 数字化转型文化基建";

// Load and create all slides (01-120)
const totalSlides = 120;
console.log(`Generating ${totalSlides} slides...`);

for (let i = 1; i <= totalSlides; i++) {
  const slideNum = String(i).padStart(2, "0");
  const slidePath = path.join(__dirname, "slides", `slide-${slideNum}.js`);

  if (fs.existsSync(slidePath)) {
    try {
      const slideModule = require(slidePath);
      slideModule.createSlide(pres, theme);
      console.log(`✓ Slide ${slideNum} added`);
    } catch (err) {
      console.error(`✗ Error loading slide ${slideNum}:`, err.message);
    }
  } else {
    console.warn(`⚠ Slide ${slideNum} not found`);
  }
}

// Generate the PPTX file
const outputPath = path.join(outputDir, "文化基建-数字化转型员工信任与变革共识.pptx");
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`\n✓ PPT generated successfully: ${outputPath}`);
  })
  .catch(err => {
    console.error("✗ Error generating PPT:", err);
  });
