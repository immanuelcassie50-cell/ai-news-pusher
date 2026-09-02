const fs = require('fs');
let data = JSON.parse(fs.readFileSync('D:/CC/temp/fufeng_deck_full.json', 'utf8'));

function insertAfter(idx, newSlides) {
  data.slides.splice(idx + 1, 0, ...newSlides);
}

// All additional slides
const additionalSlides = [
  // 0-2: Day1 Schedule
  {
    type: 'point', tag: '1s1', ch: '1', accent: 'a1', kick: 'Day1 上午 9:00-12:00',
    title: '第一天上午：角色升级与课题拆解',
    lines: [
      {t: '9:00-9:30 开场：内训师角色升级导入', b: '从「操作者」到「赋能者」，重新定义内训师价值'},
      {t: '9:30-10:30 课题拆解三步法实战', b: '每人产出自己的课题定位表初稿'},
      {t: '10:30-10:45 茶歇', b: ''},
      {t: '10:45-12:00 课程定位表撰写 + AI辅助扩写', b: '工具实操：Workbuddy辅助定位'}
    ]
  },
  {
    type: 'point', tag: '1s2', ch: '1', accent: 'a1', kick: 'Day1 下午 14:00-17:00',
    title: '第一天下午：关键事件访谈与经验萃取',
    lines: [
      {t: '14:00-15:00 三种萃取方法讲解与演示', b: '关键事件分析法 / 流程穿越法 / 复盘提炼法'},
      {t: '15:00-16:30 经验识别与高价值经验判断', b: '3D框架实操：Difficulty x Difference x Delivery'},
      {t: '16:30-16:45 茶歇', b: ''},
      {t: '16:45-17:00 当日复盘与明日预告', b: '萃的要点回顾，设的预告'}
    ]
  },
  {
    type: 'point', tag: '1s3', ch: '1', accent: 'a1', kick: 'Day1 晚间 18:30-21:30',
    title: '第一天晚间：三人小组关键事件访谈',
    lines: [
      {t: '18:30-19:30 Workbuddy工具完整介绍', b: 'AI辅助调研、访谈记录、内容分析功能演示'},
      {t: '19:30-21:00 三人小组关键事件访谈实操', b: '每组完成一组完整访谈录音'},
      {t: '21:00-21:30 访谈素材整理与初步萃取', b: '为第二天的内容开发储备素材'}
    ]
  },
  // 3-5: Day2 Schedule
  {
    type: 'point', tag: '2s1', ch: '2', accent: 'a4', kick: 'Day2 上午 9:00-12:00',
    title: '第二天上午：大纲生成与课件框架',
    lines: [
      {t: '9:00-9:30 昨日要点回顾 + 今日目标宣导', b: '设为先：逆向设计，以终为始'},
      {t: '9:30-10:30 逆向设计三阶段讲解', b: '确定预期结果 / 决定评估证据 / 设计学习体验'},
      {t: '10:30-10:45 茶歇', b: ''},
      {t: '10:45-12:00 五步成纲法实战 + AI辅助生成', b: '每组产出本组课程大纲初稿'}
    ]
  },
  {
    type: 'point', tag: '2s2', ch: '2', accent: 'a4', kick: 'Day2 下午 14:00-17:00',
    title: '第二天下午：案例开发与情境测试',
    lines: [
      {t: '14:00-15:00 STAR案例法深度讲解', b: 'S情境 x T任务 x A行动 x R结果'},
      {t: '15:00-16:00 情境测试案例设计', b: 'ABCD设计法实操：每组设计2-3个实战案例'},
      {t: '16:00-16:15 茶歇', b: ''},
      {t: '16:15-17:00 案例路演与互评', b: '每组3分钟案例分享，组内交叉评分'}
    ]
  },
  {
    type: 'point', tag: '2s3', ch: '2', accent: 'a4', kick: 'Day2 晚间 18:30-21:30',
    title: '第二天晚间：讲师手册与学员手册完善',
    lines: [
      {t: '18:30-19:30 讲师手册撰写规范与AI辅助', b: '每页课件配套讲师指引的结构设计'},
      {t: '19:30-20:30 学员手册精简原则', b: '做减法不做加法，手册是延伸不是照搬'},
      {t: '20:30-21:30 测试题库设计', b: '三种题型：记忆题/理解题/应用题'}
    ]
  },
  // 6-8: Day3 Schedule
  {
    type: 'point', tag: '3s1', ch: '3', accent: 'a2', kick: 'Day3 上午 9:00-12:00',
    title: '第三天上午：说人话内容转化法',
    lines: [
      {t: '9:00-9:30 昨日回顾 + 语言陷阱自查', b: '四大语言禁区：照本宣科/空洞说教/专业堆砌/逻辑混乱'},
      {t: '9:30-10:30 四种转化模式讲解与案例', b: '生活到专业 / 现象到概念 / 已知到未知 / 正确到错误'},
      {t: '10:30-10:45 茶歇', b: ''},
      {t: '10:45-12:00 四种转化模式实操练习', b: '将各自课题的专业内容转化为学员语言'}
    ]
  },
  {
    type: 'point', tag: '3s2', ch: '3', accent: 'a2', kick: 'Day3 下午 14:00-17:00',
    title: '第三天下午：四步教学设计与逐字稿',
    lines: [
      {t: '14:00-15:00 四步教学设计法深度讲解', b: '激活旧知 / 关联新知 / 辅助理解 / 强化记忆'},
      {t: '15:00-16:00 逐字稿撰写与AI辅助', b: '时间块先行，AI出骨架，人填血肉'},
      {t: '16:00-16:15 茶歇', b: ''},
      {t: '16:15-17:00 核心话术打磨与互评', b: '组内交叉演练，导师点评'}
    ]
  },
  {
    type: 'point', tag: '3s3', ch: '3', accent: 'a2', kick: 'Day3 晚间 18:30-21:30',
    title: '第三天晚间：微课拆解与跨组练习',
    lines: [
      {t: '18:30-19:30 微课拆解三种逻辑', b: '时间线逻辑 / 问题解决逻辑 / 案例贯穿逻辑'},
      {t: '19:30-20:30 5-8人一组微课脚本实操', b: '每人设计一段3分钟微课脚本'},
      {t: '20:30-21:30 跨组练习与巡场点评', b: '讲师巡场，抽样点评，不搞人人上台马拉松'}
    ]
  },
  // 9-10: Day4 Schedule
  {
    type: 'point', tag: '4s1', ch: '4', accent: 'a5', kick: 'Day4 上午 9:00-12:00',
    title: '第四天上午：百问百答与异议演练',
    lines: [
      {t: '9:00-9:30 Day4目标宣导 + 任务卡发放', b: '进入最终演练与成果产出的收官阶段'},
      {t: '9:30-10:30 AI生成学员视角百问百答清单', b: '输入课程目标，AI批量生成，分类整理'},
      {t: '10:30-10:45 茶歇', b: ''},
      {t: '10:45-12:00 跨组异议演练', b: 'A组扮学员，B组应答，角色互换，导师点评'}
    ]
  },
  {
    type: 'point', tag: '4s2', ch: '4', accent: 'a5', kick: 'Day4 下午 14:00-17:00',
    title: '第四天下午：跨组评审与代表展示',
    lines: [
      {t: '14:00-15:00 跨组模拟评审第一轮', b: '每组1名代表，8分钟展示，评委现场提问'},
      {t: '15:00-16:00 跨组模拟评审第二轮 + 代表展示', b: '组内互评，不搞人人上台马拉松'},
      {t: '16:00-16:15 茶歇', b: ''},
      {t: '16:15-16:45 课程包最终确认与结营', b: '评审自查清单交付，评分尺度校准'},
      {t: '16:45-17:00 阜丰集团内训师战队正式结营', b: '带着完整课程包回到各自基地'}
    ]
  },
  // 11-17: Deep methodology pages
  {
    type: 'point', tag: 'd-1', ch: '萃', accent: 'a1', kick: '萃 · 深度',
    title: '萃的底层逻辑：经验资产化',
    lines: [
      {t: '经验资产化的三层含义：显性化（隐性经验→显性记录）、结构化（碎片经验→框架体系）、可传递化（个人经验→组织能力）', b: '只有可传递的经验，才是真正的资产'},
      {t: '内训师的终极价值：不是自己会做，是能让别人也会做', b: '一个人会，团队才会；团队会，组织才会'},
      {t: '萃的核心障碍：经验太熟了反而说不清', b: '熟手到专家的距离，就是内训师的用武之地'}
    ]
  },
  {
    type: 'cmp', tag: 'd-2', ch: '萃', accent: 'a1', kick: '萃 · 对比',
    title: '萃的三种方法对比',
    cards: [
      {h: '关键事件法', accent: 'a1', body: '适用：高难度、高价值项目型经验\n优点：深度挖掘，细节丰富\n缺点：耗时，依赖访谈技巧', fs: 11},
      {h: '流程穿越法', accent: 'a4', body: '适用：标准化流程型经验\n优点：结构清晰，覆盖面广\n缺点：难捕捉隐性决策', fs: 11},
      {h: '复盘提炼法', accent: 'a2', body: '适用：项目结束后的经验总结\n优点：真实、反思深刻\n缺点：依赖复盘质量', fs: 11}
    ]
  },
  {
    type: 'point', tag: 'd-3', ch: '设', accent: 'a4', kick: '设 · 深度',
    title: '设为先的底层逻辑：逆向设计思维',
    lines: [
      {t: '正向设计的陷阱：教了很多，学员没学到——因为教的顺序不一定等于学的顺序', b: '逆向设计：从学习结果倒推，确保每一步都在为终点努力'},
      {t: '成人学习的三个特点：经验优先、问题导向、立即应用', b: '设计必须顺应这三个特点，否则教得再好也是自嗨'},
      {t: '逆向设计三问：我希望学员学完后能做什么？凭什么证明他们学到了？如何帮助他们学到？', b: '答案倒推出设计'}
    ]
  },
  {
    type: 'cmp', tag: 'd-4', ch: '设', accent: 'a4', kick: '设 · 对比',
    title: '课件与讲师手册的关系',
    cards: [
      {h: '课件', accent: 'a4', body: '给学员看——视觉引导、结构呈现、案例展示\n原则：简洁清晰，不要堆砌文字', fs: 12},
      {h: '讲师手册', accent: 'a1', body: '给讲师用——流程指引、话术支撑、异常处理\n原则：每页课件配套一页指引', fs: 12}
    ]
  },
  {
    type: 'point', tag: 'd-5', ch: '说', accent: 'a2', kick: '说 · 深度',
    title: '说人话的底层逻辑：认知迁移',
    lines: [
      {t: '学习的本质：新知识只有挂到已有认知上，才能真正被吸收——这是认知迁移理论', b: '说人话就是在搭建这座桥：新知识到旧认知'},
      {t: '四种转化模式对应四种认知迁移路径：近迁移/远迁移/顺迁移/逆迁移', b: '不同内容配不同迁移路径'},
      {t: '内训师的语言能力 = 专业深度 x 转化能力 x 表达技巧', b: '三力合一，缺一不可'}
    ]
  },
  {
    type: 'point', tag: 'd-6', ch: '演', accent: 'a5', kick: '演 · 深度',
    title: '演练的底层逻辑：心理安全与刻意练习',
    lines: [
      {t: '演练的必要性：真实课堂的复杂度是演练的10倍——不演练就上台，是在拿学员时间赌博', b: '好的演练设计：低风险、高反馈、快迭代'},
      {t: '跨组演练的价值：模拟真实评审环境，暴露课程包的盲区', b: '自己查自己查不出问题，别人一看全是问题'},
      {t: '代表展示的意义：不是比谁讲得好，是展示课程包的质量', b: '好的课程设计能弥补表达的不足'}
    ]
  },
  {
    type: 'point', tag: 'd-7', ch: '评', accent: 'a3', kick: '评 · 深度',
    title: '评审的底层逻辑：标准即质量',
    lines: [
      {t: '没有标准就没有质量：模糊的质量观是课程开发的最大敌人', b: '标准让质量可衡量、可改进、可复制'},
      {t: '阜丰评审标准的四个维度：需求精准度/内容有效性/设计科学性/交付可行性', b: '四维全过，才是好课程'},
      {t: '评审工具包的意义：把隐性经验变成显性标准，把个人判断变成组织能力', b: '评审工具包要移交各基地统一使用'}
    ]
  },
  // 18-19: Model diagrams
  {
    type: 'blank', tag: 'model-1', title: 'AI赋能课程开发五步法 · 模型图',
    sub: '萃 → 设 → 说 → 演 → 评，五步闭环，AI赋能每一步',
    shapes: [
      {kind:'ring', cx:6.66, cy:3.75, d:5.2},
      {kind:'circle', x:5.86, y:1.15, d:1.3, accent:'a1', ch:'萃', label:'精准定位'},
      {kind:'circle', x:9.2, y:2.85, d:1.3, accent:'a4', ch:'设', label:'内容开发'},
      {kind:'circle', x:8.1, y:5.55, d:1.3, accent:'a2', ch:'说', label:'学习设计'},
      {kind:'circle', x:4.2, y:5.55, d:1.3, accent:'a5', ch:'演', label:'演练验证'},
      {kind:'circle', x:3.1, y:2.85, d:1.3, accent:'a3', ch:'评', label:'质量评审'},
      {kind:'line', x:7.2, y:2.45, w:1.8, h:0.4, accent:'a4', arrow:true},
      {kind:'line', x:9.4, y:4.1, w:-0.7, h:1.3, accent:'a2', arrow:true},
      {kind:'line', x:7.7, y:5.8, w:-2.9, h:0.0, accent:'a5', arrow:true},
      {kind:'line', x:4.0, y:4.1, w:-0.7, h:1.3, accent:'a3', arrow:true},
      {kind:'line', x:3.9, y:2.45, w:1.9, h:-0.6, accent:'a1', arrow:true, dash:true}
    ]
  },
  {
    type: 'blank', tag: 'model-2', title: '内训师能力模型',
    sub: '三种核心能力，缺一不可',
    shapes: [
      {kind:'circle', x:5.96, y:1.3, d:1.5, accent:'a1', ch:'萃', label:'访谈判断力'},
      {kind:'circle', x:9.5, y:3.3, d:1.5, accent:'a4', ch:'设', label:'学习设计力'},
      {kind:'circle', x:5.96, y:5.3, d:1.5, accent:'a5', ch:'演', label:'现场表达力'},
      {kind:'circle', x:2.4, y:3.3, d:1.5, accent:'a2', ch:'说', label:'内容转化力'},
      {kind:'circle', x:5.96, y:3.3, d:1.0, accent:'a3', ch:'评', label:'评审迭代力'},
      {kind:'line', x:7.5, y:2.5, w:1.8, h:0.6, accent:'a4', arrow:true},
      {kind:'line', x:8.6, y:4.0, w:-1.5, h:1.1, accent:'a5', arrow:true},
      {kind:'line', x:7.0, y:4.6, w:-3.5, h:-0.5, accent:'a2', arrow:true},
      {kind:'line', x:3.8, y:4.0, w:1.5, h:-1.1, accent:'a1', arrow:true}
    ]
  },
  // 20-24: AI tool chain pages
  {
    type: 'point', tag: 'tool-1', ch: '萃', accent: 'a1', kick: '萃 · 工具',
    title: '萃的AI辅助工具链',
    lines: [
      {t: 'Workbuddy：关键事件访谈记录与分析', b: 'AI实时转录、智能提取关键经验、自动生成萃取报告'},
      {t: 'ChatGPT/Claude：经验描述的结构化扩展', b: '输入模糊经验，AI输出结构化版本'},
      {t: 'AI验证问题生成器：经验描述到验证问题清单', b: '帮助识别经验描述中的模糊点和边界条件'}
    ]
  },
  {
    type: 'point', tag: 'tool-2', ch: '设', accent: 'a4', kick: '设 · 工具',
    title: '设的AI辅助工具链',
    lines: [
      {t: 'AI大纲生成器：课题定位到课程大纲', b: '输入定位陈述，输出3套大纲方案'},
      {t: 'PPT框架生成：Workbuddy直出PPT框架', b: '课堂时间集中在审校，而不是工具操作'},
      {t: 'AI案例挖掘：从工作文档中识别STAR素材', b: '工作日志/复盘报告/会议纪要到案例素材'}
    ]
  },
  {
    type: 'point', tag: 'tool-3', ch: '说', accent: 'a2', kick: '说 · 工具',
    title: '说的AI辅助工具链',
    lines: [
      {t: 'AI逐字稿生成：根据大纲和素材生成初稿', b: 'AI出骨架，人填血肉，试讲后再优化'},
      {t: 'AI语言转化器：专业术语到生活比喻', b: '多种比喻方案，人选最优'},
      {t: 'AI教学设计建议：为每个知识点生成四步设计', b: '人负责判断和调整，AI负责框架'}
    ]
  },
  {
    type: 'point', tag: 'tool-4', ch: '演', accent: 'a5', kick: '演 · 工具',
    title: '演的AI辅助工具链',
    lines: [
      {t: 'AI百问百答生成：课程目标到学员视角高频问题', b: '批量生成，人工校验'},
      {t: 'AI异议模拟：模拟刁难学员的提问', b: '帮助讲师提前准备应答话术'},
      {t: 'AI试讲反馈：录音到内容结构分析到改进建议', b: '模拟评审环境，暴露课程盲点'}
    ]
  },
  {
    type: 'point', tag: 'tool-5', ch: '评', accent: 'a3', kick: '评 · 工具',
    title: '评的AI辅助工具链',
    lines: [
      {t: 'AI评审清单生成：课程大纲到20项评审检查点', b: '标准前置，评审有据可依'},
      {t: 'AI评分辅助：试讲录音到四维度初步评分', b: 'AI初评，人工复核'},
      {t: 'AI反馈模板生成：评审记录到结构化改进建议', b: '亮点/改进点/行动项三段式'}
    ]
  },
  // 25-27: Additional quotes
  {
    type: 'quote', text: '经验是问出来的，AI替不了。好的访谈不是问答题，是引导被访者自己发现问题。', sub: '访谈是萃的核心能力', accent: 'a1'
  },
  {
    type: 'quote', text: '课件不是用来读的，是用来引导的。好的课件让学员跟着走，差的课件让学员跟着念。', sub: '课件设计的核心原则', accent: 'a4'
  },
  {
    type: 'quote', text: '好的课程是设计出来的，更是打磨出来的。演练是检验课程包的唯一标准。', sub: '第四天核心逻辑', accent: 'a5'
  },
  // 28-29: Comparison pages
  {
    type: 'cmp', tag: 'cmp-3', ch: '全', accent: 'a4', kick: '对比',
    title: '好的课程包 vs 差的课程包',
    cards: [
      {h: '好的课程包', accent: 'a2', body: '目标精准：学完能解决什么问题，清清楚楚\n案例真实：来自阜丰真实情境，经得起追问\n设计科学：符合成人学习规律', fs: 11},
      {h: '差的课程包', accent: 'a3', body: '目标模糊：提升认知/增强意识\n案例通用：网上搜的，放之四海皆准\n设计自嗨：教了很多，学员没学到', fs: 11}
    ]
  },
  {
    type: 'cmp', tag: 'cmp-4', ch: '全', accent: 'a4', kick: '对比',
    title: 'AI辅助 vs 纯人工',
    cards: [
      {h: '纯人工', accent: 'a1', body: '优势：判断精准，内容深刻\n劣势：速度慢，精力有限\n适用：核心判断环节', fs: 12},
      {h: 'AI辅助', accent: 'a4', body: '优势：速度快，扩展广\n劣势：判断不足，需人核验\n适用：初稿生成、素材扩展', fs: 12}
    ]
  },
  // 30-32: Additional act pages
  {
    type: 'act', tag: 'act-ext-1', ch: '1', accent: 'a1', title: '关键事件访谈实战练习',
    time: '30 分钟', out: '每组完成一组完整访谈录音',
    steps: ['三人小组分组，确定访谈者和被访者角色', '访谈者按三问法框架：背景到做法到结果', '追问细节：最大的挑战、怎么克服的、结果如何', 'AI辅助记录与分析，识别关键经验点', '组内分享：识别出的高价值经验是否可验证']
  },
  {
    type: 'act', tag: 'act-ext-2', ch: '4', accent: 'a5', title: '课程包质量互查',
    time: '20 分钟', out: '每组产出一份复核后的课程包',
    steps: ['两两小组互查：一人课程包，一人审核', '五件套完整性检查：PPT/讲师手册/学员手册/工具包/考核题', '内容一致性核对：目标到内容到案例到练习是否对齐', '发现的问题记录在复核清单上', '当场反馈，被查组记录改进点']
  },
  {
    type: 'act', tag: 'act-ext-3', ch: '3', accent: 'a2', title: '说人话转化练习',
    time: '20 分钟', out: '每人产出一份自己的课题内容转化稿',
    steps: ['选定自己课题中的一个核心概念', '用四种转化模式各写一版转化稿', '组内朗读：哪一版最能被听懂、记得住', '选出最佳版本，说明理由', 'AI辅助优化：丰富比喻，完善细节']
  }
];

// === INSERTIONS ===

// After rest1 (休息1), insert Day1-2-3-4 schedule pages
let rest1Idx = data.slides.findIndex(s => s.tag === '休息1');
insertAfter(rest1Idx, [
  additionalSlides[0],  // Day1 上午
  additionalSlides[1],  // Day1 下午
  additionalSlides[2],  // Day1 晚间
  additionalSlides[3],  // Day2 上午
  additionalSlides[4],  // Day2 下午
  additionalSlides[5],  // Day2 晚间
  additionalSlides[6],  // Day3 上午
  additionalSlides[7],  // Day3 下午
  additionalSlides[8],  // Day3 晚间
  additionalSlides[9],  // Day4 上午
  additionalSlides[10], // Day4 下午
]);

// Insert deep methodology pages after respective chapter summaries
let ch1sumIdx = data.slides.findIndex(s => s.tag === '1-12');
insertAfter(ch1sumIdx, [
  additionalSlides[11], // 萃的底层逻辑
  additionalSlides[12], // 萃的三种方法对比
]);

let ch2sumIdx = data.slides.findIndex(s => s.tag === '2-11');
insertAfter(ch2sumIdx, [
  additionalSlides[13], // 设为先的底层逻辑
  additionalSlides[14], // 课件vs讲师手册
]);

let ch3sumIdx = data.slides.findIndex(s => s.tag === '3-16');
insertAfter(ch3sumIdx, [
  additionalSlides[15], // 说人话的底层逻辑
]);

let ch4sumIdx = data.slides.findIndex(s => s.tag === '4-7');
insertAfter(ch4sumIdx, [
  additionalSlides[16], // 演练的底层逻辑
  additionalSlides[17], // 评审的底层逻辑
]);

// Insert model diagrams and comparisons before final chapter
let finalChapterIdx = data.slides.findIndex(s => s.tag === '6-1');
insertAfter(finalChapterIdx - 1, [
  additionalSlides[18], // 五步法模型图
  additionalSlides[19], // 内训师能力模型
  additionalSlides[28], // 好的vs差的课程包
  additionalSlides[29], // AI辅助 vs 纯人工
]);

// Insert AI tool chain pages after act4 (跨组模拟评审)
let act4Idx = data.slides.findIndex(s => s.tag === '4-5');
insertAfter(act4Idx, [
  additionalSlides[20], // 萃的工具
  additionalSlides[21], // 设的工具
  additionalSlides[22], // 说的工具
  additionalSlides[23], // 演的工具
  additionalSlides[24], // 评的工具
]);

// Insert additional quotes for rhythm
let quote1Idx = data.slides.findIndex(s => s.tag === '1-2');
insertAfter(quote1Idx, [additionalSlides[25]]);

let quote2Idx = data.slides.findIndex(s => s.tag === '2-4');
insertAfter(quote2Idx, [additionalSlides[26]]);

let quote3Idx = data.slides.findIndex(s => s.tag === '4-4');
insertAfter(quote3Idx, [additionalSlides[27]]);

// Insert additional act pages
let actLocIdx = data.slides.findIndex(s => s.tag === '1-11');
insertAfter(actLocIdx, [additionalSlides[30]]);

let act3Idx = data.slides.findIndex(s => s.tag === '3-11');
insertAfter(act3Idx, [additionalSlides[32]]);

let act4bIdx = data.slides.findIndex(s => s.tag === '4-5');
insertAfter(act4bIdx, [additionalSlides[31]]);

console.log('Total slides after insertion:', data.slides.length);

fs.writeFileSync('D:/CC/temp/fufeng_deck_full.json', JSON.stringify(data, null, 2));
console.log('Done');
