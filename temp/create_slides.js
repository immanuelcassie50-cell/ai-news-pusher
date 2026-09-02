const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

const theme = {
  primary: "22223b",
  secondary: "4a4e69",
  accent: "9a8c98",
  light: "c9ada7",
  bg: "f2e9e4"
};

function addSlide() { return pres.addSlide(); }

// 封面
(function() {
  const s = addSlide();
  s.background = { color: theme.bg };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.15, fill: { color: theme.primary } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 1.5, w: 0.3, h: 2.5, fill: { color: theme.accent } });
  s.addText("营销团队管理", { x: 0.8, y: 1.8, w: 8.5, h: 1, fontSize: 52, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  s.addText("目标拆解、过程管控与战斗力建设", { x: 0.8, y: 2.8, w: 8.5, h: 0.6, fontSize: 26, fontFace: "Microsoft YaHei", color: theme.secondary });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.2, w: 10, h: 0.425, fill: { color: theme.primary } });
  s.addText("企业内训课程", { x: 0.8, y: 4.5, w: 4, h: 0.4, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.accent });
})();

// 目录
(function() {
  const s = addSlide();
  s.background = { color: theme.bg };
  s.addText("课程目录", { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 36, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 2, h: 0.05, fill: { color: theme.accent } });
  const mods = [
    { n: "01", t: "目标设定与管理", d: "目标漏斗分解与承诺机制" },
    { n: "02", t: "过程管控", d: "管控边界与关键节点识别" },
    { n: "03", t: "例会管理", d: "晨会、周会、月会、一对一会" },
    { n: "04", t: "辅导与激励", d: "GROW模型与激励体系建设" },
    { n: "05", t: "复盘机制", d: "复盘四步法与改进文化" },
    { n: "06", t: "协同机制", d: "市场-销售-服务协同闭环" }
  ];
  mods.forEach((m, i) => {
    const y = 1.5 + i * 0.65;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.6, h: 0.5, fill: { color: theme.primary }, rectRadius: 0.05 });
    s.addText(m.n, { x: 0.5, y: y, w: 0.6, h: 0.5, fontSize: 16, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    s.addText(m.t, { x: 1.3, y: y, w: 4, h: 0.5, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.primary, bold: true, valign: "middle" });
    s.addText(m.d, { x: 5.3, y: y, w: 4, h: 0.5, fontSize: 14, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "middle" });
  });
})();

// 模块一章节页
(function() {
  const s = addSlide();
  s.background = { color: theme.primary };
  s.addText("01", { x: 0.8, y: 1.2, w: 3, h: 2, fontSize: 120, fontFace: "Arial", color: theme.accent, bold: true });
  s.addText("目标设定与管理", { x: 0.8, y: 3.2, w: 8, h: 1, fontSize: 40, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  s.addText("让团队真正认目标，而不是认数字", { x: 0.8, y: 4.2, w: 8, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.light });
})();

// 模块一内容页
const m1Slides = [
  { t: "营销目标的本质", b: ["目标不是数字，是实现路径", "目标分解：从公司战略 → 部门目标 → 个人目标", "好的目标要回答：做什么、怎么做、做到什么程度"] },
  { t: "目标漏斗分解法", b: ["公司战略层：明确大方向和资源边界", "部门目标层：承接战略，转化为可衡量指标", "个人行动层：具体动作、时间节点、验收标准"] },
  { t: "目标对齐三步法", b: ["第一步：讲清楚为什么——让团队理解目标的来龙去脉", "第二步：让团队参与制定——从\"派任务\"变成\"共决策\"", "第三步：承诺与跟进——让团队自己说出目标，而不是被动接受"] },
  { t: "目标承诺技巧", b: ["用\"我承诺\"代替\"你必须\"", "目标对话而非目标摊派", "承诺后的跟进机制比承诺本身更重要"] },
  { t: "工具：目标对齐对话表", b: ["愿景激发：让下属看到目标背后的意义", "共同分解：一起讨论如何达成", "承诺确认：让下属自己说出目标"] }
];

m1Slides.forEach(function(sd) {
  const s = addSlide();
  s.background = { color: theme.bg };
  s.addText(sd.t, { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 1.5, h: 0.04, fill: { color: theme.accent } });
  sd.b.forEach(function(b, i) {
    const y = 1.5 + i * 0.8;
    s.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.15, w: 0.15, h: 0.15, fill: { color: theme.accent } });
    s.addText(b, { x: 1, y: y, w: 8.5, h: 0.7, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  });
});

// 模块二章节页
(function() {
  const s = addSlide();
  s.background = { color: theme.primary };
  s.addText("02", { x: 0.8, y: 1.2, w: 3, h: 2, fontSize: 120, fontFace: "Arial", color: theme.accent, bold: true });
  s.addText("过程管控", { x: 0.8, y: 3.2, w: 8, h: 1, fontSize: 40, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  s.addText("管太松团队放羊，管太紧团队反感", { x: 0.8, y: 4.2, w: 8, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.light });
})();

const m2Slides = [
  { t: "过程管控的本质", b: ["管控不是监视，是护航", "管控过度 = 不信任；管控失位 = 不负责", "好的管控是让下属知道\"有人在看\"，但不觉得\"被盯着\""] },
  { t: "两条红线", b: ["管控过度：微观管理、事事审批、忽略结果只看过程", "管控失位：只问结果不管过程、问题累积才介入", "找到\"足够支撑结果\"和\"不过度干预\"之间的平衡点"] },
  { t: "关键节点识别", b: ["节点类型：决策点、交付点、复盘点", "识别方法：问\"这个环节出问题的概率和影响有多大\"", "不是所有环节都要管，关键是管住那20%的关键节点"] },
  { t: "过程管控四件套", b: ["数据看板：让结果可视化", "周报机制：让进度透明化", "例会机制：让问题及时暴露", "日常对话：让沟通保持畅通"] },
  { t: "工具：过程管控检查表", b: ["管控过度的10个信号", "管控失位的10个信号", "日常管控四件套使用指南"] }
];

m2Slides.forEach(function(sd) {
  const s = addSlide();
  s.background = { color: theme.bg };
  s.addText(sd.t, { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 1.5, h: 0.04, fill: { color: theme.accent } });
  sd.b.forEach(function(b, i) {
    const y = 1.5 + i * 0.8;
    s.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.15, w: 0.15, h: 0.15, fill: { color: theme.accent } });
    s.addText(b, { x: 1, y: y, w: 8.5, h: 0.7, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  });
});

// 模块三章节页
(function() {
  const s = addSlide();
  s.background = { color: theme.primary };
  s.addText("03", { x: 0.8, y: 1.2, w: 3, h: 2, fontSize: 120, fontFace: "Arial", color: theme.accent, bold: true });
  s.addText("例会管理", { x: 0.8, y: 3.2, w: 8, h: 1, fontSize: 40, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  s.addText("让例会从走过场变成推动力", { x: 0.8, y: 4.2, w: 8, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.light });
})();

const m3Slides = [
  { t: "四类例会概览", b: ["晨会（15分钟内）：目标对齐 + 士气 + 问题升级", "周会（60分钟）：进度review + 案例分析 + 下周计划", "月会（90分钟）：复盘 + 规划 + 激励兑现", "一对一（因人而异）：辅导为主，不是汇报"] },
  { t: "晨会三问", b: ["第一问：昨天完成了什么？（目标对齐）", "第二问：今天要做什么？（行动确认）", "第三问：有什么问题需要支持？（问题升级）"] },
  { t: "周会四步法", b: ["第一步（15分钟）：上周目标回顾——逐项过进度", "第二步（20分钟）：本周问题分析——找根因", "第三步（15分钟）：下周计划制定——具体到动作", "第四步（10分钟）：资源协调与支持——当场决定"] },
  { t: "一对一谈话技巧", b: ["频率因人而异：新手多陪，老手少管", "话题以辅导为主：不是听汇报，是帮下属解决问题", "保持开放对话：让下属说，而不是你讲"] },
  { t: "工具：例会设计模板", b: ["晨会三问卡使用指南", "周会四步法流程卡", "月会复盘模板"] }
];

m3Slides.forEach(function(sd) {
  const s = addSlide();
  s.background = { color: theme.bg };
  s.addText(sd.t, { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 1.5, h: 0.04, fill: { color: theme.accent } });
  sd.b.forEach(function(b, i) {
    const y = 1.5 + i * 0.8;
    s.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.15, w: 0.15, h: 0.15, fill: { color: theme.accent } });
    s.addText(b, { x: 1, y: y, w: 8.5, h: 0.7, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  });
});

// 模块四章节页
(function() {
  const s = addSlide();
  s.background = { color: theme.primary };
  s.addText("04", { x: 0.8, y: 1.2, w: 3, h: 2, fontSize: 120, fontFace: "Arial", color: theme.accent, bold: true });
  s.addText("辅导与激励", { x: 0.8, y: 3.2, w: 8, h: 1, fontSize: 40, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  s.addText("让下属成长，让团队有士气", { x: 0.8, y: 4.2, w: 8, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.light });
})();

const m4Slides = [
  { t: "辅导的本质", b: ["辅导是帮助下属解决问题，不是展示自己聪明", "辅导的时机：日常工作中的三个黄金时刻", "辅导方式：直接指导 vs 提问引导 vs 示范"] },
  { t: "GROW模型", b: ["G - Goal（目标）：这次辅导想要达成什么", "R - Reality（现状）：现在的情况是怎样的", "O - Option（选择）：有哪些可能的解决方案", "W - Will（行动）：下一步具体做什么"] },
  { t: "激励体系三维模型", b: ["物质激励：工资、奖金、提成、福利", "精神激励：认可、荣誉、成就、地位", "成长激励：培训、晋升、发展空间"] },
  { t: "战斗力建设", b: ["团队文化：做事的方式、协作的规矩", "团队仪式：早会、复盘会、表彰会", "团队精神：共同目标、相互支持、敢于担当"] },
  { t: "工具：辅导与激励表单", b: ["GROW辅导话术卡", "激励菜单完整版", "团队文化建设清单"] }
];

m4Slides.forEach(function(sd) {
  const s = addSlide();
  s.background = { color: theme.bg };
  s.addText(sd.t, { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 1.5, h: 0.04, fill: { color: theme.accent } });
  sd.b.forEach(function(b, i) {
    const y = 1.5 + i * 0.8;
    s.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.15, w: 0.15, h: 0.15, fill: { color: theme.accent } });
    s.addText(b, { x: 1, y: y, w: 8.5, h: 0.7, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  });
});

// 模块五章节页
(function() {
  const s = addSlide();
  s.background = { color: theme.primary };
  s.addText("05", { x: 0.8, y: 1.2, w: 3, h: 2, fontSize: 120, fontFace: "Arial", color: theme.accent, bold: true });
  s.addText("复盘机制", { x: 0.8, y: 3.2, w: 8, h: 1, fontSize: 40, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  s.addText("让复盘成为改进的起点", { x: 0.8, y: 4.2, w: 8, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.light });
})();

const m5Slides = [
  { t: "复盘的本质", b: ["复盘不是追究过去，是改进未来", "复盘的目的：下次能做得更好", "好的复盘文化：愿意说真话、敢于承认问题、共同找答案"] },
  { t: "复盘四步法", b: ["第一步（回顾）：当时的目标是什么，实际发生了什么", "第二步（分析）：成功因素有哪些，失败根因是什么", "第三步（提炼）：我们学到了什么，有什么改进措施", "第四步（落地）：下一步行动是什么，谁来做，什么时候做"] },
  { t: "营销复盘的特殊性", b: ["结果复盘：业绩达成的归因分析", "过程复盘：关键动作是否做到位", "机会复盘：丢掉的单子教会了我们什么"] },
  { t: "复盘文化建立", b: ["领导者要以身作则：先复盘自己", "对事不对人：目标是改进，不是追责", "复盘要定期跟踪：好计划不执行等于零"] },
  { t: "工具：复盘模板与台账", b: ["复盘四步法完整模板", "问题台账", "改进落地跟踪表"] }
];

m5Slides.forEach(function(sd) {
  const s = addSlide();
  s.background = { color: theme.bg };
  s.addText(sd.t, { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 1.5, h: 0.04, fill: { color: theme.accent } });
  sd.b.forEach(function(b, i) {
    const y = 1.5 + i * 0.8;
    s.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.15, w: 0.15, h: 0.15, fill: { color: theme.accent } });
    s.addText(b, { x: 1, y: y, w: 8.5, h: 0.7, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  });
});

// 模块六章节页
(function() {
  const s = addSlide();
  s.background = { color: theme.primary };
  s.addText("06", { x: 0.8, y: 1.2, w: 3, h: 2, fontSize: 120, fontFace: "Arial", color: theme.accent, bold: true });
  s.addText("协同机制", { x: 0.8, y: 3.2, w: 8, h: 1, fontSize: 40, fontFace: "Microsoft YaHei", color: "FFFFFF", bold: true });
  s.addText("让市场、销售、服务形成合力", { x: 0.8, y: 4.2, w: 8, h: 0.6, fontSize: 18, fontFace: "Microsoft YaHei", color: theme.light });
})();

const m6Slides = [
  { t: "协同的本质", b: ["协同不是靠觉悟，是靠机制", "协同意愿 × 协同机制 = 协同结果", "没有机制的协同意愿，往往停留在口号层面"] },
  { t: "协同三层结构", b: ["指标对齐：各部门的北极星指标相互关联", "流程衔接：线索分配 → 跟进 → 转化 → 服务 → 复购", "信息共享：客户全视图，让每个部门看到完整的客户旅程"] },
  { t: "指标对齐原则", b: ["市场部门：对线索数量和质量负责", "销售部门：对转化率和回款负责", "服务部门：对客户满意度和续费率负责", "三方指标相互支撑，不是各自为战"] },
  { t: "信息共享机制", b: ["客户全视图：基本信息、沟通历史、购买记录、服务记录", "跨部门会议：定期沟通客户情况，不只是问题 escalation", "系统支撑：用CRM等工具实现信息同步"] },
  { t: "工具：协同对齐表", b: ["市场-销售-服务三方指标对齐表", "线索管理流程卡", "客户全视图模板"] }
];

m6Slides.forEach(function(sd) {
  const s = addSlide();
  s.background = { color: theme.bg };
  s.addText(sd.t, { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 28, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 1.5, h: 0.04, fill: { color: theme.accent } });
  sd.b.forEach(function(b, i) {
    const y = 1.5 + i * 0.8;
    s.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.15, w: 0.15, h: 0.15, fill: { color: theme.accent } });
    s.addText(b, { x: 1, y: y, w: 8.5, h: 0.7, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "top" });
  });
});

// 总结页
(function() {
  const s = addSlide();
  s.background = { color: theme.bg };
  s.addText("课程总结：六模块核心要点", { x: 0.5, y: 0.4, w: 9, h: 0.8, fontSize: 32, fontFace: "Microsoft YaHei", color: theme.primary, bold: true });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 2, h: 0.05, fill: { color: theme.accent } });
  const pts = [
    "目标设定：让团队认目标，而不是认数字",
    "过程管控：管住关键节点，不要微观管理",
    "例会管理：让每场会有结论、有跟进、有行动",
    "辅导激励：GROW模型 + 三维激励体系",
    "复盘机制：四步法复盘，重点在落地改进",
    "协同机制：用机制保障协同，而不是靠觉悟"
  ];
  pts.forEach(function(p, i) {
    const y = 1.5 + i * 0.65;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y, w: 0.5, h: 0.5, fill: { color: theme.primary }, rectRadius: 0.05 });
    s.addText(String(i + 1), { x: 0.5, y: y, w: 0.5, h: 0.5, fontSize: 16, fontFace: "Arial", color: "FFFFFF", bold: true, align: "center", valign: "middle" });
    s.addText(p, { x: 1.2, y: y, w: 8, h: 0.6, fontSize: 16, fontFace: "Microsoft YaHei", color: theme.secondary, valign: "middle" });
  });
})();

const outPath = 'D:/新课开发/营销/9. 营销团队管理：目标拆解、过程管控与战斗力建设/PPT/授课PPT_红灰配色.pptx';
pres.writeFile({ fileName: outPath })
  .then(() => console.log('PPT created: ' + outPath))
  .catch(err => console.error(err));
