#!/usr/bin/env python3
SLIDES = "D:/新课开发/变革管理/08-向上管理与高层说服术：让决策层理解容错的成本逻辑/完整课程包/06-授课PPT/slides"

def write_slide(n, content):
    path = f"{SLIDES}/slide-{n:02d}.js"
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"slide-{n:02d}.js written")

# slide-71: 练习一：向上说服情境模拟
write_slide(71, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 71, title: "练习一：向上说服情境模拟" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("练习一：向上说服情境模拟", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9.0, h: 2.5, fill: { color: theme.light } });
  slide.addText("情境背景", { x: 0.7, y: 1.15, w: 8.6, h: 0.35, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  slide.addText("你是一家制造企业的数字化转型负责人。公司年营收约5亿元，净利润率约8%。你计划推动一个MES系统升级项目，预计总投入800万元，预计年效益200万元，投资回收期4年。高层（CEO兼创始人）此前有过一次ERP实施失败的经历，对IT项目持谨慎态度。", { x: 0.7, y: 1.55, w: 8.6, h: 1.8, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary });
  const tasks = [["任务一：决策者画像","识别CEO的决策类型和风格，并说明判断依据"],["任务二：向上说服策略","设计针对该CEO的向上说服策略，包括语言、证据、授权设计"],["任务三：风险预案","准备高层可能提出的3个质疑及应答方案"]];
  tasks.forEach((t, i) => {
    const y = 3.75 + i * 0.6;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.5, fill: { color: i === 0 ? theme.accent : i === 1 ? theme.primary : theme.secondary } });
    slide.addText(t[0], { x: 0.7, y: y + 0.08, w: 2.5, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
    slide.addText(t[1], { x: 3.3, y: y + 0.08, w: 6.0, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF" });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("71", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-71-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-72: 练习二：容错成本量化计算
write_slide(72, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 72, title: "练习二：容错成本量化计算" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("练习二：容错成本量化计算", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 9.0, h: 2.0, fill: { color: theme.light } });
  slide.addText("背景假设", { x: 0.7, y: 1.15, w: 8.6, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  const bg_items = ["某零售企业计划上线全渠道数字化系统","总投入：1200万元","预计年效益：350万元","项目周期：5年","高层感知失败概率：40%","不变革成本（年损失）：200万元/年"];
  bg_items.forEach((item, i) => {
    slide.addText("• " + item, { x: 0.7 + (i % 2) * 4.5, y: 1.55 + int(i / 2) * 0.42, w: 4.3, h: 0.38, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addText("使用F02表单计算：", { x: 0.5, y: 3.2, w: 9.0, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const calcs = [["Error Cost（变革失败成本）","= 1200 x 40% = 480万元"],["Inaction Cost（不变革成本）","= 200 x 5 = 1000万元"],["Total Benefit（总收益）","= 350 x 5 = 1750万元"],["Net Benefit（变革净收益）","= 1750 - 480 - 1000 = 270万元"],["ROI","= 270 / 1200 = 22.5%"]];
  calcs.forEach((c, i) => {
    const y = 3.6 + i * 0.42;
    slide.addText(c[0], { x: 0.7, y: y, w: 3.5, h: 0.38, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(c[1], { x: 4.3, y: y, w: 5.0, h: 0.38, fontSize: 11, fontFace: "Arial", color: i === 3 ? theme.accent : theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("72", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-72-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-73: 练习三：最小授权方案设计
write_slide(73, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 73, title: "练习三：最小授权方案设计" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("练习三：最小授权方案设计", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const dims = [
    { dim: "范围授权", desc: "项目边界的清晰定义", strategy: "从小范围试点开始：先在一个事业部试点，周期6个月",底线: "试点范围不超过整体20%" },
    { dim: "时间授权", desc: "试点周期的明确约定", strategy: "分阶段节点验收：每2个月进行一次阶段性评审",底线: "单次授权周期不超过3个月" },
    { dim: "资源授权", desc: "预算和人力的明确额度", strategy: "用最小资源启动：首批预算150万，核心团队5人",底线: "超出预算需提前报批" },
    { dim: "决策授权", desc: "哪些决策可以自己做，哪些需要上报", strategy: "建立定期汇报机制：双周报+月度战略同步会",底线: "重大决策（超过50万）须高层审批" }
  ];
  dims.forEach((d, i) => {
    const y = 1.05 + i * 1.1;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 1.0, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.4, h: 1.0, fill: { color: theme.accent } });
    slide.addText(d.dim, { x: 0.5, y: y, w: 1.4, h: 1.0, fontSize: 12, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(d.desc, { x: 2.0, y: y + 0.08, w: 2.5, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(d.strategy, { x: 2.0, y: y + 0.45, w: 4.5, h: 0.5, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addShape(pres.shapes.RECTANGLE, { x: 6.6, y: y, w: 2.9, h: 1.0, fill: { color: theme.primary, transparency: 90 } });
    slide.addText("底线：" + d.底线, { x: 6.7, y: y + 0.3, w: 2.7, h: 0.4, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("73", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-73-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-74: 练习四：汇报叙事设计
write_slide(74, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 74, title: "练习四：汇报叙事设计" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("练习四：汇报叙事设计", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const struct = [
    { phase: "背景", content: "公司数字化现状：各系统孤岛，数据利用率不足30%；竞品已启动数字化升级，市场竞争压力加大", time: "1分钟" },
    { phase: "冲突", content: "不变革的风险：预计未来2年市场份额将下降5-8%，年损失约1500万元；现有系统维护成本年增10%", time: "1分钟" },
    { phase: "选择", content: "变革方案：全渠道数字化系统，总投入1200万，年效益350万，ROI 22.5%，5年净收益270万", time: "2分钟" },
    { phase: "结果", content: "行动请求：请批准第一阶段150万预算和5人核心团队，授权周期3个月，双月评审节点", time: "1分钟" }
  ];
  struct.forEach((s, i) => {
    const y = 1.1 + i * 1.05;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.95, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.9, h: 0.95, fill: { color: theme.accent } });
    slide.addText(s.phase, { x: 0.5, y: y, w: 0.9, h: 0.95, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(s.content, { x: 1.5, y: y + 0.15, w: 6.8, h: 0.65, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
    slide.addText(s.time, { x: 8.4, y: y + 0.3, w: 0.9, h: 0.35, fontSize: 11, fontFace: "Arial", color: theme.secondary, align: "center" });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("74", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-74-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-75: 练习五：变革失败复盘
write_slide(75, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 75, title: "练习五：变革失败复盘" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("练习五：变革失败复盘", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addText("复盘框架：三个关键问题", { x: 0.5, y: 1.05, w: 9.0, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  const qs = [
    { q: "问题一：失败的根本原因是什么？", hint: "从决策层/执行层/外部环境三个维度分析", color: theme.accent },
    { q: "问题二：有哪些信号早期可以识别？", hint: "回顾高层态度/资源分配/风险暴露三个维度", color: theme.primary },
    { q: "问题三：如果重来，如何做得不同？", hint: "从说服策略/授权设计/风险应对三个维度改进", color: theme.secondary }
  ];
  qs.forEach((q, i) => {
    const y = 1.55 + i * 1.2;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 1.1, fill: { color: "FFFFFF" }, line: { color: q.color, width: 2 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.12, h: 1.1, fill: { color: q.color } });
    slide.addText(q.q, { x: 0.8, y: y + 0.15, w: 8.5, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText("提示：" + q.hint, { x: 0.8, y: y + 0.6, w: 8.5, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("75", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-75-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-76: 案例研究方法论
write_slide(76, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 76, title: "案例研究方法论" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("案例研究方法论", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const steps = [
    { step: "1", title: "情境还原", desc: "识别决策背景、当事人角色、组织环境" },
    { step: "2", title: "决策分析", desc: "分析高层决策逻辑、关键转折点、说服策略" },
    { step: "3", title: "结果评估", desc: "评估变革成效、失败原因、教训提炼" },
    { step: "4", title: "迁移应用", desc: "将经验迁移到自己的工作情境" }
  ];
  steps.forEach((s, i) => {
    const y = 1.1 + i * 1.05;
    slide.addShape(pres.shapes.OVAL, { x: 0.5, y: y + 0.15, w: 0.7, h: 0.7, fill: { color: theme.accent } });
    slide.addText(s.step, { x: 0.5, y: y + 0.15, w: 0.7, h: 0.7, fontSize: 20, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(s.title, { x: 1.4, y: y + 0.1, w: 2.5, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(s.desc, { x: 1.4, y: y + 0.5, w: 8.0, h: 0.4, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
    if (i < 3) { slide.addShape(pres.shapes.LINE, { x: 0.85, y: y + 0.9, w: 0, h: 0.15, line: { color: theme.light, width: 2 } }); }
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("76", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-76-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-77: 案例一深度解析
write_slide(77, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 77, title: "案例一深度解析：ERP升级提案被拒" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("案例一深度解析：ERP升级提案被拒", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 22, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const sections = [
    { title: "情境", content: "某制造企业IT经理提议ERP升级，预算500万，预期ROI 25%，被CEO以"时机不对"为由拒绝" },
    { title: "问题", content: "提案使用了执行层语言（功能列表、技术架构），未量化变革成本和风险，CEO无法评估" },
    { title: "转折", content: "重新提案：用财务语言重述——不变革成本（年损失200万）+ 最小授权（先试点2个工厂）" },
    { title: "结果", content: "CEO批准先在2个工厂试点，授权150万预算，3个月后评审，6个月后全面推广" }
  ];
  sections.forEach((s, i) => {
    const y = 1.05 + i * 1.0;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.2, h: 0.85, fill: { color: i === 1 ? theme.accent : theme.primary } });
    slide.addText(s.title, { x: 0.5, y: y, w: 1.2, h: 0.85, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addShape(pres.shapes.RECTANGLE, { x: 1.7, y: y, w: 7.8, h: 0.85, fill: { color: i === 2 ? theme.light : "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addText(s.content, { x: 1.9, y: y + 0.18, w: 7.4, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("77", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-77-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-78: 案例二深度解析
write_slide(78, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 78, title: "案例二深度解析：组织变革被搁置" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("案例二深度解析：组织变革被搁置", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 22, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const sections = [
    { title: "情境", content: "HR总监提议建立内部讲师体系，预算80万/年，预计提升员工留存率15%，被CFO要求"先证明有效再长期投入"" },
    { title: "问题", content: "未识别CFO的风险规避型决策风格，过度强调长期战略价值，未提供量化证据" },
    { title: "转折", content: "调整策略：先做3个月试点（预算10万），用数据说话——试点期间员工满意度提升12%作为验证" },
    { title: "结果", content: "CFO批准试点项目，试点结束后基于数据追加预算，最终形成完整的内部讲师体系" }
  ];
  sections.forEach((s, i) => {
    const y = 1.05 + i * 1.0;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.2, h: 0.85, fill: { color: i === 1 ? theme.accent : theme.primary } });
    slide.addText(s.title, { x: 0.5, y: y, w: 1.2, h: 0.85, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addShape(pres.shapes.RECTANGLE, { x: 1.7, y: y, w: 7.8, h: 0.85, fill: { color: i === 2 ? theme.light : "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addText(s.content, { x: 1.9, y: y + 0.18, w: 7.4, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("78", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-78-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-79: 案例三深度解析
write_slide(79, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 79, title: "案例三深度解析：成功说服的关键转折" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("案例三深度解析：成功说服的关键转折", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 22, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const sections = [
    { title: "情境", content: "某创业公司CTO向CEO申请研发新产品的预算，CEO是财务导向型但此前对技术投资回报存疑" },
    { title: "问题", content: "前两次技术提案都因"无法量化价值"被否，CTO缺乏与CEO建立信任的基础" },
    { title: "转折", content: "CTO做了三件事：1)用行业对标数据量化市场机会；2)设定明确的止损边界；3)邀请CEO参与评审会议建立参与感" },
    { title: "结果", content: "CEO批准首期200万预算，同时要求双周汇报，最终产品上线后ROI达到预期120%" }
  ];
  sections.forEach((s, i) => {
    const y = 1.05 + i * 1.0;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.2, h: 0.85, fill: { color: i === 2 ? theme.accent : theme.primary } });
    slide.addText(s.title, { x: 0.5, y: y, w: 1.2, h: 0.85, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addShape(pres.shapes.RECTANGLE, { x: 1.7, y: y, w: 7.8, h: 0.85, fill: { color: i === 2 ? theme.light : "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addText(s.content, { x: 1.9, y: y + 0.18, w: 7.4, h: 0.5, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("79", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-79-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-80: 讲师观察要点
write_slide(80, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 80, title: "讲师观察要点" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("讲师观察要点", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const points = [
    { cat: "决策者画像", obs: ["学员是否能准确识别决策者类型？", "是否能够说出判断依据？"] },
    { cat: "向上说服策略", obs: ["策略是否与决策者类型匹配？", "语言是否做了适度转化？"] },
    { cat: "最小授权设计", obs: ["四维度是否都有覆盖？", "底线设计是否合理？"] },
    { cat: "风险应对", obs: ["是否主动坦诚风险？", "止损边界是否清晰？"] }
  ];
  points.forEach((p, i) => {
    const col = i % 2; const row = int(i / 2);
    const x = 0.5 + col * 4.7; const y = 1.1 + row * 2.1;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.4, h: 1.9, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.4, h: 0.4, fill: { color: theme.accent } });
    slide.addText(p.cat, { x: x + 0.15, y: y + 0.05, w: 4.1, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
    p.obs.forEach((o, j) => { slide.addText("• " + o, { x: x + 0.2, y: y + 0.55 + j * 0.6, w: 4.0, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary }); });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("80", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-80-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

print("Slides 71-80 done")