const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "不请假的团队：构建AI数字员工协作体系";
pres.author = "罗宏伟";
const theme = {
  primary: "B91C1C",
  secondary: "374151",
  accent: "EF4444",
  light: "F3F4F6",
  bg: "FFFFFF"
};
const totalSlides = 165;
for (let i = 1; i <= totalSlides; i++) {
  const num = String(i).padStart(2, "0");
  try {
    const slideModule = require("./slide-" + num + ".js");
    slideModule.createSlide(pres, theme);
    console.log("Slide " + num + " added");
  } catch (err) {
    console.error("Error loading slide-" + num + ".js:", err.message);
  }
}
const outputPath = "D:/CC/temp/slides/output/Part6_test.pptx";
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log("PPTX created successfully: " + outputPath);
  })
  .catch(err => {
    console.error("Error writing PPTX:", err);
  });