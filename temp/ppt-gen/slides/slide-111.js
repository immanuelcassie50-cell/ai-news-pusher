// slide-111.js - Change Stakeholder Communication Matrix
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 111,
  title: '利益相关方沟通矩阵'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left red accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.primary }
  });

  slide.addText("利益相关方沟通矩阵", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left"
  });

  const stakeholders = [
    { group: "高层领导", interest: "战略价值、ROI", influence: "高", approach: "定期汇报、战略对齐" },
    { group: "中层管理", interest: "团队绩效、可行性", influence: "高", approach: "参与规划、培训赋能" },
    { group: "一线员工", interest: "工作影响、技能要求", influence: "中", approach: "充分沟通、培训支持" },
    { group: "HR部门", interest: "人员配置、薪酬绩效", influence: "中", approach: "政策协调、定期同步" },
    { group: "IT部门", interest: "技术实现、系统集成", influence: "中", approach: "技术评审、需求对接" },
    { group: "外部合作方", interest: "商务利益、合作关系", influence: "低", approach: "合同约定、定期沟通" }
  ];

  // Table header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 9, h: 0.45,
    fill: { color: theme.accent }
  });
  const headers = ["利益相关方", "关注点", "影响力", "沟通策略"];
  const widths = [2, 2.5, 1.3, 3.2];
  let xPos = 0.5;
  headers.forEach((h, i) => {
    slide.addText(h, {
      x: xPos, y: 1.08, w: widths[i], h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });
    xPos += widths[i];
  });

  stakeholders.forEach((s, i) => {
    const y = 1.45 + i * 0.65;
    const bgColor = i % 2 === 0 ? theme.light : theme.bg;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 9, h: 0.65,
      fill: { color: bgColor }
    });
    const values = [s.group, s.interest, s.influence, s.approach];
    let xPos = 0.5;
    values.forEach((v, j) => {
      const textColor = j === 2 ? (v === "高" ? theme.accent : theme.secondary) : theme.secondary;
      slide.addText(v, {
        x: xPos + 0.1, y: y + 0.15, w: widths[j] - 0.2, h: 0.35,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: textColor, bold: j === 2, align: j === 2 ? "center" : "left"
      });
      xPos += widths[j];
    });
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
  pres.writeFile({ fileName: "slide-111-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
