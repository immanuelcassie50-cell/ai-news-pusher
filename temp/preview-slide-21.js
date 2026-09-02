// Temporary preview script for slide-21
const pptxgen = require("pptxgenjs");
const slide21 = require("D:/新课开发/大健康/10 新进医护人员规培与职业融入/授课PPT/slides/slide-21.js");

const theme = {
  primary: "C41E3A",
  secondary: "2D2D2D",
  accent: "8A8A8A",
  light: "D4D4D4",
  bg: "FAFAFA"
};

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Preview";

try {
  slide21.createSlide(pres, theme);
  console.log("Slide 21 created successfully!");

  // Save to temp folder
  pres.writeFile({ fileName: "D:/CC/temp/slide-21-preview.pptx" })
    .then(() => {
      console.log("Preview saved to D:/CC/temp/slide-21-preview.pptx");
    })
    .catch(err => {
      console.error("Error saving file:", err);
    });
} catch (err) {
  console.error("Error creating slide:", err);
  process.exit(1);
}
