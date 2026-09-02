/**
 * Slide 37 - Chapter 4 Summary
 * 高考志愿填报师培训课程
 */

const pptxgen = require("pptxgenjs");

// Theme: Red-Gray (Soft & Balanced style)
const theme = {
  primary: "8B0000",    // deep red
  secondary: "333333",  // dark gray
  accent: "C41E3A",     // bright red
  light: "999999",      // gray
  bg: "F5F5F5"          // light gray background
};

// Layout constants (Soft & Balanced style)
const MARGIN = 0.4;
const ELEM_GAP = 0.2;
const BLOCK_GAP = 0.4;
const RECT_RADIUS = 0.1;

// Slide dimensions (16:9)
const SLIDE_W = 10;
const SLIDE_H = 5.625;

// Page number badge position
const PAGE_NUM_X = 0.3;
const PAGE_NUM_Y = 5.1;

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // === Title Section ===
  // Left accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: MARGIN,
    y: MARGIN,
    w: 0.08,
    h: 0.5,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // Title text
  slide.addText("本章小结", {
    x: MARGIN + 0.2,
    y: MARGIN,
    w: SLIDE_W - MARGIN * 2 - 0.2,
    h: 0.5,
    fontSize: 28,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    bold: true,
    valign: "middle"
  });

  // Subtitle
  slide.addText("第四章：产业判断的核心框架", {
    x: MARGIN,
    y: MARGIN + 0.65,
    w: SLIDE_W - MARGIN * 2,
    h: 0.35,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.light,
    valign: "middle"
  });

  // === Summary Cards ===
  const cardStartY = MARGIN + 1.3;
  const cardW = SLIDE_W - MARGIN * 2;
  const cardH = 0.85;
  const cardGap = 0.25;

  // Takeaway items data
  const takeaways = [
    {
      num: "1",
      title: "产业判断问的是底层驱动力还在不在",
      desc: "判断一个专业/行业的前景，本质是看支撑其发展的根本逻辑是否仍然成立"
    },
    {
      num: "2",
      title: "三问：需求真实性、壁垒高度、周期位置",
      desc: "需求是真的吗？壁垒够高吗？现在处于什么发展阶段？"
    },
    {
      num: "3",
      title: "用招聘网站JD跟踪真实变化",
      desc: "招聘信息比任何报告都更实时地反映市场需求和技能变迁"
    },
    {
      num: "4",
      title: "承认判断可能错，持续更新",
      desc: "判断是概率不是预言，需要定期复核和修正"
    }
  ];

  takeaways.forEach((item, idx) => {
    const y = cardStartY + idx * (cardH + cardGap);

    // Card background
    slide.addShape(pres.ShapeType.roundRect, {
      x: MARGIN,
      y: y,
      w: cardW,
      h: cardH,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 0.5 },
      rectRadius: RECT_RADIUS
    });

    // Checkmark circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: MARGIN + 0.25,
      y: y + (cardH - 0.5) / 2,
      w: 0.5,
      h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText("\u2713", {
      x: MARGIN + 0.25,
      y: y + (cardH - 0.5) / 2,
      w: 0.5,
      h: 0.5,
      fontSize: 18,
      fontFace: "Arial",
      color: "FFFFFF",
      bold: true,
      align: "center",
      valign: "middle"
    });

    // Number badge (small, next to checkmark)
    slide.addText(item.num, {
      x: MARGIN + 0.25,
      y: y + (cardH - 0.5) / 2,
      w: 0.5,
      h: 0.5,
      fontSize: 10,
      fontFace: "Arial",
      color: "FFFFFF",
      bold: true,
      align: "center",
      valign: "middle"
    });

    // Title text
    slide.addText(item.title, {
      x: MARGIN + 0.95,
      y: y + 0.15,
      w: cardW - 1.2,
      h: 0.35,
      fontSize: 15,
      fontFace: "Microsoft YaHei",
      color: theme.secondary,
      bold: true,
      valign: "middle"
    });

    // Description text
    slide.addText(item.desc, {
      x: MARGIN + 0.95,
      y: y + 0.45,
      w: cardW - 1.2,
      h: 0.3,
      fontSize: 11,
      fontFace: "Microsoft YaHei",
      color: theme.light,
      valign: "top"
    });
  });

  // === Bottom decorative line ===
  slide.addShape(pres.ShapeType.rect, {
    x: MARGIN,
    y: SLIDE_H - MARGIN - 0.04,
    w: SLIDE_W - MARGIN * 2,
    h: 0.04,
    fill: { color: theme.accent, transparency: 70 },
    line: { color: theme.accent, width: 0, transparency: 70 }
  });

  // === Page Number Badge ===
  slide.addShape(pres.ShapeType.ellipse, {
    x: PAGE_NUM_X,
    y: PAGE_NUM_Y,
    w: 0.35,
    h: 0.35,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("37", {
    x: PAGE_NUM_X,
    y: PAGE_NUM_Y,
    w: 0.35,
    h: 0.35,
    fontSize: 11,
    fontFace: "Arial",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.defineLayout({ name: "CUSTOM", width: 10, height: 5.625 });
  pres.layout = "CUSTOM";

  createSlide(pres, theme);

  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-37-preview.pptx" })
    .then(() => console.log("Created: slide-37-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide };
