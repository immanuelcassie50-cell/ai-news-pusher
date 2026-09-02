export const meta = {
  name: 'course-06-ppt-gen',
  description: '生成课程06《用户体验驱动企业增长》140页PPT',
  phases: ['PPT幻灯片生成'],
}

const SLIDES_DIR = 'D:/新课开发/经营/系列/06_用户体验驱动企业增长/授课PPT/slides'
const OUTPUT_DIR = 'D:/新课开发/经营/系列/06_用户体验驱动企业增长/授课PPT/slides/output'
const IMGS_DIR = 'D:/新课开发/经营/系列/06_用户体验驱动企业增长/授课PPT/slides/imgs'

// Theme
const THEME = {
  primary: "264653",
  secondary: "2a9d8f",
  accent: "e9c46a",
  light: "f4a261",
  bg: "f8f9fa"
}

// Slide content definitions
const SLIDES = [
  {id: "slide-01", type: "cover", title: "用户体验驱动企业增长", subtitle: "品牌创新系统·第二门课"},
  {id: "slide-02", type: "toc", title: "课程目录", sections: ["模块一：体验价值重构", "模块二：用户体验地图绘制", "模块三：体验度量体系", "模块四：体验驱动增长机制"]},
  {id: "slide-03", type: "section", module: "01", title: "体验价值重构", subtitle: "体验经济时代的生存法则"},
  {id: "slide-04", type: "content", title: "1.1.1 体验经济的定义与特征"},
  {id: "slide-05", type: "content", title: "1.1.2 从产品到体验的价值迁移"},
  {id: "slide-06", type: "content", title: "1.1.3 体验经济的四阶段模型"},
  {id: "slide-07", type: "content", title: "1.1.4 案例：苹果的体验溢价"},
  {id: "slide-08", type: "content", title: "1.1.5 案例：迪士尼的体验设计"},
  {id: "slide-09", type: "content", title: "1.1.6 体验经济的底层逻辑"},
  {id: "slide-10", type: "content", title: "1.1.7 关键洞察：为什么体验成为新的战场"},
  {id: "slide-11", type: "content", title: "1.2.1 传统品牌护城河的失效"},
  {id: "slide-12", type: "content", title: "1.2.2 产品同质化的竞争困局"},
  {id: "slide-13", type: "content", title: "1.2.3 体验差异化如何构建竞争壁垒"},
  {id: "slide-14", type: "content", title: "1.2.4 案例：美团用户体验驱动增长"},
  {id: "slide-15", type: "content", title: "1.2.5 案例：海底捞的服务护城河"},
  {id: "slide-16", type: "content", title: "1.2.6 体验护城河的四层结构"},
  {id: "slide-17", type: "content", title: "1.2.7 核心框架：体验-品牌-增长的正循环"},
  {id: "slide-18", type: "content", title: "1.3.1 用户体验的本质是价值感知"},
  {id: "slide-19", type: "content", title: "1.3.2 体验设计的五个层次"},
  {id: "slide-20", type: "content", title: "1.3.3 从用户视角出发的体验设计"},
  {id: "slide-21", type: "content", title: "1.3.4 体验设计的三个黄金原则"},
  {id: "slide-22", type: "content", title: "1.3.5 小组讨论：识别你企业的体验断点"},
  {id: "slide-23", type: "content", title: "1.3.6 知识点回顾与框架图"},
  {id: "slide-24", type: "workshop", title: "工作坊1：体验价值重构实战", subtitle: "绘制你企业的体验价值地图"},
  {id: "slide-25", type: "section", module: "02", title: "用户体验地图绘制", subtitle: "看见用户的全旅程"},
  {id: "slide-26", type: "content", title: "2.1.1 什么是用户体验地图"},
  {id: "slide-27", type: "content", title: "2.1.2 体验地图的价值与作用"},
  {id: "slide-28", type: "content", title: "2.1.3 体验地图的核心组成要素"},
  {id: "slide-29", type: "content", title: "2.1.4 体验地图的四种类型"},
  {id: "slide-30", type: "content", title: "2.1.5 如何选择适合的体验地图类型"},
  {id: "slide-31", type: "content", title: "2.1.6 体验地图绘制的基本步骤"},
  {id: "slide-32", type: "content", title: "2.2.1 触点的定义与分类"},
  {id: "slide-33", type: "content", title: "2.2.2 有形触点与无形触点"},
  {id: "slide-34", type: "content", title: "2.2.3 关键触点的识别方法"},
  {id: "slide-35", type: "content", title: "2.2.4 触点矩阵：频率-影响力分析"},
  {id: "slide-36", type: "content", title: "2.2.5 案例：银行App的触点优化"},
  {id: "slide-37", type: "content", title: "2.2.6 触点设计检查清单"},
  {id: "slide-38", type: "content", title: "2.2.7 实战练习：识别你的关键触点"},
  {id: "slide-39", type: "content", title: "2.3.1 情绪曲线的理论基础"},
  {id: "slide-40", type: "content", title: "2.3.2 情绪曲线的绘制方法"},
  {id: "slide-41", type: "content", title: "2.3.3 高峰体验与谷底体验"},
  {id: "slide-42", type: "content", title: "2.3.4 体验峰终定律"},
  {id: "slide-43", type: "content", title: "2.3.5 案例：宜家的峰终体验设计"},
  {id: "slide-44", type: "content", title: "2.3.6 情绪曲线的定性与定量结合"},
  {id: "slide-45", type: "content", title: "2.3.7 常见情绪曲线模式"},
  {id: "slide-46", type: "content", title: "2.3.8 实战练习：绘制你的情绪曲线"},
  {id: "slide-47", type: "content", title: "2.4.1 体验断点的定义与分类"},
  {id: "slide-48", type: "content", title: "2.4.2 断点诊断的四步法"},
  {id: "slide-49", type: "content", title: "2.4.3 从断点到机会的转化"},
  {id: "slide-50", type: "content", title: "2.4.4 断点优先级评估矩阵"},
  {id: "slide-51", type: "content", title: "2.4.5 实战练习：诊断你的体验断点"},
  {id: "slide-52", type: "workshop", title: "工作坊2：用户体验地图绘制实战", subtitle: "完整绘制你企业的用户体验地图"},
  {id: "slide-53", type: "section", module: "03", title: "体验度量体系", subtitle: "用数据驱动体验优化"},
  {id: "slide-54", type: "content", title: "3.1.1 什么是NPS（净推荐值）"},
  {id: "slide-55", type: "content", title: "3.1.2 NPS的计算方法与解读"},
  {id: "slide-56", type: "content", title: "3.1.3 NPS的三类用户"},
  {id: "slide-57", type: "content", title: "3.1.4 NPS的行业基准与对比"},
  {id: "slide-58", type: "content", title: "3.1.5 NPS的局限性与发展"},
  {id: "slide-59", type: "content", title: "3.1.6 如何有效提升NPS"},
  {id: "slide-60", type: "content", title: "3.1.7 案例：招商银行NPS实践"},
  {id: "slide-61", type: "content", title: "3.2.1 留存率的核心概念"},
  {id: "slide-62", type: "content", title: "3.2.2 留存曲线与Cohort分析"},
  {id: "slide-63", type: "content", title: "3.2.3 复购率的驱动因素"},
  {id: "slide-64", type: "content", title: "3.2.4 留存与复购的关系模型"},
  {id: "slide-65", type: "content", title: "3.2.5 案例：瑞幸咖啡的留存策略"},
  {id: "slide-66", type: "content", title: "3.2.6 留存指标的行动指南"},
  {id: "slide-67", type: "content", title: "3.3.1 体验指标的三个层次"},
  {id: "slide-68", type: "content", title: "3.3.2 先行指标与滞后指标"},
  {id: "slide-69", type: "content", title: "3.3.3 指标体系的搭建框架"},
  {id: "slide-70", type: "content", title: "3.3.4 关键体验指标（CES/CES/SCE）"},
  {id: "slide-71", type: "content", title: "3.3.5 指标权重与综合评分"},
  {id: "slide-72", type: "content", title: "3.3.6 体验仪表盘设计"},
  {id: "slide-73", type: "content", title: "3.3.7 实战练习：设计你的体验仪表盘"},
  {id: "slide-74", type: "content", title: "3.4.1 数据驱动的体验闭环"},
  {id: "slide-75", type: "content", title: "3.4.2 VOC（客户声音）收集方法"},
  {id: "slide-76", type: "content", title: "3.4.3 从数据到洞察的转化"},
  {id: "slide-77", type: "content", title: "3.4.4 A/B测试在体验优化中的应用"},
  {id: "slide-78", type: "content", title: "3.4.5 持续优化机制建立"},
  {id: "slide-79", type: "workshop", title: "工作坊3：体验度量体系设计", subtitle: "设计你企业的体验指标仪表盘"},
  {id: "slide-80", type: "section", module: "04", title: "体验驱动增长机制", subtitle: "从满意到忠诚的转化飞轮"},
  {id: "slide-81", type: "content", title: "4.1.1 满意度的本质与局限"},
  {id: "slide-82", type: "content", title: "4.1.2 满意度与忠诚度的关系"},
  {id: "slide-83", type: "content", title: "4.1.3 忠诚度的三个层次"},
  {id: "slide-84", type: "content", title: "4.1.4 从交易关系到情感关系"},
  {id: "slide-85", type: "content", title: "4.1.5 案例：会员体系的忠诚度设计"},
  {id: "slide-86", type: "content", title: "4.1.6 情感账户：忠诚度的银行模型"},
  {id: "slide-87", type: "content", title: "4.1.7 提升忠诚度的关键策略"},
  {id: "slide-88", type: "content", title: "4.2.1 口碑传播的威力"},
  {id: "slide-89", type: "content", title: "4.2.2 推荐经济的崛起"},
  {id: "slide-90", type: "content", title: "4.2.3 推荐者的心理动机"},
  {id: "slide-91", type: "content", title: "4.2.4 案例：小米的粉丝经济"},
  {id: "slide-92", type: "content", title: "4.2.5 推荐裂变的设计原则"},
  {id: "slide-93", type: "content", title: "4.2.6 KOC（关键意见消费者）的价值"},
  {id: "slide-94", type: "content", title: "4.2.7 口碑监测与管理"},
  {id: "slide-95", type: "content", title: "4.3.1 什么是增长飞轮"},
  {id: "slide-96", type: "content", title: "4.3.2 体验飞轮的四阶段"},
  {id: "slide-97", type: "content", title: "4.3.3 飞轮的正向增强回路"},
  {id: "slide-98", type: "content", title: "4.3.4 案例：亚马逊的增长飞轮"},
  {id: "slide-99", type: "content", title: "4.3.5 飞轮设计的检查清单"},
  {id: "slide-100", type: "content", title: "4.3.6 从0到1构建体验飞轮"},
  {id: "slide-101", type: "content", title: "4.3.7 飞轮诊断与迭代"},
  {id: "slide-102", type: "content", title: "4.4.1 两天学习回顾与整合"},
  {id: "slide-103", type: "content", title: "4.4.2 体验优化路线图制定"},
  {id: "slide-104", type: "content", title: "4.4.3 资源需求与优先级排序"},
  {id: "slide-105", type: "content", title: "4.4.4 成功指标设定"},
  {id: "slide-106", type: "content", title: "4.4.5 行动计划分享"},
  {id: "slide-107", type: "content", title: "4.4.6 后续支持与资源"},
  {id: "slide-108", type: "workshop", title: "工作坊4：体验增长飞轮设计", subtitle: "设计你企业的体验增长飞轮"},
  {id: "slide-109", type: "summary", title: "两天的学习回顾"},
  {id: "slide-110", type: "summary", title: "核心框架总结"},
  {id: "slide-111", type: "summary", title: "关键工具清单"},
  {id: "slide-112", type: "summary", title: "常见陷阱与应对"},
  {id: "slide-113", type: "summary", title: "行动计划的制定与分享"},
  {id: "slide-114", type: "summary", title: "课程总结与祝福"},
  {id: "slide-115", type: "appendix", title: "附录A1：用户体验地图模板"},
  {id: "slide-116", type: "appendix", title: "附录A2：触点矩阵模板"},
  {id: "slide-117", type: "appendix", title: "附录A3：情绪曲线模板"},
  {id: "slide-118", type: "appendix", title: "附录A4：体验断点诊断表"},
  {id: "slide-119", type: "appendix", title: "附录A5：NPS调查问卷模板"},
  {id: "slide-120", type: "appendix", title: "附录A6：留存分析表模板"},
  {id: "slide-121", type: "appendix", title: "附录A7：体验指标仪表盘"},
  {id: "slide-122", type: "appendix", title: "附录A8：增长飞轮模板"},
  {id: "slide-123", type: "appendix", title: "附录A9：行动计划模板"},
  {id: "slide-124", type: "appendix", title: "附录A10：课程检验清单"},
  {id: "slide-125", type: "case", title: "案例B1：腾讯用户体验实践"},
  {id: "slide-126", type: "case", title: "案例B2：阿里客户体验管理"},
  {id: "slide-127", type: "case", title: "案例B3：京东物流体验优化"},
  {id: "slide-128", type: "case", title: "案例B4：字节跳动用户体验"},
  {id: "slide-129", type: "case", title: "案例B5：美团酒店体验驱动增长"},
  {id: "slide-130", type: "case", title: "案例B6：携程旅行体验体系"},
  {id: "slide-131", type: "case", title: "案例B7：蔚来用户运营"},
  {id: "slide-132", type: "case", title: "案例B8：泡泡玛特体验设计"},
  {id: "slide-133", type: "ref", title: "参考文献C1：经典著作"},
  {id: "slide-134", type: "ref", title: "参考文献C2：研究报告"},
  {id: "slide-135", type: "ref", title: "参考文献C3：行业洞察"},
  {id: "slide-136", type: "ref", title: "参考文献C4：在线资源"},
  {id: "slide-137", type: "note", title: "讲师备注：模块一授课要点"},
  {id: "slide-138", type: "note", title: "讲师备注：模块二授课要点"},
  {id: "slide-139", type: "note", title: "讲师备注：模块三授课要点"},
  {id: "slide-140", type: "note", title: "讲师备注：模块四授课要点"}
]

phase('PPT幻灯片生成')

log('开始生成140页PPT幻灯片...')
log('主题配色：Education & Charts (深青绿系)')
log('设计风格：Soft & Balanced')

// 使用pipeline并行生成幻灯片（每批10页）
const slides = await pipeline(
  SLIDES,
  slide => agent(
    '为课程06《用户体验驱动企业增长》生成PPT幻灯片：' + slide.id + '.js\n\n' +
    '幻灯片序号：' + slide.id.replace('slide-', '') + '/140\n' +
    '幻灯片类型：' + slide.type + '\n' +
    '幻灯片标题：' + slide.title + (slide.subtitle ? '\n副标题：' + slide.subtitle : '') + '\n' +
    (slide.sections ? '目录项：' + slide.sections.join('、') : '') + '\n\n' +
    '主题配色（必须使用这些精确的theme键）：\n' +
    '- theme.primary: "264653" (深青绿)\n' +
    '- theme.secondary: "2a9d8f" (青绿)\n' +
    '- theme.accent: "e9c46a" (金黄)\n' +
    '- theme.light: "f4a261" (橙色)\n' +
    '- theme.bg: "f8f9fa" (浅灰白)\n\n' +
    '重要规则：\n' +
    '1. 只使用theme.primary/secondary/accent/light/bg这5个键\n' +
    '2. 颜色值不带#号\n' +
    '3. 中文字体用Microsoft YaHei，英文用Arial\n' +
    '4. 非封面页必须有页码徽章（位置x:9.3, y:5.1），显示当前页码\n' +
    '5. 功能页（封面/目录/章节/工作坊/summary）保持风格一致\n' +
    '6. 内容页在配色一致的前提下尽量视觉化和多样化\n' +
    '7. 不要右下角的页码徽章（非内容页不要页码徽章）\n' +
    '8. 布局要多样化，避免相邻页面使用相同布局\n\n' +
    '输出路径：' + SLIDES_DIR + '/\n' +
    '文件名：' + slide.id + '.js'
    , {label: slide.id, phase: 'PPT生成'}
  )
)

log('PPT幻灯片生成完成：' + slides.length + '页')

// 生成compile.js
const compileContent = `const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

const theme = {
  primary: "264653",
  secondary: "2a9d8f",
  accent: "e9c46a",
  light: "f4a261",
  bg: "f8f9fa"
};

for (let i = 1; i <= 140; i++) {
  const num = String(i).padStart(2, '0');
  try {
    const slideModule = require('./slide-' + num + '.js');
    slideModule.createSlide(pres, theme);
    console.log('Loaded slide-' + num);
  } catch (e) {
    console.error('Error loading slide-' + num + ': ' + e.message);
  }
}

pres.writeFile({ fileName: './output/presentation.pptx' })
  .then(() => console.log('Presentation created successfully!'))
  .catch(err => console.error('Error:', err));
`

// 返回生成结果摘要
return {
  totalSlides: slides.length,
  outputDir: SLIDES_DIR,
  compileScript: compileContent,
  theme: THEME
}
