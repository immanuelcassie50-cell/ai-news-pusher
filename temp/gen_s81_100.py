#!/usr/bin/env python3
SLIDES = "D:/新课开发/变革管理/08-向上管理与高层说服术：让决策层理解容错的成本逻辑/完整课程包/06-授课PPT/slides"

def write_slide(n, content):
    path = f"{SLIDES}/slide-{n:02d}.js"
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"slide-{n:02d}.js written")

# slide-81: 学员常见误区
write_slide(81, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 81, title: "学员常见误区" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("学员常见误区", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const mistakes = [
    { wrong: "认为只要数据充分就能说服高层", right: "数据只是基础，必须配合决策者语言和信任建立" },
    { wrong: "认为"我负全责"能增加说服力", right: "这句话让高层承担决策责任，反而增加其顾虑" },
    { wrong: "认为最小授权是降低自己的地位", right: "最小授权是降低高层决策门槛的策略性选择" },
    { wrong: "认为透明坦诚会暴露弱点", right: "主动说风险反而建立信任，减少后续质疑" },
    { wrong: "认为一次说服不成就应该放弃", right: "说服是迭代过程，需要根据反馈调整策略" }
  ];
  mistakes.forEach((m, i) => {
    const y = 1.05 + i * 0.88;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.78, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.1, h: 0.78, fill: { color: theme.accent } });
    slide.addText("✗ " + m.wrong, { x: 0.75, y: y + 0.08, w: 4.0, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.accent });
    slide.addText("✓ " + m.right, { x: 4.9, y: y + 0.08, w: 4.4, h: 0.6, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("81", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-81-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-82: 工具表单总览
write_slide(82, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 82, title: "工具表单总览" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("工具表单总览", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const forms = [
    { id: "F01", name: "向上说服四步法模板", purpose: "准备说服方案", key: "类型识别→语言转化→信任建立→授权争取" },
    { id: "F02", name: "容错成本量化计算表", purpose: "量化变革价值", key: "Error Cost + Inaction Cost + ROI" },
    { id: "F03", name: "高层决策者画像分析表", purpose: "了解高层关切", key: "财务型/战略型/关系型 + 决策风格" },
    { id: "F04", name: "高频问题预备应答卡", purpose: "准备应对质疑", key: "失败责任/成功证据/止损边界" },
    { id: "F05", name: "最小授权争取策略表", purpose: "设计授权方案", key: "范围×时间×资源×决策权" },
    { id: "F06", name: "汇报叙事自检清单", purpose: "优化汇报结构", key: "受众匹配/逻辑完整/风险透明" },
    { id: "F07", name: "变革投资回报评估表", purpose: "评估变革决策", key: "投入→收益→ROI→风险调整" }
  ];
  forms.forEach((f, i) => {
    const y = 1.0 + i * 0.62;
    const bg = i % 2 === 0 ? theme.light : "FFFFFF";
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.55, fill: { color: bg } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.6, h: 0.55, fill: { color: theme.accent } });
    slide.addText(f.id, { x: 0.5, y: y, w: 0.6, h: 0.55, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(f.name, { x: 1.2, y: y + 0.1, w: 2.8, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(f.purpose, { x: 4.1, y: y + 0.1, w: 1.5, h: 0.35, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addText(f.key, { x: 5.7, y: y + 0.1, w: 3.6, h: 0.35, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.accent });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("82", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-82-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-83: 课程效果评估维度
write_slide(83, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 83, title: "课程效果评估维度" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("课程效果评估维度", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const dims = [
    { dim: "知识掌握", metric: "能否准确识别决策者类型并说明判断依据", method: "课堂测验" },
    { dim: "技能应用", metric: "能否独立完成容错成本量化计算和最小授权设计", method: "实操练习" },
    { dim: "行为改变", metric: "课后3个月内是否有向上说服实践并取得进展", method: "跟踪访谈" },
    { dim: "业务结果", metric: "推动的变革项目是否获得批准并达成预期目标", method: "项目管理数据" }
  ];
  dims.forEach((d, i) => {
    const y = 1.1 + i * 1.05;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.95, fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.12, h: 0.95, fill: { color: theme.accent } });
    slide.addText(d.dim, { x: 0.8, y: y + 0.08, w: 1.8, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(d.metric, { x: 0.8, y: y + 0.48, w: 5.5, h: 0.4, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addShape(pres.shapes.RECTANGLE, { x: 6.5, y: y + 0.2, w: 2.8, h: 0.55, fill: { color: theme.light } });
    slide.addText(d.method, { x: 6.6, y: y + 0.3, w: 2.6, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.accent, align: "center" });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("83", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-83-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-84: 课后行动清单
write_slide(84, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 84, title: "课后行动清单" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("课后行动清单", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const timeline = [
    { time: "一周内", actions: ["梳理当前最需要向上说服的项目/提案", "完成决策者画像分析（F03）", "使用F02计算该项目的容错成本"] },
    { time: "一个月内", actions: ["选择一个项目实践向上说服四步法", "准备高频问题应答预案（F04）", "设计最小授权方案（F05）"] },
    { time: "三个月内", actions: ["复盘说服过程，总结经验教训", "在另一个项目中使用优化后的策略", "与同学分享实践心得"] }
  ];
  timeline.forEach((t, i) => {
    const y = 1.05 + i * 1.45;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 1.5, h: 1.35, fill: { color: theme.accent } });
    slide.addText(t.time, { x: 0.5, y: y, w: 1.5, h: 1.35, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    t.actions.forEach((a, j) => {
      slide.addText("□ " + a, { x: 2.15, y: y + 0.15 + j * 0.4, w: 7.2, h: 0.38, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary });
    });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("84", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-84-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-85: 延伸阅读推荐
write_slide(85, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 85, title: "延伸阅读推荐" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("延伸阅读推荐", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const books = [
    { title: "说服：说服他人的50个策略", author: "Robert Cialdini", topic: "影响力原理与说服策略" },
    { title: "关键对话：如何高效能沟通", author: "Patterson等", topic: "高风险情境下的沟通技巧" },
    { title: "噪声：人类判断的缺陷", author: "Kahneman等", topic: "决策中的系统性偏差" },
    { title: "经理人的博弈：向上管理的艺术", author: "傅瑞德", topic: "组织内的权力与影响力" },
    { title: "商业决策思维：避免常见陷阱", author: "Eisenfort等", topic: "管理者决策质量提升" }
  ];
  books.forEach((b, i) => {
    const y = 1.05 + i * 0.85;
    const bg = i % 2 === 0 ? theme.light : "FFFFFF";
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.75, fill: { color: bg } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.1, h: 0.75, fill: { color: theme.accent } });
    slide.addText(b.title, { x: 0.75, y: y + 0.1, w: 4.5, h: 0.3, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(b.author, { x: 0.75, y: y + 0.42, w: 3.0, h: 0.25, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addText(b.topic, { x: 5.3, y: y + 0.2, w: 4.0, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.accent });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("85", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-85-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-86: 高层说服的五个关键时机
write_slide(86, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 86, title: "高层说服的五个关键时机" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("高层说服的五个关键时机", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const timings = [
    { timing: "年度预算规划期", desc: "资源分配窗口，此时争取预算最容易", tip: "提前2个月启动准备" },
    { timing: "业绩下滑/危机时刻", desc: "高层对变革的接受度提升", tip: "准备好解决方案而非只提问题" },
    { timing: "竞品动作后", desc: "市场压力增加决策紧迫感", tip: "用竞品数据增强说服力" },
    { timing: "高层主动询问时", desc: "自然的需求窗口，切入最佳时机", tip: "立即响应，不要说"我回去准备一下"" },
    { timing: "重大项目复盘后", desc: "成功或失败都带来变革窗口", tip: "复盘会议是说服的绝佳时机" }
  ];
  timings.forEach((t, i) => {
    const y = 1.05 + i * 0.88;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.78, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addShape(pres.shapes.OVAL, { x: 0.65, y: y + 0.19, w: 0.4, h: 0.4, fill: { color: theme.accent } });
    slide.addText(String(i + 1), { x: 0.65, y: y + 0.19, w: 0.4, h: 0.4, fontSize: 14, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    slide.addText(t.timing, { x: 1.2, y: y + 0.08, w: 2.5, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
    slide.addText(t.desc, { x: 1.2, y: y + 0.42, w: 4.0, h: 0.32, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.secondary });
    slide.addShape(pres.shapes.RECTANGLE, { x: 5.4, y: y + 0.15, w: 3.9, h: 0.48, fill: { color: theme.primary, transparency: 92 } });
    slide.addText("💡 " + t.tip, { x: 5.5, y: y + 0.22, w: 3.7, h: 0.35, fontSize: 10, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("86", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-86-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-87: 变革管理者的成长路径
write_slide(87, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 87, title: "变革管理者的成长路径" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("变革管理者的成长路径", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const stages = [
    { level: "Level 1", title: "执行者", desc: "完成任务，达成KPI", skill: "执行力", years: "0-2年" },
    { level: "Level 2", title: "沟通者", desc: "清晰表达，推动协作", skill: "沟通力", years: "2-4年" },
    { level: "Level 3", title: "说服者", desc: "影响决策，争取资源", skill: "说服力", years: "4-7年" },
    { level: "Level 4", title: "战略伙伴", desc: "共谋战略，推动变革", skill: "战略思维", years: "7-12年" },
    { level: "Level 5", title: "变革领袖", desc: "引领方向，塑造文化", skill: "领导力", years: "12年+" }
  ];
  stages.forEach((s, i) => {
    const x = 0.5 + i * 1.85;
    slide.addShape(pres.shapes.RECTANGLE, { x: x, y: 1.1, w: 1.7, h: 3.7, fill: { color: i >= 3 ? theme.accent : i >= 1 ? theme.primary : theme.secondary } });
    slide.addText(s.level, { x: x, y: 1.2, w: 1.7, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center" });
    slide.addText(s.title, { x: x, y: 1.65, w: 1.7, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true, align: "center" });
    slide.addText(s.desc, { x: x + 0.1, y: 2.2, w: 1.5, h: 0.8, fontSize: 9, fontFace: "Microsoft YaHei", color: i >= 2 ? theme.light : "FFFFFF", align: "center" });
    slide.addShape(pres.shapes.RECTANGLE, { x: x + 0.2, y: 3.1, w: 1.3, h: 0.35, fill: { color: "FFFFFF", transparency: 20 } });
    slide.addText(s.skill, { x: x + 0.2, y: 3.1, w: 1.3, h: 0.35, fontSize: 10, fontFace: "Microsoft YaHei", color: "FFFFFF", align: "center", valign: "middle" });
    slide.addText(s.years, { x: x, y: 3.6, w: 1.7, h: 0.35, fontSize: 10, fontFace: "Arial", color: i >= 2 ? theme.light : "FFFFFF", align: "center" });
    if (i < 4) { slide.addShape(pres.shapes.LINE, { x: x + 1.7, y: 2.5, w: 0.15, h: 0, line: { color: theme.light, width: 2 } }); }
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.95, w: 9.0, h: 0.5, fill: { color: theme.light } });
  slide.addText("本课程重点培养 Level 3（说服者）能力，同时为 Level 4（战略伙伴）奠定基础", { x: 0.7, y: 5.05, w: 8.6, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("87", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-87-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-88: 常见高层质疑及应答策略
write_slide(88, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 88, title: "常见高层质疑及应答策略" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("常见高层质疑及应答策略", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const qas = [
    { q: ""这个项目为什么现在要做？"", a: "从不变革成本角度回答——每年损失X万元，等待成本大于行动成本" },
    { q: ""失败了谁负责？"", a: "明确责任分层：执行层负责实施，决策层负责审批——我不是在推卸责任，是在明确责任边界" },
    { q: ""凭什么你觉得能成？"", a: "列出3个关键成功要素，每个要素提供验证数据或行业对标" },
    { q: ""能不能先试点？"", a: "这是最小授权的绝佳机会——立即接受，并主动设计试点方案" },
    { q: ""预算能不能减半？"", a: "提供两个方案：A全方案+B精简版，说明差异和风险" }
  ];
  qas.forEach((qa, i) => {
    const y = 1.0 + i * 0.88;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.78, fill: { color: i % 2 === 0 ? theme.light : "FFFFFF" } });
    slide.addText("Q: " + qa.q, { x: 0.7, y: y + 0.08, w: 8.6, h: 0.32, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true });
    slide.addText("A: " + qa.a, { x: 0.7, y: y + 0.4, w: 8.6, h: 0.35, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("88", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-88-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-89: 变革管理的三大陷阱
write_slide(89, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 89, title: "变革管理的三大陷阱" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("变革管理的三大陷阱", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const traps = [
    { trap: "陷阱一：信息不对称", desc: "执行层认为好的方案，高层可能因信息不足而拒绝", solution: "主动填补信息差，用高层的语言和逻辑重新包装" },
    { trap: "陷阱二：承诺过度", desc: "为争取项目过度承诺，失败后失去信任", solution: "诚实设定预期，预留buffer，说到做到" },
    { trap: "陷阱三：只反不立", desc: "只指出问题不提解决方案，显得抱怨多于建设性", solution: "每次反馈问题必带解决方案，成为问题的终结者" }
  ];
  traps.forEach((t, i) => {
    const y = 1.1 + i * 1.4;
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 1.3, fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 2 } });
    slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 9.0, h: 0.45, fill: { color: theme.accent } });
    slide.addText(t.trap, { x: 0.7, y: y + 0.08, w: 8.6, h: 0.3, fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
    slide.addText(t.desc, { x: 0.7, y: y + 0.55, w: 4.0, h: 0.65, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
    slide.addShape(pres.shapes.RECTANGLE, { x: 4.9, y: y + 0.55, w: 4.4, h: 0.65, fill: { color: theme.light } });
    slide.addText("✓ " + t.solution, { x: 5.0, y: y + 0.62, w: 4.2, h: 0.5, fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary });
  });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("89", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-89-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

# slide-90: 变革管理者的自我评估
write_slide(90, r'''const pptxgen = require("pptxgenjs");
const slideConfig = { type: "content", index: 90, title: "变革管理者的自我评估" };
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.9, fill: { color: theme.primary } });
  slide.addText("变革管理者的自我评估", { x: 0.5, y: 0.2, w: 9, h: 0.5, fontSize: 24, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  const dims = [
    { dim: "决策者识别", score: 3 },
    { dim: "语言转化能力", score: 3 },
    { dim: "信任建立能力", score: 3 },
    { dim: "授权争取技巧", score: 3 },
    { dim: "风险透明意识", score: 3 }
  ];
  slide.addText("请根据自己的实际情况评分（1-5分）：", { x: 0.5, y: 1.05, w: 9.0, h: 0.35, fontSize: 12, fontFace: "Microsoft YaHei", color: theme.secondary });
  dims.forEach((d, i) => {
    const y = 1.5 + i * 0.75;
    slide.addText(d.dim, { x: 0.5, y: y + 0.1, w: 2.5, h: 0.35, fontSize: 13, fontFace: "Microsoft YaHei", color: theme.primary });
    slide.addShape(pres.shapes.RECTANGLE, { x: 3.2, y: y + 0.12, w: 5.5, h: 0.35, fill: { color: theme.light } });
    for (let s = 1; s <= 5; s++) {
      slide.addShape(pres.shapes.OVAL, { x: 3.3 + (s - 1) * 1.05, y: y + 0.14, w: 0.28, h: 0.28, fill: { color: s <= d.score ? theme.accent : "DDDDDD" } });
      slide.addText(String(s), { x: 3.3 + (s - 1) * 1.05, y: y + 0.14, w: 0.28, h: 0.28, fontSize: 10, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    }
    slide.addText(d.score + "/5", { x: 8.85, y: y + 0.1, w: 0.6, h: 0.35, fontSize: 12, fontFace: "Arial", color: theme.accent, bold: true });
  });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: 9.0, h: 0.45, fill: { color: theme.primary } });
  slide.addText("提示：低于3分的维度是您需要重点提升的方向", { x: 0.7, y: 5.08, w: 8.6, h: 0.3, fontSize: 11, fontFace: "Microsoft YaHei", color: "FFFFFF" });
  slide.addShape(pres.shapes.OVAL, { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText("90", { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 11, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
  return slide;
}
if (require.main === module) { const pres = new pptxgen(); pres.layout = "LAYOUT_16x9"; const theme = { primary: "2b2d42", secondary: "8d99ae", accent: "ef233c", light: "edf2f4", bg: "ffffff" }; createSlide(pres, theme); pres.writeFile({ fileName: "slide-90-preview.pptx" }); }
module.exports = { createSlide, slideConfig };
''')

print("Slides 81-90 done")