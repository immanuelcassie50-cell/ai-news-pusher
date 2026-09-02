// slide-55.js - 案例：续
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 55,
  title: '案例：续'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("案例：续", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Continuation label
  slide.addText("STEA案例", {
    x: 8.0, y: 0.2, w: 1.5, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "right", valign: "middle"
  });

  // Scenario context
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 0.7,
    fill: { color: theme.light }
  });
  slide.addText("场景：兄妹和好后的跟进", {
    x: 0.7, y: 1.2, w: 8.6, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "left", valign: "middle"
  });

  // Follow-up content
  const content = [
    { title: "第二天", desc: "妹妹主动帮忙修玩具，哥哥接受了" },
    { title: "一周后", desc: "妈妈问哥哥：妹妹玩你玩具前需要先说什么？" },
    { title: "哥哥的回答", desc: "\"要说'哥哥我可以玩吗'，她说了我一般都会同意\"" },
    { title: "关键洞察", desc: "孩子自己发展出了规则，比父母强加的更有效" }
  ];

  const startY = 2.1;
  const itemHeight = 0.82;

  content.forEach((item, idx) => {
    const y = startY + idx * itemHeight;

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.7,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    // Left accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 0.06, h: 0.7,
      fill: { color: idx === 3 ? theme.accent : theme.primary }
    });

    // Title
    slide.addText(item.title, {
      x: 0.75, y: y, w: 2, h: 0.7,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: 2.8, y: y, w: 6.5, h: 0.7,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "left", valign: "middle"
    });
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-55-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
