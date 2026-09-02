// Generate PPTX for slides 16-30
const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const theme = {
  primary: "22223b",
  secondary: "c94134",
  accent: "c9ada7",
  light: "f5f5f5",
  bg: "fafafa"
};

const slidesDir = "D:/CC/temp/slides-part3/";
const outputDir = "D:/CC/temp/slides-part3/output/";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.title = "招商证券高净值沟通教学 - Part 3 (Slides 16-30)";

  // Load and create each slide
  for (let i = 16; i <= 30; i++) {
    const file = path.join(slidesDir, `slide-${i}.js`);
    try {
      const slideModule = require(file);
      slideModule.createSlide(pres, theme);
      console.log(`Added slide ${i}: ${slideModule.slideConfig.title}`);
    } catch (err) {
      console.error(`Error loading slide ${i}: ${err.message}`);
    }
  }

  // Write output
  const outputPath = path.join(outputDir, "part3_slides_16-30.pptx");
  await pres.writeFile({ fileName: outputPath });
  console.log(`\nOutput: ${outputPath}`);
}

main().catch(console.error);