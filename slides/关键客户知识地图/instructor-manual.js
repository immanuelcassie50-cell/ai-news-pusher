const PptxGenJS = require('pptxgenjs');

const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_16x9';
pptx.title = '关键客户知识地图与知识传承 - 讲师手册';
pptx.author = '罗宏伟';

// Color scheme
const colors = {
  primary: 'C43C3A',
  secondary: '4A4E69',
  accent: '9A8C98',
  light: 'E8E8E8',
  bg: 'FAFAFA',
  white: 'FFFFFF',
  dark: '333333'
};

// Helper function for page number badge
function addPageNumber(slide, pageNum) {
  slide.addShape('ellipse', {
    x: 9.3, y: 5.1, w: 0.45, h: 0.45,
    fill: { color: colors.primary }
  });
  slide.addText(String(pageNum), {
    x: 9.3, y: 5.1, w: 0.45, h: 0.45,
    fontSize: 12, fontFace: 'Arial',
    color: colors.white, align: 'center', valign: 'middle'
  });
}

// Helper for section header
function addSectionHeader(slide, sectionTitle, subtitle) {
  slide.addShape('rectangle', {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: colors.primary }
  });
  slide.addText(sectionTitle, {
    x: 0.5, y: 0.35, w: 9, h: 0.5,
    fontSize: 28, fontFace: 'Microsoft YaHei',
    color: colors.white, bold: true
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.5, y: 0.85, w: 9, h: 0.3,
      fontSize: 14, fontFace: 'Microsoft YaHei',
      color: colors.light
    });
  }
}

// Helper for content box
function addContentBox(slide, items, startY = 1.5, height = 3.8) {
  slide.addShape('rectangle', {
    x: 0.5, y: startY, w: 9, h: height,
    fill: { color: colors.white },
    line: { color: colors.light, width: 1 }
  });
}

// ============ SLIDE 1: Cover ============
let slide1 = pptx.addSlide();
slide1.background = { color: colors.bg };

slide1.addShape('rectangle', {
  x: 0, y: 0, w: 10, h: 0.15,
  fill: { color: colors.primary }
});

slide1.addShape('rectangle', {
  x: 0, y: 5.475, w: 10, h: 0.15,
  fill: { color: colors.primary }
});

slide1.addShape('rectangle', {
  x: 0.5, y: 1.5, w: 0.08, h: 2.5,
  fill: { color: colors.primary }
});

slide1.addText('关键客户知识地图与知识传承', {
  x: 0.8, y: 1.6, w: 8.5, h: 0.8,
  fontSize: 36, fontFace: 'Microsoft YaHei',
  color: colors.dark, bold: true
});

slide1.addText('讲师手册', {
  x: 0.8, y: 2.4, w: 8.5, h: 0.6,
  fontSize: 28, fontFace: 'Microsoft YaHei',
  color: colors.secondary
});

slide1.addText([
  { text: '作者：罗宏伟', options: { breakLine: true } },
  { text: '版本：V1.0', options: { breakLine: true } },
  { text: ' ', options: { breakLine: true } },
  { text: '版权所有 © 2026' }
], {
  x: 0.8, y: 3.5, w: 8.5, h: 1.2,
  fontSize: 14, fontFace: 'Microsoft YaHei',
  color: colors.accent
});

// ============ SLIDE 2: Table of Contents ============
let slide2 = pptx.addSlide();
slide2.background = { color: colors.bg };
addSectionHeader(slide2, '目录', 'CONTENTS');
addPageNumber(slide2, 2);

const tocItems = [
  { num: '01', title: '使用说明', page: '3' },
  { num: '02', title: '课程概述', page: '4' },
  { num: '03', title: 'PART1 教学指引（16章）', page: '5-20' },
  { num: '04', title: 'PART2 教学指引（6章）', page: '21-26' },
  { num: '05', title: '特别篇教学指引（3篇）', page: '27-29' },
  { num: '06', title: '附录工具教学指引', page: '30-33' }
];

tocItems.forEach((item, i) => {
  const y = 1.6 + i * 0.6;
  slide2.addShape('rectangle', {
    x: 0.8, y: y, w: 0.5, h: 0.4,
    fill: { color: colors.primary }
  });
  slide2.addText(item.num, {
    x: 0.8, y: y, w: 0.5, h: 0.4,
    fontSize: 14, fontFace: 'Arial',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide2.addText(item.title, {
    x: 1.5, y: y, w: 6, h: 0.4,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
  slide2.addText(item.page, {
    x: 8.5, y: y, w: 1, h: 0.4,
    fontSize: 12, fontFace: 'Arial',
    color: colors.accent, align: 'right', valign: 'middle'
  });
});

// ============ SLIDE 3: Usage Instructions ============
let slide3 = pptx.addSlide();
slide3.background = { color: colors.bg };
addSectionHeader(slide3, '使用说明', 'HOW TO USE THIS MANUAL');
addPageNumber(slide3, 3);

slide3.addText('本手册是授课PPT的配套指引', {
  x: 0.8, y: 1.6, w: 8.5, h: 0.4,
  fontSize: 18, fontFace: 'Microsoft YaHei',
  color: colors.dark, bold: true
});

const usageItems = [
  '每章节包含：教学目标、核心概念、讲解要点、时间分配',
  '建议配合PPT一起使用，手册提供深度说明',
  '时间分配为建议值，可根据学员情况调整',
  '工具模板部分需要提前打印备用'
];

usageItems.forEach((item, i) => {
  slide3.addShape('ellipse', {
    x: 0.8, y: 2.2 + i * 0.55, w: 0.15, h: 0.15,
    fill: { color: colors.primary }
  });
  slide3.addText(item, {
    x: 1.1, y: 2.15 + i * 0.55, w: 8, h: 0.5,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.secondary
  });
});

// ============ SLIDE 4: Course Overview ============
let slide4 = pptx.addSlide();
slide4.background = { color: colors.bg };
addSectionHeader(slide4, '课程概述', 'COURSE OVERVIEW');
addPageNumber(slide4, 4);

const overviewData = [
  { label: '课程定位', value: '企业内训 / 方法论工作坊' },
  { label: '目标受众', value: '客户经理与客户成功团队' },
  { label: '课程时长', value: '建议2天（每天6小时）' },
  { label: '核心价值', value: '构建可传承的关键客户知识地图' }
];

overviewData.forEach((item, i) => {
  const y = 1.6 + i * 0.8;
  slide4.addShape('rectangle', {
    x: 0.8, y: y, w: 2, h: 0.5,
    fill: { color: colors.secondary }
  });
  slide4.addText(item.label, {
    x: 0.8, y: y, w: 2, h: 0.5,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide4.addText(item.value, {
    x: 3, y: y, w: 6, h: 0.5,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ PART 1 Header ============
let slidePart1 = pptx.addSlide();
slidePart1.background = { color: colors.primary };
slidePart1.addText('PART 1', {
  x: 0.5, y: 1.8, w: 9, h: 0.8,
  fontSize: 24, fontFace: 'Arial',
  color: colors.light, align: 'center'
});
slidePart1.addText('教学指引', {
  x: 0.5, y: 2.5, w: 9, h: 1,
  fontSize: 48, fontFace: 'Microsoft YaHei',
  color: colors.white, bold: true, align: 'center'
});
slidePart1.addText('16章', {
  x: 0.5, y: 3.5, w: 9, h: 0.5,
  fontSize: 18, fontFace: 'Microsoft YaHei',
  color: colors.light, align: 'center'
});

// ============ Chapter 1 ============
let slide5 = pptx.addSlide();
slide5.background = { color: colors.bg };
addSectionHeader(slide5, '第一章', '你手里握的不是客户关系，是一张没人复制过的地图');
addPageNumber(slide5, 5);

const ch1Data = [
  { label: '教学目标', value: '帮助学员理解"隐性知识地图"概念' },
  { label: '核心判断', value: '公司只是租用绘图员的记忆' },
  { label: '讲解要点', value: '从一个真实案例切入（交接失败的场景）' },
  { label: '时间分配', value: '20分钟' }
];

ch1Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide5.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 3 ? colors.primary : colors.secondary }
  });
  slide5.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide5.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 2 ============
let slide6 = pptx.addSlide();
slide6.background = { color: colors.bg };
addSectionHeader(slide6, '第二章', '组织留错了证据');
addPageNumber(slide6, 6);

const ch2Data = [
  { label: '教学目标', value: '认识"痕迹"与"原因"的区别' },
  { label: '核心判断', value: '合同邮件只是痕迹，不是原因' },
  { label: '时间分配', value: '15分钟' }
];

ch2Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide6.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide6.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide6.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 3 ============
let slide7 = pptx.addSlide();
slide7.background = { color: colors.bg };
addSectionHeader(slide7, '第三章', '客户的生意逻辑，才是知识地图的地基');
addPageNumber(slide7, 7);

const ch3Data = [
  { label: '教学目标', value: '理解生意逻辑是地图的第一笔' },
  { label: '核心判断', value: '三层生意逻辑' },
  { label: '时间分配', value: '20分钟' }
];

ch3Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide7.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide7.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide7.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 4 ============
let slide8 = pptx.addSlide();
slide8.background = { color: colors.bg };
addSectionHeader(slide8, '第四章', '甲方内部，没有人只代表自己');
addPageNumber(slide8, 8);

const ch4Data = [
  { label: '教学目标', value: '理解"岗位身份"vs"个人身份"' },
  { label: '核心判断', value: '关键判断"这件事对这个人所在的岗位是好处还是麻烦"' },
  { label: '时间分配', value: '20分钟' }
];

ch4Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide8.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide8.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide8.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 5 ============
let slide9 = pptx.addSlide();
slide9.background = { color: colors.bg };
addSectionHeader(slide9, '第五章', '分清楚谁是门，谁只是窗');
addPageNumber(slide9, 9);

const ch5Data = [
  { label: '教学目标', value: '识别门/窗/守门人' },
  { label: '核心判断', value: '窗往往比门更热情' },
  { label: '时间分配', value: '20分钟' }
];

ch5Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide9.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide9.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide9.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 6 ============
let slide10 = pptx.addSlide();
slide10.background = { color: colors.bg };
addSectionHeader(slide10, '第六章', '钱什么时候能动，比钱有多少更重要');
addPageNumber(slide10, 10);

const ch6Data = [
  { label: '教学目标', value: '掌握预算节奏判断' },
  { label: '核心判断', value: '不同类型客户的预算节奏差异' },
  { label: '时间分配', value: '20分钟' }
];

ch6Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide10.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide10.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide10.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 7 ============
let slide11 = pptx.addSlide();
slide11.background = { color: colors.bg };
addSectionHeader(slide11, '第七章', '客户没说的，比说出来的更值钱');
addPageNumber(slide11, 11);

const ch7Data = [
  { label: '教学目标', value: '学会追问真实需求' },
  { label: '核心判断', value: '用行为和流程追问代替结论追问' },
  { label: '时间分配', value: '20分钟' }
];

ch7Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide11.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide11.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide11.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 8 ============
let slide12 = pptx.addSlide();
slide12.background = { color: colors.bg };
addSectionHeader(slide12, '第八章', '萃取客户智识，靠的是拆解因果链');
addPageNumber(slide12, 12);

const ch8Data = [
  { label: '教学目标', value: '掌握"上一次"访谈法' },
  { label: '核心判断', value: '问具体场景而非一般情况' },
  { label: '时间分配', value: '25分钟（含演练）' }
];

ch8Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide12.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide12.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide12.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 9 ============
let slide13 = pptx.addSlide();
slide13.background = { color: colors.bg };
addSectionHeader(slide13, '第九章', '关系不是印象，是一条可以回放的历史');
addPageNumber(slide13, 13);

const ch9Data = [
  { label: '教学目标', value: '学会用时间线记录关系' },
  { label: '核心判断', value: '时间线能看到印象看不到的趋势' },
  { label: '时间分配', value: '20分钟' }
];

ch9Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide13.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide13.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide13.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 10 ============
let slide14 = pptx.addSlide();
slide14.background = { color: colors.bg };
addSectionHeader(slide14, '第十章', '谁负责，不等于谁真的知道');
addPageNumber(slide14, 14);

const ch10Data = [
  { label: '教学目标', value: '理解责任人矩阵的局限性' },
  { label: '核心判断', value: '加入"信息新鲜度"维度' },
  { label: '时间分配', value: '15分钟' }
];

ch10Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide14.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide14.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide14.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 11 ============
let slide15 = pptx.addSlide();
slide15.background = { color: colors.bg };
addSectionHeader(slide15, '第十一章', '交接不是移交文件，是移交判断力');
addPageNumber(slide15, 15);

const ch11Data = [
  { label: '教学目标', value: '掌握判断力交接的方法' },
  { label: '核心判断', value: '情景推演的价值' },
  { label: '时间分配', value: '25分钟（含演练）' }
];

ch11Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide15.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide15.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide15.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 12 ============
let slide16 = pptx.addSlide();
slide16.background = { color: colors.bg };
addSectionHeader(slide16, '第十二章', '知识要活在今天的工作里');
addPageNumber(slide16, 16);

const ch12Data = [
  { label: '教学目标', value: '理解工作卡vs档案的区别' },
  { label: '核心判断', value: '知识要在正确的瞬间出现在正确的地方' },
  { label: '时间分配', value: '15分钟' }
];

ch12Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide16.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide16.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide16.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 13 ============
let slide17 = pptx.addSlide();
slide17.background = { color: colors.bg };
addSectionHeader(slide17, '第十三章', '客户成功不该是一个人的KPI');
addPageNumber(slide17, 17);

const ch13Data = [
  { label: '教学目标', value: '理解激励结构对知识共享的影响' },
  { label: '核心判断', value: '从个人KPI转向团队考核' },
  { label: '时间分配', value: '15分钟' }
];

ch13Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide17.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide17.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide17.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 14 ============
let slide18 = pptx.addSlide();
slide18.background = { color: colors.bg };
addSectionHeader(slide18, '第十四章', '签单是销售的终点，是你工作的起点');
addPageNumber(slide18, 18);

const ch14Data = [
  { label: '教学目标', value: '对齐销售与客户经理的角色认知' },
  { label: '核心判断', value: '书面化口头承诺' },
  { label: '时间分配', value: '15分钟' }
];

ch14Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide18.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide18.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide18.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 15 ============
let slide19 = pptx.addSlide();
slide19.background = { color: colors.bg };
addSectionHeader(slide19, '第十五章', '领导要的是提前知道的风险');
addPageNumber(slide19, 19);

const ch15Data = [
  { label: '教学目标', value: '建立风险汇报文化' },
  { label: '核心判断', value: '风险信号是领先指标' },
  { label: '时间分配', value: '15分钟' }
];

ch15Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide19.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide19.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide19.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 16 ============
let slide20 = pptx.addSlide();
slide20.background = { color: colors.bg };
addSectionHeader(slide20, '第十六章', '客户健康度是可以打出来的分数');
addPageNumber(slide20, 20);

const ch16Data = [
  { label: '教学目标', value: '掌握四维度打分方法' },
  { label: '核心判断', value: '趋势比绝对分数重要' },
  { label: '时间分配', value: '25分钟（含演练）' }
];

ch16Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide20.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 2 ? colors.primary : colors.secondary }
  });
  slide20.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide20.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ PART 2 Header ============
let slidePart2 = pptx.addSlide();
slidePart2.background = { color: colors.secondary };
slidePart2.addText('PART 2', {
  x: 0.5, y: 1.8, w: 9, h: 0.8,
  fontSize: 24, fontFace: 'Arial',
  color: colors.light, align: 'center'
});
slidePart2.addText('教学指引', {
  x: 0.5, y: 2.5, w: 9, h: 1,
  fontSize: 48, fontFace: 'Microsoft YaHei',
  color: colors.white, bold: true, align: 'center'
});
slidePart2.addText('6章', {
  x: 0.5, y: 3.5, w: 9, h: 0.5,
  fontSize: 18, fontFace: 'Microsoft YaHei',
  color: colors.light, align: 'center'
});

// ============ Chapter 17 ============
let slide21 = pptx.addSlide();
slide21.background = { color: colors.bg };
addSectionHeader(slide21, '第十七章', '怕被替代才是还没真正强大');
addPageNumber(slide21, 21);

const ch17Data = [
  { label: '教学目标', value: '帮助学员面对知识共享的内心障碍' },
  { label: '时间分配', value: '20分钟' }
];

ch17Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide21.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 1 ? colors.primary : colors.secondary }
  });
  slide21.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide21.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 18 ============
let slide22 = pptx.addSlide();
slide22.background = { color: colors.bg };
addSectionHeader(slide22, '第十八章', '把知识交出去不会让你可有可无');
addPageNumber(slide22, 22);

const ch18Data = [
  { label: '教学目标', value: '建立新的价值认知' },
  { label: '时间分配', value: '15分钟' }
];

ch18Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide22.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 1 ? colors.primary : colors.secondary }
  });
  slide22.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide22.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 19 ============
let slide23 = pptx.addSlide();
slide23.background = { color: colors.bg };
addSectionHeader(slide23, '第十九章', '这份工作留下的是判断力');
addPageNumber(slide23, 23);

const ch19Data = [
  { label: '教学目标', value: '重新定义工作成就' },
  { label: '时间分配', value: '15分钟' }
];

ch19Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide23.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 1 ? colors.primary : colors.secondary }
  });
  slide23.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide23.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 20 ============
let slide24 = pptx.addSlide();
slide24.background = { color: colors.bg };
addSectionHeader(slide24, '第二十章', '淘汰的是靠记忆吃饭的人');
addPageNumber(slide24, 24);

const ch20Data = [
  { label: '教学目标', value: '认清行业趋势' },
  { label: '时间分配', value: '15分钟' }
];

ch20Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide24.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 1 ? colors.primary : colors.secondary }
  });
  slide24.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide24.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 21 ============
let slide25 = pptx.addSlide();
slide25.background = { color: colors.bg };
addSectionHeader(slide25, '第二十一章', 'AI替不了那张地图');
addPageNumber(slide25, 25);

const ch21Data = [
  { label: '教学目标', value: '理解人与AI的互补关系' },
  { label: '时间分配', value: '15分钟' }
];

ch21Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide25.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 1 ? colors.primary : colors.secondary }
  });
  slide25.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide25.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Chapter 22 ============
let slide26 = pptx.addSlide();
slide26.background = { color: colors.bg };
addSectionHeader(slide26, '第二十二章', '可复制的地图才是体面告别');
addPageNumber(slide26, 26);

const ch22Data = [
  { label: '教学目标', value: '将知识传承与职业尊严连接' },
  { label: '时间分配', value: '15分钟' }
];

ch22Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide26.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 1 ? colors.primary : colors.secondary }
  });
  slide26.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide26.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Special Section Header ============
let slideSpecial = pptx.addSlide();
slideSpecial.background = { color: colors.accent };
slideSpecial.addText('特别篇', {
  x: 0.5, y: 2.5, w: 9, h: 1,
  fontSize: 48, fontFace: 'Microsoft YaHei',
  color: colors.white, bold: true, align: 'center'
});
slideSpecial.addText('3篇', {
  x: 0.5, y: 3.5, w: 9, h: 0.5,
  fontSize: 18, fontFace: 'Microsoft YaHei',
  color: colors.white, align: 'center'
});

// ============ Special 1 ============
let slide27 = pptx.addSlide();
slide27.background = { color: colors.bg };
addSectionHeader(slide27, '特别篇一', '月度健康检查会议');
addPageNumber(slide27, 27);

const sp1Data = [
  { label: '教学目标', value: '学会设计有效的团队知识共享会议' },
  { label: '时间分配', value: '30分钟（含演练）' }
];

sp1Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide27.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 1 ? colors.primary : colors.secondary }
  });
  slide27.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide27.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Special 2 ============
let slide28 = pptx.addSlide();
slide28.background = { color: colors.bg };
addSectionHeader(slide28, '特别篇二', '两份不一样的地图');
addPageNumber(slide28, 28);

const sp2Data = [
  { label: '教学目标', value: '理解多角色协作中的信息冲突处理' },
  { label: '时间分配', value: '25分钟' }
];

sp2Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide28.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 1 ? colors.primary : colors.secondary }
  });
  slide28.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide28.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Special 3 ============
let slide29 = pptx.addSlide();
slide29.background = { color: colors.bg };
addSectionHeader(slide29, '特别篇三', '新人第一周');
addPageNumber(slide29, 29);

const sp3Data = [
  { label: '教学目标', value: '让新人掌握正确使用知识地图的方法' },
  { label: '时间分配', value: '20分钟' }
];

sp3Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide29.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: i === 1 ? colors.primary : colors.secondary }
  });
  slide29.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide29.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Appendix Section Header ============
let slideAppendix = pptx.addSlide();
slideAppendix.background = { color: colors.dark };
slideAppendix.addText('附录工具', {
  x: 0.5, y: 2.5, w: 9, h: 1,
  fontSize: 48, fontFace: 'Microsoft YaHei',
  color: colors.white, bold: true, align: 'center'
});
slideAppendix.addText('教学指引', {
  x: 0.5, y: 3.5, w: 9, h: 0.5,
  fontSize: 18, fontFace: 'Microsoft YaHei',
  color: colors.light, align: 'center'
});

// ============ Appendix 1 ============
let slide30 = pptx.addSlide();
slide30.background = { color: colors.bg };
addSectionHeader(slide30, '附录一', '客户知识地图模板');
addPageNumber(slide30, 30);

const ap1Data = [
  { label: '配合章节', value: '第一章' },
  { label: '工具说明', value: '帮助学员绘制客户关系的隐性知识地图' },
  { label: '使用建议', value: '提供空白模板，让学员现场填写' }
];

ap1Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide30.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: colors.secondary }
  });
  slide30.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide30.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Appendix 2 ============
let slide31 = pptx.addSlide();
slide31.background = { color: colors.bg };
addSectionHeader(slide31, '附录二', '萃取访谈模板');
addPageNumber(slide31, 31);

const ap2Data = [
  { label: '配合章节', value: '第八章' },
  { label: '工具说明', value: '"上一次"访谈法的标准问题清单' },
  { label: '使用建议', value: '角色扮演演练使用' }
];

ap2Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide31.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: colors.secondary }
  });
  slide31.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide31.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Appendix 3 ============
let slide32 = pptx.addSlide();
slide32.background = { color: colors.bg };
addSectionHeader(slide32, '附录三', '交接清单');
addPageNumber(slide32, 32);

const ap3Data = [
  { label: '配合章节', value: '第十一章' },
  { label: '工具说明', value: '判断力交接的标准检查清单' },
  { label: '使用建议', value: '配合情景推演使用' }
];

ap3Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide32.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: colors.secondary }
  });
  slide32.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide32.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Appendix 4 ============
let slide33 = pptx.addSlide();
slide33.background = { color: colors.bg };
addSectionHeader(slide33, '附录四', '健康度打分卡');
addPageNumber(slide33, 33);

const ap4Data = [
  { label: '配合章节', value: '第十六章' },
  { label: '工具说明', value: '四维度客户健康度打分工具' },
  { label: '使用建议', value: '结合实际客户案例演练' }
];

ap4Data.forEach((item, i) => {
  const y = 1.5 + i * 0.85;
  slide33.addShape('rectangle', {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fill: { color: colors.secondary }
  });
  slide33.addText(item.label, {
    x: 0.5, y: y, w: 1.5, h: 0.55,
    fontSize: 12, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide33.addText(item.value, {
    x: 2.2, y: y, w: 7, h: 0.55,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Course Implementation ============
let slide34 = pptx.addSlide();
slide34.background = { color: colors.bg };
addSectionHeader(slide34, '课程实施建议', 'IMPLEMENTATION TIPS');
addPageNumber(slide34, 34);

const implItems = [
  { title: '开场破冰', desc: '让学员分享一次"交接失败"的经历' },
  { title: '中场互动', desc: '每章节结束留5分钟提问' },
  { title: '结尾总结', desc: '让学员写出3个最大收获和1个立即行动计划' }
];

implItems.forEach((item, i) => {
  const y = 1.5 + i * 1.1;
  slide34.addShape('rectangle', {
    x: 0.5, y: y, w: 2, h: 0.8,
    fill: { color: colors.primary }
  });
  slide34.addText(item.title, {
    x: 0.5, y: y, w: 2, h: 0.8,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.white, align: 'center', valign: 'middle'
  });
  slide34.addText(item.desc, {
    x: 2.7, y: y, w: 6.5, h: 0.8,
    fontSize: 14, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ Instructor Notes ============
let slide35 = pptx.addSlide();
slide35.background = { color: colors.bg };
addSectionHeader(slide35, '讲师注意事项', 'INSTRUCTOR NOTES');
addPageNumber(slide35, 35);

const noteItems = [
  '本课程涉及很多"反常识"判断，学员可能需要时间消化',
  '不要急于反驳学员的质疑，先认可再引导',
  '工具模板部分要留足练习时间'
];

noteItems.forEach((item, i) => {
  slide35.addShape('rectangle', {
    x: 0.5, y: 1.6 + i * 0.9, w: 0.08, h: 0.6,
    fill: { color: colors.primary }
  });
  slide35.addText(item, {
    x: 0.8, y: 1.6 + i * 0.9, w: 8.5, h: 0.6,
    fontSize: 16, fontFace: 'Microsoft YaHei',
    color: colors.dark, valign: 'middle'
  });
});

// ============ End Slide ============
let slideEnd = pptx.addSlide();
slideEnd.background = { color: colors.primary };

slideEnd.addText('谢谢', {
  x: 0.5, y: 2, w: 9, h: 1,
  fontSize: 56, fontFace: 'Microsoft YaHei',
  color: colors.white, bold: true, align: 'center'
});

slideEnd.addText('关键客户知识地图与知识传承', {
  x: 0.5, y: 3.2, w: 9, h: 0.5,
  fontSize: 18, fontFace: 'Microsoft YaHei',
  color: colors.light, align: 'center'
});

slideEnd.addText('罗宏伟 | V1.0', {
  x: 0.5, y: 3.8, w: 9, h: 0.4,
  fontSize: 14, fontFace: 'Microsoft YaHei',
  color: colors.light, align: 'center'
});

// Save the file
pptx.writeFile({ fileName: 'D:/新课开发/工作手册/关键客户知识地图与传承/完整课程包/004-讲师手册/01-关键客户知识地图-讲师手册.pptx' })
  .then(() => {
    console.log('PPT created successfully!');
  })
  .catch(err => {
    console.error('Error creating PPT:', err);
  });
