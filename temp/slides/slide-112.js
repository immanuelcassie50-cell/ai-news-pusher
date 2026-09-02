// slide-112.js - For Colleagues
const pptxgen = require("pptxgenjs");
const theme = {
  primary: "8B0000",
  secondary: "333333",
  accent: "C41E3A",
  light: "999999",
  bg: "F5F5F5"
};
const slideConfig = { type: `content`, index: 112, title: `写给同行` };

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Deep red background
  slide.background = { color: theme.primary };

  // Decorative vertical bar on left
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.15, h: 5.625, fill: { color: theme.accent } });

  // Title
  slide.addText(`写给同行`, {
    x: 0.6, y: 0.4, w: 8.5, h: 0.7,
    fontSize: 28, fontFace: `Microsoft YaHei`,
    color: `FFFFFF`, bold: true
  });

  // Subtitle line
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.05, w: 1.5, h: 0.04, fill: { color: theme.accent } });

  // Content cards
  const cards = [
    `冲稳保是语法，不是方法。工具会越做越好，我们迟早会在这部分输给工具。`,
    `但语法之前那道题——这个人是谁，该往哪走——这道题工具短期内答不了。`,
    `能答的，只有愿意花时间、花心思，真正坐下来跟一个具体的人聊透的人。`
  ];

  cards.forEach((text, i) => {
    const y = 1.4 + i * 1.3;

    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: y, w: 8.8, h: 1.1,
      fill: { color: `FFFFFF`, transparency: 90 },
      rectRadius: 0.1
    });

    // Number indicator
    slide.addShape(pres.shapes.OVAL, {
      x: 0.8, y: y + 0.25, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(String(i + 1), {
      x: 0.8, y: y + 0.25, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: `Arial`,
      color: `FFFFFF`, bold: true, align: `center`, valign: `middle`
    });

    // Card text
    slide.addText(text, {
      x: 1.5, y: y + 0.1, w: 7.7, h: 0.9,
      fontSize: 15, fontFace: `Microsoft YaHei`,
      color: `FFFFFF`, valign: `middle`
    });
  });

  // Page number badge - circle style at bottom-left (x: 0.3, y: 5.1)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText(`112`, {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: `Arial`,
    color: `FFFFFF`, bold: true, align: `center`, valign: `middle`
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: `D:/CC/temp/slides/slide-112-preview.pptx` }).then(() => console.log(`Created slide-112-preview.pptx`));
}
