const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";

const theme = {
  primary: "C41E3A",
  secondary: "2D2D2D",
  accent: "8A8A8A",
  light: "D4D4D4",
  bg: "FAFAFA"
};

// Load slide module
const slideModule = require("D:/新课开发/大健康/10 新进医护人员规培与职业融入/授课PPT/slides/slide-19.js");
slideModule.createSlide(pres, theme);

pres.writeFile({ fileName: "D:/CC/temp/preview-slide-19.pptx" })
  .then(() => {
    console.log("Preview saved: D:/CC/temp/preview-slide-19.pptx");
  })
  .catch(err => {
    console.error("Error:", err);
  });
