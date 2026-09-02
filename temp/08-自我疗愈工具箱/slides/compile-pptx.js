/**
 * PPT Compile Script - 自我疗愈工具箱
 * Compiles all slide-XX.js files into a single .pptx presentation
 */

const pptxgen = require("pptxgenjs");
const path = require("path");
const fs = require("fs");

// Theme: red-gray-gold (light background)
const theme = {
  primary: "B81025",   // Deep red
  secondary: "4A4A4A", // Dark gray (text)
  accent: "C9A96E",    // Gold accent
  bg: "FAF8F5",        // Light warm background
  light: "8B8B8B"      // Light gray (subtitles)
};

// Output path
const outputDir = path.join(__dirname);
const outputPath = path.join(outputDir, "..", "..", "..", "..", "新课开发", "心理学", "08-自我疗愈工具箱：可以每天用的心理调节方法", "PPT课件");

// Ensure output directory exists
const pptxOutputDir = path.resolve(outputPath);
if (!fs.existsSync(pptxOutputDir)) {
  fs.mkdirSync(pptxOutputDir, { recursive: true });
}

// Create presentation
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "自我疗愈工具箱：可以每天用的心理调节方法";
pres.author = "课程开发团队";
pres.subject = "心理学课程";

// Read all slide files and sort them properly
const slidesDir = __dirname;
const slideFiles = fs.readdirSync(slidesDir)
  .filter(f => f.match(/^slide-\d+\.js$/))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

console.log(`Found ${slideFiles.length} slide files`);
console.log(`Slides: ${slideFiles.map(f => f.replace('slide-','').replace('.js','')).join(', ')}`);

// Load and create each slide
let loadedCount = 0;
let errorCount = 0;

for (const file of slideFiles) {
  try {
    const slidePath = path.join(slidesDir, file);
    const slideModule = require(slidePath);

    if (slideModule.createSlide && typeof slideModule.createSlide === 'function') {
      slideModule.createSlide(pres, theme);
      loadedCount++;

      // Progress indicator
      const num = parseInt(file.match(/\d+/)[0]);
      if (num % 20 === 0 || num === slideFiles.length) {
        console.log(`  Loaded slide ${num} (${loadedCount}/${slideFiles.length})`);
      }
    } else {
      console.error(`  ERROR: ${file} does not export createSlide function`);
      errorCount++;
    }
  } catch (err) {
    console.error(`  ERROR loading ${file}: ${err.message}`);
    errorCount++;
  }
}

console.log(`\nSummary: ${loadedCount} slides loaded, ${errorCount} errors`);

// Save the presentation
const filename = "08-自我疗愈工具箱.pptx";
const fullPath = path.join(pptxOutputDir, filename);

pres.writeFile({ fileName: fullPath })
  .then(() => {
    console.log(`\n✅ Presentation saved to:`);
    console.log(`   ${fullPath}`);
  })
  .catch(err => {
    console.error(`\n❌ Error saving presentation: ${err.message}`);
  });
