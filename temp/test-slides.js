// Test: compile just 10 slides to see if they all appear
const path = require("path");
const fs = require("fs");
const pptxgen = require("pptxgenjs");

const SLIDES_DIR = "D:/新课开发/安全/4.特种作业AI考评-应对智能化资质认证新常态/授课PPT/slides";
const NODE_PATH = "/d/新课开发/AI时代系列课/AI时代的内容创作/授课PPT/slides/node_modules";

const theme = {
  primary: "C41E3A",
  secondary: "8B0000",
  deepGray: "2D3436",
  mediumGray: "636E72",
  light: "B2BEC3",
  bg: "F5F5F5"
};

async function test() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  
  // Just try first 10 slide files
  const files = fs.readdirSync(SLIDES_DIR)
    .filter(f => f.startsWith("slide-") && f.endsWith(".js"))
    .sort((a, b) => {
      const numA = parseInt(a.match(/^slide-(\d+)\.js$/)[1], 10);
      const numB = parseInt(b.match(/^slide-(\d+)\.js$/)[1], 10);
      return numA - numB;
    })
    .slice(0, 10);
  
  console.log("Testing files:", files);
  
  for (const file of files) {
    const filePath = path.join(SLIDES_DIR, file);
    console.log("Loading:", file);
    const slideModule = require(filePath);
    if (typeof slideModule.createSlide === "function") {
      slideModule.createSlide(pres, theme);
      console.log("  Added slide from", file);
    }
  }
  
  await pres.writeFile({ fileName: "D:/CC/temp/test-output.pptx" });
  
  // Count slides in output
  const outputFiles = fs.readdirSync("D:/CC/temp").filter(f => f.includes("test-output"));
  console.log("Output files:", outputFiles);
}

test().catch(console.error);
