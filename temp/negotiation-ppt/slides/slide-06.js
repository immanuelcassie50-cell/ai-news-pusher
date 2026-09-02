// slide-06.js - 适合谁来学
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 6, title: '适合谁来学' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("适合谁来学  ·  WHO SHOULD ATTEND", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  // Title
  slide.addText("七个典型学员画像", {
    x: 0.4, y: 0.85, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 7 profiles
  const profiles = [
    { tag: "职场人", body: "跳槽谈薪、晋升谈判、合同谈判" },
    { tag: "企业管理者", body: "团队资源争取、跨部门协作、向上管理" },
    { tag: "销售/采购", body: "客户合同、供应商谈判、客诉处理" },
    { tag: "HR", body: "薪酬谈判、员工挽留、组织发展" },
    { tag: "项目经理", body: "跨部门资源争取、向上汇报、对外合作" },
    { tag: "律师", body: "商业谈判、调解、协议设计" },
    { tag: "所有人", body: "日常生活、关系维护、决策能力" }
  ];

  profiles.forEach((p, i) => {
    const x = 0.4 + (i % 4) * 2.35;
    const y = 1.5 + Math.floor(i / 4) * 1.65;

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.2, h: 1.45,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // Header strip
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.2, h: 0.4,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(p.tag, {
      x: x, y: y, w: 2.2, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
    slide.addText(p.body, {
      x: x + 0.15, y: y + 0.5, w: 1.9, h: 0.9,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle", lineSpacing: 14
    });
  });

  // Bottom strip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 5.0, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("只要你需要和人交换、需要让对方接受你的诉求——这门课就适用", {
    x: 0.5, y: 5.0, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, valign: "middle", italic: true
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("06", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-06-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
