// slide-154.js - Content: 课程整体知识框架
const pptxgen = require("pptxgenjs");
const slideConfig = { type: `content`, index: 154, title: `课程整体知识框架` };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText(`课程整体知识框架`, { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 0.9, w: 9, h: 4.4, fill: { color: theme.light }, rectRadius: 0.1 });
  slide.addText(`不请假的团队：构建AI数字员工协作体系`, { x: 0.7, y: 1.0, w: 8.6, h: 0.5, fontSize: 14, fontFace: `Microsoft YaHei`, color: theme.primary, bold: true });
  const framework = [
    { level: `├── 第一天：设计与构建`, sub: [`├── 上午：重新认识数字员工`, "└── 下午：萃取、搭建、建库`] },
    { level: `├── 第二天：验证与系统化`, sub: [`├── 上午：验收与激活`, "└── 下午：协作、迭代、落地`] },
    { level: `└── 两天带走的四样成果`, sub: [`├── 数字员工蓝图`, `├── 2个以上验证过的专属Skill`, `├── 知识库资产初版`, `└── 团队部署计划 + 30天行动目标卡"] }
  ];
  let y = 1.6;
  framework.forEach((item) => {
    slide.addText(item.level, { x: 0.9, y: y, w: 8.2, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    y += 0.4;
    item.sub.forEach((s) => {
      slide.addText(s, { x: 1.1, y: y, w: 8.0, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
      y += 0.4;
    });
    y += 0.1;
  });
  slide.addText(`154`, { x: 9.3, y: 5.1, w: 0.5, h: 0.3, fontSize: 10, fontFace: `Arial`, color: theme.secondary, align: `center` });
  return slide;
}
module.exports = { createSlide, slideConfig };