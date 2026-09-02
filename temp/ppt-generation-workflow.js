export const meta = {
  name: 'course-06-ppt',
  description: '生成课程06《用户体验驱动企业增长》140页PPT',
  phases: ['PPT幻灯片生成'],
}

const SLIDES_DIR = 'D:/新课开发/经营/系列/06_用户体验驱动企业增长/授课PPT/slides'
const OUTPUT_DIR = 'D:/新课开发/经营/系列/06_用户体验驱动企业增长/授课PPT/slides/output'

// Theme: Education & Charts palette with Soft & Balanced style
const THEME = {
  primary: "264653",    // 深青绿 - 标题
  secondary: "2a9d8f",  // 青绿 - 副标题/强调
  accent: "e9c46a",     // 金黄 - 高亮
  light: "f4a261",      // 橙色 - 点缀
  bg: "f8f9fa"          // 浅灰白背景
}

// 课程信息
const COURSE_INFO = {
  title: '用户体验驱动企业增长',
  subtitle: '品牌创新系统·第二门课',
  module1: '体验价值重构',
  module2: '用户体验地图绘制',
  module3: '体验度量体系',
  module4: '体验驱动增长机制'
}

// 幻灯片生成任务分配（每批10页）
const SLIDE_BATCHES = [
  // 封面和目录 (slides 01-02)
  ['slide-01:cover', 'slide-02:toc'],
  // 模块一：体验价值重构 (slides 03-24)
  ['slide-03:section', 'slide-04:content', 'slide-05:content', 'slide-06:content', 'slide-07:content', 'slide-08:content', 'slide-09:content', 'slide-10:content'],
  ['slide-11:content', 'slide-12:content', 'slide-13:content', 'slide-14:content', 'slide-15:content', 'slide-16:content', 'slide-17:content'],
  ['slide-18:content', 'slide-19:content', 'slide-20:content', 'slide-21:content', 'slide-22:content', 'slide-23:content'],
  ['slide-24:workshop'],
  // 模块二：用户体验地图绘制 (slides 25-52)
  ['slide-25:section', 'slide-26:content', 'slide-27:content', 'slide-28:content', 'slide-29:content', 'slide-30:content', 'slide-31:content'],
  ['slide-32:content', 'slide-33:content', 'slide-34:content', 'slide-35:content', 'slide-36:content', 'slide-37:content', 'slide-38:content'],
  ['slide-39:content', 'slide-40:content', 'slide-41:content', 'slide-42:content', 'slide-43:content', 'slide-44:content', 'slide-45:content', 'slide-46:content'],
  ['slide-47:content', 'slide-48:content', 'slide-49:content', 'slide-50:content', 'slide-51:content'],
  ['slide-52:workshop'],
  // 模块三：体验度量体系 (slides 53-79)
  ['slide-53:section', 'slide-54:content', 'slide-55:content', 'slide-56:content', 'slide-57:content', 'slide-58:content', 'slide-59:content', 'slide-60:content'],
  ['slide-61:content', 'slide-62:content', 'slide-63:content', 'slide-64:content', 'slide-65:content', 'slide-66:content'],
  ['slide-67:content', 'slide-68:content', 'slide-69:content', 'slide-70:content', 'slide-71:content', 'slide-72:content', 'slide-73:content'],
  ['slide-74:content', 'slide-75:content', 'slide-76:content', 'slide-77:content', 'slide-78:content'],
  ['slide-79:workshop'],
  // 模块四：体验驱动增长机制 (slides 80-108)
  ['slide-80:section', 'slide-81:content', 'slide-82:content', 'slide-83:content', 'slide-84:content', 'slide-85:content', 'slide-86:content', 'slide-87:content'],
  ['slide-88:content', 'slide-89:content', 'slide-90:content', 'slide-91:content', 'slide-92:content', 'slide-93:content', 'slide-94:content'],
  ['slide-95:content', 'slide-96:content', 'slide-97:content', 'slide-98:content', 'slide-99:content', 'slide-100:content', 'slide-101:content'],
  ['slide-102:content', 'slide-103:content', 'slide-104:content', 'slide-105:content', 'slide-106:content', 'slide-107:content'],
  ['slide-108:workshop'],
  // 课程收尾 (slides 109-114)
  ['slide-109:summary', 'slide-110:summary', 'slide-111:summary', 'slide-112:summary', 'slide-113:summary', 'slide-114:summary'],
  // 附录 (slides 115-140)
  ['slide-115:appendix', 'slide-116:appendix', 'slide-117:appendix', 'slide-118:appendix', 'slide-119:appendix', 'slide-120:appendix', 'slide-121:appendix', 'slide-122:appendix', 'slide-123:appendix', 'slide-124:appendix'],
  ['slide-125:case', 'slide-126:case', 'slide-127:case', 'slide-128:case', 'slide-129:case', 'slide-130:case', 'slide-131:case', 'slide-132:case'],
  ['slide-133:ref', 'slide-134:ref', 'slide-135:ref', 'slide-136:ref'],
  ['slide-137:note', 'slide-138:note', 'slide-139:note', 'slide-140:note']
]

phase('PPT幻灯片生成')

// 幻灯片内容定义
const SLIDE_CONTENT = {
  'slide-01': {
    type: 'cover',
    title: '用户体验驱动企业增长',
    subtitle: '品牌创新系统·第二门课'
  },
  'slide-02': {
    type: 'toc',
    title: '课程目录',
    sections: ['模块一：体验价值重构', '模块二：用户体验地图绘制', '模块三：体验度量体系', '模块四：体验驱动增长机制']
  },
  'slide-03': {
    type: 'section',
    module: '01',
    title: '体验价值重构',
    subtitle: '体验经济时代的生存法则'
  },
  // 模块一内容页 (slides 04-23)
  'slide-04': { type: 'content', title: '1.1.1 体验经济的定义与特征', content: '体验经济的四个本质特征' },
  'slide-05': { type: 'content', title: '1.1.2 从产品到体验的价值迁移', content: '价值迁移的五个阶段' },
  'slide-06': { type: 'content', title: '1.1.3 体验经济的四阶段模型', content: '制造业→服务业→体验业→引导业' },
  'slide-07': { type: 'content', title: '1.1.4 案例：苹果的体验溢价', content: 'Apple Store的体验设计哲学' },
  'slide-08': { type: 'content', title: '1.1.5 案例：迪士尼的体验设计', content: '神奇王国的心灵滤镜' },
  'slide-09': { type: 'content', title: '1.1.6 体验经济的底层逻辑', content: '体验是一种经济商品' },
  'slide-10': { type: 'content', title: '1.1.7 关键洞察：为什么体验成为新的战场', content: '体验竞争的五个维度' },
  'slide-11': { type: 'content', title: '1.2.1 传统品牌护城河的失效', content: '五种护城河的局限性分析' },
  'slide-12': { type: 'content', title: '1.2.2 产品同质化的竞争困局', content: '功能竞争的红海' },
  'slide-13': { type: 'content', title: '1.2.3 体验差异化如何构建竞争壁垒', content: '体验护城河的四层结构' },
  'slide-14': { type: 'content', title: '1.2.4 案例：美团用户体验驱动增长', content: '美团酒店用户体验实践' },
  'slide-15': { type: 'content', title: '1.2.5 案例：海底捞的服务护城河', content: '超越预期的服务设计' },
  'slide-16': { type: 'content', title: '1.2.6 体验护城河的四层结构', content: '功能层→情感层→认同层→文化层' },
  'slide-17': { type: 'content', title: '1.2.7 核心框架：体验-品牌-增长的正循环', content: '体验驱动品牌，品牌驱动增长' },
  'slide-18': { type: 'content', title: '1.3.1 用户体验的本质是价值感知', content: '体验是用户对价值的感知' },
  'slide-19': { type: 'content', title: '1.3.2 体验设计的五个层次', content: '战略层→范围层→结构层→框架层→表现层' },
  'slide-20': { type: 'content', title: '1.3.3 从用户视角出发的体验设计', content: '用户旅程地图法' },
  'slide-21': { type: 'content', title: '1.3.4 体验设计的三个黄金原则', content: '可用性→愉悦性→意义性' },
  'slide-22': { type: 'content', title: '1.3.5 小组讨论：识别你企业的体验断点', content: 'WORKSHOP' },
  'slide-23': { type: 'content', title: '1.3.6 知识点回顾与框架图', content: '模块一知识框架' },
  'slide-24': { type: 'workshop', title: '工作坊1：体验价值重构实战', subtitle: '绘制你企业的体验价值地图' },
  'slide-25': {
    type: 'section',
    module: '02',
    title: '用户体验地图绘制',
    subtitle: '看见用户的全旅程'
  },
  // 模块二内容页 (slides 26-51)
  'slide-26': { type: 'content', title: '2.1.1 什么是用户体验地图', content: '用户体验地图的定义与价值' },
  'slide-27': { type: 'content', title: '2.1.2 体验地图的价值与作用', content: '可视化用户旅程' },
  'slide-28': { type: 'content', title: '2.1.3 体验地图的核心组成要素', content: '阶段-触点-行为-情感-机会' },
  'slide-29': { type: 'content', title: '2.1.4 体验地图的四种类型', content: '当前状态vs未来状态' },
  'slide-30': { type: 'content', title: '2.1.5 如何选择适合的体验地图类型', content: '场景匹配指南' },
  'slide-31': { type: 'content', title: '2.1.6 体验地图绘制的基本步骤', content: '六步绘制法' },
  'slide-32': { type: 'content', title: '2.2.1 触点的定义与分类', content: '有形触点与无形触点' },
  'slide-33': { type: 'content', title: '2.2.2 有形触点与无形触点', content: '产品触点、服务触点、沟通触点' },
  'slide-34': { type: 'content', title: '2.2.3 关键触点的识别方法', content: '高中低频触点分析' },
  'slide-35': { type: 'content', title: '2.2.4 触点矩阵：频率-影响力分析', content: '触点优先级矩阵' },
  'slide-36': { type: 'content', title: '2.2.5 案例：银行App的触点优化', content: '某国有大行App体验优化' },
  'slide-37': { type: 'content', title: '2.2.6 触点设计检查清单', content: '触点评估20问' },
  'slide-38': { type: 'content', title: '2.2.7 实战练习：识别你的关键触点', content: 'WORKSHOP' },
  'slide-39': { type: 'content', title: '2.3.1 情绪曲线的理论基础', content: '峰终定律与情绪设计' },
  'slide-40': { type: 'content', title: '2.3.2 情绪曲线的绘制方法', content: '定性与定量结合' },
  'slide-41': { type: 'content', title: '2.3.3 高峰体验与谷底体验', content: '关键时刻（ MOT）设计' },
  'slide-42': { type: 'content', title: '2.3.4 体验峰终定律', content: '峰与终决定记忆' },
  'slide-43': { type: 'content', title: '2.3.5 案例：宜家的峰终体验设计', content: '出口处的冰淇淋' },
  'slide-44': { type: 'content', title: '2.3.6 情绪曲线的定性与定量结合', content: '问卷+访谈+行为数据' },
  'slide-45': { type: 'content', title: '2.3.7 常见情绪曲线模式', content: '五种典型曲线' },
  'slide-46': { type: 'content', title: '2.3.8 实战练习：绘制你的情绪曲线', content: 'WORKSHOP' },
  'slide-47': { type: 'content', title: '2.4.1 体验断点的定义与分类', content: '摩擦型/断裂型/缺失型断点' },
  'slide-48': { type: 'content', title: '2.4.2 断点诊断的四步法', content: '发现→定位→归因→优先级' },
  'slide-49': { type: 'content', title: '2.4.3 从断点到机会的转化', content: '痛点即机会' },
  'slide-50': { type: 'content', title: '2.4.4 断点优先级评估矩阵', content: '影响程度×实施难度' },
  'slide-51': { type: 'content', title: '2.4.5 实战练习：诊断你的体验断点', content: 'WORKSHOP' },
  'slide-52': { type: 'workshop', title: '工作坊2：用户体验地图绘制实战', subtitle: '完整绘制你企业的用户体验地图' },
  'slide-53': {
    type: 'section',
    module: '03',
    title: '体验度量体系',
    subtitle: '用数据驱动体验优化'
  },
  // 模块三内容页 (slides 54-78)
  'slide-54': { type: 'content', title: '3.1.1 什么是NPS（净推荐值）', content: 'NPS的定义与起源' },
  'slide-55': { type: 'content', title: '3.1.2 NPS的计算方法与解读', content: '推荐者-被动者-贬损者' },
  'slide-56': { type: 'content', title: '3.1.3 NPS的三类用户', content: '推荐者（9-10分）被动者（7-8分）贬损者（0-6分）' },
  'slide-57': { type: 'content', title: '3.1.4 NPS的行业基准与对比', content: '各行业NPS基准' },
  'slide-58': { type: 'content', title: '3.1.5 NPS的局限性与发展', content: 'NPS的不足与补充指标' },
  'slide-59': { type: 'content', title: '3.1.6 如何有效提升NPS', content: 'NPS提升五步法' },
  'slide-60': { type: 'content', title: '3.1.7 案例：招商银行NPS实践', content: '招行NPS从45到72的旅程' },
  'slide-61': { type: 'content', title: '3.2.1 留存率的核心概念', content: '次日留存/7日留存/30日留存' },
  'slide-62': { type: 'content', title: '3.2.2 留存曲线与Cohort分析', content: 'Cohort留存分析' },
  'slide-63': { type: 'content', title: '3.2.3 复购率的驱动因素', content: '产品/服务/体验三驱动' },
  'slide-64': { type: 'content', title: '3.2.4 留存与复购的关系模型', content: '留存是复购的基础' },
  'slide-65': { type: 'content', title: '3.2.5 案例：瑞幸咖啡的留存策略', content: '瑞幸用户留存体系' },
  'slide-66': { type: 'content', title: '3.2.6 留存指标的行动指南', content: '留存改善四步法' },
  'slide-67': { type: 'content', title: '3.3.1 体验指标的三个层次', content: '感知层/态度层/行为层' },
  'slide-68': { type: 'content', title: '3.3.2 先行指标与滞后指标', content: '先行指标预测未来' },
  'slide-69': { type: 'content', title: '3.3.3 指标体系的搭建框架', content: '指标体系搭建三步法' },
  'slide-70': { type: 'content', title: '3.3.4 关键体验指标（CES/CES/SCE）', content: 'CES/SCE指标详解' },
  'slide-71': { type: 'content', title: '3.3.5 指标权重与综合评分', content: '加权体验评分模型' },
  'slide-72': { type: 'content', title: '3.3.6 体验仪表盘设计', content: '体验管理驾驶舱' },
  'slide-73': { type: 'content', title: '3.3.7 实战练习：设计你的体验仪表盘', content: 'WORKSHOP' },
  'slide-74': { type: 'content', title: '3.4.1 数据驱动的体验闭环', content: '采集→分析→洞察→行动' },
  'slide-75': { type: 'content', title: '3.4.2 VOC（客户声音）收集方法', content: 'VOC全渠道收集' },
  'slide-76': { type: 'content', title: '3.4.3 从数据到洞察的转化', content: '数据洞察化四步' },
  'slide-77': { type: 'content', title: '3.4.4 A/B测试在体验优化中的应用', content: '实验驱动体验迭代' },
  'slide-78': { type: 'content', title: '3.4.5 持续优化机制建立', content: '体验优化组织机制' },
  'slide-79': { type: 'workshop', title: '工作坊3：体验度量体系设计', subtitle: '设计你企业的体验指标仪表盘' },
  'slide-80': {
    type: 'section',
    module: '04',
    title: '体验驱动增长机制',
    subtitle: '从满意到忠诚的转化飞轮'
  },
  // 模块四内容页 (slides 81-107)
  'slide-81': { type: 'content', title: '4.1.1 满意度的本质与局限', content: '满意度不等于忠诚度' },
  'slide-82': { type: 'content', title: '4.1.2 满意度与忠诚度的关系', content: '满意-信任-忠诚三层模型' },
  'slide-83': { type: 'content', title: '4.1.3 忠诚度的三个层次', content: '行为忠诚/情感忠诚/倡导忠诚' },
  'slide-84': { type: 'content', title: '4.1.4 从交易关系到情感关系', content: '关系升级路径' },
  'slide-85': { type: 'content', title: '4.1.5 案例：会员体系的忠诚度设计', content: '亚马逊Prime会员体系' },
  'slide-86': { type: 'content', title: '4.1.6 情感账户：忠诚度的银行模型', content: '情感存款与取款' },
  'slide-87': { type: 'content', title: '4.1.7 提升忠诚度的关键策略', content: '忠诚度提升五策略' },
  'slide-88': { type: 'content', title: '4.2.1 口碑传播的威力', content: '口碑是最可信的广告' },
  'slide-89': { type: 'content', title: '4.2.2 推荐经济的崛起', content: '推荐奖励经济' },
  'slide-90': { type: 'content', title: '4.2.3 推荐者的心理动机', content: '利他/利己/社交货币' },
  'slide-91': { type: 'content', title: '4.2.4 案例：小米的粉丝经济', content: '小米社区运营' },
  'slide-92': { type: 'content', title: '4.2.5 推荐裂变的设计原则', content: '裂变增长三要素' },
  'slide-93': { type: 'content', title: '4.2.6 KOC（关键意见消费者）的价值', content: 'KOC vs KOL' },
  'slide-94': { type: 'content', title: '4.2.7 口碑监测与管理', content: '口碑管理体系' },
  'slide-95': { type: 'content', title: '4.3.1 什么是增长飞轮', content: '飞轮效应的原理' },
  'slide-96': { type: 'content', title: '4.3.2 体验飞轮的四阶段', content: '体验→口碑→获客→增长' },
  'slide-97': { type: 'content', title: '4.3.3 飞轮的正向增强回路', content: '飞轮加速机制' },
  'slide-98': { type: 'content', title: '4.3.4 案例：亚马逊的增长飞轮', content: '亚马逊飞轮解读' },
  'slide-99': { type: 'content', title: '4.3.5 飞轮设计的检查清单', content: '飞轮设计10问' },
  'slide-100': { type: 'content', title: '4.3.6 从0到1构建体验飞轮', content: '飞轮构建五步法' },
  'slide-101': { type: 'content', title: '4.3.7 飞轮诊断与迭代', content: '飞轮健康度评估' },
  'slide-102': { type: 'content', title: '4.4.1 两天学习回顾与整合', content: '知识框架整合' },
  'slide-103': { type: 'content', title: '4.4.2 体验优化路线图制定', content: '90天行动路线图' },
  'slide-104': { type: 'content', title: '4.4.3 资源需求与优先级排序', content: '资源约束下的决策' },
  'slide-105': { type: 'content', title: '4.4.4 成功指标设定', content: 'OKR设定方法' },
  'slide-106': { type: 'content', title: '4.4.5 行动计划分享', content: '小组分享与反馈' },
  'slide-107': { type: 'content', title: '4.4.6 后续支持与资源', content: '学习资源与支持' },
  'slide-108': { type: 'workshop', title: '工作坊4：体验增长飞轮设计', subtitle: '设计你企业的体验增长飞轮' },
  // 课程收尾 (slides 109-114)
  'slide-109': { type: 'summary', title: '两天的学习回顾', content: '课程核心框架回顾' },
  'slide-110': { type: 'summary', title: '核心框架总结', content: '体验驱动增长传导链' },
  'slide-111': { type: 'summary', title: '关键工具清单', content: '工具库速查' },
  'slide-112': { type: 'summary', title: '常见陷阱与应对', content: '体验建设的五个坑' },
  'slide-113': { type: 'summary', title: '行动计划的制定与分享', content: '个人行动计划' },
  'slide-114': { type: 'summary', title: '课程总结与祝福', content: '持续精进' },
  // 附录 (slides 115-136)
  'slide-115': { type: 'appendix', title: '附录A1：用户体验地图模板', content: '空白模板' },
  'slide-116': { type: 'appendix', title: '附录A2：触点矩阵模板', content: '空白模板' },
  'slide-117': { type: 'appendix', title: '附录A3：情绪曲线模板', content: '空白模板' },
  'slide-118': { type: 'appendix', title: '附录A4：体验断点诊断表', content: '空白模板' },
  'slide-119': { type: 'appendix', title: '附录A5：NPS调查问卷模板', content: '问卷模板' },
  'slide-120': { type: 'appendix', title: '附录A6：留存分析表模板', content: '空白模板' },
  'slide-121': { type: 'appendix', title: '附录A7：体验指标仪表盘', content: '仪表盘模板' },
  'slide-122': { type: 'appendix', title: '附录A8：增长飞轮模板', content: '空白模板' },
  'slide-123': { type: 'appendix', title: '附录A9：行动计划模板', content: '空白模板' },
  'slide-124': { type: 'appendix', title: '附录A10：课程检验清单', content: '检验清单' },
  'slide-125': { type: 'case', title: '案例B1：腾讯用户体验实践', content: '腾讯产品体验管理' },
  'slide-126': { type: 'case', title: '案例B2：阿里客户体验管理', content: '阿里巴巴体验体系' },
  'slide-127': { type: 'case', title: '案例B3：京东物流体验优化', content: '京东物流体验' },
  'slide-128': { type: 'case', title: '案例B4：字节跳动用户体验', content: '字节跳动UX实践' },
  'slide-129': { type: 'case', title: '案例B5：美团酒店体验驱动增长', content: '美团酒店案例' },
  'slide-130': { type: 'case', title: '案例B6：携程旅行体验体系', content: '携程服务体验' },
  'slide-131': { type: 'case', title: '案例B7：蔚来用户运营', content: '蔚来用户企业' },
  'slide-132': { type: 'case', title: '案例B8：泡泡玛特体验设计', content: '潮玩体验设计' },
  'slide-133': { type: 'ref', title: '参考文献C1：经典著作', content: '延伸阅读' },
  'slide-134': { type: 'ref', title: '参考文献C2：研究报告', content: '行业报告' },
  'slide-135': { type: 'ref', title: '参考文献C3：行业洞察', content: '洞察文章' },
  'slide-136': { type: 'ref', title: '参考文献C4：在线资源', content: '资源链接' },
  // 讲师备注 (slides 137-140)
  'slide-137': { type: 'note', title: '讲师备注：模块一授课要点', content: '授课提示' },
  'slide-138': { type: 'note', title: '讲师备注：模块二授课要点', content: '授课提示' },
  'slide-139': { type: 'note', title: '讲师备注：模块三授课要点', content: '授课提示' },
  'slide-140': { type: 'note', title: '讲师备注：模块四授课要点', content: '授课提示' }
}

log('开始生成140页PPT幻灯片...')
log('主题配色：Education & Charts (深青绿系)')
log('设计风格：Soft & Balanced')

// 使用pipeline并行生成幻灯片
const slides = await pipeline(
  Object.keys(SLIDE_CONTENT),
  slideId => agent(
    '为课程06《用户体验驱动企业增长》生成PPT幻灯片：' + slideId + '.js\n\n' +
    '幻灯片信息：' + JSON.stringify(SLIDE_CONTENT[slideId]) + '\n\n' +
    '主题配色（必须使用这些精确的theme键）：\n' +
    '- theme.primary: "264653" (深青绿)\n' +
    '- theme.secondary: "2a9d8f" (青绿)\n' +
    '- theme.accent: "e9c46a" (金黄)\n' +
    '- theme.light: "f4a261" (橙色)\n' +
    '- theme.bg: "f8f9fa" (浅灰白)\n\n' +
    '重要规则：\n' +
    '1. 只使用theme.primary/secondary/accent/light/bg这5个键\n' +
    '2. 颜色值不带#号，如"264653"不是"#264653"\n' +
    '3. 中文字体用Microsoft YaHei，英文用Arial\n' +
    '4. 非封面页必须有页码徽章（位置x:9.3, y:5.1）\n' +
    '5. 布局要多样化，避免重复\n' +
    '6. 功能页（封面/目录/章节/工作坊）保持风格一致\n' +
    '7. 内容页在配色一致的前提下尽量视觉化和多样化\n' +
    '8. 不要右下角的页码徽章\n\n' +
    '输出路径：' + SLIDES_DIR + '/\n' +
    '文件名：' + slideId + '.js\n\n' +
    '幻灯片数量：140页（当前第' + slideId.replace("slide-", "") + '页）'
    , {label: 'slide-' + slideId, phase: 'PPT生成'}
  )
)

log('PPT幻灯片生成完成：' + slides.length + '页')

// 返回生成结果摘要
 return {
  totalSlides: slides.length,
  outputDir: SLIDES_DIR,
  theme: THEME
}
