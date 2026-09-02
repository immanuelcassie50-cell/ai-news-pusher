// compile.js - Compile all slides into final PPTX
const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const theme = {
  primary: "2b2d42",    // Deep navy blue - titles
  secondary: "8d99ae",  // Medium gray blue - body text
  accent: "ef233c",     // Red - highlights
  light: "edf2f4",      // Light gray - accents
  bg: "ffffff"          // White background
};

// Create presentation
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "海权与陆权：两大地缘范式的现代演变";
pres.author = "AI Course";
pres.subject = "地缘政治学";
pres.company = "";

// Get all slide files and sort them (slide-01 through slide-64)
const slideDir = __dirname;
const slideFiles = fs.readdirSync(slideDir)
  .filter(f => f.match(/^slide-\d+\.js$/))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

console.log(`Found ${slideFiles.length} slide files`);

// Filter to only slides 01-64
const validSlides = slideFiles.filter(f => {
  const num = parseInt(f.match(/\d+/)[0]);
  return num >= 1 && num <= 64;
});

console.log(`Processing ${validSlides.length} slides (01-64)`);

let successCount = 0;
let errorCount = 0;

for (const file of validSlides) {
  try {
    const slidePath = path.join(slideDir, file);
    delete require.cache[require.resolve(slidePath)];
    const module = require(slidePath);

    if (module.createSlide) {
      module.createSlide(pres, theme);
      successCount++;
      process.stdout.write(".");
    } else {
      console.error(`\n${file}: createSlide function not found`);
      errorCount++;
    }
  } catch (err) {
    console.error(`\n${file}: ${err.message}`);
    errorCount++;
  }
}

console.log(`\n\nCompiled ${successCount} slides successfully, ${errorCount} errors`);

// Output path - ./output/presentation.pptx
const outputDir = path.join(__dirname, "output");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, "presentation.pptx");

pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`\nOutput saved to: ${outputPath}`);
  })
  .catch(err => {
    console.error(`\nFailed to save: ${err.message}`);
  });
