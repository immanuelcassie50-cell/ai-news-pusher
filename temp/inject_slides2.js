const fs = require('fs');
let data = JSON.parse(fs.readFileSync('D:/CC/temp/fufeng_deck_full.json', 'utf8'));

function insertAfter(idx, newSlides) {
  data.slides.splice(idx + 1, 0, ...newSlides);
}

const moreSlides = [
  // More Day1 morning detail
  {
    type: 'point', tag: '1s1b', ch: '1', accent: 'a1', kick: 'Day1 上午 9:00-12:00 续',
    title: '第一天上午：角色升级与心态重建',
    lines: [
      {t: '内训师的三个角色转变：从操作者到赋能者 / 从执行者到设计者 / 从个人到组织', b: '角色不变，行为就不会变'},
      {t: '心态重建：内训师的核心价值不在于自己会做，在于能让别人也会做', b: '一个人会，团队才会；团队会，组织才会'},
      {t: '阜丰的期待：带着实战经验来，带着课程走——这不是额外任务，是核心职责', b: '阜丰投资你们的时间，是为了让你们能赋能更多人'}
    ]
  },
  // More Day1 afternoon
  {
    type: 'point', tag: '1s2b', ch: '1', accent: 'a1', kick: 'Day1 下午 14:00-17:00 续',
    title: '第一天下午：三种萃取方法详解',
    lines: [
      {t: '关键事件分析法：适合高难度、高价值、不可重复的项目型经验', b: '优势：深度挖掘，细节丰富；劣势：耗时，依赖访谈技巧'},
      {t: '流程穿越法：适合标准化、可复制、需大面积推广的流程型经验', b: '优势：结构清晰，覆盖面广；劣势：难捕捉隐性决策'},
      {t: '复盘提炼法：适合项目结束后、有完整记录的回顾型经验', b: '优势：真实、反思深刻；劣势：依赖复盘质量'}
    ]
  },
  // Day1 evening detail
  {
    type: 'point', tag: '1s3b', ch: '1', accent: 'a1', kick: 'Day1 晚间 18:30-21:30 续',
    title: '第一天晚间：访谈技巧与常见误区',
    lines: [
      {t: '访谈的三个常见误区：问得太泛（答不到点）、问得太急（没给思考时间）、问得太评判（引发防御）', b: '好的访谈是让被访者感觉在聊天，不是被审问'},
      {t: '访谈记录的AI辅助整理：语音转文字 → 关键段落标注 → 经验点提取 → 结构化输出', b: 'AI是整理工具，不是判断工具'},
      {t: '当晚产出：每人整理好自己的关键事件访谈记录初稿', b: '这是第二天内容开发的核心素材'}
    ]
  },
  // More Day2 morning
  {
    type: 'point', tag: '2s1b', ch: '2', accent: 'a4', kick: 'Day2 上午 9:00-12:00 续',
    title: '第二天上午：五步成纲法实操细节',
    lines: [
      {t: '第一步：输入课题定位陈述，AI生成3套目标方案——人选择最优或组合', b: 'AI是选项生成器，人是最终决策者'},
      {t: '第二步：针对每个目标，AI展开为具体行为指标——可观察、可衡量', b: '行为指标决定了后续教学和评估的方向'},
      {t: '第三步：为每个行为指标设计教学活动——工作坊/案例/演练/讲授', b: '不同的目标配不同的教学方式'}
    ]
  },
  // More Day2 afternoon
  {
    type: 'point', tag: '2s2b', ch: '2', accent: 'a4', kick: 'Day2 下午 14:00-17:00 续',
    title: '第二天下午：STAR案例与ABCD测试实操',
    lines: [
      {t: 'STAR案例撰写常见问题：S和T太笼统（没有具体情境）、A只有结果没有过程、R没有量化指标', b: '好的STAR案例：情境具体到能让学员对号入座'},
      {t: 'ABCD测试的第四个维度D（Decision）：判断标准要前置——学员做之前就知道什么是对', b: '标准前置是教学设计的核心原则'},
      {t: '阜丰案例要求：必须来自阜丰真实情境——生产/研发/技术/营销一线', b: '阜丰人讲阜丰事，这是内训课区别于公开课的核心'}
    ]
  },
  // Day2 evening detail
  {
    type: 'point', tag: '2s3b', ch: '2', accent: 'a4', kick: 'Day2 晚间 18:30-21:30 续',
    title: '第二天晚间：讲师手册与测试题设计细节',
    lines: [
      {t: '讲师手册的三个核心模块：流程指引（时间轴）/ 话术支撑（每页配套）/ 异常处理（常见问题应答）', b: '好的讲师手册：新讲师拿着能直接上讲台'},
      {t: '学员手册的精简原则：课堂记重点 / 手册有全文 / 做减法不做加法', b: '学员手册越厚，学员越不会看——这是血的教训'},
      {t: '测试题的三种类型与适用场景：记忆题（开场测）/ 理解题（中间测）/ 应用题（结尾测）', b: '不同位置测不同深度'}
    ]
  },
  // More Day3 morning
  {
    type: 'point', tag: '3s1b', ch: '3', accent: 'a2', kick: 'Day3 上午 9:00-12:00 续',
    title: '第三天上午：说人话转化实操细节',
    lines: [
      {t: '模式一实操：从阜丰专业术语出发，找生活中的对应比喻', b: '例如：「发酵转化率」→ 「同样投这么多料，能多产出多少东西」'},
      {t: '模式二实操：先收集3个真实案例，让学员自己归纳出概念', b: '学员归纳的概念比直接告知记得更牢——这是认知规律'},
      {t: '模式三实操：先问学员「你们平时怎么做」，再引出新方法', b: '新方法是旧方法的升级，不是推翻重来'}
    ]
  },
  // More Day3 afternoon
  {
    type: 'point', tag: '3s2b', ch: '3', accent: 'a2', kick: 'Day3 下午 14:00-17:00 续',
    title: '第三天下午：逐字稿与四步教学深度',
    lines: [
      {t: '逐字稿的时间块结构：开场3分钟（钩子+目标）/ 核心15分钟（1个观点+1个案例+1个比喻）/ 结尾2分钟（总结+行动）', b: '时间块先行，再填内容——这是写逐字稿的正确顺序'},
      {t: '四步教学设计的AI辅助：为每个知识点，AI自动生成四步设计建议', b: '人负责判断和调整，AI负责框架和素材——不是AI替代人，是AI放大人的能力'},
      {t: '四步配四技：提问激活 / 类比关联 / 图示辅助 / 测试强化', b: '每一步都有具体工具，不是空谈'}
    ]
  },
  // Day3 evening detail
  {
    type: 'point', tag: '3s3b', ch: '3', accent: 'a2', kick: 'Day3 晚间 18:30-21:30 续',
    title: '第三天晚间：微课设计三种逻辑',
    lines: [
      {t: '时间线逻辑：过去→现在→未来 / 问题→原因→解决方案——适合流程类内容', b: '时间线逻辑最符合大脑的因果认知习惯'},
      {t: '问题解决逻辑：问题是什么→为什么存在→怎么解决——适合方法论类内容', b: '问题解决逻辑能激发学员的求知欲'},
      {t: '案例贯穿逻辑：故事引入→理论提炼→应用场景——适合技能类内容', b: '案例贯穿逻辑让抽象概念具象化'}
    ]
  },
  // More Day4 morning
  {
    type: 'point', tag: '4s1b', ch: '4', accent: 'a5', kick: 'Day4 上午 9:00-12:00 续',
    title: '第四天上午：百问百答与异议应对详解',
    lines: [
      {t: 'AI生成百问百答的输入：课程目标 / 核心概念 / 常见误区——输出高频问题清单', b: 'AI是素材挖掘机，不是答案裁判'},
      {t: '异议应对四步法：认同（我理解你的顾虑）→追问（能具体说说吗）→转化（其实这个问题可以这样看）→行动（建议你试试这个方法）', b: '好的应答不是反驳，是引导'},
      {t: '阜丰内训师常见异议类型：「这个在我们车间不适用」/ 「工人理解不了这些」/ 「没时间回去练」', b: '针对阜丰真实场景的异议，要用阜丰的案例来应答'}
    ]
  },
  // More Day4 afternoon
  {
    type: 'point', tag: '4s2b', ch: '4', accent: 'a5', kick: 'Day4 下午 14:00-17:00 续',
    title: '第四天下午：评审与交付细节',
    lines: [
      {t: '评审的四个维度：需求精准度30% / 内容有效性30% / 设计科学性20% / 交付可行性20%', b: '四维全过才是好课程——偏科即淘汰'},
      {t: '评审工具包移交：评审清单 / 评分量表 / 反馈模板 / 奖项设置——移交各基地统一使用', b: '标准统一，尺度一致'},
      {t: '结营后的跟进：候选人回基地后，贵司自行组织正式评审', b: '课程包的最终检验，在各自的基地'}
    ]
  },
  // More comparison pages
  {
    type: 'cmp', tag: 'cmp-5', ch: '全', accent: 'a4', kick: '对比',
    title: '内训师 vs 外部讲师',
    cards: [
      {h: '内训师优势', accent: 'a2', body: '真实情境：阜丰一线经验，不是网上搜的案例\n痛点精准：知道阜丰人的卡点在哪里\n信任度高：学员是同事，不是外人', fs: 12},
      {h: '外部讲师劣势', accent: 'a3', body: '案例通用：放之四海皆准，不接地气\n距离感：学员不会把真实困惑说出来\n成本高：单次授课，无法持续迭代', fs: 12}
    ]
  },
  {
    type: 'cmp', tag: 'cmp-6', ch: '全', accent: 'a4', kick: '对比',
    title: '好的演练 vs 差的演练',
    cards: [
      {h: '好的演练', accent: 'a2', body: '目标明确：练的是课程包，不是演讲能力\n反馈具体：指出哪个环节有问题，怎么改\n环境真实：模拟真实评审，不搞表演', fs: 12},
      {h: '差的演练', accent: 'a3', body: '目标模糊：人人上台，点评泛泛\n反馈抽象：讲得很好（然后没有然后）\n环境失真：同事捧场，不暴露真问题', fs: 12}
    ]
  },
  // More content deepening
  {
    type: 'point', tag: 'deep-1', ch: '萃', accent: 'a1', kick: '萃 · 案例',
    title: '萃的阜丰案例：从阜丰来，到阜丰去',
    lines: [
      {t: '阜丰核心骨干的经验来自：生产（发酵工艺/质量控制）/ 研发（产品开发/实验设计）/ 技术（设备维护/工艺优化）/ 营销（客户管理/市场策略）', b: '阜丰人讲阜丰事——这是内训课区别于公开课的灵魂'},
      {t: '萃的阜丰标准：这个经验在哪个阜丰场景下验证过？参数是否真实？适用边界是什么？', b: '阜丰的案例必须经得起阜丰人的追问'},
      {t: '萃的产出形式：经验定位表 / 关键事件访谈录音 / 经验萃取结构化文档', b: '结构化输出，让经验可传授、可复制、可迭代'}
    ]
  },
  {
    type: 'point', tag: 'deep-2', ch: '说', accent: 'a2', kick: '说 · 阜丰',
    title: '说的阜丰标准：阜丰人能听懂、记得住、用得上',
    lines: [
      {t: '阜丰人的语言习惯：务实、直接、接地气——不喜欢绕弯子', b: '阜丰人讲阜丰话，不要用咨询公司那套语言体系'},
      {t: '阜丰场景的语言转化示例：「卓越绩效模式」→ 「怎么让各个部门配合得更好」', b: '概念要落地到阜丰人的工作场景'},
      {t: '阜丰人的记忆规律：数字比文字好记 / 故事比道理好记 / 自己的事比别人的事好记', b: '好的课程设计要让学员觉得「说的就是我」'}
    ]
  },
  // More quotes
  {
    type: 'quote', text: '内训师的价值不在于自己有多厉害，在于能让多少阜丰人变得厉害。', sub: '阜丰内训师的核心使命', accent: 'a1'
  },
  {
    type: 'quote', text: '一个阜丰人学会了，意味着阜丰的生产线/实验室/车间/客户现场多了一个能把经验讲清楚的人。', sub: '内训师是经验的放大器', accent: 'a4'
  },
  // Steps page for methodology
  {
    type: 'steps', tag: 'steps-1', ch: '全', accent: 'a4', kick: '流程',
    title: 'AI辅助课程开发标准流程',
    items: [
      {n: '1', h: '萃', b: 'AI辅助调研+访谈+经验萃取'},
      {n: '2', h: '设', b: 'AI生成大纲+人校准结构'},
      {n: '3', h: '说', b: 'AI生成逐字稿+人润色试讲'},
      {n: '4', h: '演', b: 'AI生成问答+人模拟实战'},
      {n: '5', h: '评', b: 'AI辅助评分+人终审质量'}
    ]
  },
  // Final summary
  {
    type: 'call', tag: 'final-1', ch: '压', accent: 'a1', title: '四天三晚，我们一起走过',
    big: '阜丰集团内训师战队，带着完整课程包，回到各自基地',
    sub: '第五年，我们依然想着比去年再往前一点',
    bs: ['萃：从模糊经验到结构化知识', '设：从大纲到完整课程包', '说：从专业术语到学员语言', '演：从演练到独立授课', '评：从课程包到持续迭代', '回到基地，用行动证明价值']
  }
];

// Insert schedule detail pages after rest1
let rest1Idx = data.slides.findIndex(s => s.tag === '休息1');
insertAfter(rest1Idx, [
  moreSlides[0],  // Day1 morning 续
  moreSlides[1],  // Day1 afternoon 续
  moreSlides[2],  // Day1 evening 续
  moreSlides[3],  // Day2 morning 续
  moreSlides[4],  // Day2 afternoon 续
  moreSlides[5],  // Day2 evening 续
  moreSlides[6],  // Day3 morning 续
  moreSlides[7],  // Day3 afternoon 续
  moreSlides[8],  // Day3 evening 续
  moreSlides[9],  // Day4 morning 续
  moreSlides[10], // Day4 afternoon 续
]);

// Insert comparison and deep pages before final chapter
let finalIdx = data.slides.findIndex(s => s.tag === '6-1');
insertAfter(finalIdx - 1, [
  moreSlides[11], // 内训师vs外部讲师
  moreSlides[12], // 好的演练vs差的演练
  moreSlides[13], // 萃的阜丰案例
  moreSlides[14], // 说的阜丰标准
  moreSlides[15], // quote 1
  moreSlides[16], // quote 2
  moreSlides[17], // AI辅助流程steps
  moreSlides[18], // final call
]);

console.log('Total slides after injection 2:', data.slides.length);
fs.writeFileSync('D:/CC/temp/fufeng_deck_full.json', JSON.stringify(data, null, 2));
console.log('Done');
