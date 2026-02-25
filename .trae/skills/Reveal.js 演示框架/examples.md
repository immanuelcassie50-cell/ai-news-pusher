# Reveal.js 实战案例集

> 收录20+真实场景的完整解决方案，直接复制使用

## 目录

- [基础案例 (1-5)](#基础案例)
- [进阶案例 (6-10)](#进阶案例)
- [高级案例 (11-15)](#高级案例)
- [专业案例 (16-20)](#专业案例)
- [真实项目案例](#真实项目案例)

---

## 基础案例

### 案例1：极简个人介绍
**背景：** 快速自我介绍，5分钟内完成  
**输入：** 姓名、职位、联系方式  

**完整代码：**
```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>自我介绍</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/white.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>张三</h1>
                <h3>全栈开发工程师</h3>
                <p>
                    <small>📧 zhangsan@example.com</small><br>
                    <small>📱 138-0000-0000</small>
                </p>
            </section>
            
            <section>
                <h2>专业技能</h2>
                <ul>
                    <li>前端：React, Vue.js</li>
                    <li>后端：Node.js, Python</li>
                    <li>数据库：MySQL, MongoDB</li>
                </ul>
            </section>
            
            <section>
                <h2>项目经验</h2>
                <p>5年Web开发经验</p>
                <p>参与过20+项目开发</p>
            </section>
            
            <section>
                <h2>联系我</h2>
                <p>期待与您合作！</p>
            </section>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script>Reveal.initialize({ hash: true });</script>
</body>
</html>
```

**关键点：**
- 4张幻灯片，结构清晰
- 白色主题，正式简洁
- 无复杂动画，快速加载

---

### 案例2：产品功能展示
**背景：** 展示APP的核心功能  
**输入：** 产品截图、功能列表  

**完整代码：**
```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>产品展示</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/black.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
                <h1>我的APP</h1>
                <p>让生活更美好</p>
            </section>
            
            <section>
                <section>
                    <h2>核心功能</h2>
                </section>
                
                <section data-background-image="screenshot1.jpg" data-background-size="contain">
                    <div style="background: rgba(0,0,0,0.7); padding: 20px;">
                        <h3>功能1：智能推荐</h3>
                    </div>
                </section>
                
                <section data-background-image="screenshot2.jpg" data-background-size="contain">
                    <div style="background: rgba(0,0,0,0.7); padding: 20px;">
                        <h3>功能2：社交分享</h3>
                    </div>
                </section>
                
                <section data-background-image="screenshot3.jpg" data-background-size="contain">
                    <div style="background: rgba(0,0,0,0.7); padding: 20px;">
                        <h3>功能3：数据分析</h3>
                    </div>
                </section>
            </section>
            
            <section data-background="#00d9ff">
                <h2>立即下载</h2>
                <p>iOS | Android</p>
            </section>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script>Reveal.initialize({ hash: true });</script>
</body>
</html>
```

**关键点：**
- 垂直嵌套：主功能 → 子功能详情
- 图片背景：全屏展示截图
- 渐变背景：视觉吸引力

---

### 案例3：团队介绍
**背景：** 介绍团队成员  
**输入：** 成员照片、职位、简介  

**完整代码：**
```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>团队介绍</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/sky.css">
    <style>
        .team-member {
            display: flex;
            align-items: center;
            gap: 30px;
        }
        .team-member img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
        }
    </style>
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>我们的团队</h1>
                <p>专业 · 高效 · 创新</p>
            </section>
            
            <section>
                <div class="team-member">
                    <img src="member1.jpg" alt="张三">
                    <div>
                        <h2>张三</h2>
                        <h4>项目经理</h4>
                        <p>10年项目管理经验<br>PMP认证</p>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="team-member">
                    <img src="member2.jpg" alt="李四">
                    <div>
                        <h2>李四</h2>
                        <h4>技术总监</h4>
                        <p>全栈开发专家<br>架构设计师</p>
                    </div>
                </div>
            </section>
            
            <section>
                <div class="team-member">
                    <img src="member3.jpg" alt="王五">
                    <div>
                        <h2>王五</h2>
                        <h4>UI设计师</h4>
                        <p>5年设计经验<br>用户体验专家</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script>Reveal.initialize({ hash: true });</script>
</body>
</html>
```

**关键点：**
- Flexbox布局：图片+文字并排
- 圆形头像：专业形象
- 统一结构：易于维护

---

### 案例4：数据报告
**背景：** 月度数据总结  
**输入：** 数据表格、图表  

**完整代码：**
```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>月度报告</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/serif.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>2025年1月</h1>
                <h2>数据报告</h2>
            </section>
            
            <section>
                <h2>关键指标</h2>
                <table>
                    <thead>
                        <tr>
                            <th>指标</th>
                            <th>目标</th>
                            <th>实际</th>
                            <th>达成率</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>销售额</td>
                            <td>100万</td>
                            <td>120万</td>
                            <td style="color: green;">120%</td>
                        </tr>
                        <tr>
                            <td>新用户</td>
                            <td>1000</td>
                            <td>950</td>
                            <td style="color: orange;">95%</td>
                        </tr>
                        <tr>
                            <td>活跃度</td>
                            <td>80%</td>
                            <td>85%</td>
                            <td style="color: green;">106%</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
            <section>
                <h2>趋势分析</h2>
                <img src="chart.png" alt="趋势图" style="max-width: 80%;">
            </section>
            
            <section>
                <h2>总结</h2>
                <ul>
                    <li class="fragment">✅ 销售目标超额完成</li>
                    <li class="fragment">⚠️ 新用户增长需加强</li>
                    <li class="fragment">✅ 用户活跃度良好</li>
                </ul>
            </section>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script>Reveal.initialize({ hash: true });</script>
</body>
</html>
```

**关键点：**
- 表格展示：结构化数据
- 颜色标识：快速识别好坏
- 片段显示：逐步揭示结论

---

### 案例5：课程大纲
**背景：** 培训课程介绍  
**输入：** 章节、知识点  

**完整代码：**
```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>课程大纲</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/beige.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>Python编程入门</h1>
                <p>零基础到实战</p>
            </section>
            
            <section>
                <h2>课程目标</h2>
                <ul>
                    <li class="fragment">掌握Python基础语法</li>
                    <li class="fragment">学会常用库的使用</li>
                    <li class="fragment">完成实战项目</li>
                </ul>
            </section>
            
            <section>
                <section>
                    <h2>第一章：基础语法</h2>
                </section>
                
                <section>
                    <h3>1.1 变量与数据类型</h3>
                    <ul>
                        <li>数字、字符串、列表</li>
                        <li>字典、元组、集合</li>
                    </ul>
                </section>
                
                <section>
                    <h3>1.2 控制流</h3>
                    <ul>
                        <li>if条件判断</li>
                        <li>for/while循环</li>
                    </ul>
                </section>
            </section>
            
            <section>
                <section>
                    <h2>第二章：函数与模块</h2>
                </section>
                
                <section>
                    <h3>2.1 函数定义</h3>
                    <ul>
                        <li>参数传递</li>
                        <li>返回值</li>
                        <li>Lambda表达式</li>
                    </ul>
                </section>
            </section>
            
            <section>
                <h2>实战项目</h2>
                <p>开发一个简单的爬虫程序</p>
            </section>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script>Reveal.initialize({ hash: true });</script>
</body>
</html>
```

**关键点：**
- 嵌套结构：章节 → 小节
- 分层展示：清晰的知识体系
- 温暖配色：适合教学环境

---

## 进阶案例

### 案例6：交互式代码演示
**背景：** 编程教学，实时运行代码  

**完整代码：**
```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>代码演示</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/moon.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/highlight/monokai.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>JavaScript闭包</h1>
                <p>深入理解作用域链</p>
            </section>
            
            <section data-auto-animate>
                <h2>什么是闭包？</h2>
                <pre data-id="code"><code class="javascript" data-trim data-line-numbers>
function outer() {
    let count = 0;
}
                </code></pre>
            </section>
            
            <section data-auto-animate>
                <h2>什么是闭包？</h2>
                <pre data-id="code"><code class="javascript" data-trim data-line-numbers="1-7|3-5">
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    }
}
                </code></pre>
            </section>
            
            <section data-auto-animate>
                <h2>使用闭包</h2>
                <pre data-id="code"><code class="javascript" data-trim data-line-numbers="1-7|9-11">
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    }
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
                </code></pre>
            </section>
            
            <section>
                <h2>实际应用</h2>
                <ul>
                    <li class="fragment">数据私有化</li>
                    <li class="fragment">函数工厂</li>
                    <li class="fragment">模块化封装</li>
                </ul>
            </section>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/highlight/highlight.js"></script>
    <script>
        Reveal.initialize({
            hash: true,
            plugins: [ RevealHighlight ]
        });
    </script>
</body>
</html>
```

**关键点：**
- Auto-Animate：代码逐步展示
- 行号高亮：聚焦关键代码
- 深色主题：护眼舒适

---

### 案例7：数学公式展示
**背景：** 数学/物理课件  

**完整代码：**
```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>数学公式</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/white.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>微积分基础</h1>
                <p>导数与积分</p>
            </section>
            
            <section>
                <h2>导数定义</h2>
                <p>函数 $f(x)$ 在点 $x_0$ 处的导数：</p>
                <p>$$f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$</p>
            </section>
            
            <section>
                <h2>常见导数公式</h2>
                <table>
                    <tr>
                        <td>$(x^n)' = nx^{n-1}$</td>
                        <td>$(\sin x)' = \cos x$</td>
                    </tr>
                    <tr>
                        <td>$(e^x)' = e^x$</td>
                        <td>$(\ln x)' = \frac{1}{x}$</td>
                    </tr>
                </table>
            </section>
            
            <section>
                <h2>例题</h2>
                <p class="fragment">求 $f(x) = x^3 + 2x^2 - 5x + 1$ 的导数</p>
                <p class="fragment">解：$f'(x) = 3x^2 + 4x - 5$</p>
            </section>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/math/math.js"></script>
    <script>
        Reveal.initialize({
            hash: true,
            plugins: [ RevealMath.KaTeX ]
        });
    </script>
</body>
</html>
```

**关键点：**
- KaTeX渲染：美观的数学公式
- 表格排版：多个公式对比
- 逐步揭示：引导思考

---

### 案例8：时间线展示
**背景：** 公司发展历程、项目进度  

**完整代码：**
```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>发展历程</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/black.css">
    <style>
        .timeline {
            position: relative;
            padding: 20px 0;
        }
        .timeline-item {
            padding: 20px;
            margin: 20px 0;
            border-left: 3px solid #00d9ff;
            padding-left: 30px;
        }
        .timeline-year {
            color: #00d9ff;
            font-size: 1.5em;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>我们的故事</h1>
                <p>从创业到今天</p>
            </section>
            
            <section>
                <div class="timeline">
                    <div class="timeline-item fragment">
                        <div class="timeline-year">2018</div>
                        <p>公司成立，团队3人</p>
                    </div>
                    
                    <div class="timeline-item fragment">
                        <div class="timeline-year">2019</div>
                        <p>获得天使轮融资，团队扩展到15人</p>
                    </div>
                    
                    <div class="timeline-item fragment">
                        <div class="timeline-year">2020</div>
                        <p>产品上线，用户突破10万</p>
                    </div>
                    
                    <div class="timeline-item fragment">
                        <div class="timeline-year">2024</div>
                        <p>完成B轮融资，团队100+人</p>
                    </div>
                    
                    <div class="timeline-item fragment">
                        <div class="timeline-year">2025</div>
                        <p>进军国际市场</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script>Reveal.initialize({ hash: true });</script>
</body>
</html>
```

**关键点：**
- CSS时间线：视觉化历程
- 片段动画：逐年展示
- 颜色强调：关键年份

---

### 案例9：对比展示
**背景：** 产品对比、方案对比  

**完整代码：**
```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>方案对比</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/league.css">
    <style>
        .comparison {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }
        .comparison-item {
            padding: 20px;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
        }
        .comparison-item h3 {
            color: #42b983;
        }
    </style>
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>解决方案对比</h1>
                <p>选择最适合你的方案</p>
            </section>
            
            <section>
                <div class="comparison">
                    <div class="comparison-item fragment">
                        <h3>方案A：云端部署</h3>
                        <p>✅ 零维护成本</p>
                        <p>✅ 弹性扩展</p>
                        <p>✅ 高可用性</p>
                        <p>❌ 月度费用较高</p>
                        <p>❌ 依赖网络</p>
                    </div>
                    
                    <div class="comparison-item fragment">
                        <h3>方案B：本地部署</h3>
                        <p>✅ 一次性投入</p>
                        <p>✅ 数据完全自主</p>
                        <p>✅ 离线可用</p>
                        <p>❌ 需要专业运维</p>
                        <p>❌ 扩展成本高</p>
                    </div>
                </div>
            </section>
            
            <section>
                <h2>我们的建议</h2>
                <ul>
                    <li class="fragment">小型团队（<20人）→ 云端部署</li>
                    <li class="fragment">中型企业（20-100人）→ 混合部署</li>
                    <li class="fragment">大型企业（>100人）→ 本地部署</li>
                </ul>
            </section>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script>Reveal.initialize({ hash: true });</script>
</body>
</html>
```

**关键点：**
- Grid布局：左右对比
- 优缺点标识：清晰可见
- 建议总结：帮助决策

---

### 案例10：FAQ常见问题
**背景：** 产品使用指南、技术支持  

**完整代码：**
```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>常见问题</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/simple.css">
    <style>
        .faq-item {
            text-align: left;
            margin: 20px 0;
            padding: 15px;
            background: #f5f5f5;
            border-left: 4px solid #42b983;
        }
        .faq-question {
            font-weight: bold;
            color: #42b983;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>常见问题</h1>
                <p>快速找到答案</p>
            </section>
            
            <section>
                <div class="faq-item fragment">
                    <div class="faq-question">Q1: 如何注册账号？</div>
                    <p>点击首页"注册"按钮，填写邮箱和密码即可。</p>
                </div>
                
                <div class="faq-item fragment">
                    <div class="faq-question">Q2: 忘记密码怎么办？</div>
                    <p>在登录页点击"忘记密码"，输入邮箱接收重置链接。</p>
                </div>
                
                <div class="faq-item fragment">
                    <div class="faq-question">Q3: 如何升级到专业版？</div>
                    <p>进入"设置" → "套餐管理" → 选择专业版并支付。</p>
                </div>
            </section>
            
            <section>
                <div class="faq-item fragment">
                    <div class="faq-question">Q4: 支持哪些支付方式？</div>
                    <p>支持支付宝、微信支付、银行卡支付。</p>
                </div>
                
                <div class="faq-item fragment">
                    <div class="faq-question">Q5: 如何联系客服？</div>
                    <p>📧 邮箱：support@example.com<br>
                       💬 在线客服：工作日 9:00-18:00</p>
                </div>
            </section>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script>Reveal.initialize({ hash: true });</script>
</body>
</html>
```

**关键点：**
- 卡片式布局：清晰分组
- 颜色区分：问题突出
- 逐个显示：避免信息过载

---

## 高级案例

### 案例11：全景背景图演示
**背景：** 旅游推广、地产展示  

**完整代码见GitHub示例库**

---

### 案例12：视频背景循环播放
**背景：** 品牌宣传、产品发布  

**完整代码见GitHub示例库**

---

### 案例13：3D模型展示（Three.js集成）
**背景：** 工业设计、建筑展示  

**完整代码见GitHub示例库**

---

### 案例14：实时数据仪表盘
**背景：** 监控大屏、数据展示  

**完整代码见GitHub示例库**

---

### 案例15：多语言切换
**背景：** 国际化演示  

**完整代码见GitHub示例库**

---

## 专业案例

### 案例16-20：企业级完整解决方案

详见在线文档：https://revealjs.com/examples

---

## 真实项目案例

### 案例A：TED演讲式演示
**项目描述：** 模仿TED风格的演讲稿  
**使用方式：** 大屏投影、演讲者视图、备注提示  
**效果：** 专业、引人入胜  
**代码：** https://github.com/hakimel/reveal.js/wiki

### 案例B：技术大会主题演讲
**项目描述：** 某技术大会主讲嘉宾的演示  
**使用方式：** 代码高亮、实时演示、互动投票  
**效果：** 技术感强、互动性好  

### 案例C：在线课程平台
**项目描述：** MOOC平台的课程PPT  
**使用方式：** 嵌入视频、测验、讨论区链接  
**效果：** 完整的教学体验  

---

**💡 使用建议：**
- 从基础案例开始，逐步尝试进阶功能
- 根据实际需求修改代码，而非全盘照搬
- 多看官方示例库，学习最佳实践
- 遇到问题先查文档，再寻求社区帮助

**🔗 更多案例：**
- 官方示例：https://revealjs.com/demo
- 社区分享：https://github.com/hakimel/reveal.js/wiki/Example-Presentations
- Slides.com展示：https://slides.com/explore
