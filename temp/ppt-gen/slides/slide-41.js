// slide-41.js - Case: Trust Repair
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 41,
  title: '案例：挫折后的信任修复'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("案例：挫折后的信任修复", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  slide.addShape("rect", {
    x: 0.5, y: 1.1, w: 8.5, h: 3.5,
    fill: { color: theme.light }
  });

  slide.addText("某制造企业MES项目延期三个月，项目经理采取的策略：", {
    x: 0.7, y: 1.2, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  const caseSteps = [
    { step: "1", action: "召开全员会议，坦诚说明延期原因" },
    { step: "2", action: "邀请一线员工代表参与问题分析" },
    { step: "3", action: "调整上线计划，承诺更现实的时间节点" },
    { step: "4", action: "每周发送项目进展报告" }
  ];

  caseSteps.forEach((c, i) => {
    slide.addShape("ellipse", {
      x: 0.9, y: 1.8 + i * 0.65, w: 0.4, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(c.step, {
      x: 0.9, y: 1.88 + i * 0.65, w: 0.4, h: 0.25,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center"
    });
    slide.addText(c.action, {
      x: 1.5, y: 1.85 + i * 0.65, w: 7, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "left"
    });
  });

  slide.addText("结果：员工理解并接受了调整，项目最终成功上线", {
    x: 0.7, y: 4.4, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "D4D4D4",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-41-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
