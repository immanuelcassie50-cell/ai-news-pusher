#!/usr/bin/env python3
SLIDES = "D:/新课开发/变革管理/08-向上管理与高层说服术：让决策层理解容错的成本逻辑/完整课程包/06-授课PPT/slides"

def write_slide(n, content):
    path = f"{SLIDES}/slide-{n:02d}.js"
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"slide-{n:02d}.js written")

write_slide(62, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 62, title: "变革失败的七个危险信号" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("变革失败的七个危险信号", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const stages = ["01 高层口头支持，资源迟迟不到位","02 缺乏明确的决策授权和验收标准","03 风险被乐观估计，缺乏量化分析","04 团队能力与项目需求不匹配","05 汇报叙事模糊，无法引起高层共鸣","06 只讲机会，不谈风险和应对","07 失败后缺乏反思和教训总结"];
  stages.forEach((s, i) => {
    const col = i < 4 ? 0 : 1; const row = i < 4 ? i : i - 4;
    const x = 0.5 + col * 4.7; const y = 1.1 + row * 1.05;
    const bg = i < 4 ? theme.light : theme.primary;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.4, h: 0.85, fill: { color: bg } });
    slide.addText(s, { x: x + 0.15, y: y + 0.2, w: 4.1, h: 0.45, fontSize: 12, fontFace: "Microsoft YaHei", color: i < 4 ? theme.primary : "FFFFFF" });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("62", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-62-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

write_slide(63, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 63, title: "决策者类型x决策风格矩阵" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("决策者类型 x 决策风格矩阵", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const headers = ["决策者类型", "决策风格", "沟通语言", "推荐策略"];
  const xs = [0.5, 2.9, 4.8, 7.1];
  headers.forEach((h, i) => {
    slide.addShape(pres.shapes.RECTANGLE, { x: xs[i], y: 1.0, w: i === 3 ? 2.4 : 2.2, h: 0.4, fill: { color: theme.accent } });
    slide.addText(h, { x: xs[i] + 0.1, y: 1.05, w: i === 3 ? 2.2 : 2.0, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  });
  const matrix = [
    ["财务导向型", "风险规避型", "ROI/回报率", "量化+最小授权"],
    ["财务导向型", "风险承担型", "ROI/现金流", "数据+快速迭代"],
    ["战略导向型", "趋势把握型", "行业/竞争", "叙事+格局展示"],
    ["战略导向型", "格局构建型", "战略/方向", "全景+长期价值"],
    ["关系导向型", "人心导向型", "人/团队/士气", "共情+团队支持"],
    ["关系导向型", "稳定压倒型", "稳定/安全", "渐进+保障机制"]
  ];
  matrix.forEach((row, i) => {
    const y = 1.45 + i * 0.67; const bg = i % 2 === 0 ? theme.light : "FFFFFF";
    row.forEach((cell, j) => {
      slide.addShape(pres.shapes.RECTANGLE, { x: xs[j], y: y, w: j === 3 ? 2.4 : 2.2, h: 0.6, fill: { color: bg } });
      slide.addText(cell, { x: xs[j] + 0.1, y: y + 0.1, w: j === 3 ? 2.2 : 2.0, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: j === 2 ? theme.accent : theme.primary, bold: j === 0 });
    });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("63", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-63-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

write_slide(64, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 64, title: "说服策略自检清单" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("说服策略自检清单", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const checks = [
    { cat: "受众匹配", items: ["是否识别了决策者类型？", "是否使用了决策者的语言？", "是否针对其核心关切设计？"] },
    { cat: "证据支撑", items: ["是否有量化数据支撑？", "数据是否可验证？", "案例是否有说服力？"] },
    { cat: "风险透明", items: ["是否主动坦诚风险？", "是否有应对预案？", "止损边界是否明确？"] },
    { cat: "授权明确", items: ["是否提出最小授权？", "授权范围/时间/资源是否清晰？", "是否有定期汇报机制？"] }
  ];
  checks.forEach((c, i) => {
    const x = 0.5 + (i % 2) * 4.7; const y = 1.1 + int(i / 2) * 2.1;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.4, h: 1.9, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: y, w: 4.4, h: 0.4, fill: { color: theme.accent } });
    slide.addText(c.cat, { x: x + 0.15, y: y + 0.05, w: 4.1, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
    c.items.forEach((item, j) => { slide.addText("[ ] " + item, { x: x + 0.15, y: y + 0.5 + j * 0.42, w: 4.1, h: 0.38, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary }); });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("64", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-64-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

write_slide(65, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 65, title: "ROI计算演示" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("ROI计算演示", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 5.5, h: 2.4, fill: { color: theme.light } });
  slide.addText("输入参数", { x: 0.7, y: 1.15, w: 5.1, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
  const inputs = [["变革总投入","500万元"],["年效益","150万元/年"],["项目周期","5年"],["失败概率（高层感知）","30%"],["不变革成本（年损失）","100万元/年"]];
  inputs.forEach((row, i) => {
    slide.addText(row[0], { x: 0.7, y: 1.55 + i * 0.36, w: 2.8, h: 0.32, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
    slide.addText(row[1], { x: 3.5, y: 1.55 + i * 0.36, w: 2.3, h: 0.32, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 6.2, y: 1.1, w: 3.3, h: 2.4, fill: { color: theme.primary } });
  slide.addText("计算结果", { x: 6.4, y: 1.15, w: 2.9, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const calcs = [["总收益","750万元"],["失败成本","150万元"],["不变革成本","500万元"],["变革净收益","100万元"],["ROI","20%"]];
  calcs.forEach((row, i) => {
    slide.addText(row[0], { x: 6.4, y: 1.55 + i * 0.36, w: 1.6, h: 0.32, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.light });
    slide.addText(row[1], { x: 8.0, y: 1.55 + i * 0.36, w: 1.3, h: 0.32, fontSize: 11, fontFace: "Arial", color: i === 3 ? theme.accent : "FFFFFF", bold: i === 3 });
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.65, w: 9.0, h: 1.4, fill: { color: theme.accent, transparency: 10 } });
  slide.addText("结论：变革净收益=750-150-500=100万元>0，ROI=20%，值得推进。", { x: 0.7, y: 3.75, w: 8.6, h: 1.2, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("65", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-65-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

write_slide(66, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 66, title: "变革管理者的五个境界" };
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
  slide.addText("66", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-66-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

write_slide(67, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 67, title: "信任建立模型" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("信任建立模型", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const pillars = [
    { title: "专业能力", icon: "P", items: ["过往成功案例", "可验证的数据", "行业知识深度"] },
    { title: "透明坦诚", icon: "T", items: ["主动说风险", "不说绝对化的话", "不确定性不隐藏"] },
    { title: "可靠承诺", icon: "R", items: ["承诺可兑现", "言出必行", "超出预期交付"] }
  ];
  pillars.forEach((p, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.1, w: 2.9, h: 3.0, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.OVAL, { x: x + 1.0, y: 1.2, w: 0.9, h: 0.9, fill: { color: theme.accent } });
    slide.addText(p.icon, { x: x + 1.0, y: 1.2, w: 0.9, h: 0.9, fontSize: 28, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(p.title, { x: x + 0.1, y: 2.2, w: 2.7, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
    p.items.forEach((item, j) => { slide.addText(item, { x: x + 0.2, y: 2.7 + j * 0.42, w: 2.5, h: 0.38, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary }); });
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.25, w: 9.0, h: 0.7, fill: { color: theme.light } });
  slide.addText("P+T+R = Trust  信任 = 专业 x 透明 x 可靠，三者缺一不可", { x: 0.7, y: 4.35, w: 8.6, h: 0.5, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, align: "center" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("67", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-67-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

write_slide(68, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 68, title: "关键知识点回顾" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("关键知识点回顾", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const points = [
    ["容错成本逻辑", "决策层失败成本 = 失败损失 x 失败概率"],
    ["决策者画像", "财务型/战略型/关系型三维分析"],
    ["向上说服四步", "识别类型 -> 调整语言 -> 建立信任 -> 争取授权"],
    ["成本量化", "变革净收益 = 收益 - 成本 x 概率 - 不变革成本"],
    ["最小授权", "范围 x 时间 x 资源 x 决策权四维设计"],
    ["叙事结构", "背景 + 冲突 + 选择 + 结果四段式"],
    ["信任建立", "专业能力 + 透明坦诚 + 可靠承诺 = PTR"]
  ];
  points.forEach((p, i) => {
    const y = 1.05 + i * 0.62; const bg = i % 2 === 0 ? theme.light : "FFFFFF";
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.55, fill: { color: bg } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.08, h: 0.55, fill: { color: theme.accent } });
    slide.addText(p[0], { x: 0.7, y: y + 0.08, w: 2.5, h: 0.38, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(p[1], { x: 3.3, y: y + 0.08, w: 6.0, h: 0.38, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("68", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-68-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

write_slide(69, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 69, title: "工具表单速查" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("工具表单速查", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const forms = [["F01","向上说服四步法模板","提案准备阶段"],["F02","容错成本量化计算表","数字论证阶段"],["F03","高层决策者画像分析表","了解高层阶段"],["F04","高频问题预备应答卡","高层质询阶段"],["F05","最小授权争取策略表","争取授权阶段"],["F06","汇报叙事自检清单","汇报前检查"],["F07","变革投资回报评估表","决策前评估"]];
  forms.forEach((f, i) => {
    const y = 1.1 + i * 0.62; const bg = i % 2 === 0 ? theme.light : "FFFFFF";
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.55, fill: { color: bg } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.7, h: 0.55, fill: { color: theme.accent } });
    slide.addText(f[0], { x: 0.5, y: y, w: 0.7, h: 0.55, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(f[1], { x: 1.35, y: y + 0.08, w: 4.5, h: 0.38, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(f[2], { x: 6.0, y: y + 0.08, w: 3.3, h: 0.38, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("69", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-69-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

write_slide(70, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "summary", index: 70, title: "课程总结" };
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
  slide.addText("70", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-70-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

print("Slides 62-70 done")