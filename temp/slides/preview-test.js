// preview-test.js - Test script for Part 1 slides (03-12)
const pptxgen = require("pptxgenjs");
const path = require("path");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Part 1 Preview Test";
pres.author = "Claude";

const theme = {
  primary: "B91C1C",
  secondary: "374151",
  accent: "EF4444",
  light: "F3F4F6",
  bg: "FFFFFF"
};

const baseDir = "D:/CC/temp/slides";
const testSlides = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log("Testing Part 1 slides (03-12)...\n");

testSlides.forEach(num => {
  const numStr = String(num).padStart(2, "0");
  const filePath = path.join(baseDir, "slide-" + numStr + ".js");
  try {
    const slideModule = require(filePath);
    slideModule.createSlide(pres, theme);
    console.log("Slide " + numStr + " OK");
  } catch (err) {
    console.error("Slide " + numStr + " ERROR:", err.message);
  }
});

const outputPath = "D:/CC/temp/slides/preview-part1.pptx";
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log("\nPreview created: " + outputPath);
  })
  .catch(err => {
    console.error("Write error:", err);
  });