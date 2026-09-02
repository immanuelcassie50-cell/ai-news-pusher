const fs = require('fs');
const path = 'D:/新课开发/地产/物业/7.业主信任与老龄化接受度-AI落地绕不开的人情关/授课PPT/slides/';

// Fix slides 6-10 - section dividers using wrong addShape API
const slides_6_10 = `
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: INDEX,
  title: 'TITLE'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent block
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 3.2, h: 5.625,
    fill: { color: theme.accent }
  });

  // Section number
  slide.addText('NUM', {
    x: 0.4, y: 1.6, w: 2.4, h: 1.0,
    fontSize: 96, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  slide.addText("SECTION", {
    x: 0.4, y: 2.65, w: 2.4, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", charSpacing: 6
  });

  // Duration badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.9, y: 3.1, w: 1.4, h: 0.32,
    fill: { color: "FFFFFF", transparency: 20 },
    rectRadius: 0.16
  });

  slide.addText("DURATION", {
    x: 0.9, y: 3.1, w: 1.4, h: 0.32,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
  });

  // Main title
  slide.addText("MAINTITLE", {
    x: 3.6, y: 2.0, w: 5.6, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, valign: "middle"
  });

  // Subtitle
  slide.addText("SUBTITLE", {
    x: 3.6, y: 2.8, w: 5.6, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.6, y: 3.4, w: 0.8, h: 0.04,
    fill: { color: theme.accent }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
`;

const slide6Data = { INDEX: 6, NUM: "00", DURATION: "30分钟", MAINTITLE: "开篇：为什么AI客服用不起来", SUBTITLE: "AI落地绕不开的人情关" };
const slide7Data = { INDEX: 7, NUM: "01", DURATION: "20分钟", MAINTITLE: "第一部分：信任的四个维度", SUBTITLE: "理解老年业主的信任基础" };
const slide8Data = { INDEX: 8, NUM: "02", DURATION: "25分钟", MAINTITLE: "第二部分：AI落地三步法", SUBTITLE: "让老年业主逐步接受AI服务" };
const slide9Data = { INDEX: 9, NUM: "03", DURATION: "20分钟", MAINTITLE: "第三部分：场景话术指南", SUBTITLE: "把技术语言翻译成人话" };
const slide10Data = { INDEX: 10, NUM: "04", DURATION: "15分钟", MAINTITLE: "第四部分：典型场景演练", SUBTITLE: "手把手教你应对老年业主" };

[slide6Data, slide7Data, slide8Data, slide9Data, slide10Data].forEach(data => {
  let content = slides_6_10
    .replace(/INDEX/g, data.INDEX)
    .replace(/NUM/g, data.NUM)
    .replace(/DURATION/g, data.DURATION)
    .replace(/MAINTITLE/g, data.MAINTITLE)
    .replace(/SUBTITLE/g, data.SUBTITLE);
  
  fs.writeFileSync(path + `slide-${data.INDEX}.js`, content);
  try {
    new Function(content);
    console.log(`slide-${data.INDEX}: OK`);
  } catch(e) {
    console.log(`slide-${data.INDEX}: ${e.message}`);
  }
});
