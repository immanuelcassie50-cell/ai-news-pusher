#!/usr/bin/env python3
SLIDES = "D:/新课开发/变革管理/08-向上管理与高层说服术：让决策层理解容错的成本逻辑/完整课程包/06-授课PPT/slides"

def write_slide(n, content):
    path = f"{SLIDES}/slide-{n:02d}.js"
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"slide-{n:02d}.js written")

# slide-03 Section divider
write_slide(3, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "section", index: 3, title: "模块一：理解容错成本逻辑" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  slide.addText("01", { x: 0.5, y: 1.5, w: 9, h: 1.2, fontSize: 72, fontFace: "Arial", color: theme.accent, bold: true });
  slide.addText("模块一", { x: 0.5, y: 2.7, w: 9, h: 0.6, fontSize: 24, fontFace: "Microsoft YaHei", color: theme.light });
  slide.addText("理解容错成本逻辑", { x: 0.5, y: 3.3, w: 9, h: 0.8, fontSize: 36, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.2, w: 2.0, h: 0.06, fill: { color: theme.accent } });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("3", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-03-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-06
write_slide(6, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 6, title: "为什么要说服高层" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("为什么要说服高层", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const reasons = [
    { stat: "70%", desc: "的变革失败是因为缺乏高层持续支持" },
    { stat: "3x", desc: "有高层支持的变革成功率是无支持项目的3倍" },
    { stat: "60%", desc: "中层管理者不知道如何有效与高层沟通" }
  ];
  reasons.forEach((r, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.2, w: 2.9, h: 2.5, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addText(r.stat, { x: x, y: 1.4, w: 2.9, h: 1.0, fontSize: 48, fontFace: "Arial", color: theme.accent, bold: true, align: "center" });
    slide.addText(r.desc, { x: x + 0.15, y: 2.5, w: 2.6, h: 1.0, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, align: "center" });
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.9, w: 9.0, h: 1.1, fill: { color: theme.light } });
  slide.addText("关键洞察：不是高层不愿意支持变革，而是没有看到足够的理由。", { x: 0.7, y: 4.0, w: 8.6, h: 0.9, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("6", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-06-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-07
write_slide(7, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 7, title: "本课核心框架" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("本课核心框架", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
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
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("7", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-07-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-08
write_slide(8, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 8, title: "课程学习路径" };
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
  slide.addText("8", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-08-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-32
write_slide(32, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 32, title: "什么是最小授权" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("什么是最小授权", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9.0, h: 1.5, fill: { color: theme.light } });
  slide.addText("定义", { x: 0.7, y: 1.15, w: 8.6, h: 0.35, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("最小授权是一种降低高层决策风险的策略：通过限定变革的范围、时间、资源和决策权，让高层以最小的赌注开始，看到成果后再逐步扩大。", { x: 0.7, y: 1.55, w: 8.6, h: 0.9, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary });
  const benefits = [
    { title: "降低感知风险", desc: "小范围试点让高层感觉可控" },
    { title: "保持推进动力", desc: "快速见效，建立信心和信任" },
    { title: "保留纠错空间", desc: "失败成本可控，便于及时调整" }
  ];
  benefits.forEach((b, i) => {
    const y = 2.8 + i * 0.85;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.75, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 0.75, fill: { color: theme.accent } });
    slide.addText(b.title, { x: 0.75, y: y + 0.15, w: 2.5, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(b.desc, { x: 3.3, y: y + 0.15, w: 6.0, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("32", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-32-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-34
write_slide(34, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 34, title: "分阶段授权路线图" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("分阶段授权路线图", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const phases = [
    { phase: "第一阶段", scope: "试点", duration: "1-3个月", authority: "执行方式自主，方向需汇报", success: "达成预设指标" },
    { phase: "第二阶段", scope: "扩展", duration: "3-6个月", authority: "小幅调整预算和范围", success: "复制试点经验" },
    { phase: "第三阶段", scope: "固化", duration: "6-12个月", authority: "全面授权，季度审核", success: "成为标准流程" }
  ];
  phases.forEach((p, i) => {
    const y = 1.1 + i * 1.45;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 1.35, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.8, h: 1.35, fill: { color: i === 0 ? theme.accent : i === 1 ? theme.primary : theme.secondary } });
    slide.addText(p.phase, { x: 0.5, y: y, w: 1.8, h: 1.35, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText("范围: " + p.scope + "\n周期: " + p.duration, { x: 2.5, y: y + 0.2, w: 3.0, h: 0.95, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
    slide.addText("授权: " + p.authority, { x: 5.6, y: y + 0.2, w: 3.7, h: 0.55, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addText("成功标准: " + p.success, { x: 5.6, y: y + 0.75, w: 3.7, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.accent });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("34", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-34-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-47
write_slide(47, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 47, title: "常见错误" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("常见错误", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const errors = [
    { wrong: "只讲机会，不谈风险", right: "主动坦诚风险，展示应对预案" },
    { wrong: "用执行层语言说服高层", right: "用ROI、成本、风险的语言" },
    { wrong: "追求大而全的完美方案", right: "提出最小授权方案降低决策门槛" },
    { wrong: "汇报叙事模糊缺乏数据", right: "量化每一个关键指标" },
    { wrong: "失败后推卸责任", right: "主动承担责任，展示学习与改进" }
  ];
  errors.forEach((e, i) => {
    const y = 1.05 + i * 0.88;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.8, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 4.3, h: 0.8, fill: { color: theme.accent, transparency: 15 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 4.8, y: y, w: 4.7, h: 0.8, fill: { color: theme.primary, transparency: 10 } });
    slide.addText("X " + e.wrong, { x: 0.65, y: y + 0.2, w: 4.0, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent });
    slide.addText("V " + e.right, { x: 4.95, y: y + 0.2, w: 4.4, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("47", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-47-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-55
write_slide(55, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 55, title: "练习四：说服提案包装" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("练习四：说服提案包装", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9.0, h: 2.0, fill: { color: theme.light } });
  slide.addText("场景", { x: 0.7, y: 1.15, w: 8.6, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("你负责的数字化转型项目需要争取CEO的批准。项目总投入800万，预计年效益200万。CEO是财务导向型决策者，对风险非常敏感。", { x: 0.7, y: 1.55, w: 8.6, h: 1.4, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary });
  slide.addText("任务：使用叙事结构包装你的提案，准备CEO可能的问题清单", { x: 0.5, y: 3.2, w: 9.0, h: 0.4, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const steps = ["1. 用ROI语言重新包装提案", "2. 设计最小授权方案", "3. 准备F04高频应答卡", "4. 预演汇报叙事"];
  steps.forEach((s, i) => {
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5 + i * 2.35, y: 3.75, w: 2.2, h: 1.25, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addText(s, { x: 0.6 + i * 2.35, y: 3.95, w: 2.0, h: 0.85, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, align: "center" });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("55", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-55-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-56
write_slide(56, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 56, title: "练习五：变革失败复盘" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("练习五：变革失败复盘", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9.0, h: 2.2, fill: { color: theme.light } });
  slide.addText("案例回顾", { x: 0.7, y: 1.15, w: 8.6, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  const case_points = ["某制造企业曾尝试推 ERP 升级，项目投入 600 万，最终因高层认为风险过高而被搁置", "执行团队认为方案已经非常完善，但汇报时缺乏量化数据支撑", "未能在汇报中有效回应高层的风险担忧，也没有提出最小授权方案"];
  case_points.forEach((p, i) => { slide.addText("- " + p, { x: 0.7, y: 1.6 + i * 0.55, w: 8.6, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary }); });
  slide.addText("复盘问题：", { x: 0.5, y: 3.45, w: 9.0, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const questions = ["如果你是项目经理，如何在汇报前准备量化数据？", "如何用最小授权策略重新设计这个提案？", "如果CEO再次拒绝，你的应对策略是什么？"];
  questions.forEach((q, i) => { slide.addText((i + 1) + ". " + q, { x: 0.7, y: 3.85 + i * 0.42, w: 8.6, h: 0.38, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary }); });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("56", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-56-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-77
write_slide(77, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 77, title: "案例一深度解析" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("案例一：ERP升级提案被拒", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9.0, h: 1.6, fill: { color: theme.light } });
  slide.addText("背景", { x: 0.7, y: 1.15, w: 8.6, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("某制造企业IT总监提议ERP系统升级，预算1200万，预计年效益350万。项目团队认为方案成熟，但CEO在评审会上以风险过高为由拒绝。", { x: 0.7, y: 1.5, w: 8.6, h: 1.1, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
  const analysis = [
    { title: "问题诊断", points: ["汇报过于技术化，缺乏量化数据", "未识别CEO是财务导向型", "没有准备最小授权方案"] },
    { title: "改进策略", points: ["用ROI语言重新包装：投资回报率、回收期", "提出3个月试点最小授权", "准备风险应对预案"] }
  ];
  analysis.forEach((a, i) => {
    const x = 0.5 + i * 4.7;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 2.85, w: 4.4, h: 2.15, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 2.85, w: 4.4, h: 0.4, fill: { color: i === 0 ? theme.accent : theme.primary } });
    slide.addText(a.title, { x: x + 0.15, y: 2.9, w: 4.1, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
    a.points.forEach((p, j) => { slide.addText("- " + p, { x: x + 0.2, y: 3.35 + j * 0.5, w: 4.0, h: 0.45, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary }); });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("77", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-77-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-78
write_slide(78, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 78, title: "案例二深度解析" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("案例二：组织变革被搁置", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9.0, h: 1.6, fill: { color: theme.light } });
  slide.addText("背景", { x: 0.7, y: 1.15, w: 8.6, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("HR总监提议组织架构调整，计划先证明效果再长期投入。CEO认为时机不对，担心影响团队稳定。", { x: 0.7, y: 1.5, w: 8.6, h: 1.1, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
  const analysis = [
    { title: "问题诊断", points: ["未识别CEO是关系导向型", "没有展示团队支持基础", "缺乏渐进式变革路径"] },
    { title: "改进策略", points: ["先做小范围试点展示可行性", "收集团队支持声音和预期收益", "设计6个月渐进式推进路径"] }
  ];
  analysis.forEach((a, i) => {
    const x = 0.5 + i * 4.7;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 2.85, w: 4.4, h: 2.15, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 2.85, w: 4.4, h: 0.4, fill: { color: i === 0 ? theme.accent : theme.primary } });
    slide.addText(a.title, { x: x + 0.15, y: 2.9, w: 4.1, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
    a.points.forEach((p, j) => { slide.addText("- " + p, { x: x + 0.2, y: 3.35 + j * 0.5, w: 4.0, h: 0.45, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary }); });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("78", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-78-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-79
write_slide(79, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 79, title: "案例三深度解析" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("案例三：成功说服的关键转折", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9.0, h: 1.6, fill: { color: theme.light } });
  slide.addText("背景", { x: 0.7, y: 1.15, w: 8.6, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("市场总监提议数字化营销系统，预算500万。CMO是战略导向型，关注行业趋势和竞争优势。前两次汇报均被质疑无法量化价值。", { x: 0.7, y: 1.5, w: 8.6, h: 1.1, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
  const analysis = [
    { title: "问题诊断", points: ["用功能性语言而非战略语言", "缺乏行业对标数据", "没有展示竞争价值"] },
    { title: "关键转折", points: ["引入行业报告数据支撑", "展示竞争对手案例", "提供3个月试点ROI数据"] }
  ];
  analysis.forEach((a, i) => {
    const x = 0.5 + i * 4.7;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 2.85, w: 4.4, h: 2.15, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 2.85, w: 4.4, h: 0.4, fill: { color: i === 0 ? theme.accent : theme.primary } });
    slide.addText(a.title, { x: x + 0.15, y: 2.9, w: 4.1, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
    a.points.forEach((p, j) => { slide.addText("- " + p, { x: x + 0.2, y: 3.35 + j * 0.5, w: 4.0, h: 0.45, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary }); });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("79", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-79-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-81
write_slide(81, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 81, title: "学员常见误区" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("学员常见误区", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const mistakes = [
    { myth: "只要方案好，高层自然会支持", reality: "好方案需要好的包装和说服策略" },
    { myth: "数据越详细越有说服力", reality: "高层只需要关键指标，重点突出" },
    { myth: "要展示信心，不能说风险", reality: "主动说风险反而赢得信任" },
    { myth: "最小授权是魄力不足的表现", reality: "最小授权是专业和自信的体现" },
    { myth: "一次说服不成就放弃了", reality: "需要持续沟通，逐步建立信任" }
  ];
  mistakes.forEach((m, i) => {
    const y = 1.05 + i * 0.88;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.8, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 4.3, h: 0.8, fill: { color: theme.accent, transparency: 15 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 4.8, y: y, w: 4.7, h: 0.8, fill: { color: theme.primary, transparency: 10 } });
    slide.addText("X " + m.myth, { x: 0.65, y: y + 0.2, w: 4.0, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent });
    slide.addText("V " + m.reality, { x: 4.95, y: y + 0.2, w: 4.4, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("81", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-81-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-86
write_slide(86, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 86, title: "高层说服的五个关键时机" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("高层说服的五个关键时机", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const timings = [
    { timing: "战略规划期", desc: "年度/季度规划时，趁高层思考战略方向时切入", best: "战略导向型" },
    { timing: "预算审批期", desc: "预算讨论时，用ROI和成本数据说服", best: "财务导向型" },
    { timing: "危机发生时", desc: "问题暴露时，展示解决方案和变革价值", best: "所有类型" },
    { timing: "成功之后", desc: "趁高层信心最强时，推进下一个变革项目", best: "关系导向型" },
    { timing: "竞争对手动作后", desc: "竞争压力下，高层更容易接受变革建议", best: "战略导向型" }
  ];
  timings.forEach((t, i) => {
    const y = 1.05 + i * 0.88;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.8, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.8, h: 0.8, fill: { color: theme.accent } });
    slide.addText(t.timing, { x: 0.6, y: y + 0.2, w: 1.6, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center" });
    slide.addText(t.desc, { x: 2.5, y: y + 0.15, w: 5.0, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
    slide.addShape(pres.shapes.RECTANGLE, { x: 7.6, y: y + 0.15, w: 1.8, h: 0.5, fill: { color: theme.primary } });
    slide.addText(t.best, { x: 7.6, y: y + 0.15, w: 1.8, h: 0.5, fontSize: 10, fontFace: "Microsoft YaHei", color: "FFFFFF", align: "center", valign: "middle" });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("86", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-86-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-88
write_slide(88, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 88, title: "变革管理者的成长路径" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("变革管理者的成长路径", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const levels = [
    { lv: "Lv1", title: "执行者", skills: ["完成任务", "达成KPI"], color: theme.secondary },
    { lv: "Lv2", title: "沟通者", skills: ["清晰表达", "资源争取"], color: theme.secondary },
    { lv: "Lv3", title: "说服者", skills: ["向上说服", "用数据说话"], color: theme.primary },
    { lv: "Lv4", title: "战略伙伴", skills: ["理解高层", "共谋规划"], color: theme.accent },
    { lv: "Lv5", title: "变革领袖", skills: ["推动转型", "引领方向"], color: theme.accent }
  ];
  levels.forEach((l, i) => {
    const y = 1.05 + i * 0.88;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.8, fill: { color: i >= 3 ? l.color : "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.8, h: 0.8, fill: { color: l.color } });
    slide.addText(l.lv, { x: 0.5, y: y, w: 0.8, h: 0.8, fontSize: 14, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(l.title, { x: 1.5, y: y + 0.1, w: 2.0, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: i >= 3 ? "FFFFFF" : theme.primary, bold: true });
    slide.addText(l.skills.join(" / "), { x: 1.5, y: y + 0.4, w: 7.8, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: i >= 3 ? theme.light : theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("88", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-88-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

print("Fixed slides generated")