#!/usr/bin/env python3
SLIDES = "D:/新课开发/变革管理/08-向上管理与高层说服术：让决策层理解容错的成本逻辑/完整课程包/06-授课PPT/slides"

def write_slide(n, content):
    path = f"{SLIDES}/slide-{n:02d}.js"
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"slide-{n:02d}.js written")

# slide-101
write_slide(101, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 101, title: "向上说服四步法详解" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("向上说服四步法详解", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const steps = [
    { num: "01", title: "识别类型", key: "观察决策风格 / 询问过往决策 / 分析利益立场", color: theme.accent },
    { num: "02", title: "调整语言", key: "财务型→ROI数据 / 战略型→行业叙事 / 关系型→共情关怀", color: theme.primary },
    { num: "03", title: "建立信任", key: "主动说风险 / 不夸大收益 / 承诺必兑现", color: theme.secondary },
    { num: "04", title: "争取授权", key: "最小范围 / 最短时间 / 最小资源 / 明确决策权", color: theme.accent }
  ];
  steps.forEach((s, i) => {
    const y = 1.1 + i * 1.05;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.95, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.8, h: 0.95, fill: { color: s.color } });
    slide.addText(s.num, { x: 0.5, y: y, w: 0.8, h: 0.95, fontSize: 18, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(s.title, { x: 1.5, y: y + 0.15, w: 2.0, h: 0.35, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(s.key, { x: 1.5, y: y + 0.5, w: 7.8, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("101", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-101-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-102
write_slide(102, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 102, title: "Error Cost计算方法" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("Error Cost计算方法", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9.0, h: 0.55, fill: { color: theme.accent } });
  slide.addText("公式：Error Cost = 失败概率 × 失败损失", { x: 0.7, y: 1.2, w: 8.6, h: 0.35, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const components = [
    { label: "失败概率（FP）", methods: ["历史数据统计", "专家评估", "类比法（参考同类项目）", "高管感知校准"] },
    { label: "失败损失（FL）", methods: ["直接损失（投入成本）", "间接损失（机会成本/声誉）", "战略损失（竞争优势）", "心理损失（信任损耗）"] }
  ];
  components.forEach((c, i) => {
    const x = 0.5 + i * 4.7;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.8, w: 4.4, h: 2.4, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.8, w: 4.4, h: 0.45, fill: { color: i === 0 ? theme.primary : theme.secondary } });
    slide.addText(c.label, { x: x + 0.15, y: 1.85, w: 4.1, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
    c.methods.forEach((m, j) => { slide.addText("• " + m, { x: x + 0.2, y: 2.35 + j * 0.42, w: 4.0, h: 0.38, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary }); });
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.35, w: 9.0, h: 0.65, fill: { color: theme.light } });
  slide.addText("关键：让高层参与概率和损失的估算，比直接给数字更有说服力", { x: 0.7, y: 4.45, w: 8.6, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("102", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-102-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-103
write_slide(103, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 103, title: "Inaction Cost计算方法" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("Inaction Cost计算方法", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9.0, h: 0.55, fill: { color: theme.accent } });
  slide.addText("公式：Inaction Cost = 不变革的年度损失 × 不变革持续时间", { x: 0.7, y: 1.2, w: 8.6, h: 0.35, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const costs = [
    { type: "显性成本", items: ["效率损失（人工/时间）", "质量损失（缺陷/返工）", "库存/运营成本浪费"] },
    { type: "隐性成本", items: ["市场机会错失", "竞争优势下滑", "员工士气/人才流失", "组织学习停滞"] }
  ];
  costs.forEach((c, i) => {
    const x = 0.5 + i * 4.7;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.8, w: 4.4, h: 2.5, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.8, w: 4.4, h: 0.45, fill: { color: i === 0 ? theme.primary : theme.secondary } });
    slide.addText(c.type, { x: x + 0.15, y: 1.85, w: 4.1, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
    c.items.forEach((m, j) => { slide.addText("• " + m, { x: x + 0.2, y: 2.35 + j * 0.45, w: 4.0, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary }); });
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.45, w: 9.0, h: 0.55, fill: { color: theme.light } });
  slide.addText("注意：隐性成本往往比显性成本更大，但最难量化", { x: 0.7, y: 4.55, w: 8.6, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("103", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-103-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-104
write_slide(104, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 104, title: "ROI计算完整演示" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("ROI计算完整演示", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 4.5, h: 3.4, fill: { color: theme.light } });
  slide.addText("输入参数", { x: 0.7, y: 1.15, w: 4.1, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  const inputs = [
    ["变革总投入", "500万元"],
    ["年效益", "150万元/年"],
    ["项目周期", "5年"],
    ["失败概率（高层感知）", "30%"],
    ["不变革成本（年损失）", "100万元/年"]
  ];
  inputs.forEach((row, i) => {
    slide.addText(row[0], { x: 0.7, y: 1.55 + i * 0.5, w: 2.8, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
    slide.addText(row[1], { x: 3.5, y: 1.55 + i * 0.5, w: 1.3, h: 0.35, fontSize: 11, fontFace: "Arial", color: theme.secondary });
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.1, w: 4.3, h: 3.4, fill: { color: theme.primary } });
  slide.addText("计算结果", { x: 5.4, y: 1.15, w: 3.9, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const calcs = [
    ["总收益（5年）", "750万元"],
    ["失败成本", "150万元"],
    ["不变革总成本", "500万元"],
    ["变革净收益", "100万元"],
    ["ROI", "20%"]
  ];
  calcs.forEach((row, i) => {
    slide.addText(row[0], { x: 5.4, y: 1.55 + i * 0.5, w: 2.2, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.light });
    slide.addText(row[1], { x: 7.6, y: 1.55 + i * 0.5, w: 1.7, h: 0.35, fontSize: 11, fontFace: "Arial", color: i === 3 ? theme.accent : "FFFFFF", bold: i === 3 });
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.65, w: 9.0, h: 0.35, fill: { color: theme.accent } });
  slide.addText("结论：ROI>0，净收益为正，值得推进", { x: 0.7, y: 4.7, w: 8.6, h: 0.25, fontSize: 11, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("104", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-104-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-105
write_slide(105, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 105, title: "最小授权方案设计" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("最小授权方案设计", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const dims = [
    { dim: "范围授权", desc: "限定业务范围/部门/场景", example: "先在华东区试点，而非全国" },
    { dim: "时间授权", desc: "限定项目周期和节点", example: "先做3个月，看数据再续" },
    { dim: "资源授权", desc: "限定人力/预算/系统投入", example: "先投入50万，不追加" },
    { dim: "决策授权", desc: "明确哪些决策可以自己做", example: "调整执行方式，但方向需汇报" }
  ];
  dims.forEach((d, i) => {
    const y = 1.05 + i * 1.05;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.95, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.8, h: 0.95, fill: { color: theme.accent } });
    slide.addText(d.dim, { x: 0.6, y: y + 0.3, w: 1.6, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center" });
    slide.addText(d.desc, { x: 2.5, y: y + 0.2, w: 3.0, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText("示例：" + d.example, { x: 2.5, y: y + 0.55, w: 6.8, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("105", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-105-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-106
write_slide(106, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 106, title: "汇报叙事结构" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("汇报叙事结构", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const structure = [
    { phase: "背景", content: "我们面临什么情况/挑战", key: "事实 + 数据", color: theme.secondary },
    { phase: "冲突", content: "不变革会有什么代价/风险", key: "痛点 + 紧迫感", color: theme.accent },
    { phase: "选择", content: "我们提出什么解决方案", key: "方案 + 优势", color: theme.primary },
    { phase: "结果", content: "变革后会带来什么价值", key: "收益 + ROI", color: theme.accent }
  ];
  structure.forEach((s, i) => {
    const y = 1.05 + i * 1.08;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.2, h: 0.95, fill: { color: s.color } });
    slide.addText(s.phase, { x: 0.5, y: y, w: 1.2, h: 0.95, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(s.content, { x: 1.85, y: y + 0.15, w: 4.5, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addShape(pres.shapes.RECTANGLE, { x: 6.5, y: y + 0.15, w: 3.0, h: 0.65, fill: { color: theme.light } });
    slide.addText(s.key, { x: 6.6, y: y + 0.3, w: 2.8, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("106", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-106-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-107
write_slide(107, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 107, title: "信任建立模型" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("信任建立模型（PTR）", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const pillars = [
    { title: "P - 专业能力", items: ["过往成功案例背书", "可量化的工作成果", "行业知识深度展示"], color: theme.accent },
    { title: "T - 透明坦诚", items: ["主动说风险和挑战", "不隐藏不确定性", "承认自己的不足"], color: theme.primary },
    { title: "R - 可靠承诺", items: ["承诺必兑现", "言出必行", "超出预期交付"] , color: theme.secondary }
  ];
  pillars.forEach((p, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.1, w: 2.9, h: 3.5, fill: { color: "FFFFFF" }, line: { color: p.color, width: 2 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.1, w: 2.9, h: 0.55, fill: { color: p.color } });
    slide.addText(p.title, { x: x + 0.1, y: 1.15, w: 2.7, h: 0.45, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center" });
    p.items.forEach((item, j) => { slide.addText("• " + item, { x: x + 0.2, y: 1.8 + j * 0.75, w: 2.5, h: 0.65, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary }); });
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.75, w: 9.0, h: 0.3, fill: { color: theme.light } });
  slide.addText("P × T × R = Trust  三者缺一不可", { x: 0.7, y: 4.8, w: 8.6, h: 0.2, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("107", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-107-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-108
write_slide(108, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 108, title: "变革管理者的五个境界" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("变革管理者的五个境界", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const levels = [
    { lv: "Lv1", title: "执行者", desc: "完成任务，达成指标", color: theme.secondary },
    { lv: "Lv2", title: "沟通者", desc: "清晰表达，争取资源", color: theme.secondary },
    { lv: "Lv3", title: "说服者", desc: "用高层的语言影响决策", color: theme.primary },
    { lv: "Lv4", title: "战略伙伴", desc: "理解高层压力，成为共谋", color: theme.accent },
    { lv: "Lv5", title: "变革领袖", desc: "推动战略转型，引领方向", color: theme.accent }
  ];
  levels.forEach((l, i) => {
    const y = 1.1 + i * 0.86;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.75, fill: { color: i >= 3 ? l.color : "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.8, h: 0.75, fill: { color: l.color } });
    slide.addText(l.lv, { x: 0.5, y: y, w: 0.8, h: 0.75, fontSize: 14, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(l.title, { x: 1.5, y: y + 0.1, w: 2.0, h: 0.3, fontSize: 14, fontFace: "Microsoft YaHei", color: i >= 3 ? "FFFFFF" : theme.primary, bold: true });
    slide.addText(l.desc, { x: 1.5, y: y + 0.38, w: 7.8, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: i >= 3 ? theme.light : theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("108", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-108-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-109
write_slide(109, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 109, title: "常见高层质疑及应答策略" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("常见高层质疑及应答策略", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const qas = [
    { q: ""这个ROI怎么算出来的？"", a: "用行业数据和内部历史数据做基准，保守估算，请领导指正" },
    { q: ""失败了你负责吗？"", a: "我负责执行，但也需要您的授权和支持来确保资源到位" },
    { q: ""为什么以前的项目失败了？"", a: "上次失败的主要原因是...这次我们用最小授权来控制风险" },
    { q: ""时间为什么这么长？"", a: "分阶段推进，3个月后给您看数据再决定是否继续" }
  ];
  qas.forEach((qa, i) => {
    const y = 1.05 + i * 1.08;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.98, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 0.98, fill: { color: theme.accent } });
    slide.addText("Q: " + qa.q, { x: 0.7, y: y + 0.1, w: 8.6, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    slide.addText("A: " + qa.a, { x: 0.7, y: y + 0.5, w: 8.6, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("109", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-109-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-110
write_slide(110, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 110, title: "本课知识点回顾" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("本课知识点回顾", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const points = [
    ["容错成本逻辑", "决策层失败成本 = 失败损失 × 失败概率"],
    ["决策者画像", "财务型/战略型/关系型三维分析"],
    ["向上说服四步", "识别类型 → 调整语言 → 建立信任 → 争取授权"],
    ["成本量化", "变革净收益 = 收益 - 成本×概率 - 不变革成本"],
    ["最小授权", "范围×时间×资源×决策权四维设计"],
    ["叙事结构", "背景+冲突+选择+结果四段式"],
    ["信任建立", "专业能力+透明坦诚+可靠承诺=PTR"]
  ];
  points.forEach((p, i) => {
    const y = 1.05 + i * 0.62;
    const bg = i % 2 === 0 ? theme.light : "FFFFFF";
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.55, fill: { color: bg } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 0.55, fill: { color: theme.accent } });
    slide.addText(p[0], { x: 0.7, y: y + 0.08, w: 2.5, h: 0.38, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(p[1], { x: 3.3, y: y + 0.08, w: 6.0, h: 0.38, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("110", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-110-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-111
write_slide(111, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 111, title: "工具表单速查" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("工具表单速查", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const forms = [
    ["F01", "向上说服四步法模板", "提案准备阶段"],
    ["F02", "容错成本量化计算表", "数字论证阶段"],
    ["F03", "高层决策者画像分析表", "了解高层阶段"],
    ["F04", "高频问题预备应答卡", "高层质询阶段"],
    ["F05", "最小授权争取策略表", "争取授权阶段"],
    ["F06", "汇报叙事自检清单", "汇报前检查"],
    ["F07", "变革投资回报评估表", "决策前评估"]
  ];
  forms.forEach((f, i) => {
    const y = 1.1 + i * 0.62;
    const bg = i % 2 === 0 ? theme.light : "FFFFFF";
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.55, fill: { color: bg } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.7, h: 0.55, fill: { color: theme.accent } });
    slide.addText(f[0], { x: 0.5, y: y, w: 0.7, h: 0.55, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(f[1], { x: 1.35, y: y + 0.08, w: 4.5, h: 0.38, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(f[2], { x: 6.0, y: y + 0.08, w: 3.3, h: 0.38, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("111", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-111-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-112
write_slide(112, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 112, title: "课后行动清单" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("课后行动清单", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const actions = [
    { when: "本周内", items: ["识别你最近的3个变革/项目提案", "分析决策者类型和风格", "用F03填写决策者画像"] },
    { when: "两周内", items: ["选择一个提案重做ROI计算", "使用F05设计最小授权方案", "准备Q&A应答卡"] },
    { when: "一个月内", items: ["向上说服实践1次", "记录结果并反思改进", "与同事分享经验"] }
  ];
  actions.forEach((a, i) => {
    const y = 1.1 + i * 1.4;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.8, h: 1.25, fill: { color: theme.accent } });
    slide.addText(a.when, { x: 0.5, y: y, w: 1.8, h: 1.25, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addShape(pres.shapes.RECTANGLE, { x: 2.3, y: y, w: 7.2, h: 1.25, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    a.items.forEach((item, j) => { slide.addText("[ ] " + item, { x: 2.5, y: y + 0.2 + j * 0.35, w: 6.8, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary }); });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("112", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-112-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-113
write_slide(113, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 113, title: "延伸阅读推荐" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("延伸阅读推荐", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const books = [
    { title: "《说服：说服他人的5大原则》", author: "Robert Cialdini", desc: "影响力心理学，向上说服的理论基础" },
    { title: "《向上管理：如何有效汇报工作》", author: "蒋巍巍", desc: "适合中国职场情境的向上管理指南" },
    { title: "《变革之心》", author: "John Kotter", desc: "组织变革的经典，变革领导的实战手册" },
    { title: "《金字塔原理》", author: "Barbara Minto", desc: "结构化表达，汇报和说服的底层方法论" }
  ];
  books.forEach((b, i) => {
    const y = 1.05 + i * 1.08;
    const bg = i % 2 === 0 ? theme.light : "FFFFFF";
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.98, fill: { color: bg } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 0.98, fill: { color: theme.accent } });
    slide.addText(b.title, { x: 0.7, y: y + 0.1, w: 5.5, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(b.author, { x: 6.3, y: y + 0.1, w: 3.0, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.accent });
    slide.addText(b.desc, { x: 0.7, y: y + 0.5, w: 8.5, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("113", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-113-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-114
write_slide(114, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 114, title: "常见问题解答" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("常见问题解答", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const qas = [
    { q: "如果高层坚持反对变革怎么办？", a: "了解核心顾虑，针对性解决；考虑缩小范围做最小可行变革" },
    { q: "如何量化隐性成本如团队士气？", a: "用代理指标：离职率、满意度调查、协作效率等间接衡量" },
    { q: "最小授权会被视为没有魄力吗？", a: "恰恰相反——这是专业和自信的表现，高层更信任有边界的方案" },
    { q: "三个决策者类型可以组合吗？", a: "可以，需要同时用不同的语言和策略，针对不同关切点分别回应" }
  ];
  qas.forEach((qa, i) => {
    const y = 1.05 + i * 1.08;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.98, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 0.98, fill: { color: theme.accent } });
    slide.addText("Q: " + qa.q, { x: 0.7, y: y + 0.1, w: 8.6, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    slide.addText("A: " + qa.a, { x: 0.7, y: y + 0.5, w: 8.6, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("114", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-114-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-115
write_slide(115, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "summary", index: 115, title: "课程总结" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  slide.addText("课程总结", { x: 0.5, y: 0.4, w: 9, h: 0.7, fontSize: 32, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.15, w: 9.0, h: 0.06, fill: { color: theme.accent } });
  const summary = [
    { title: "核心洞察", content: "变革失败的阻力来自误解——不是高层不愿意，而是没有看到足够的理由" },
    { title: "核心能力", content: "将执行层语言转化为决策层语言的能力——用ROI/成本/风险说话" },
    { title: "核心工具", content: "7张表单 + 向上说服四步法 + 决策者画像分析" },
    { title: "核心心态", content: "透明赢得信任，量化降低感知风险，最小授权降低决策门槛" }
  ];
  summary.forEach((s, i) => {
    const y = 1.4 + i * 0.95;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.8, h: 0.75, fill: { color: theme.accent } });
    slide.addText(s.title, { x: 0.5, y: y, w: 1.8, h: 0.75, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addShape(pres.shapes.RECTANGLE, { x: 2.3, y: y, w: 7.2, h: 0.75, fill: { color: theme.secondary, transparency: 50 } });
    slide.addText(s.content, { x: 2.5, y: y + 0.15, w: 6.8, h: 0.45, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF" });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("115", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-115-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

print("Slides 101-115 done")