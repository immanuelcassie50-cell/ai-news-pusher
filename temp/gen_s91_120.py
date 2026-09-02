#!/usr/bin/env python3
SLIDES = "D:/新课开发/变革管理/08-向上管理与高层说服术：让决策层理解容错的成本逻辑/完整课程包/06-授课PPT/slides"

def write_slide(n, content):
    path = f"{SLIDES}/slide-{n:02d}.js"
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"slide-{n:02d}.js written")

# slide-91
write_slide(91, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 91, title: "本课核心框架回顾" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("本课核心框架回顾", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  // Center diagram
  slide.addShape(pres.shapes.OVAL, { x: 4.0, y: 2.3, w: 2.0, h: 2.0, fill: { color: theme.accent } });
  slide.addText("变革\n成功", { x: 4.0, y: 2.3, w: 2.0, h: 2.0, fontSize: 16, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  const nodes = [
    { label: "决策者\n画像", x: 1.0, y: 1.2 }, { label: "向上\n说服", x: 7.0, y: 1.2 },
    { label: "成本\n量化", x: 1.0, y: 3.8 }, { label: "最小\n授权", x: 7.0, y: 3.8 }
  ];
  nodes.forEach((n, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: n.x, y: n.y, w: 1.8, h: 1.0, fill: { color: i % 2 === 0 ? theme.primary : theme.secondary }, rectRadius: 0.1 });
    slide.addText(n.label, { x: n.x, y: n.y, w: 1.8, h: 1.0, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  });
  const arrows = [[2.8, 1.7, 3.8, 2.3], [6.2, 1.7, 5.2, 2.3], [2.8, 4.3, 3.8, 3.8], [6.2, 4.3, 5.2, 3.8]];
  arrows.forEach(a => { slide.addShape(pres.shapes.LINE, { x: a[0], y: a[1], w: a[2] - a[0], h: a[3] - a[1], line: { color: theme.light, width: 2 } }); });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("91", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-91-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-92
write_slide(92, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 92, title: "为什么要学这门课" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("为什么要学这门课", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const reasons = [
    { stat: "70%", desc: "的变革项目失败是因为没有获得高层的持续支持" },
    { stat: "3x", desc: "获得高层支持的变革项目成功率是无支持项目的3倍" },
    { stat: "60%", desc: "的中层管理者不知道如何与高层决策者有效沟通" },
    { stat: "85%", desc: "的高层希望中层能够用数据和逻辑说服，而非情感诉求" }
  ];
  reasons.forEach((r, i) => {
    const col = i % 2; const row = int(i / 2);
    const x = 0.5 + col * 4.7; const y = 1.1 + row * 2.1;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.4, h: 1.9, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addText(r.stat, { x: x, y: y + 0.2, w: 4.4, h: 0.9, fontSize: 48, fontFace: "Arial", color: theme.accent, bold: true, align: "center" });
    slide.addText(r.desc, { x: x + 0.3, y: y + 1.2, w: 3.8, h: 0.55, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, align: "center" });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("92", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-92-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-93
write_slide(93, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 93, title: "课程学习路径" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("课程学习路径", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const path = [
    { step: "01", title: "理解成本逻辑", desc: "容错成本结构 + 决策层视角", dur: "模块一" },
    { step: "02", title: "分析决策者", desc: "三类决策者 + 画像工具", dur: "模块二" },
    { step: "03", title: "掌握说服策略", desc: "向上说服四步法 + 语言转化", dur: "模块三" },
    { step: "04", title: "量化变革价值", desc: "Error Cost + Inaction Cost + ROI", dur: "模块四" },
    { step: "05", title: "练习与复盘", desc: "情境模拟 + 案例分析 + 工具表单", dur: "模块五" }
  ];
  path.forEach((p, i) => {
    const y = 1.05 + i * 0.88;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.78, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.8, h: 0.78, fill: { color: theme.accent } });
    slide.addText(p.step, { x: 0.5, y: y, w: 0.8, h: 0.78, fontSize: 16, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(p.title, { x: 1.45, y: y + 0.1, w: 3.0, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(p.desc, { x: 1.45, y: y + 0.45, w: 5.0, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addShape(pres.shapes.RECTANGLE, { x: 7.0, y: y + 0.15, w: 2.3, h: 0.48, fill: { color: theme.primary } });
    slide.addText(p.dur, { x: 7.0, y: y + 0.15, w: 2.3, h: 0.48, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", align: "center", valign: "middle" });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("93", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-93-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-94
write_slide(94, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 94, title: "执行层vs决策层思维差异" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("执行层 vs 决策层思维差异", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const diffs = [
    { dim: "关注点", exec: "如何做（How）", decision: "为什么做（Why）/ 值不值（Value）" },
    { dim: "时间视角", exec: "短期成果（3-6个月）", decision: "长期价值（1-3年）" },
    { dim: "风险认知", exec: "执行风险（技术/资源）", decision: "决策风险（投资回报/机会成本）" },
    { dim: "成功标准", exec: "完成KPI/里程碑", decision: "达成业务目标/ROI" },
    { dim: "沟通语言", exec: "功能/技术/流程", decision: "价值/成本/风险/数据" }
  ];
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.0, w: 2.0, h: 0.5, fill: { color: theme.secondary } });
  slide.addText("维度", { x: 0.5, y: 1.0, w: 2.0, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addShape(pres.shapes.RECTANGLE, { x: 2.5, y: 1.0, w: 3.5, h: 0.5, fill: { color: theme.primary } });
  slide.addText("执行层思维", { x: 2.5, y: 1.0, w: 3.5, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  slide.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: 1.0, w: 3.5, h: 0.5, fill: { color: theme.accent } });
  slide.addText("决策层思维", { x: 6.0, y: 1.0, w: 3.5, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  diffs.forEach((d, i) => {
    const y = 1.55 + i * 0.75;
    const bg = i % 2 === 0 ? theme.light : "FFFFFF";
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 2.0, h: 0.65, fill: { color: bg } });
    slide.addText(d.dim, { x: 0.6, y: y + 0.15, w: 1.8, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addShape(pres.shapes.RECTANGLE, { x: 2.5, y: y, w: 3.5, h: 0.65, fill: { color: bg } });
    slide.addText(d.exec, { x: 2.6, y: y + 0.15, w: 3.3, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addShape(pres.shapes.RECTANGLE, { x: 6.0, y: y, w: 3.5, h: 0.65, fill: { color: bg } });
    slide.addText(d.decision, { x: 6.1, y: y + 0.15, w: 3.3, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.accent });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("94", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-94-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-95
write_slide(95, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 95, title: "变革失败的成本构成" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("变革失败的成本构成", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const costs = [
    { type: "直接成本", items: ["项目投入（人力/系统/培训）", "沉没成本不可回收", "机会成本（资源占用）"], color: theme.accent },
    { type: "间接成本", items: ["团队士气和信心下降", "管理层信任损耗", "组织学习能力受损"], color: theme.primary },
    { type: "战略成本", items: ["市场时机错失", "竞争优势减弱", "长期发展受限"], color: theme.secondary }
  ];
  costs.forEach((c, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.1, w: 2.9, h: 3.5, fill: { color: "FFFFFF" }, line: { color: c.color, width: 2 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.1, w: 2.9, h: 0.55, fill: { color: c.color } });
    slide.addText(c.type, { x: x, y: 1.1, w: 2.9, h: 0.55, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    c.items.forEach((item, j) => {
      slide.addText("• " + item, { x: x + 0.2, y: 1.8 + j * 0.7, w: 2.5, h: 0.6, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
    });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("95", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-95-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-96
write_slide(96, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 96, title: "高层对失败的感知偏差" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("高层对失败的感知偏差", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 4.3, h: 2.2, fill: { color: theme.light } });
  slide.addText("执行层视角", { x: 0.7, y: 1.15, w: 3.9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("失败概率：20%\n失败影响：可控范围\n应对准备：已有预案", { x: 0.7, y: 1.6, w: 3.9, h: 1.5, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary });
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.1, w: 4.3, h: 2.2, fill: { color: theme.accent } });
  slide.addText("决策层视角", { x: 5.4, y: 1.15, w: 3.9, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addText("失败概率：60%\n失败影响：无法承受\n应对准备：不信任执行层", { x: 5.4, y: 1.6, w: 3.9, h: 1.5, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF" });
  slide.addText("差距来源：信息不对称 + 损失厌恶 + 过往经历", { x: 0.5, y: 3.45, w: 9.0, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  const biases = [
    { bias: "损失厌恶", desc: "损失的痛苦是同等收益快乐的2倍" },
    { bias: "近因效应", desc: "最近一次失败的记忆权重超过历史平均" },
    { bias: "归因偏差", desc: "倾向将失败归因于人的能力而非外部因素" }
  ];
  biases.forEach((b, i) => {
    const y = 4.05 + i * 0.52;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.45, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.1, h: 0.45, fill: { color: theme.accent } });
    slide.addText(b.bias + "：" + b.desc, { x: 0.75, y: y + 0.08, w: 8.5, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("96", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-96-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-97
write_slide(97, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 97, title: "财务导向型决策者特征" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("财务导向型决策者特征", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const traits = [
    { icon: "🎯", trait: "核心关切", desc: "ROI、投资回收期、现金流影响" },
    { icon: "📊", trait: "决策风格", desc: "谨慎但果断，数据驱动，风险规避" },
    { icon: "💬", trait: "沟通语言", desc: "数字、计算、对比、验证" },
    { icon: "❓", trait: "常见问题", desc: ""投资回报率多少？" "回收期多长？"" },
    { icon: "⚠️", trait: "敏感信号", desc: "模糊的数据、无法量化的价值主张" },
    { icon: "✅", trait: "说服策略", desc: "量化ROI + 行业对标 + 最小授权" }
  ];
  traits.forEach((t, i) => {
    const y = 1.05 + i * 0.72;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.62, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.5, h: 0.62, fill: { color: theme.accent } });
    slide.addText(t.icon + " " + t.trait, { x: 0.6, y: y + 0.15, w: 1.3, h: 0.32, fontSize: 11, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
    slide.addText(t.desc, { x: 2.15, y: y + 0.15, w: 7.2, h: 0.32, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("97", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-97-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-98
write_slide(98, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 98, title: "战略导向型决策者特征" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("战略导向型决策者特征", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const traits = [
    { icon: "🎯", trait: "核心关切", desc: "行业趋势、竞争优势、战略时机" },
    { icon: "📊", trait: "决策风格", desc: "全局视角、长期思维、格局构建" },
    { icon: "💬", trait: "沟通语言", desc: "行业趋势、竞争格局、战略价值" },
    { icon: "❓", trait: "常见问题", desc: ""竞争对手怎么做？" "这是行业趋势吗？"" },
    { icon: "⚠️", trait: "敏感信号", desc: "只关注内部执行细节、缺乏行业视野" },
    { icon: "✅", trait: "说服策略", desc: "行业叙事 + 竞争分析 + 长期价值展示" }
  ];
  traits.forEach((t, i) => {
    const y = 1.05 + i * 0.72;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.62, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.5, h: 0.62, fill: { color: theme.primary } });
    slide.addText(t.icon + " " + t.trait, { x: 0.6, y: y + 0.15, w: 1.3, h: 0.32, fontSize: 11, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
    slide.addText(t.desc, { x: 2.15, y: y + 0.15, w: 7.2, h: 0.32, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("98", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-98-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-99
write_slide(99, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 99, title: "关系导向型决策者特征" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("关系导向型决策者特征", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const traits = [
    { icon: "🎯", trait: "核心关切", desc: "团队稳定、人心向背、员工发展" },
    { icon: "📊", trait: "决策风格", desc: "民主协商、关注感受、渐进变革" },
    { icon: "💬", trait: "沟通语言", desc: "人、团队、关怀、发展" },
    { icon: "❓", trait: "常见问题", desc: ""团队怎么看？" "会有人反对吗？"" },
    { icon: "⚠️", trait: "敏感信号", desc: "忽视人的因素的纯技术/财务方案" },
    { icon: "✅", trait: "说服策略", desc: "共情沟通 + 团队支持 + 渐进式推进" }
  ];
  traits.forEach((t, i) => {
    const y = 1.05 + i * 0.72;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.62, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.5, h: 0.62, fill: { color: theme.secondary } });
    slide.addText(t.icon + " " + t.trait, { x: 0.6, y: y + 0.15, w: 1.3, h: 0.32, fontSize: 11, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
    slide.addText(t.desc, { x: 2.15, y: y + 0.15, w: 7.2, h: 0.32, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("99", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-99-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-100
write_slide(100, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 100, title: "向上说服四步法概述" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("向上说服四步法概述", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const steps = [
    { num: "01", title: "识别类型", desc: "判断决策者类型和风格", time: "5分钟" },
    { num: "02", title: "调整语言", desc: "用决策者的语言重新包装方案", time: "10分钟" },
    { num: "03", title: "建立信任", desc: "透明坦诚，主动说风险", time: "持续" },
    { num: "04", title: "争取授权", desc: "提出最小授权方案", time: "关键" }
  ];
  steps.forEach((s, i) => {
    const x = 0.5 + i * 2.35;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.1, w: 2.2, h: 3.5, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.OVAL, { x: x + 0.7, y: 1.3, w: 0.8, h: 0.8, fill: { color: theme.accent } });
    slide.addText(s.num, { x: x + 0.7, y: 1.3, w: 0.8, h: 0.8, fontSize: 18, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(s.title, { x: x, y: 2.25, w: 2.2, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
    slide.addText(s.desc, { x: x + 0.1, y: 2.8, w: 2.0, h: 0.8, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, align: "center" });
    slide.addShape(pres.shapes.RECTANGLE, { x: x + 0.3, y: 3.7, w: 1.6, h: 0.35, fill: { color: theme.light } });
    slide.addText(s.time, { x: x + 0.3, y: 3.7, w: 1.6, h: 0.35, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.primary, align: "center", valign: "middle" });
    if (i < 3) { slide.addShape(pres.shapes.LINE, { x: x + 2.2, y: 2.5, w: 0.15, h: 0, line: { color: theme.accent, width: 2 } }); }
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("100", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-100-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

print("Slides 91-100 done")