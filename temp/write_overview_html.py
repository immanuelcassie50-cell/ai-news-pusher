import os

html_content = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>场景库总览 - 识别专家自我认知的落差</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #1a1a2e;
            --secondary: #16213e;
            --accent: #e94560;
            --accent-light: #ff6b6b;
            --gold: #f4a261;
            --teal: #2a9d8f;
            --purple: #7b68ee;
            --bg: #f8f9fa;
            --card-bg: #ffffff;
            --text: #2d3436;
            --text-light: #636e72;
            --border: #e0e0e0;
            --shadow: 0 4px 20px rgba(0,0,0,0.08);
            --shadow-hover: 0 8px 30px rgba(0,0,0,0.12);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.6;
            min-height: 100vh;
        }

        /* Header */
        .header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            padding: 60px 20px 80px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            opacity: 0.5;
        }

        .header-content {
            position: relative;
            z-index: 1;
            max-width: 900px;
            margin: 0 auto;
        }

        .header h1 {
            font-family: 'Noto Serif SC', serif;
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 16px;
            letter-spacing: 2px;
        }

        .header .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 30px;
            font-weight: 300;
        }

        .header-stats {
            display: flex;
            justify-content: center;
            gap: 50px;
            margin-top: 40px;
        }

        .stat-item {
            text-align: center;
        }

        .stat-number {
            font-size: 3rem;
            font-weight: 700;
            color: var(--gold);
            font-family: 'Noto Serif SC', serif;
        }

        .stat-label {
            font-size: 0.9rem;
            opacity: 0.8;
            margin-top: 5px;
        }

        /* Navigation */
        .nav-tabs {
            background: var(--card-bg);
            padding: 0 20px;
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .nav-tab {
            padding: 18px 24px;
            border: none;
            background: none;
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--text-light);
            cursor: pointer;
            transition: all 0.3s ease;
            border-bottom: 3px solid transparent;
            font-family: inherit;
        }

        .nav-tab:hover {
            color: var(--accent);
        }

        .nav-tab.active {
            color: var(--accent);
            border-bottom-color: var(--accent);
        }

        /* Main Content */
        .main-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        /* Section */
        .section {
            display: none;
        }

        .section.active {
            display: block;
        }

        .section-title {
            font-family: 'Noto Serif SC', serif;
            font-size: 1.8rem;
            color: var(--primary);
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 2px solid var(--accent);
            display: inline-block;
        }

        /* Industry Cards */
        .industry-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }

        .industry-card {
            background: var(--card-bg);
            border-radius: 16px;
            padding: 28px;
            box-shadow: var(--shadow);
            transition: all 0.3s ease;
            cursor: pointer;
            border: 1px solid transparent;
        }

        .industry-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-hover);
            border-color: var(--accent);
        }

        .industry-card .icon {
            width: 56px;
            height: 56px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            margin-bottom: 18px;
        }

        .industry-card.health .icon { background: linear-gradient(135deg, #e8f5e9, #c8e6c9); }
        .industry-card.manufacturing .icon { background: linear-gradient(135deg, #e3f2fd, #bbdefb); }
        .industry-card.sales .icon { background: linear-gradient(135deg, #fff3e0, #ffe0b2); }
        .industry-card.hr .icon { background: linear-gradient(135deg, #fce4ec, #f8bbd9); }
        .industry-card.internet .icon { background: linear-gradient(135deg, #e8eaf6, #c5cae9); }
        .industry-card.finance .icon { background: linear-gradient(135deg, #e0f2f1, #b2dfdb); }
        .industry-card.education .icon { background: linear-gradient(135deg, #fff8e1, #ffecb3); }

        .industry-card h3 {
            font-size: 1.25rem;
            color: var(--primary);
            margin-bottom: 10px;
        }

        .industry-card .scene-count {
            font-size: 0.85rem;
            color: var(--text-light);
            margin-bottom: 15px;
        }

        .industry-card .topics {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .industry-card .topic-tag {
            background: var(--bg);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            color: var(--text-light);
        }

        /* Overview Section */
        .overview-content {
            background: var(--card-bg);
            border-radius: 16px;
            padding: 40px;
            box-shadow: var(--shadow);
        }

        .overview-content h2 {
            font-family: 'Noto Serif SC', serif;
            font-size: 1.5rem;
            color: var(--primary);
            margin-bottom: 20px;
        }

        .overview-content p {
            color: var(--text);
            margin-bottom: 15px;
            line-height: 1.8;
        }

        .model-intro {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }

        .model-card {
            background: var(--bg);
            border-radius: 12px;
            padding: 24px;
            border-left: 4px solid var(--accent);
        }

        .model-card h4 {
            color: var(--primary);
            margin-bottom: 10px;
            font-size: 1.1rem;
        }

        .model-card p {
            font-size: 0.9rem;
            color: var(--text-light);
            margin: 0;
        }

        /* Scenario Detail */
        .scenario-detail {
            display: none;
            background: var(--card-bg);
            border-radius: 16px;
            padding: 35px;
            box-shadow: var(--shadow);
            margin-top: 20px;
        }

        .scenario-detail.active {
            display: block;
        }

        .back-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            background: var(--bg);
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.9rem;
            color: var(--text);
            margin-bottom: 25px;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .back-btn:hover {
            background: var(--accent);
            color: white;
        }

        .scenario-header {
            border-bottom: 2px solid var(--border);
            padding-bottom: 20px;
            margin-bottom: 25px;
        }

        .scenario-header h2 {
            font-family: 'Noto Serif SC', serif;
            font-size: 1.6rem;
            color: var(--primary);
            margin-bottom: 10px;
        }

        .scenario-header .meta {
            display: flex;
            gap: 20px;
            font-size: 0.9rem;
            color: var(--text-light);
        }

        .scenario-section {
            margin-bottom: 25px;
        }

        .scenario-section h4 {
            color: var(--primary);
            font-size: 1.1rem;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .scenario-section h4::before {
            content: '';
            width: 4px;
            height: 18px;
            background: var(--accent);
            border-radius: 2px;
        }

        .scenario-section p, .scenario-section li {
            color: var(--text);
            line-height: 1.7;
        }

        .scenario-section ul {
            padding-left: 20px;
        }

        .scenario-section li {
            margin-bottom: 8px;
        }

        .role-card {
            background: var(--bg);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 15px;
        }

        .role-card .info-row {
            display: flex;
            margin-bottom: 8px;
        }

        .role-card .info-label {
            width: 80px;
            font-weight: 500;
            color: var(--text-light);
            font-size: 0.9rem;
        }

        .role-card .info-value {
            flex: 1;
            font-size: 0.9rem;
        }

        .gap-type {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        .gap-type.high { background: #ffebee; color: #c62828; }
        .gap-type.low { background: #e3f2fd; color: #1565c0; }
        .gap-type.split { background: #fff8e1; color: #f57f17; }
        .gap-type.blur { background: #f3e5f5; color: #7b1fa2; }

        .principles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
        }

        .principle-item {
            background: linear-gradient(135deg, var(--bg) 0%, #fff 100%);
            border-radius: 10px;
            padding: 16px;
            border-left: 3px solid var(--teal);
        }

        .principle-item strong {
            color: var(--primary);
            display: block;
            margin-bottom: 5px;
        }

        .principle-item p {
            font-size: 0.85rem;
            color: var(--text-light);
            margin: 0;
        }

        /* Table */
        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: var(--card-bg);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--shadow);
        }

        .data-table th {
            background: var(--primary);
            color: white;
            padding: 16px 20px;
            text-align: left;
            font-weight: 500;
            font-size: 0.95rem;
        }

        .data-table td {
            padding: 14px 20px;
            border-bottom: 1px solid var(--border);
            font-size: 0.9rem;
        }

        .data-table tr:last-child td {
            border-bottom: none;
        }

        .data-table tr:hover td {
            background: var(--bg);
        }

        /* Footer */
        .footer {
            text-align: center;
            padding: 40px 20px;
            color: var(--text-light);
            font-size: 0.85rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }

            .header-stats {
                gap: 30px;
            }

            .stat-number {
                font-size: 2.2rem;
            }

            .nav-tabs {
                gap: 5px;
            }

            .nav-tab {
                padding: 14px 16px;
                font-size: 0.85rem;
            }

            .industry-grid {
                grid-template-columns: 1fr;
            }

            .overview-content {
                padding: 25px;
            }
        }

        /* Print */
        @media print {
            .nav-tabs, .back-btn {
                display: none;
            }

            .section {
                display: block !important;
            }

            .industry-card {
                break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="header-content">
            <h1>场景库总览</h1>
            <p class="subtitle">说出来的和做出来的：识别专家自我认知的落差</p>
            <div class="header-stats">
                <div class="stat-item">
                    <div class="stat-number">7</div>
                    <div class="stat-label">行业场景集</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">49</div>
                    <div class="stat-label">精选场景</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">4</div>
                    <div class="stat-label">落差类型</div>
                </div>
            </div>
        </div>
    </header>

    <nav class="nav-tabs">
        <button class="nav-tab active" data-tab="overview">总览</button>
        <button class="nav-tab" data-tab="health">医疗健康</button>
        <button class="nav-tab" data-tab="manufacturing">制造业</button>
        <button class="nav-tab" data-tab="sales">销售客户成功</button>
        <button class="nav-tab" data-tab="hr">培训HR</button>
        <button class="nav-tab" data-tab="internet">互联网产品</button>
        <button class="nav-tab" data-tab="finance">金融</button>
        <button class="nav-tab" data-tab="education">教育咨询</button>
    </nav>

    <main class="main-content">
        <!-- Overview Section -->
        <section id="overview" class="section active">
            <div class="overview-content">
                <h2>课程核心框架</h2>
                <p>本课程的核心目标是帮助培训师、HRBP、教练和各级管理者掌握一套方法论，能够识别专家在<strong>自我认知</strong>与<strong>实际行为</strong>之间的落差，从而提供更精准的辅导和反馈。</p>

                <div class="model-intro">
                    <div class="model-card">
                        <h4>认知落差模型</h4>
                        <p><strong>认知落差 = "说" - "做"</strong><br>专家的自我表达、理念阐述、计划承诺 与 专家的实际行为、成果产出、习惯模式 之间的差异</p>
                    </div>
                    <div class="model-card">
                        <h4>四层提问模型</h4>
                        <p><strong>事实层 → 解释层 → 影响层 → 行动层</strong><br>层层深入的提问技术，帮助专家自己发现认知盲区</p>
                    </div>
                    <div class="model-card">
                        <h4>单场景标准结构</h4>
                        <p><strong>角色卡 → 背景任务 → 关键节点 → 留白提问 → 互动流程 → 四层提问 → 可迁移原则</strong></p>
                    </div>
                </div>

                <h2>场景库结构</h2>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>行业</th>
                            <th>场景数量</th>
                            <th>核心主题</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>医疗健康</td>
                            <td>6个场景</td>
                            <td>临床判断、患者沟通、团队协作、诊疗流程</td>
                        </tr>
                        <tr>
                            <td>制造业</td>
                            <td>7个场景</td>
                            <td>质量控制、技术传承、问题解决、安全管理</td>
                        </tr>
                        <tr>
                            <td>销售客户成功</td>
                            <td>7个场景</td>
                            <td>客户洞察、方案呈现、异议处理、关系维护</td>
                        </tr>
                        <tr>
                            <td>培训HR</td>
                            <td>7个场景</td>
                            <td>人才发展、绩效反馈、团队建设、文化落地</td>
                        </tr>
                        <tr>
                            <td>互联网产品</td>
                            <td>8个场景</td>
                            <td>需求分析、用户体验、技术决策、数据驱动</td>
                        </tr>
                        <tr>
                            <td>金融</td>
                            <td>7个场景</td>
                            <td>风险评估、投资决策、合规经营、客户服务</td>
                        </tr>
                        <tr>
                            <td>教育咨询</td>
                            <td>7个场景</td>
                            <td>学员辅导、教学设计、家校沟通、个人成长</td>
                        </tr>
                    </tbody>
                </table>

                <h2>落差类型说明</h2>
                <div class="model-intro">
                    <div class="model-card">
                        <h4>高估型</h4>
                        <p>说 > 做，眼高手低<br>识别难度：★★☆</p>
                    </div>
                    <div class="model-card">
                        <h4>低估型</h4>
                        <p>说 < 做，深藏不露<br>识别难度：★★★</p>
                    </div>
                    <div class="model-card">
                        <h4>分裂型</h4>
                        <p>说一套做一套，知行不合一<br>识别难度：★★★</p>
                    </div>
                    <div class="model-card">
                        <h4>模糊型</h4>
                        <p>说不清也做不清，认知混乱<br>识别难度：★★☆</p>
                    </div>
                </div>

                <h2>使用方式</h2>
                <p><strong>课前准备</strong>：选择与学员行业相关的场景集，提前阅读角色卡，还原人物画像，准备四层提问的话术单。</p>
                <p><strong>课中引导</strong>：先让学员描述"说"的层面（专家的表达），再引导分析"做"的层面（实际行为），用四层提问挖掘落差根源，提炼可迁移原则。</p>
                <p><strong>课后应用</strong>：布置行动作业，在真实工作中识别认知落差；安排跟进辅导，复盘应用中的发现。</p>
            </div>
        </section>

        <!-- Health Section -->
        <section id="health" class="section">
            <h2 class="section-title">医疗健康场景集</h2>
            <div class="industry-grid">
                <div class="industry-card health" onclick="showScenario('health', 1)">
                    <div class="icon">&#x2695;</div>
                    <h3>手术选择的两难</h3>
                    <p class="scene-count">场景M01 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">临床决策</span>
                        <span class="topic-tag">医患沟通</span>
                        <span class="topic-tag">专业坚守</span>
                    </div>
                </div>
                <div class="industry-card health" onclick="showScenario('health', 2)">
                    <div class="icon">&#x2695;</div>
                    <h3>团队交接的盲区</h3>
                    <p class="scene-count">场景M02 | 模糊型</p>
                    <div class="topics">
                        <span class="topic-tag">交接流程</span>
                        <span class="topic-tag">信息传递</span>
                        <span class="topic-tag">团队协作</span>
                    </div>
                </div>
                <div class="industry-card health" onclick="showScenario('health', 3)">
                    <div class="icon">&#x2695;</div>
                    <h3>诊疗方案的说与做</h3>
                    <p class="scene-count">场景M03 | 分裂型</p>
                    <div class="topics">
                        <span class="topic-tag">循证医学</span>
                        <span class="topic-tag">个体化治疗</span>
                        <span class="topic-tag">医患沟通</span>
                    </div>
                </div>
                <div class="industry-card health" onclick="showScenario('health', 4)">
                    <div class="icon">&#x2695;</div>
                    <h3>年轻医生的自信与谦逊</h3>
                    <p class="scene-count">场景M04 | 低估型</p>
                    <div class="topics">
                        <span class="topic-tag">临床直觉</span>
                        <span class="topic-tag">证据验证</span>
                        <span class="topic-tag">成长培养</span>
                    </div>
                </div>
                <div class="industry-card health" onclick="showScenario('health', 5)">
                    <div class="icon">&#x2695;</div>
                    <h3>科主任的领导力考验</h3>
                    <p class="scene-count">场景M05 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">团队冲突</span>
                        <span class="topic-tag">领导力</span>
                        <span class="topic-tag">机制建设</span>
                    </div>
                </div>
                <div class="industry-card health" onclick="showScenario('health', 6)">
                    <div class="icon">&#x2695;</div>
                    <h3>多点执业的困惑</h3>
                    <p class="scene-count">场景M06 | 模糊型</p>
                    <div class="topics">
                        <span class="topic-tag">职业发展</span>
                        <span class="topic-tag">风险决策</span>
                        <span class="topic-tag">政策理解</span>
                    </div>
                </div>
            </div>
            <div id="health-detail" class="scenario-detail"></div>
        </section>

        <!-- Manufacturing Section -->
        <section id="manufacturing" class="section">
            <h2 class="section-title">制造业场景集</h2>
            <div class="industry-grid">
                <div class="industry-card manufacturing" onclick="showScenario('manufacturing', 1)">
                    <div class="icon">&#x1F527;</div>
                    <h3>质量标准的坚守</h3>
                    <p class="scene-count">场景C01 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">质量与效率</span>
                        <span class="topic-tag">成本压力</span>
                        <span class="topic-tag">组织政治</span>
                    </div>
                </div>
                <div class="industry-card manufacturing" onclick="showScenario('manufacturing', 2)">
                    <div class="icon">&#x1F527;</div>
                    <h3>技术传承的困境</h3>
                    <p class="scene-count">场景C02 | 分裂型</p>
                    <div class="topics">
                        <span class="topic-tag">知识传递</span>
                        <span class="topic-tag">师徒制</span>
                        <span class="topic-tag">代际传承</span>
                    </div>
                </div>
                <div class="industry-card manufacturing" onclick="showScenario('manufacturing', 3)">
                    <div class="icon">&#x1F527;</div>
                    <h3>设备故障的应急决策</h3>
                    <p class="scene-count">场景C03 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">应急决策</span>
                        <span class="topic-tag">经验判断</span>
                        <span class="topic-tag">系统排查</span>
                    </div>
                </div>
                <div class="industry-card manufacturing" onclick="showScenario('manufacturing', 4)">
                    <div class="icon">&#x1F527;</div>
                    <h3>供应商管理的难题</h3>
                    <p class="scene-count">场景C04 | 模糊型</p>
                    <div class="topics">
                        <span class="topic-tag">人情与原则</span>
                        <span class="topic-tag">供应商关系</span>
                        <span class="topic-tag">政策执行</span>
                    </div>
                </div>
                <div class="industry-card manufacturing" onclick="showScenario('manufacturing', 5)">
                    <div class="icon">&#x1F527;</div>
                    <h3>安全生产的红线</h3>
                    <p class="scene-count">场景C05 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">安全管理</span>
                        <span class="topic-tag">制度执行</span>
                        <span class="topic-tag">文化建设</span>
                    </div>
                </div>
                <div class="industry-card manufacturing" onclick="showScenario('manufacturing', 6)">
                    <div class="icon">&#x1F527;</div>
                    <h3>精益生产的落地困境</h3>
                    <p class="scene-count">场景C06 | 低估型</p>
                    <div class="topics">
                        <span class="topic-tag">精益生产</span>
                        <span class="topic-tag">变革管理</span>
                        <span class="topic-tag">理论与实践</span>
                    </div>
                </div>
                <div class="industry-card manufacturing" onclick="showScenario('manufacturing', 7)">
                    <div class="icon">&#x1F527;</div>
                    <h3>售后服务的光与影</h3>
                    <p class="scene-count">场景C07 | 分裂型</p>
                    <div class="topics">
                        <span class="topic-tag">服务价值</span>
                        <span class="topic-tag">价格透明</span>
                        <span class="topic-tag">客户关系</span>
                    </div>
                </div>
            </div>
            <div id="manufacturing-detail" class="scenario-detail"></div>
        </section>

        <!-- Sales Section -->
        <section id="sales" class="section">
            <h2 class="section-title">销售客户成功场景集</h2>
            <div class="industry-grid">
                <div class="industry-card sales" onclick="showScenario('sales', 1)">
                    <div class="icon">&#x1F4C8;</div>
                    <h3>客户需求的真与假</h3>
                    <p class="scene-count">场景S01 | 分裂型</p>
                    <div class="topics">
                        <span class="topic-tag">需求发现</span>
                        <span class="topic-tag">客户洞察</span>
                        <span class="topic-tag">价值传递</span>
                    </div>
                </div>
                <div class="industry-card sales" onclick="showScenario('sales', 2)">
                    <div class="icon">&#x1F4C8;</div>
                    <h3>竞标中的两难选择</h3>
                    <p class="scene-count">场景S02 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">商业伦理</span>
                        <span class="topic-tag">合规经营</span>
                        <span class="topic-tag">长期主义</span>
                    </div>
                </div>
                <div class="industry-card sales" onclick="showScenario('sales', 3)">
                    <div class="icon">&#x1F4C8;</div>
                    <h3>客户高层的信任建立</h3>
                    <p class="scene-count">场景S03 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">高层关系</span>
                        <span class="topic-tag">信任建立</span>
                        <span class="topic-tag">项目推进</span>
                    </div>
                </div>
                <div class="industry-card sales" onclick="showScenario('sales', 4)">
                    <div class="icon">&#x1F4C8;</div>
                    <h3>客户续费的心理博弈</h3>
                    <p class="scene-count">场景S04 | 分裂型</p>
                    <div class="topics">
                        <span class="topic-tag">客户成功</span>
                        <span class="topic-tag">价值感知</span>
                        <span class="topic-tag">价格谈判</span>
                    </div>
                </div>
                <div class="industry-card sales" onclick="showScenario('sales', 5)">
                    <div class="icon">&#x1F4C8;</div>
                    <h3>销售团队的业绩压力</h3>
                    <p class="scene-count">场景S05 | 模糊型</p>
                    <div class="topics">
                        <span class="topic-tag">团队管理</span>
                        <span class="topic-tag">业绩目标</span>
                        <span class="topic-tag">人才保留</span>
                    </div>
                </div>
                <div class="industry-card sales" onclick="showScenario('sales', 6)">
                    <div class="icon">&#x1F4C8;</div>
                    <h3>客户拜访的临门一脚</h3>
                    <p class="scene-count">场景S06 | 低估型</p>
                    <div class="topics">
                        <span class="topic-tag">销售执行</span>
                        <span class="topic-tag">客户心理</span>
                        <span class="topic-tag">过程管理</span>
                    </div>
                </div>
                <div class="industry-card sales" onclick="showScenario('sales', 7)">
                    <div class="icon">&#x1F4C8;</div>
                    <h3>客户信心的重建</h3>
                    <p class="scene-count">场景S07 | 分裂型</p>
                    <div class="topics">
                        <span class="topic-tag">危机处理</span>
                        <span class="topic-tag">信任修复</span>
                        <span class="topic-tag">长期关系</span>
                    </div>
                </div>
            </div>
            <div id="sales-detail" class="scenario-detail"></div>
        </section>

        <!-- HR Section -->
        <section id="hr" class="section">
            <h2 class="section-title">培训HR场景集</h2>
            <div class="industry-grid">
                <div class="industry-card hr" onclick="showScenario('hr', 1)">
                    <div class="icon">&#x1F465;</div>
                    <h3>绩效面谈的困境</h3>
                    <p class="scene-count">场景H01 | 分裂型</p>
                    <div class="topics">
                        <span class="topic-tag">绩效沟通</span>
                        <span class="topic-tag">员工关系</span>
                        <span class="topic-tag">期望管理</span>
                    </div>
                </div>
                <div class="industry-card hr" onclick="showScenario('hr', 2)">
                    <div class="icon">&#x1F465;</div>
                    <h3>培训效果评估的难题</h3>
                    <p class="scene-count">场景H02 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">培训管理</span>
                        <span class="topic-tag">效果量化</span>
                        <span class="topic-tag">ROI证明</span>
                    </div>
                </div>
                <div class="industry-card hr" onclick="showScenario('hr', 3)">
                    <div class="icon">&#x1F465;</div>
                    <h3>人才盘点的盲区</h3>
                    <p class="scene-count">场景H03 | 模糊型</p>
                    <div class="topics">
                        <span class="topic-tag">人才管理</span>
                        <span class="topic-tag">数据与判断</span>
                        <span class="topic-tag">组织政治</span>
                    </div>
                </div>
                <div class="industry-card hr" onclick="showScenario('hr', 4)">
                    <div class="icon">&#x1F465;</div>
                    <h3>组织变革的推动者</h3>
                    <p class="scene-count">场景H04 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">变革管理</span>
                        <span class="topic-tag">员工利益</span>
                        <span class="topic-tag">HR角色</span>
                    </div>
                </div>
                <div class="industry-card hr" onclick="showScenario('hr', 5)">
                    <div class="icon">&#x1F465;</div>
                    <h3>招聘匹配的困境</h3>
                    <p class="scene-count">场景H05 | 低估型</p>
                    <div class="topics">
                        <span class="topic-tag">人才招聘</span>
                        <span class="topic-tag">文化匹配</span>
                        <span class="topic-tag">风险控制</span>
                    </div>
                </div>
                <div class="industry-card hr" onclick="showScenario('hr', 6)">
                    <div class="icon">&#x1F465;</div>
                    <h3>员工发展的投资回报</h3>
                    <p class="scene-count">场景H06 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">培训预算</span>
                        <span class="topic-tag">效果评估</span>
                        <span class="topic-tag">资源优化</span>
                    </div>
                </div>
                <div class="industry-card hr" onclick="showScenario('hr', 7)">
                    <div class="icon">&#x1F465;</div>
                    <h3>企业文化的落地难题</h3>
                    <p class="scene-count">场景H07 | 分裂型</p>
                    <div class="topics">
                        <span class="topic-tag">企业文化</span>
                        <span class="topic-tag">文化口号</span>
                        <span class="topic-tag">文化实践</span>
                    </div>
                </div>
            </div>
            <div id="hr-detail" class="scenario-detail"></div>
        </section>

        <!-- Internet Section -->
        <section id="internet" class="section">
            <h2 class="section-title">互联网产品场景集</h2>
            <div class="industry-grid">
                <div class="industry-card internet" onclick="showScenario('internet', 1)">
                    <div class="icon">&#x1F4BB;</div>
                    <h3>需求优先级之战</h3>
                    <p class="scene-count">场景I01 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">产品规划</span>
                        <span class="topic-tag">资源配置</span>
                        <span class="topic-tag">技术债务</span>
                    </div>
                </div>
                <div class="industry-card internet" onclick="showScenario('internet', 2)">
                    <div class="icon">&#x1F4BB;</div>
                    <h3>用户研究的价值</h3>
                    <p class="scene-count">场景I02 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">用户研究</span>
                        <span class="topic-tag">产品决策</span>
                        <span class="topic-tag">数据驱动</span>
                    </div>
                </div>
                <div class="industry-card internet" onclick="showScenario('internet', 3)">
                    <div class="icon">&#x1F4BB;</div>
                    <h3>数据驱动的陷阱</h3>
                    <p class="scene-count">场景I03 | 低估型</p>
                    <div class="topics">
                        <span class="topic-tag">数据分析</span>
                        <span class="topic-tag">数据解读</span>
                        <span class="topic-tag">业务判断</span>
                    </div>
                </div>
                <div class="industry-card internet" onclick="showScenario('internet', 4)">
                    <div class="icon">&#x1F4BB;</div>
                    <h3>技术选型的两难</h3>
                    <p class="scene-count">场景I04 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">技术架构</span>
                        <span class="topic-tag">技术理想</span>
                        <span class="topic-tag">商业现实</span>
                    </div>
                </div>
                <div class="industry-card internet" onclick="showScenario('internet', 5)">
                    <div class="icon">&#x1F4BB;</div>
                    <h3>用户体验的边界</h3>
                    <p class="scene-count">场景I05 | 分裂型</p>
                    <div class="topics">
                        <span class="topic-tag">UX设计</span>
                        <span class="topic-tag">设计理想</span>
                        <span class="topic-tag">技术可行性</span>
                    </div>
                </div>
                <div class="industry-card internet" onclick="showScenario('internet', 6)">
                    <div class="icon">&#x1F4BB;</div>
                    <h3>增长黑客的迷失</h3>
                    <p class="scene-count">场景I06 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">用户增长</span>
                        <span class="topic-tag">增长质量</span>
                        <span class="topic-tag">风控</span>
                    </div>
                </div>
                <div class="industry-card internet" onclick="showScenario('internet', 7)">
                    <div class="icon">&#x1F4BB;</div>
                    <h3>跨部门协作的壁垒</h3>
                    <p class="scene-count">场景I07 | 低估型</p>
                    <div class="topics">
                        <span class="topic-tag">跨部门协作</span>
                        <span class="topic-tag">计划执行</span>
                        <span class="topic-tag">产品管理</span>
                    </div>
                </div>
                <div class="industry-card internet" onclick="showScenario('internet', 8)">
                    <div class="icon">&#x1F4BB;</div>
                    <h3>创新与合规的平衡</h3>
                    <p class="scene-count">场景I08 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">金融科技</span>
                        <span class="topic-tag">科技创新</span>
                        <span class="topic-tag">监管合规</span>
                    </div>
                </div>
            </div>
            <div id="internet-detail" class="scenario-detail"></div>
        </section>

        <!-- Finance Section -->
        <section id="finance" class="section">
            <h2 class="section-title">金融场景集</h2>
            <div class="industry-grid">
                <div class="industry-card finance" onclick="showScenario('finance', 1)">
                    <div class="icon">&#x1F4B0;</div>
                    <h3>风险评估的两难</h3>
                    <p class="scene-count">场景F01 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">风险决策</span>
                        <span class="topic-tag">责任承担</span>
                        <span class="topic-tag">专业判断</span>
                    </div>
                </div>
                <div class="industry-card finance" onclick="showScenario('finance', 2)">
                    <div class="icon">&#x1F4B0;</div>
                    <h3>投资顾问的信任困境</h3>
                    <p class="scene-count">场景F02 | 分裂型</p>
                    <div class="topics">
                        <span class="topic-tag">销售合规</span>
                        <span class="topic-tag">客户利益</span>
                        <span class="topic-tag">适当性原则</span>
                    </div>
                </div>
                <div class="industry-card finance" onclick="showScenario('finance', 3)">
                    <div class="icon">&#x1F4B0;</div>
                    <h3>合规经营的灰色地带</h3>
                    <p class="scene-count">场景F03 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">合规前瞻</span>
                        <span class="topic-tag">监管趋势</span>
                        <span class="topic-tag">业务发展</span>
                    </div>
                </div>
                <div class="industry-card finance" onclick="showScenario('finance', 4)">
                    <div class="icon">&#x1F4B0;</div>
                    <h3>保险理赔的抉择</h3>
                    <p class="scene-count">场景F04 | 模糊型</p>
                    <div class="topics">
                        <span class="topic-tag">理赔规则</span>
                        <span class="topic-tag">客户感受</span>
                        <span class="topic-tag">条款精神</span>
                    </div>
                </div>
                <div class="industry-card finance" onclick="showScenario('finance', 5)">
                    <div class="icon">&#x1F4B0;</div>
                    <h3>银行网点的服务转型</h3>
                    <p class="scene-count">场景F05 | 模糊型</p>
                    <div class="topics">
                        <span class="topic-tag">数字化转型</span>
                        <span class="topic-tag">客户分层</span>
                        <span class="topic-tag">KPI与实际</span>
                    </div>
                </div>
                <div class="industry-card finance" onclick="showScenario('finance', 6)">
                    <div class="icon">&#x1F4B0;</div>
                    <h3>私募股权投资的尽调</h3>
                    <p class="scene-count">场景F06 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">尽职调查</span>
                        <span class="topic-tag">投资纪律</span>
                        <span class="topic-tag">团队评估</span>
                    </div>
                </div>
                <div class="industry-card finance" onclick="showScenario('finance', 7)">
                    <div class="icon">&#x1F4B0;</div>
                    <h3>金融科技的风控创新</h3>
                    <p class="scene-count">场景F07 | 分裂型</p>
                    <div class="topics">
                        <span class="topic-tag">AI风控</span>
                        <span class="topic-tag">算法透明</span>
                        <span class="topic-tag">监管合规</span>
                    </div>
                </div>
            </div>
            <div id="finance-detail" class="scenario-detail"></div>
        </section>

        <!-- Education Section -->
        <section id="education" class="section">
            <h2 class="section-title">教育咨询场景集</h2>
            <div class="industry-grid">
                <div class="industry-card education" onclick="showScenario('education', 1)">
                    <div class="icon">&#x1F393;</div>
                    <h3>学员成长的真与假</h3>
                    <p class="scene-count">场景E01 | 模糊型</p>
                    <div class="topics">
                        <span class="topic-tag">进步评估</span>
                        <span class="topic-tag">期望管理</span>
                        <span class="topic-tag">客观标准</span>
                    </div>
                </div>
                <div class="industry-card education" onclick="showScenario('education', 2)">
                    <div class="icon">&#x1F393;</div>
                    <h3>教学设计的初心</h3>
                    <p class="scene-count">场景E02 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">课程设计</span>
                        <span class="topic-tag">教学质量</span>
                        <span class="topic-tag">学员需求</span>
                    </div>
                </div>
                <div class="industry-card education" onclick="showScenario('education', 3)">
                    <div class="icon">&#x1F393;</div>
                    <h3>家校沟通的困境</h3>
                    <p class="scene-count">场景E03 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">家校沟通</span>
                        <span class="topic-tag">专业判断</span>
                        <span class="topic-tag">家长认知</span>
                    </div>
                </div>
                <div class="industry-card education" onclick="showScenario('education', 4)">
                    <div class="icon">&#x1F393;</div>
                    <h3>个人成长的瓶颈</h3>
                    <p class="scene-count">场景E04 | 低估型</p>
                    <div class="topics">
                        <span class="topic-tag">职业发展</span>
                        <span class="topic-tag">自我认知</span>
                        <span class="topic-tag">影响力</span>
                    </div>
                </div>
                <div class="industry-card education" onclick="showScenario('education', 5)">
                    <div class="icon">&#x1F393;</div>
                    <h3>培训落地的最后一公里</h3>
                    <p class="scene-count">场景E05 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">培训落地</span>
                        <span class="topic-tag">行为改变</span>
                        <span class="topic-tag">效果转化</span>
                    </div>
                </div>
                <div class="industry-card education" onclick="showScenario('education', 6)">
                    <div class="icon">&#x1F393;</div>
                    <h3>咨询项目的价值证明</h3>
                    <p class="scene-count">场景E06 | 分裂型</p>
                    <div class="topics">
                        <span class="topic-tag">管理咨询</span>
                        <span class="topic-tag">交付专业</span>
                        <span class="topic-tag">客户成功</span>
                    </div>
                </div>
                <div class="industry-card education" onclick="showScenario('education', 7)">
                    <div class="icon">&#x1F393;</div>
                    <h3>在线教育的用户体验</h3>
                    <p class="scene-count">场景E07 | 高估型</p>
                    <div class="topics">
                        <span class="topic-tag">在线教育</span>
                        <span class="topic-tag">增长质量</span>
                        <span class="topic-tag">用户体验</span>
                    </div>
                </div>
            </div>
            <div id="education-detail" class="scenario-detail"></div>
        </section>
    </main>

    <footer class="footer">
        <p>场景库总览 - 识别专家自我认知的落差 | 最后更新：2026-07-26</p>
    </footer>

    <script>
        // Tab Navigation
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById(tab.dataset.tab).classList.add('active');
            });
        });

        // Scenario Data
        const scenarioData = {
            health: {
                1: {
                    title: '手术选择的两难',
                    code: 'M01',
                    type: '高估型',
                    role: {
                        name: '周明远',
                        position: '三甲医院心外科副主任医师',
                        years: '18年',
                        personality: '严谨稳健、追求完美、对风险极度敏感',
                        state: '正在竞争科室主任职位，近期有两例手术结果不理想'
                    },
                    mission: '为一位75岁合并多种基础疾病的冠心病患者制定手术方案',
                    conflict: '患者家属强烈要求使用最新的微创手术方式，但根据患者情况，传统开胸手术可能更安全',
                    nodes: [
                        { name: '家属请求', desc: '患者儿子要求"用最好的技术，费用不是问题"', choice: '满足家属要求 vs 坚持专业判断' },
                        { name: '同事建议', desc: '年轻医生说"微创技术很成熟了，您可以试试"', choice: '听取同行建议 vs 独立判断' },
                        { name: '最终决策', desc: '手术前一天，患者女儿再次询问"真的没有更好的方案了吗"', choice: '坚持原方案 vs 修改方案' }
                    ],
                    gap: '从"综合考虑"到"最终同意"，压力下的专业坚守',
                    principles: [
                        { title: '专业判断需要前置沟通', desc: '在决策前充分沟通，比决策后解释更有效' },
                        { title: '"不敢拒绝"本身就是风险', desc: '妥协带来的风险最终由患者承担' },
                        { title: '共同决策不是家属决策', desc: '知情同意不等于满足所有要求' }
                    ]
                },
                2: {
                    title: '团队交接的盲区',
                    code: 'M02',
                    type: '模糊型',
                    role: {
                        name: '李文娟',
                        position: '三甲医院ICU护士长',
                        years: '12年',
                        personality: '细致耐心、善于协调、容易操心',
                        state: '团队有两位高年资护士离职，工作负荷加重'
                    },
                    mission: '完成夜班与白班的交接，确保危重病人护理连续性',
                    conflict: '夜班发现一位患者指标异常，白班护士认为"没什么大不了"',
                    nodes: [
                        { name: '交接争议', desc: '夜班护士特别标注了3床患者的血压波动，白班护士说"知道了"', choice: '继续追问 vs 相信同事' },
                        { name: '两小时后', desc: '3床患者血压急剧下降，需要紧急处理', choice: '庆幸发现及时 vs 反思交接问题' },
                        { name: '科室讨论', desc: '护士长组织案例讨论，夜班和白班护士各执一词', choice: '追究责任 vs 改进流程' }
                    ],
                    gap: '从"我标注了"到"对方真的理解并重视了"之间有鸿沟',
                    principles: [
                        { title: '交接不是信息传递，是信息确认', desc: '发出不等于收到，收到不等于理解' },
                        { title: '关键信息需要"追确认"', desc: '对方说知道了，你得确认他真的知道了' },
                        { title: '团队信任不能代替流程检查', desc: '信任是基础，流程是保障' }
                    ]
                },
                3: {
                    title: '诊疗方案的说与做',
                    code: 'M03',
                    type: '分裂型',
                    role: {
                        name: '张伟',
                        position: '三甲医院肿瘤科主治医师',
                        years: '8年',
                        personality: '学术导向、善于学习、有些理想主义',
                        state: '刚读完免疫治疗最新文献，准备在科室推广'
                    },
                    mission: '为一位晚期肺癌患者制定个体化治疗方案',
                    conflict: '患者家属打听到某种免疫药物，要求使用；文献显示该药物有效，但患者情况特殊',
                    nodes: [
                        { name: '家属请求', desc: '家属拿着某免疫药物的宣传资料，要求使用', choice: '直接拒绝 vs 详细解释' },
                        { name: '科室讨论', desc: '科室主任认为现有方案足够，不必要换新药', choice: '服从主任 vs 坚持自己判断' },
                        { name: '患者意见', desc: '患者本人说"我信任张医生，您决定就好"', choice: '基于证据选择方案 vs 满足家属期望' }
                    ],
                    gap: '从"综合考虑"到"花了很久才说服"，沟通比决策更难',
                    principles: [
                        { title: '知情同意的前提是知情', desc: '让家属理解"为什么"，比要求"同意"更重要' },
                        { title: '"你决定"是责任也是压力', desc: '患者的信任不能成为专业判断的负担' },
                        { title: '循证医学是个体化治疗的基础，不是借口', desc: '每个决策都要回归患者本身' }
                    ]
                },
                4: {
                    title: '年轻医生的自信与谦逊',
                    code: 'M04',
                    type: '低估型',
                    role: {
                        name: '刘洋',
                        position: '三甲医院内科住院医师（第三年）',
                        years: '3年',
                        personality: '学习能力强、自信满满、有些急躁',
                        state: '刚轮转完ICU，对自己的诊断能力很自信'
                    },
                    mission: '在急诊值班时接诊一位主诉"胸闷"的中年患者',
                    conflict: '患者看起来状态尚可，但刘洋总觉得哪里不对',
                    nodes: [
                        { name: '初步诊断', desc: '心电图显示轻微异常，但患者症状不明显', choice: '常规处理 vs 进一步检查' },
                        { name: '高年资医生意见', desc: '二线医生说"观察一下，没什么大问题"', choice: '相信前辈 vs 坚持自己的判断' },
                        { name: '患者离院后', desc: '患者回家后突发心梗，紧急送回', choice: '庆幸没出事 vs 反思诊断流程' }
                    ],
                    gap: '从"直觉"到"应该坚持"，知行合一的代价',
                    principles: [
                        { title: '直觉需要被验证', desc: '直觉是经验积累，但决策需要证据支持' },
                        { title: '向上沟通需要技巧', desc: '说"我担心"比说"我觉得有问题"更有效' },
                        { title: '系统比个人更可靠', desc: '建立清单和流程，防止个体判断失误' }
                    ]
                },
                5: {
                    title: '科主任的领导力考验',
                    code: 'M05',
                    type: '高估型',
                    role: {
                        name: '王建国',
                        position: '三甲医院骨科主任',
                        years: '25年',
                        personality: '技术权威、决策果断、不善表达情感',
                        state: '科室两位骨干医生矛盾激化，影响团队氛围'
                    },
                    mission: '化解科室内部矛盾，重建团队协作',
                    conflict: '两位高年资医生因手术排班产生激烈冲突，互相不配合',
                    nodes: [
                        { name: '冲突爆发', desc: '早会上，两位医生当着全科的面互相指责', choice: '当场制止 vs 私下处理' },
                        { name: '分别谈话', desc: '王主任分别与两位医生谈话', choice: '各打五十大板 vs 偏袒某方 vs 追根溯源' },
                        { name: '团队会议', desc: '王主任在科室会议上宣布了处理决定', choice: '表面和解 vs 真正改变' }
                    ],
                    gap: '从"平息"到"真正和解"，科主任领导力的考验',
                    principles: [
                        { title: '冲突处理需要追根溯源', desc: '表面平息不等于根本解决' },
                        { title: '"顾全大局"不能成为压制正当诉求的理由', desc: '大局的代价不应该是个人承担' },
                        { title: '科主任的公正比威严更重要', desc: '公正才能赢得信任' }
                    ]
                },
                6: {
                    title: '多点执业的困惑',
                    code: 'M06',
                    type: '模糊型',
                    role: {
                        name: '陈晓燕',
                        position: '三甲医院眼科副主任医师',
                        years: '15年',
                        personality: '理性务实、善于规划、追求工作生活平衡',
                        state: '考虑多点执业，但担心影响院内发展'
                    },
                    mission: '在不影响本职工作的前提下，开展多点执业',
                    conflict: '一家私立眼科诊所邀请陈医生每周去坐诊一天，但医院政策不明确',
                    nodes: [
                        { name: '机会出现', desc: '私立诊所负责人邀请陈医生合作，条件优厚', choice: '接受 vs 拒绝 vs 观望' },
                        { name: '院内态度', desc: '陈医生旁敲侧击问人事部门，得到的回复模糊', choice: '直接申请 vs 低调进行 vs 放弃' },
                        { name: '同事影响', desc: '科室内另一位医生因多点执业被批评，陈医生更犹豫了', choice: '继续推进 vs 暂时搁置 vs 完全放弃' }
                    ],
                    gap: '从"看到机会"到"继续观望"，风险规避战胜了行动',
                    principles: [
                        { title: '机会需要主动争取', desc: '等待别人先做往往意味着错过' },
                        { title: '政策模糊期需要主动澄清', desc: '与其猜测不如直接问' },
                        { title: '风险需要评估，不是规避', desc: '知道风险在哪里，比假装风险不存在更安全' }
                    ]
                }
            },
            manufacturing: {
                1: {
                    title: '质量标准的坚守',
                    code: 'C01',
                    type: '高估型',
                    role: {
                        name: '赵志刚',
                        position: '汽车零部件工厂质量部经理',
                        years: '20年',
                        personality: '原则性强、注重数据、不善变通',
                        state: '公司面临降本压力，质量部被要求"配合生产"'
                    },
                    mission: '在降本增效的压力下，确保产品质量不下降',
                    conflict: '生产部提出简化某道检验工序，理由是"这么多年都没出问题"',
                    nodes: [
                        { name: '生产部提议', desc: '生产部长建议取消外观检工序的两人互检机制', choice: '同意 vs 拒绝 vs 妥协' },
                        { name: '高管施压', desc: '副总说"这个工序每天浪费2小时人工成本，你们看着办"', choice: '坚持 vs 妥协 vs 数据说话' },
                        { name: '质量问题爆发', desc: '三个月后，客户投诉一批零部件外观不良', choice: '庆幸没出事 vs 反思当初决定' }
                    ],
                    gap: '从"不能降低"到"同意简化"，专业坚持的代价',
                    principles: [
                        { title: '专业判断需要数据支撑', desc: '光说"不应该"不够，要回答"应该怎样"' },
                        { title: '"降本"不能成为质量滑坡的借口', desc: '质量成本是最值得的投资' },
                        { title: '妥协也需要有底线', desc: '可以调整幅度，但不能放弃原则' }
                    ]
                },
                2: {
                    title: '技术传承的困境',
                    code: 'C02',
                    type: '分裂型',
                    role: {
                        name: '李大国',
                        position: '某精密仪器厂高级技师',
                        years: '35年',
                        personality: '手艺精湛、固执己见、不善表达',
                        state: '再有两年退休，面临技术传承问题'
                    },
                    mission: '将35年的技术经验传授给年轻徒弟',
                    conflict: '李大国带了一个大学生徒弟小张，但小张总是"听不懂"他的讲解',
                    nodes: [
                        { name: '带教冲突', desc: '李大国演示操作时，小张在旁边玩手机', choice: '批评 vs 忽视 vs 反思' },
                        { name: '徒弟反馈', desc: '小张私下说"师傅讲的我听不懂，他太专业了"', choice: '生气 vs 反思 vs 调整方式' },
                        { name: '技术考核', desc: '车间安排技术考核，李大国的徒弟成绩垫底', choice: '推卸责任 vs 承认教学失败' }
                    ],
                    gap: '从"我讲了"到"他没学会"，知识传递的鸿沟',
                    principles: [
                        { title: '"会做"不等于"会教"', desc: '专家往往低估了知识的复杂性' },
                        { title: '知识传递需要翻译', desc: '把专业语言转化为学习者能理解的语言' },
                        { title: '隐性知识需要显性化', desc: '经验里的"只可意会"需要被编码' }
                    ]
                },
                3: {
                    title: '设备故障的应急决策',
                    code: 'C03',
                    type: '高估型',
                    role: {
                        name: '张伟',
                        position: '某电子产品工厂设备主管',
                        years: '12年',
                        personality: '经验丰富、善于判断、有些自负',
                        state: '工厂刚投资了新设备，面临技术转型'
                    },
                    mission: '在设备突发故障时，做出正确的应急决策',
                    conflict: '凌晨两点，一台关键设备突然停机，生产经理要求"不惜代价马上修好"',
                    nodes: [
                        { name: '故障诊断', desc: '张伟远程诊断后认为是软件问题，但团队有人说可能是硬件', choice: '相信自己判断 vs 听取意见 vs 进一步检查' },
                        { name: '时间压力', desc: '生产经理说"两个小时修不好，这批货就赶不上了"', choice: '快速修复 vs 彻底排查 vs 寻求外援' },
                        { name: '修复结果', desc: '张伟按软件问题处理后设备恢复，但两天后同一问题再次发生', choice: '庆幸没耽误生产 vs 反思诊断逻辑' }
                    ],
                    gap: '从"快速修复"到"再次发生"，经验判断的盲区',
                    principles: [
                        { title: '经验是资产也是负债', desc: '过去的成功经验可能成为未来判断的陷阱' },
                        { title: '时间压力下更要冷静', desc: '匆忙决策往往是错误的根源' },
                        { title: '系统排查比经验判断更可靠', desc: '建立标准流程，减少个体依赖' }
                    ]
                },
                4: {
                    title: '供应商管理的难题',
                    code: 'C04',
                    type: '模糊型',
                    role: {
                        name: '王秀英',
                        position: '某机械制造厂采购部经理',
                        years: '15年',
                        personality: '精明能干、善于谈判、注重关系',
                        state: '公司推行供应商精简政策，面临人情压力'
                    },
                    mission: '在供应商精简过程中，处理与老供应商的关系',
                    conflict: '合作了十几年的供应商老李被告知不再续约，他亲自来找王秀英求情',
                    nodes: [
                        { name: '老李来访', desc: '老供应商老李带着礼物来访，说"没有你们我们厂就完了"', choice: '拒绝礼物并坚持原则 vs 收下礼物网开一面 vs 找借口推脱' },
                        { name: '上级施压', desc: '老板说"王秀英你看着办，但这次一定要完成降本指标"', choice: '坚持原则 vs 变通处理 vs 寻找折中方案' },
                        { name: '最终决策', desc: '王秀英需要向老李正式回复', choice: '严格执行政策 vs 给予过渡期 vs 其他方案' }
                    ],
                    gap: '从"无奈之举"到"执行力度不够"，人情和原则的平衡',
                    principles: [
                        { title: '人情不能成为违背原则的理由', desc: '但可以用更智慧的方式处理' },
                        { title: '"看着办"往往是最大的考验', desc: '考验的是你的判断力和担当' },
                        { title: '提前沟通比事后解释更有效', desc: '让对方有预期，有准备' }
                    ]
                },
                5: {
                    title: '安全生产的红线',
                    code: 'C05',
                    type: '高估型',
                    role: {
                        name: '刘安全',
                        position: '某化工企业安全主管',
                        years: '18年',
                        personality: '原则性强、敢于得罪人、注重数据',
                        state: '公司扩张，新员工大量增加，安全隐患上升'
                    },
                    mission: '在新员工大量入职的情况下，确保安全生产',
                    conflict: '生产车间新员工小王不按规定佩戴防护设备，被刘安全当场抓到',
                    nodes: [
                        { name: '违规现场', desc: '小王说"太热了，就摘一会儿"，班组长在旁边没说话', choice: '当场处罚 vs 教育为主 vs 向上汇报' },
                        { name: '班组长的态度', desc: '班组长说"新员工还不熟悉，下次注意就行"', choice: '坚持处罚 vs 给面子 vs 创新方式' },
                        { name: '后续处理', desc: '刘安全在安全例会上通报了这件事，但有人觉得他是"小题大做"', choice: '坚持原则 vs 调整方式 vs 反思' }
                    ],
                    gap: '从"当场纠正"到"还是时有发生"，制度执行的有效性',
                    principles: [
                        { title: '处罚只能阻止行为，不能改变意识', desc: '安全文化建设比制度执行更重要' },
                        { title: '"小题大做"是对生命的尊重', desc: '任何安全隐患都不应该被忽视' },
                        { title: '安全是"一把手"工程', desc: '没有管理层的支持，安全主管寸步难行' }
                    ]
                },
                6: {
                    title: '精益生产的落地困境',
                    code: 'C06',
                    type: '低估型',
                    role: {
                        name: '陈精益',
                        position: '某汽车零部件厂精益推进经理',
                        years: '10年',
                        personality: '理论扎实、善于培训、缺乏一线经验',
                        state: '从咨询公司加入企业，希望大展拳脚'
                    },
                    mission: '在生产车间落地精益生产项目',
                    conflict: '陈精益设计了完美的精益改善方案，但车间主任说"你们不懂实际生产"',
                    nodes: [
                        { name: '方案汇报', desc: '陈精益向高管汇报了详细的精益改善方案，获得批准', choice: '强力推进 vs 循序渐进 vs 听取意见' },
                        { name: '车间抵触', desc: '车间主任说"你们这个方案根本不适合我们实际情况"', choice: '坚持方案 vs 修改方案 vs 寻求支持' },
                        { name: '推进受阻', desc: '三个月后，精益项目几乎没有进展，陈精益很沮丧', choice: '推卸责任 vs 反思自己 vs 寻求帮助' }
                    ],
                    gap: '从"一线不配合"到"方案需要改进"，咨询与执行的鸿沟',
                    principles: [
                        { title: '理论需要经过实践检验', desc: '再好的方案不适合实际情况就是错的' },
                        { title: '变革需要"内部人"支持', desc: '没有车间主任的支持，任何变革都无法落地' },
                        { title: '专业价值在于解决问题，不是证明自己正确', desc: '放下自尊，聚焦问题' }
                    ]
                },
                7: {
                    title: '售后服务的光与影',
                    code: 'C07',
                    type: '分裂型',
                    role: {
                        name: '赵服务',
                        position: '某工业设备公司售后服务经理',
                        years: '14年',
                        personality: '客户导向、善于沟通、注重口碑',
                        state: '公司要求提升服务利润率，服务与利润如何平衡'
                    },
                    mission: '在提升服务利润率的同时，保持客户满意度',
                    conflict: '客户抱怨维修费用太高，但服务成本也在上升',
                    nodes: [
                        { name: '客户投诉', desc: '大客户发邮件投诉"维修费用高得离谱，你们是在抢钱"', choice: '解释成本 vs 减免费用 vs 深入沟通' },
                        { name: '内部讨论', desc: '公司要求服务部门"必须完成20%的利润率提升"', choice: '压缩成本 vs 提高价格 vs 价值营销' },
                        { name: '服务人员压力', desc: '服务工程师抱怨"现在配件价格透明，我们没法做手脚"', choice: '支持工程师 vs 强化管控 vs 调整激励' }
                    ],
                    gap: '从"解释成本"到"客户还是不满"，价值沟通的挑战',
                    principles: [
                        { title: '价格不是问题，价值感知才是问题', desc: '客户愿意为感知到的价值付钱' },
                        { title: '服务分级是平衡利润和客户期望的好方法', desc: '让客户选择，不是强制收费' },
                        { title: '服务人员是第一线的销售', desc: '他们的表达直接影响客户感知' }
                    ]
                }
            },
            sales: {
                1: {
                    title: '客户需求的真与假',
                    code: 'S01',
                    type: '分裂型',
                    role: {
                        name: '林小销',
                        position: '某SaaS软件公司销售经理',
                        years: '5年',
                        personality: '善于倾听、反应敏捷、追求成交',
                        state: '季度业绩压力较大，急需新单'
                    },
                    mission: '为一家中型企业制定CRM系统采购方案',
                    conflict: '客户采购负责人说"我们需求很简单，就是管理客户资料"',
                    nodes: [
                        { name: '初次沟通', desc: '客户说"我们就是需要管理客户信息，其他不需要"', choice: '直接报价 vs 深入挖掘 vs 提供简单方案' },
                        { name: '需求调研', desc: '林小销发现客户实际有复杂的销售流程和数据分析需求', choice: '指出客户认知偏差 vs 顺着客户意思 vs 渐进引导' },
                        { name: '方案汇报', desc: '客户看到完整方案后说"这个比我想的复杂多了"', choice: '简化方案 vs 解释价值 vs 重新定义问题' }
                    ],
                    gap: '从"觉得简单"到"发现复杂"，需求洞察的挑战',
                    principles: [
                        { title: '客户说的需求不一定是真需求', desc: '需要通过提问和调研验证' },
                        { title: '简单方案可能解决眼前，但埋下长期隐患', desc: '要关注客户的长期价值' },
                        { title: '专业销售不是卖产品，是解决问题', desc: '解决方案要匹配真实问题' }
                    ]
                },
                2: {
                    title: '竞标中的两难选择',
                    code: 'S02',
                    type: '高估型',
                    role: {
                        name: '张中标',
                        position: '某IT系统集成公司销售总监',
                        years: '12年',
                        personality: '策略性强、善于博弈、资源整合能力强',
                        state: '参与一个大型项目竞标，竞争对手实力强劲'
                    },
                    mission: '在大型政企项目竞标中脱颖而出',
                    conflict: '招标方暗示"如果你们能提供一些额外服务，价格可以再商量"',
                    nodes: [
                        { name: '暗示接受', desc: '招标方负责人私下说"你们要是能帮我们做一些工作范围外的事……"', choice: '接受暗示 vs 拒绝 vs 转移话题' },
                        { name: '团队意见', desc: '团队有人说"这是行业惯例，不接受就中不了标"', choice: '听从团队 vs 坚持原则 vs 寻找折中' },
                        { name: '最终决策', desc: '张中标需要在投标截止日前做出决定', choice: '按规则投标 vs 部分满足需求 vs 退出竞标' }
                    ],
                    gap: '从"觉得不合适"到"加了一些增值服务"，合规的边界',
                    principles: [
                        { title: '短期收益不能抵消长期风险', desc: '合规是底线，不是可选项' },
                        { title: '行业惯例不等于正确', desc: '要独立判断，不盲从' },
                        { title: '专业能力是最好的竞争力', desc: '用价值而非灰色手段赢得客户' }
                    ]
                },
                3: {
                    title: '客户高层的信任建立',
                    code: 'S03',
                    type: '高估型',
                    role: {
                        name: '王关系',
                        position: '某管理咨询公司客户总监',
                        years: '15年',
                        personality: '善于社交、人脉广泛、情商极高',
                        state: '负责一个大客户，但项目推进困难'
                    },
                    mission: '与大客户CEO建立信任，推动项目进展',
                    conflict: '客户CEO表面配合，但实际推进中总是"没时间"',
                    nodes: [
                        { name: '高层承诺', desc: '客户CEO在启动会上说"这个项目很重要，我会亲自关注"', choice: '相信承诺 vs 保持怀疑 vs 验证真伪' },
                        { name: '推进受阻', desc: '每次约CEO时间都被推脱，项目团队说"CEO太忙了"', choice: '继续等待 vs 另辟蹊径 vs 向上反馈' },
                        { name: '关系诊断', desc: '王关系意识到客户CEO可能对这个项目并不真正认同', choice: '直面问题 vs 继续维护面子 vs 寻找突破口' }
                    ],
                    gap: '从"很重视"到"没时间"，高层关系需要更深入的洞察',
                    principles: [
                        { title: '高层的话需要翻译', desc: '表面的重视可能是客套，真正的重视需要行动验证' },
                        { title: '关系需要建立在价值基础上', desc: '没有专业价值，关系再深也只是表面' },
                        { title: '主动诊断比被动等待更有效', desc: '及时识别关系问题，不要等到项目失败' }
                    ]
                },
                4: {
                    title: '客户续费的心理博弈',
                    code: 'S04',
                    type: '分裂型',
                    role: {
                        name: '李续费',
                        position: '某客服SaaS公司客户成功经理',
                        years: '6年',
                        personality: '服务意识强、不善施压、数据敏感',
                        state: '负责的客户续费率下降，面临绩效考核压力'
                    },
                    mission: '提升重点客户的续费率',
                    conflict: '一个大客户连续两个月使用量下降，续费谈判困难',
                    nodes: [
                        { name: '使用量预警', desc: '数据显示客户关键用户活跃度下降60%', choice: '主动联系 vs 等待观察 vs 发送报告' },
                        { name: '客户反馈', desc: '客户说"你们产品不好用，我们考虑换一家"', choice: '解释产品 vs 了解原因 vs 提供支持' },
                        { name: '续费谈判', desc: '客户要求50%的折扣，否则不续费', choice: '接受折扣 vs 拒绝 vs 寻找第三种方案' }
                    ],
                    gap: '从"帮助客户感受价值"到"折扣换取续费"，价值传递的挑战',
                    principles: [
                        { title: '续费的核心是价值感知，不是价格', desc: '客户愿意为感知到的价值付钱' },
                        { title: '预防比补救更重要', desc: '定期沟通比问题爆发后的紧急救火更有效' },
                        { title: '折扣应该是有条件的交换', desc: '不能让客户觉得折扣是理所当然的' }
                    ]
                },
                5: {
                    title: '销售团队的业绩压力',
                    code: 'S05',
                    type: '模糊型',
                    role: {
                        name: '赵销售',
                        position: '某设备公司销售经理',
                        years: '8年',
                        personality: '业绩导向、执行力强、善于带团队',
                        state: '季度末团队离目标还差30%，团队士气低落'
                    },
                    mission: '在季度末完成销售目标，稳住团队',
                    conflict: '团队几个核心销售提出离职，同时有两个大单在谈判中',
                    nodes: [
                        { name: '核心员工离职', desc: '两个top sales提出离职，说"没意思，钱少活多"', choice: '挽留 vs 放人 vs 了解原因' },
                        { name: '目标压力', desc: '老板说"这个季度必须完成目标，否则整个部门奖金没了"', choice: '给团队施压 vs 自己扛 vs 重新评估目标' },
                        { name: '决策时刻', desc: '大单客户要求提前交付，但供应链跟不上', choice: '承诺客户 vs 如实说明 vs 寻找替代方案' }
                    ],
                    gap: '从"了解想法"到"忽略发展"，管理者角色的失衡',
                    principles: [
                        { title: '业绩是团队共同创造的', desc: '好的管理者让团队成功，而不是一个人扛' },
                        { title: '团队稳定和业绩达成不矛盾', desc: '长期主义看，二者相互促进' },
                        { title: '留住人需要真心，不只是钱', desc: '发展机会和尊重比薪酬更重要' }
                    ]
                },
                6: {
                    title: '客户拜访的临门一脚',
                    code: 'S06',
                    type: '低估型',
                    role: {
                        name: '陈拜访',
                        position: '某工业设备公司销售工程师',
                        years: '4年',
                        personality: '技术扎实、表达清晰、略显青涩',
                        state: '跟进了半年的客户终于同意参观工厂'
                    },
                    mission: '通过工厂参观促成客户下单',
                    conflict: '客户采购负责人要来工厂参观，这是签单前的关键一步',
                    nodes: [
                        { name: '准备充分', desc: '陈拜访准备了详细的产品演示和工厂参观路线', choice: '按计划执行 vs 灵活调整 vs 充分准备' },
                        { name: '参观过程', desc: '客户对某个非核心环节提出疑问，陈拜访解释得不够清楚', choice: '详细解释 vs 转移话题 vs 承认不足' },
                        { name: '参观后', desc: '客户说"你们产品不错，但我需要再考虑一下"', choice: '追问原因 vs 保持联系 vs 提供更多资料' }
                    ],
                    gap: '从"演示顺利"到"还要考虑"，销售执行和客户心理的差距',
                    principles: [
                        { title: '工厂参观不只是展示，是验证', desc: '让客户看到他想看的，而不是你想展示的' },
                        { title: '技术能力需要表达能力的支撑', desc: '做好产品也要说好产品' },
                        { title: '"再考虑一下"需要追问', desc: '理解客户的真实顾虑才能解决' }
                    ]
                },
                7: {
                    title: '客户信心的重建',
                    code: 'S07',
                    type: '分裂型',
                    role: {
                        name: '刘重建',
                        position: '某企业服务公司客户总监',
                        years: '10年',
                        personality: '沉稳持重、善于反思、敢于担当',
                        state: '公司产品出了重大故障，客户关系受损严重'
                    },
                    mission: '修复与重点客户的关系，重建客户信任',
                    conflict: '产品故障导致客户业务受损，客户CEO说要"重新评估合作关系"',
                    nodes: [
                        { name: '危机响应', desc: '客户投诉后，刘重建第一时间赶到客户现场', choice: '解释原因 vs 承担责任 vs 解决当下问题' },
                        { name: '问题根因', desc: '刘重建发现这次故障是公司产品设计的根本性问题', choice: '如实告知 vs 遮掩问题 vs 选择性说明' },
                        { name: '重建方案', desc: '刘重建需要向客户CEO汇报整改方案', choice: '承诺彻底解决 vs 提供补偿 vs 共同制定方案' }
                    ],
                    gap: '从"道歉"到"关系修复还需要时间"，危机公关的长期性',
                    principles: [
                        { title: '危机发生后的第一反应决定后续走向', desc: '及时、透明、负责是基本原则' },
                        { title: '信任重建比新客户开发更难', desc: '预防问题比解决问题更重要' },
                        { title: '道歉需要真诚，补偿需要合理', desc: '不是所有的补偿都能换来原谅' }
                    ]
                }
            },
            hr: {
                1: {
                    title: '绩效面谈的困境',
                    code: 'H01',
                    type: '分裂型',
                    role: {
                        name: '林绩效',
                        position: '某互联网公司HR绩效负责人',
                        years: '8年',
                        personality: '逻辑清晰、善于沟通、追求公平',
                        state: '公司推行新的绩效体系，员工抵触情绪较大'
                    },
                    mission: '完成季度绩效面谈，确保绩效反馈有效传达',
                    conflict: '一位高绩效员工对评分不满，认为评分不能体现他的贡献',
                    nodes: [
                        { name: '员工质疑', desc: '员工说"我觉得评分不公平，我的贡献比那个A同事大多了"', choice: '解释评分逻辑 vs 反驳员工 vs 倾听理解' },
                        { name: '情绪升级', desc: '员工情绪激动，说"这种绩效体系就是领导拍脑袋"', choice: '反驳 vs 共情 vs 转移话题' },
                        { name: '面谈结果', desc: '林绩效需要决定如何结束这次面谈', choice: '坚持原则 vs 部分妥协 vs 寻求共识' }
                    ],
                    gap: '从"解释制度"到"员工觉得是官话"，绩效沟通的艺术',
                    principles: [
                        { title: '绩效面谈先谈心，再谈事', desc: '员工需要被理解，才能接受反馈' },
                        { title: '解释制度不等于绩效沟通', desc: '沟通的核心是帮助员工成长' },
                        { title: '公平感比公平本身更重要', desc: '让员工感受到公平讨论的过程' }
                    ]
                },
                2: {
                    title: '培训效果评估的难题',
                    code: 'H02',
                    type: '高估型',
                    role: {
                        name: '王培训',
                        position: '某大型企业培训经理',
                        years: '10年',
                        personality: '培训专业扎实、数据意识弱、重内容轻评估',
                        state: '公司要求培训必须证明效果ROI，但王培训觉得很难量化'
                    },
                    mission: '证明培训项目的效果和价值',
                    conflict: '老板问"这个培训花了50万，到底有什么效果？"',
                    nodes: [
                        { name: '老板质疑', desc: '老板说"培训部每年花这么多钱，有什么具体的回报？"', choice: '解释培训价值 vs 展示数据 vs 承认不足' },
                        { name: '数据困境', desc: '王培训发现培训效果很难用数据量化，学员反馈都是"很好"', choice: '找借口 vs 设计评估体系 vs 承认局限' },
                        { name: '改进方向', desc: '王培训需要决定如何应对老板的要求', choice: '建立评估体系 vs 争取资源 vs 调整培训方向' }
                    ],
                    gap: '从"长期价值"到"拿不出数据"，培训效果的评估挑战',
                    principles: [
                        { title: '培训效果需要被证明，不是被认为', desc: '数据是培训专业性的体现' },
                        { title: '评估需要从设计开始', desc: '培训前就要想好如何评估效果' },
                        { title: '培训价值有多个维度', desc: '业务结果只是其中之一，学习转化也很重要' }
                    ]
                },
                3: {
                    title: '人才盘点的盲区',
                    code: 'H03',
                    type: '模糊型',
                    role: {
                        name: '张盘点',
                        position: '某集团企业人才发展总监',
                        years: '12年',
                        personality: '专业严谨、系统思维、追求精确',
                        state: '主导公司年度人才盘点，但发现数据和个人感受差异很大'
                    },
                    mission: '完成关键岗位人才盘点，为继任计划提供依据',
                    conflict: '盘点的数据和高管对人才的判断有较大差异',
                    nodes: [
                        { name: '数据收集', desc: '张盘点用人才九宫格评估人才，但发现数据来源单一', choice: '相信数据 vs 补充访谈 vs 综合判断' },
                        { name: '高管的质疑', desc: '业务负责人说"数据不准确，我了解的XX不是这样的"', choice: '坚持数据 vs 修改数据 vs 理解差异' },
                        { name: '最终报告', desc: '张盘点需要向CEO汇报人才盘点结果', choice: '坚持数据 vs 调整结论 vs 呈现多版本' }
                    ],
                    gap: '从"方法论科学"到"业务怎么看更重要"，专业与业务的张力',
                    principles: [
                        { title: '数据是工具，不是答案', desc: '人才决策需要数据，也需要判断' },
                        { title: '专业需要被业务理解', desc: '再好的方法论不被接受也没用' },
                        { title: '人才盘点是组织对话', desc: '过程比结论更重要' }
                    ]
                },
                4: {
                    title: '组织变革的推动者',
                    code: 'H04',
                    type: '高估型',
                    role: {
                        name: '李变革',
                        position: '某传统企业HR总监',
                        years: '15年',
                        personality: '稳重务实、善于协调、规避风险',
                        state: '公司推进数字化转型，但员工抵触情绪很大'
                    },
                    mission: '配合业务转型，推动组织变革',
                    conflict: '公司决定裁员10%，但员工对此反应强烈',
                    nodes: [
                        { name: '变革宣布', desc: 'CEO宣布裁员决定后，员工士气低落，工作效率下降', choice: '配合宣布 vs 争取缓冲 vs 向上反馈' },
                        { name: '员工反应', desc: '核心员工私下表示"如果继续这样，就找新工作"', choice: '上报情况 vs 稳定军心 vs 私下沟通' },
                        { name: '变革落地', desc: '李变革需要在两周内完成裁员名单和安置方案', choice: '按数据决策 vs 综合考量 vs 争取资源' }
                    ],
                    gap: '从"安排沟通"到"加快进度"，变革执行和员工感受的平衡',
                    principles: [
                        { title: 'HR是组织与员工之间的桥梁', desc: '不是简单的传声筒' },
                        { title: '变革沟通需要真诚，不是走过场', desc: '员工能感受到真心还是敷衍' },
                        { title: '短期决策需要考虑长期影响', desc: '裁员成本不只是赔偿金' }
                    ]
                },
                5: {
                    title: '招聘匹配的困境',
                    code: 'H05',
                    type: '低估型',
                    role: {
                        name: '赵招聘',
                        position: '某互联网公司招聘总监',
                        years: '9年',
                        personality: '嗅觉敏锐、效率至上、结果导向',
                        state: '公司急需招聘高端技术人才，但招聘困难'
                    },
                    mission: '为技术团队招聘一名技术VP',
                    conflict: '候选人各方面都很优秀，但入职三个月后表现不及预期',
                    nodes: [
                        { name: '候选人选择', desc: '两位候选人，一位背景优秀但薪资要求高，一位相对普通但薪资匹配', choice: '选择最优 vs 选择匹配 vs 综合评估' },
                        { name: '背景调查', desc: '背景调查反馈不错，但前同事提到"管理风格可能不适合创业公司"', choice: '重视反馈 vs 忽略提醒 vs 深入核实' },
                        { name: '入职后表现', desc: '技术VP入职后，团队连续有两人离职', choice: '支持新VP vs 介入调解 vs 重新评估' }
                    ],
                    gap: '从"核实了"到"还是出问题了"，招聘风险的把控',
                    principles: [
                        { title: '招聘是最重要的HR决策', desc: '错误的招聘代价是工资的10-100倍' },
                        { title: '文化匹配和技术能力同样重要', desc: '能力可以培养，价值观很难改变' },
                        { title: '背景调查需要深入追问', desc: '表面的好评可能是假象' }
                    ]
                },
                6: {
                    title: '员工发展的投资回报',
                    code: 'H06',
                    type: '高估型',
                    role: {
                        name: '孙发展',
                        position: '某制造企业学习发展经理',
                        years: '7年',
                        personality: '培训热情高、项目导向、预算敏感',
                        state: '公司大幅削减培训预算，需要重新规划员工发展项目'
                    },
                    mission: '在预算削减的情况下，维持员工发展项目效果',
                    conflict: '老板说"培训预算砍一半，但效果不能降"',
                    nodes: [
                        { name: '预算削减', desc: '老板宣布培训预算削减50%，但要保持培训效果', choice: '压缩项目 vs 重新设计 vs 争取资源' },
                        { name: '项目选择', desc: '孙发展需要在多个培训项目中做取舍', choice: '保重点项目 vs 平均分配 vs 创新形式' },
                        { name: '效果验证', desc: '老板要求证明培训效果与投入成正比', choice: '提供数据 vs 解释难度 vs 调整评估' }
                    ],
                    gap: '从"优先保留"到"拿不出数据"，培训效果量化挑战',
                    principles: [
                        { title: '预算削减是重新聚焦的机会', desc: '不是简单地砍内容，是优化结构' },
                        { title: '效果评估是培训专业性的基础', desc: '没有评估就没有改进' },
                        { title: '培训需要用业务语言说话', desc: '让老板看到培训对业务的影响' }
                    ]
                },
                7: {
                    title: '企业文化的落地难题',
                    code: 'H07',
                    type: '分裂型',
                    role: {
                        name: '周文化',
                        position: '某创业公司HR负责人',
                        years: '6年',
                        personality: '理解力强、执行力强、善于借势',
                        state: '公司快速发展，文化稀释严重，老板让HR想办法'
                    },
                    mission: '在快速发展中保持和落地企业文化',
                    conflict: '新员工对公司文化认同度低，老员工抱怨"文化变味了"',
                    nodes: [
                        { name: '文化诊断', desc: '周文化做了一次文化认同度调研，发现分数很低', choice: '如实汇报 vs 粉饰太平 vs 选择性呈现' },
                        { name: '新老冲突', desc: '老员工说"新来的都不懂文化"，新员工说"老员工倚老卖老"', choice: '各打五十大板 vs 深入了解 vs 建立对话' },
                        { name: '文化落地', desc: '周文化需要设计具体的文化落地措施', choice: '培训教育 vs 制度约束 vs 领导示范' }
                    ],
                    gap: '从"如实汇报"到"补充积极面"，专业判断和组织政治的平衡',
                    principles: [
                        { title: '企业文化是老板工程', desc: 'HR只是推动者，不是决定者' },
                        { title: '文化落地需要制度和行为支撑', desc: '不只是喊口号' },
                        { title: '文化评估需要真实数据', desc: '不能为了老板感受而粉饰太平' }
                    ]
                }
            },
            internet: {
                1: {
                    title: '需求优先级之战',
                    code: 'I01',
                    type: '高估型',
                    role: {
                        name: '陈产品',
                        position: '某电商公司产品经理',
                        years: '5年',
                        personality: '逻辑清晰、协调能力强、追求用户价值',
                        state: '同时被业务、技术、设计三个方向的需求轰炸'
                    },
                    mission: '在资源有限的情况下，确定需求优先级',
                    conflict: '业务方要GMV功能，技术方要重构，设计方要做品牌升级',
                    nodes: [
                        { name: '需求冲突', desc: '三个方向都声称自己的需求最紧急，时间线冲突', choice: '按紧急程度 vs 按价值大小 vs 协调各方' },
                        { name: '技术建议', desc: '技术负责人说"如果不重构，后续开发速度会慢很多"', choice: '相信技术判断 vs 坚持业务需求 vs 深入了解' },
                        { name: '最终排序', desc: '陈产品需要给老板一份优先级排序', choice: '坚持自己判断 vs 妥协各方 vs 寻求共识' }
                    ],
                    gap: '从"按ROI排序"到"业务排第一"，专业判断和组织压力的平衡',
                    principles: [
                        { title: '优先级决策需要数据支撑', desc: '不是谁嗓门大谁优先' },
                        { title: '技术债务是隐形成本', desc: '今天的轻松可能是明天的噩梦' },
                        { title: '专业判断需要被坚持', desc: '产品经理的价值在于独立决策' }
                    ]
                },
                2: {
                    title: '用户研究的价值',
                    code: 'I02',
                    type: '高估型',
                    role: {
                        name: '林用户',
                        position: '某社交产品公司用户研究经理',
                        years: '6年',
                        personality: '研究严谨、表达温和、不善争取',
                        state: '研究发现的方向和老板想法不一致'
                    },
                    mission: '用用户研究指导产品决策',
                    conflict: '老板想做"社交+电商"功能，但用户研究显示用户不需要',
                    nodes: [
                        { name: '研究结论', desc: '用户访谈和数据分析都显示，用户对电商功能兴趣不高', choice: '如实汇报 vs 调整结论 vs 选择性呈现' },
                        { name: '老板反应', desc: '老板说"用户不知道自己要什么，你们研究方法有问题"', choice: '坚持结论 vs 妥协修改 vs 补充研究' },
                        { name: '产品上线', desc: '电商功能还是上线了，效果不达预期', choice: '证明自己 vs 沉默接受 vs 事后复盘' }
                    ],
                    gap: '从"详细解释"到"被忽视"，用户研究价值的体现',
                    principles: [
                        { title: '用户研究需要影响决策', desc: '研究结论不被采纳等于没做' },
                        { title: '数据说服力需要场景化', desc: '不是数据本身，是数据的解读和呈现' },
                        { title: '专业判断需要被坚持', desc: '但坚持的方式需要智慧' }
                    ]
                },
                3: {
                    title: '数据驱动的陷阱',
                    code: 'I03',
                    type: '低估型',
                    role: {
                        name: '张数据',
                        position: '某内容平台数据产品经理',
                        years: '4年',
                        personality: '数据敏感、逻辑严谨、有些教条',
                        state: '公司强调数据驱动，但张数据发现数据有时会说谎'
                    },
                    mission: '用数据分析指导产品优化方向',
                    conflict: '数据分析显示"用户在视频页面停留时间下降"，老板说要做优化',
                    nodes: [
                        { name: '数据发现', desc: '张数据发现用户停留时间下降了15%', choice: '直接汇报 vs 深入分析 vs 先确认数据质量' },
                        { name: '原因分析', desc: '进一步分析发现，是新上线的一个功能导致的用户行为变化', choice: '归因新功能 vs 全面排查 vs 呈现完整分析' },
                        { name: '决策建议', desc: '张数据需要决定给老板什么建议', choice: '建议优化 vs 建议回滚 vs 建议继续观察' }
                    ],
                    gap: '从"严重问题"到"不是问题"，数据解读的专业性',
                    principles: [
                        { title: '数据下降不一定是问题', desc: '需要先判断是异常还是正常波动' },
                        { title: '数据驱动需要分析驱动配合', desc: '不是数据本身，是数据的解读' },
                        { title: '建立数据认知基线', desc: '知道正常波动范围，才能识别真正异常' }
                    ]
                },
                4: {
                    title: '技术选型的两难',
                    code: 'I04',
                    type: '高估型',
                    role: {
                        name: '刘技术',
                        position: '某金融科技公司产品技术负责人',
                        years: '10年',
                        personality: '技术全面、架构思维强、对风险敏感',
                        state: '公司要快速上线新产品面临技术选型'
                    },
                    mission: '在速度和稳定性之间做出技术选型决策',
                    conflict: '老板说"要快，用现有架构"，但刘技术觉得需要重构',
                    nodes: [
                        { name: '架构讨论', desc: '刘技术认为现有架构有技术债务，建议重构后上线', choice: '坚持重构 vs 妥协快速上线 vs 寻找折中' },
                        { name: '老板质疑', desc: '老板说"竞品已经上线了，我们不能等"', choice: '坚持 vs 妥协 vs 论证重构价值' },
                        { name: '上线后果', desc: '用现有架构快速上线后，系统频繁出问题', choice: '继续优化 vs 重新架构 vs 承担后果' }
                    ],
                    gap: '从"详细解释"到"先上线再说"，技术理想向商业现实的妥协',
                    principles: [
                        { title: '技术债务是选择，不是意外', desc: '快速上线就是借债，迟早要还' },
                        { title: '技术选型是商业决策', desc: '需要技术视角，也需要业务视角' },
                        { title: '技术负责人需要学会妥协', desc: '没有完美的技术方案，只有适合的' }
                    ]
                },
                5: {
                    title: '用户体验的边界',
                    code: 'I05',
                    type: '分裂型',
                    role: {
                        name: '王体验',
                        position: '某工具类产品UX负责人',
                        years: '7年',
                        personality: '设计敏锐、用户导向、追求完美',
                        state: '新版本设计完成，但技术实现有困难'
                    },
                    mission: '在设计理想和实现可行性之间找到平衡',
                    conflict: '王体验设计了一个完美的交互方案，但技术说实现成本太高',
                    nodes: [
                        { name: '设计方案', desc: '王体验设计了一个创新但复杂的交互方式', choice: '坚持设计 vs 妥协简化 vs 寻找替代' },
                        { name: '技术反馈', desc: '技术评估后说"这个实现成本太高，会影响上线时间"', choice: '坚持 vs 妥协 vs 寻找替代方案' },
                        { name: '最终方案', desc: '王体验需要决定最终设计方案', choice: '完美方案 vs 简化方案 vs 替代方案' }
                    ],
                    gap: '从"详细解释"到"做简化版"，设计理想向现实的妥协',
                    principles: [
                        { title: '设计需要技术可行性支撑', desc: '再好的设计实现不了等于零' },
                        { title: '用户体验是整体，不是个点', desc: '简化设计要保留核心价值' },
                        { title: '设计师需要懂技术', desc: '不了解技术约束的设计师是不称职的' }
                    ]
                },
                6: {
                    title: '增长黑客的迷失',
                    code: 'I06',
                    type: '高估型',
                    role: {
                        name: '张增长',
                        position: '某电商公司增长负责人',
                        years: '5年',
                        personality: '数据敏感、执行力强、增长导向',
                        state: '公司进入增长瓶颈，老板要求"不惜一切代价增长"'
                    },
                    mission: '突破增长瓶颈，提升用户和GMV',
                    conflict: '张增长设计了一个"邀请得优惠券"活动，初期数据很好',
                    nodes: [
                        { name: '活动设计', desc: '张增长设计了一个邀请返利活动，邀请人和被邀请人都有优惠', choice: '追求增长 vs 控制成本 vs 平衡二者' },
                        { name: '数据表现', desc: '活动上线后，用户数确实增长很快', choice: '继续扩张 vs 观察质量 vs 调整策略' },
                        { name: '问题暴露', desc: '发现大量用户是"薅羊毛"用户，不是真实用户', choice: '承认问题 vs 继续优化 vs 止损停止' }
                    ],
                    gap: '从"策略成功"到"羊毛党占比高"，增长质量的盲区',
                    principles: [
                        { title: '增长需要质量支撑', desc: '没有质量的增长是虚假繁荣' },
                        { title: '增长黑客需要边界', desc: '不是所有增长手段都是正确的' },
                        { title: '风控是增长的基础设施', desc: '没有风控的增长是裸奔' }
                    ]
                },
                7: {
                    title: '跨部门协作的壁垒',
                    code: 'I07',
                    type: '低估型',
                    role: {
                        name: '李协作',
                        position: '某在线教育公司产品负责人',
                        years: '6年',
                        personality: '协调能力强、善于推动、但缺乏技术背景',
                        state: '需要和技术、设计、运营、市场四个部门协作'
                    },
                    mission: '推动一个需要多部门协作的产品功能',
                    conflict: '产品需要技术支持，设计需要新模板，运营要内容准备，市场要推广计划',
                    nodes: [
                        { name: '计划制定', desc: '李协作制定了详细的多部门协作计划', choice: '详细计划 vs 灵活调整 vs 核心驱动' },
                        { name: '协作冲突', desc: '技术和运营在优先级上产生分歧，都说自己的任务更重要', choice: '调解 vs 向上求助 vs 重新排期' },
                        { name: '交付结果', desc: '最终交付比计划晚了三周，功能也不完整', choice: '归因外部 vs 反思自己 vs 复盘改进' }
                    ],
                    gap: '从"计划完善"到"延期三周"，计划与执行的能力差距',
                    principles: [
                        { title: '计划需要资源支撑', desc: '没有资源的计划是空想' },
                        { title: '跨部门协作需要持续推动', desc: '不是一次会议能解决的' },
                        { title: '产品经理是粘合剂', desc: '不是发号施令，是协调推动' }
                    ]
                },
                8: {
                    title: '创新与合规的平衡',
                    code: 'I08',
                    type: '高估型',
                    role: {
                        name: '赵创新',
                        position: '某金融科技公司产品总监',
                        years: '12年',
                        personality: '创新意识强、风险意识弱、追求突破',
                        state: '看到竞品推出新功能，想要快速跟进'
                    },
                    mission: '在合规前提下，快速推出创新产品功能',
                    conflict: '竞品推出了一款"智能投顾"功能，监管还没明确规范',
                    nodes: [
                        { name: '竞品跟进', desc: '竞品上线了智能投顾功能，用户反馈很好', choice: '快速跟进 vs 等待规范 vs 创新+合规' },
                        { name: '合规评估', desc: '法务说"监管还没明确，可能有合规风险"', choice: '相信法务 vs 继续推进 vs 寻求外部意见' },
                        { name: '监管反馈', desc: '产品上线一个月后，监管要求自查', choice: '如实配合 vs 推卸责任 vs 提前退出' }
                    ],
                    gap: '从"评估过风险"到"被监管要求整改"，金融创新的边界',
                    principles: [
                        { title: '金融创新，合规先行', desc: '监管容忍度是创新的天花板' },
                        { title: '合规是护城河，不是障碍', desc: '合规做得好是竞争优势' },
                        { title: '创新需要边界意识', desc: '突破边界可能带来短期收益，但长期风险巨大' }
                    ]
                }
            },
            finance: {
                1: {
                    title: '风险评估的两难',
                    code: 'F01',
                    type: '高估型',
                    role: {
                        name: '周风控',
                        position: '某城商行风险管理部负责人',
                        years: '18年',
                        personality: '谨慎稳健、规则意识强、不善变通',
                        state: '经济下行期，不良贷款率上升'
                    },
                    mission: '在支持业务发展和控制风险之间找到平衡',
                    conflict: '一家大型企业客户申请贷款，但财务指标显示存在一定风险',
                    nodes: [
                        { name: '企业尽调', desc: '企业财务数据有几个异常指标，但企业主解释是行业周期原因', choice: '相信企业解释 vs 深入调查 vs 保持谨慎' },
                        { name: '内部评审', desc: '信贷审批会上，有一半人认为可以放款，一半人反对', choice: '按多数意见 vs 坚持自己判断 vs 妥协折中' },
                        { name: '贷后管理', desc: '贷款发放三个月后，企业出现逾期迹象', choice: '提前介入 vs 继续观察 vs 向上汇报' }
                    ],
                    gap: '从"说明风险点"到"被追责"，专业判断的责任承担',
                    principles: [
                        { title: '风险决策需要独立判断', desc: '不是投票决定，是专业判断' },
                        { title: '从众是有成本的', desc: '当风险真的发生时，责任不可推卸' },
                        { title: '记录是最好的保护', desc: '把判断依据记录下来，是专业也是保护' }
                    ]
                },
                2: {
                    title: '投资顾问的信任困境',
                    code: 'F02',
                    type: '分裂型',
                    role: {
                        name: '李顾问',
                        position: '某券商投资顾问总监',
                        years: '15年',
                        personality: '专业扎实、客户导向、业绩压力巨大',
                        state: '市场波动，客户亏损严重，投诉增加'
                    },
                    mission: '在市场不好时维护客户信任，同时完成业绩指标',
                    conflict: '客户购买的基金亏损30%，客户说"你们当初不是说这个基金很安全吗"',
                    nodes: [
                        { name: '客户投诉', desc: '客户情绪激动，说当初被误导购买了高风险产品', choice: '解释市场因素 vs 承认销售有问题 vs 推卸责任' },
                        { name: '销售过程复盘', desc: '李顾问复盘发现，当初销售时确实过度强调了收益，弱化了风险', choice: '承认问题 vs 否认责任 vs 选择性承认' },
                        { name: '后续处理', desc: '李顾问需要决定如何处理这个投诉', choice: '补偿客户 vs 解释规则 vs 更换服务人员' }
                    ],
                    gap: '从"解释市场"到"确实没说明风险"，销售合规的反思',
                    principles: [
                        { title: '销售适当性是底线', desc: '不是可选项，是必选项' },
                        { title: '客户利益和公司利益不矛盾', desc: '短期看可能矛盾，长期是一致的' },
                        { title: '销售记录是最好的保护', desc: '留好证据，既是保护客户也是保护自己' }
                    ]
                },
                3: {
                    title: '合规经营的灰色地带',
                    code: 'F03',
                    type: '高估型',
                    role: {
                        name: '王合规',
                        position: '某小贷公司合规总监',
                        years: '10年',
                        personality: '规则熟悉、灵活变通、善于打擦边球',
                        state: '监管趋严，但公司业务压力要求业绩增长'
                    },
                    mission: '在合规前提下支持业务发展，寻找灰色地带',
                    conflict: '公司一款贷款产品的利率设定在监管红线上，业务部门希望继续推广',
                    nodes: [
                        { name: '产品设计', desc: '业务部门设计的贷款产品年化利率是35.99%，刚好在36%的民间借贷利率保护线下', choice: '批准上线 vs 要求调整 vs 寻求法律意见' },
                        { name: '监管趋势', desc: '王合规注意到监管正在讨论进一步下调利率保护上限', choice: '建议调整 vs 继续观望 vs 提前布局' },
                        { name: '风险暴露', desc: '监管发布新规，利率保护上限调整为24%，公司多笔贷款超标', choice: '主动整改 vs 等待处罚 vs 法律救济' }
                    ],
                    gap: '从"当前合规"到"面临整改"，合规前瞻性的缺失',
                    principles: [
                        { title: '合规要有前瞻性', desc: '今天的合规不等于明天的合规' },
                        { title: '灰色地带是危险地带', desc: '在红线上跳舞，迟早会受伤' },
                        { title: '监管趋势比当前规则更重要', desc: '看懂方向比看懂现状更重要' }
                    ]
                },
                4: {
                    title: '保险理赔的抉择',
                    code: 'F04',
                    type: '模糊型',
                    role: {
                        name: '张理赔',
                        position: '某保险公司理赔部经理',
                        years: '12年',
                        personality: '原则性强、同理心强、不喜欢冲突',
                        state: '公司推行"应赔尽赔"政策，但理赔案件复杂'
                    },
                    mission: '在严格理赔和客户满意之间找到平衡',
                    conflict: '一个理赔案件符合条款字面定义，但明显不是条款设计的初衷',
                    nodes: [
                        { name: '案件分析', desc: '被保险人因"持续发热"申请理赔，但条款要求"连续发热7天以上"', choice: '严格按条款 vs 人性化处理 vs 上报讨论' },
                        { name: '客户诉求', desc: '客户说"我就是看了这个条款才买的，现在却不赔"', choice: '坚持条款 vs 通融赔付 vs 解释沟通' },
                        { name: '最终决定', desc: '张理赔需要做出理赔决定', choice: '正常赔付 vs 通融赔付 vs 拒赔' }
                    ],
                    gap: '从"解释条款"到"需要人性化"，规则和同理心的平衡',
                    principles: [
                        { title: '保险理赔要关注条款精神', desc: '不是咬文嚼字，是理解保障本意' },
                        { title: '客户感受是服务的一部分', desc: '理赔决定要考虑客户心理' },
                        { title: '通融赔付需要有标准', desc: '没有标准的通融是潜在的合规风险' }
                    ]
                },
                5: {
                    title: '银行网点的服务转型',
                    code: 'F05',
                    type: '模糊型',
                    role: {
                        name: '刘网点',
                        position: '某国有银行网点主任',
                        years: '20年',
                        personality: '稳重务实、执行力强、但不擅长创新',
                        state: '银行推进数字化转型，但老年客户不适应'
                    },
                    mission: '在推进数字化转型的同时服务好不同类型客户',
                    conflict: '老年客户反映"不会用手机银行，网点又越来越没人"',
                    nodes: [
                        { name: '转型压力', desc: '分行要求网点智能设备替换人工，年底手机银行渗透率要达到90%', choice: '执行转型 vs 反映困难 vs 寻找平衡' },
                        { name: '客户反馈', desc: '老年客户张大爷说"你们年轻人就会玩手机，我们老年人怎么办"', choice: '解释转型必要性 vs 记录反馈 vs 提供替代服务' },
                        { name: '考核压力', desc: '年底考核时，网点手机银行渗透率只有75%，排名靠后', choice: '解释原因 vs 强调客户实际 vs 承诺改进' }
                    ],
                    gap: '从"耐心教"到"渗透率不达标"，转型目标和客户现实的差距',
                    principles: [
                        { title: '数字化转型不是一刀切', desc: '要考虑不同客户群体的需求' },
                        { title: 'KPI是手段不是目的', desc: '完成指标不等于满足客户' },
                        { title: '服务温度不能被效率牺牲', desc: '银行网点有社会功能' }
                    ]
                },
                6: {
                    title: '私募股权投资的尽调',
                    code: 'F06',
                    type: '高估型',
                    role: {
                        name: '陈投资',
                        position: '某私募基金投资总监',
                        years: '14年',
                        personality: '行业研究深、决策谨慎、追求完美',
                        state: '看了一个热门项目，但尽调发现一些隐患'
                    },
                    mission: '完成对目标公司的尽职调查，做出投资决策',
                    conflict: '标的公司技术领先，但创始人团队有矛盾，财务数据有些疑问',
                    nodes: [
                        { name: '业务尽调', desc: '技术尽调显示标的公司技术确实领先，有专利壁垒', choice: '相信技术优势 vs 验证商业化能力 vs 综合评估' },
                        { name: '团队评估', desc: '发现两位创始人在公司战略上存在严重分歧', choice: '忽视团队问题 vs 重视团队问题 vs 深入了解' },
                        { name: '投资决策', desc: '陈投资需要向投资委员会提交投资建议', choice: '建议投资 vs 放弃项目 vs 有条件投资' }
                    ],
                    gap: '从"风险可控"到"估值大幅下降"，尽职调查的局限性',
                    principles: [
                        { title: '投资是投人不是投技术', desc: '好技术被坏人用就是灾难' },
                        { title: '尽职调查有局限性', desc: '再深入的尽调也可能有盲区' },
                        { title: '团队问题是一票否决项', desc: '创始团队分裂是最大的风险' }
                    ]
                },
                7: {
                    title: '金融科技的风控创新',
                    code: 'F07',
                    type: '分裂型',
                    role: {
                        name: '林科技',
                        position: '某互联网银行风控总监',
                        years: '11年',
                        personality: '技术派、数据驱动、创新意识强',
                        state: '公司要用大数据和AI做风控，但监管对新技术态度不明确'
                    },
                    mission: '在创新和合规之间推进智能风控',
                    conflict: '林科技设计了一套AI风控模型，效果很好，但监管要求"算法透明可解释"',
                    nodes: [
                        { name: '模型开发', desc: '林科技用深度学习开发了一套风控模型，准确率比传统模型高30%', choice: '快速上线 vs 合规评估 vs 分阶段推进' },
                        { name: '监管沟通', desc: '监管机构要求解释风控模型的决策逻辑', choice: '提供完整解释 vs 部分解释 vs 寻找替代方案' },
                        { name: '合规整改', desc: '监管要求整改，否则不能上线新业务', choice: '整改模型 vs 调整业务 vs 等待观望' }
                    ],
                    gap: '从"详细解释"到"增加可解释性模块"，科技创新需要适应监管要求',
                    principles: [
                        { title: '金融科技，合规先行', desc: '监管对金融创新是审慎态度，不是鼓励创新再规范' },
                        { title: '可解释性是金融AI的基础', desc: '不是技术问题，是监管要求' },
                        { title: '主动监管沟通比被动整改更有效', desc: '提前沟通成本低' }
                    ]
                }
            },
            education: {
                1: {
                    title: '学员成长的真与假',
                    code: 'E01',
                    type: '模糊型',
                    role: {
                        name: '王导师',
                        position: '某K12培训机构学科导师',
                        years: '6年',
                        personality: '责任心强、善于鼓励、但标准较低',
                        state: '续费季来临，学员成绩有进步但家长觉得不够'
                    },
                    mission: '客观评估学员进步，制定下一阶段学习计划',
                    conflict: '学员这次月考从60分进步到75分，但家长期望是90分',
                    nodes: [
                        { name: '成绩分析', desc: '王导师看到学员从60分到75分的进步，觉得"进步很明显"', choice: '强调进步 vs 指出不足 vs 全面分析' },
                        { name: '家长反馈', desc: '家长说"才75分，距离90分还差得远呢"', choice: '解释进步 vs 承认不足 vs 调整期望' },
                        { name: '续费谈判', desc: '续费时家长说"如果下学期不能到90分，就不续了"', choice: '承诺结果 vs 说明难度 vs 提供方案' }
                    ],
                    gap: '从"进步明显"到"心里知道目标高"，期望管理和诚信教学的平衡',
                    principles: [
                        { title: '进步需要客观标准衡量', desc: '不是自己觉得好就是好' },
                        { title: '家长期望需要提前管理', desc: '开始时说明能提升多少，比最后让家长失望好' },
                        { title: '续费不能靠承诺', desc: '承诺结果会伤害专业诚信' }
                    ]
                },
                2: {
                    title: '教学设计的初心',
                    code: 'E02',
                    type: '高估型',
                    role: {
                        name: '张教学',
                        position: '某职业教育机构课程设计总监',
                        years: '12年',
                        personality: '理论扎实、追求完美、但有时脱离学员需求',
                        state: '公司要求课程要"轻量化"，但张教学觉得深度不够'
                    },
                    mission: '设计一套既符合学员需求又保证教学质量的课程',
                    conflict: '老板说"课程太长了，学员没时间学，要精简"',
                    nodes: [
                        { name: '课程评估', desc: '张教学设计的课程系统完整，但平均完课率只有30%', choice: '坚持深度 vs 精简内容 vs 分析原因' },
                        { name: '精简压力', desc: '老板要求把100小时的课程精简到30小时', choice: '执行 vs 反对 vs 寻找平衡' },
                        { name: '课程上线', desc: '精简后的课程上线，学员反馈"太水了"', choice: '恢复内容 vs 维持精简 vs 寻找替代' }
                    ],
                    gap: '从"说明重要性"到"精简了内容"，专业理想向运营现实的妥协',
                    principles: [
                        { title: '课程设计要以学员为中心', desc: '不是以老师想教什么为中心' },
                        { title: '完课率和满意度要平衡', desc: '既要学员学完，也要学员学好' },
                        { title: '精简要有度', desc: '不是把所有内容砍一半，是重新设计' }
                    ]
                },
                3: {
                    title: '家校沟通的困境',
                    code: 'E03',
                    type: '高估型',
                    role: {
                        name: '李沟通',
                        position: '某私立学校班主任',
                        years: '8年',
                        personality: '耐心细致、善于倾听、但不喜欢冲突',
                        state: '班上学生出现心理问题，但家长不配合'
                    },
                    mission: '与家长有效沟通，共同帮助学生解决问题',
                    conflict: '学生出现焦虑症状，但家长觉得"没什么大不了"',
                    nodes: [
                        { name: '学生问题', desc: '李沟通发现学生最近情绪异常，成绩下滑，有焦虑倾向', choice: '立即通知家长 vs 单独辅导 vs 继续观察' },
                        { name: '家长态度', desc: '家长说"现在的孩子就是太娇气，我们那时候哪有这些"', choice: '解释严重性 vs 尊重家长 vs 寻求支持' },
                        { name: '问题升级', desc: '学生问题加重，但家长仍然不重视', choice: '坚持沟通 vs 寻求帮助 vs 尊重家长' }
                    ],
                    gap: '从"详细说明"到"问题加重"，专业判断和家长认知的鸿沟',
                    principles: [
                        { title: '家校沟通需要专业技巧', desc: '不是说得对就行，要让对方听进去' },
                        { title: '家长认知改变需要时间', desc: '一次沟通不够，需要持续影响' },
                        { title: '学生安全是底线', desc: '必要时可以越级处理' }
                    ]
                },
                4: {
                    title: '个人成长的瓶颈',
                    code: 'E04',
                    type: '低估型',
                    role: {
                        name: '赵成长',
                        position: '某管理咨询公司高级顾问',
                        years: '10年',
                        personality: '学习能力强、执行力强、但缺乏深度反思',
                        state: '职业发展遇到瓶颈，晋升不到合伙人'
                    },
                    mission: '突破职业瓶颈，实现进一步发展',
                    conflict: '赵成长业绩一直很好，但老板说"你还需要更大的影响力"',
                    nodes: [
                        { name: '晋升反馈', desc: '老板说"你的业绩没问题，但你还没有真正的影响力"', choice: '追问具体 vs 觉得不公平 vs 反思自己' },
                        { name: '自我评估', desc: '赵成长觉得自己已经很厉害了，为什么还不够', choice: '外归因 vs 内归因 vs 全面分析' },
                        { name: '行动计划', desc: '赵成长需要决定如何提升"影响力"', choice: '继续做业绩 vs 建立品牌 vs 带团队' }
                    ],
                    gap: '从"觉得不公平"到"计划参加活动"，从自我防御到认知调整',
                    principles: [
                        { title: '职业瓶颈是认知瓶颈', desc: '觉得自己没问题，往往是最大的问题' },
                        { title: '业绩和影响力是两回事', desc: '会做也要会说，会说也要让人知道' },
                        { title: '职业反馈是礼物', desc: '老板说缺什么，往往是真的缺什么' }
                    ]
                },
                5: {
                    title: '培训落地的最后一公里',
                    code: 'E05',
                    type: '高估型',
                    role: {
                        name: '刘培训',
                        position: '某企业大学学习发展负责人',
                        years: '9年',
                        personality: '培训专业强、项目管理强、但业务理解弱',
                        state: '公司投入大量培训资源，但业务部门说"培训没用"'
                    },
                    mission: '让培训真正落地，产生业务价值',
                    conflict: '销售团队培训后考试成绩很好，但实际拜访客户还是老方法',
                    nodes: [
                        { name: '培训实施', desc: '刘培训设计了一套销售技巧培训，学员反馈很好', choice: '培训完成 vs 跟踪应用 vs 效果评估' },
                        { name: '业务反馈', desc: '销售总监说"培训是培训，实践是实践，学了不用"', choice: '反驳 vs 接受 vs 深入了解' },
                        { name: '原因分析', desc: '刘培训跟踪发现，学员觉得"方法很好但不适合我们的客户"', choice: '认为学员找借口 vs 分析业务差异 vs 调整方法' }
                    ],
                    gap: '从"70%说会用"到"实际不到30%"，培训转化率的真实情况',
                    principles: [
                        { title: '培训效果要看行为改变和业绩结果', desc: '不只是考试分数' },
                        { title: '培训内容要接近业务场景', desc: '方法好但用不上等于没学' },
                        { title: '培训后跟踪和培训前调研同样重要', desc: '不能上完课就结束' }
                    ]
                },
                6: {
                    title: '咨询项目的价值证明',
                    code: 'E06',
                    type: '分裂型',
                    role: {
                        name: '张咨询',
                        position: '某管理咨询公司项目经理',
                        years: '7年',
                        personality: '方案能力强、实施能力弱、重交付轻商业',
                        state: '完成了一个战略咨询项目，但客户不愿续约'
                    },
                    mission: '证明咨询项目价值，建立长期客户关系',
                    conflict: '客户说"你们的报告很专业，但对我们帮助不大"',
                    nodes: [
                        { name: '项目交付', desc: '张咨询完成了战略规划报告，获得客户高层好评', choice: '完成交付 vs 跟踪落地 vs 建立关系' },
                        { name: '客户反馈', desc: '半年后回访，客户说"报告放书架上了，没怎么用"', choice: '追问原因 vs 觉得委屈 vs 自我反思' },
                        { name: '续约谈判', desc: '客户说下一年不续约了，要找能帮助落地的咨询公司', choice: '解释专业价值 vs 承认不足 vs 调整服务模式' }
                    ],
                    gap: '从"方案很完整"到"客户说太理论化"，咨询价值的认知落差',
                    principles: [
                        { title: '咨询价值不在于报告，在于结果', desc: '方案好不等于客户成功' },
                        { title: '咨询需要"扶上马送一程"', desc: '只给方案不跟踪落地，等于没做完' },
                        { title: '客户成功是检验咨询价值的唯一标准', desc: '专业性要转化为客户价值' }
                    ]
                },
                7: {
                    title: '在线教育的用户体验',
                    code: 'E07',
                    type: '高估型',
                    role: {
                        name: '林在线',
                        position: '某在线教育公司产品运营总监',
                        years: '8年',
                        personality: '用户导向、数据敏感、但有时过于注重短期数据',
                        state: '公司追求用户增长，但完课率和复购率在下降'
                    },
                    mission: '在增长和体验之间找到平衡，打造健康的产品',
                    conflict: '林在线设计了一个"9.9元体验课"引流策略，初期用户暴增',
                    nodes: [
                        { name: '增长策略', desc: '林在线设计低价引流课，用户数三个月增长300%', choice: '追求增长 vs 关注质量 vs 平衡二者' },
                        { name: '数据监控', desc: '数据显示完课率只有15%，复购率下降40%', choice: '分析原因 vs 继续增长 vs 调整策略' },
                        { name: '策略调整', desc: '林在线需要决定是否调整增长策略', choice: '继续低价引流 vs 提升质量 vs 提高价格' }
                    ],
                    gap: '从"正常现象"到"体验不好"，对用户流失原因的错误归因',
                    principles: [
                        { title: '增长要健康，不是虚假繁荣', desc: '用户来了会流失等于没增长' },
                        { title: '用户体验是核心竞争力', desc: '低价可以获客，但好体验才能留客' },
                        { title: '增长策略要看长期', desc: '只看短期增长可能伤害长期价值' }
                    ]
                }
            }
        };

        // Show scenario detail
        function showScenario(industry, num) {
            const data = scenarioData[industry][num];
            const detail = document.getElementById(industry + '-detail');

            const typeClass = data.type === '高估型' ? 'high' : data.type === '低估型' ? 'low' : data.type === '分裂型' ? 'split' : 'blur';

            detail.innerHTML = `
                <button class="back-btn" onclick="hideScenario('${industry}')">← 返回场景列表</button>
                <div class="scenario-header">
                    <h2>【${data.code}】${data.title}</h2>
                    <div class="meta">
                        <span>落差类型：<span class="gap-type ${typeClass}">${data.type}</span></span>
                    </div>
                </div>

                <div class="scenario-section">
                    <h4>角色卡</h4>
                    <div class="role-card">
                        <div class="info-row">
                            <span class="info-label">姓名</span>
                            <span class="info-value">${data.role.name}（虚构）</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">职位</span>
                            <span class="info-value">${data.role.position}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">工作年限</span>
                            <span class="info-value">${data.role.years}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">性格特征</span>
                            <span class="info-value">${data.role.personality}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">近期状态</span>
                            <span class="info-value">${data.role.state}</span>
                        </div>
                    </div>
                </div>

                <div class="scenario-section">
                    <h4>背景任务</h4>
                    <p><strong>任务目标：</strong>${data.mission}</p>
                    <p><strong>情境描述：</strong>${data.conflict}</p>
                </div>

                <div class="scenario-section">
                    <h4>关键节点</h4>
                    <ul>
                        ${data.nodes.map(n => `<li><strong>${n.name}：</strong>${n.desc}<br>表面选择：${n.choice}</li>`).join('')}
                    </ul>
                </div>

                <div class="scenario-section">
                    <h4>核心认知落差</h4>
                    <p style="color: var(--accent); font-weight: 500;">${data.gap}</p>
                </div>

                <div class="scenario-section">
                    <h4>可迁移原则</h4>
                    <div class="principles-grid">
                        ${data.principles.map(p => `
                            <div class="principle-item">
                                <strong>${p.title}</strong>
                                <p>${p.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

            detail.classList.add('active');
            detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function hideScenario(industry) {
            document.getElementById(industry + '-detail').classList.remove('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    </script>
</body>
</html>
"""

path = r'D:/新课开发/经验萃取/经验萃取-AI/3.说出来的和做出来的：识别专家自我认知的落差/场景库/场景库总览.html'
with open(path, 'w', encoding='utf-8') as f:
    f.write(html_content)
print('Done')
