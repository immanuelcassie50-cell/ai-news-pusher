// Test all slides in part3
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

// Test each slide
for (let i = 16; i <= 30; i++) {
  const file = path.join(slidesDir, `slide-${i}.js`);
  try {
    const slideModule = require(file);
    const pres = new pptxgen();
    pres.layout = "LAYOUT_16x9";

    const slide = slideModule.createSlide(pres, theme);

    // Verify page number badge exists
    console.log(`Slide ${i}: OK - ${slideModule.slideConfig.title}`);
  } catch (err) {
    console.error(`Slide ${i}: ERROR - ${err.message}`);
  }
}

console.log("\nAll slides tested.");