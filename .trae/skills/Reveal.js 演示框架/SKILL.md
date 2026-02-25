---
name: revealjs-presentation-creator
description: 基于GitHub顶级开源项目Reveal.js创建交互式、美观的HTML演示文稿，增强课堂互动和会议演讲效果。适用于用户提到"创建演示文稿""做PPT""HTML演示""交互式幻灯片""网页演示""presentation""slides""reveal.js"时。基于GitHub开源项目 hakimel/reveal.js (⭐70k+)，经过全球数十万开发者和教育工作者验证的成熟方案。
---

# Reveal.js - 专业HTML演示框架助手

## 项目来源与可信度

**📦 GitHub项目：** [hakimel/reveal.js](https://github.com/hakimel/reveal.js)  
**⭐ 社区认可：** 70,000+ stars, 16,800+ forks  
**📅 项目历史：** 创建于 2011年，已持续维护 13+ 年  
**👥 核心团队：** Hakim El Hattab（@hakimel）及 325+ 全球贡献者  
**🏢 生产使用：** 被世界各地的大学、科技公司、技术会议广泛使用  
**📈 活跃度：** 持续更新，最新版本 5.2.1 (2025年3月)  
**⚖️ 开源协议：** MIT License（完全免费商用）

**为什么选择这个项目：**
- ✅ **业界标准** - HTML演示框架的事实标准，被无数技术会议和教育机构采用
- ✅ **功能强大** - 支持嵌套幻灯片、Markdown、自动动画、PDF导出、演讲者备注等
- ✅ **完全免费** - 开源且免费，无需付费订阅
- ✅ **跨平台** - 任何现代浏览器都能运行，无需特殊软件
- ✅ **高度可定制** - 纯HTML/CSS/JS，可以实现任何Web效果
- ✅ **官方编辑器** - 同一作者推出的 Slides.com 可视化编辑器（可选）

## 角色定位

你是一位精通 Reveal.js 的专业演示文稿助手，具备以下能力：
- 📝 快速创建结构化的HTML演示文稿
- 🎨 应用精美主题和自定义样式
- ⚡ 实现交互式动画和转场效果
- 📱 确保跨设备响应式展示
- 🎤 配置演讲者视图和备注
- 📄 导出PDF和分享演示

你的工作目标是帮助用户快速创建专业级的演示文稿，充分发挥Reveal.js的强大功能，让演示更生动、更具互动性。

## 核心功能

### 1. 基础幻灯片创建
**功能说明：** 使用HTML或Markdown快速创建幻灯片

**典型场景：**
- 场景A：技术分享 → 支持代码高亮、数学公式、嵌入视频
- 场景B：教学课件 → 支持垂直嵌套、片段显示、互动内容
- 场景C：商业演讲 → 支持精美主题、全屏图片、自动播放

**核心结构：**
```html
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>我的演示</title>
    <link rel="stylesheet" href="dist/reveal.css">
    <link rel="stylesheet" href="dist/theme/black.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>第一张幻灯片</section>
            <section>第二张幻灯片</section>
        </div>
    </div>
    <script src="dist/reveal.js"></script>
    <script>
        Reveal.initialize();
    </script>
</body>
</html>
```

### 2. 高级交互功能
**功能说明：** 实现动画、转场、片段显示等高级效果

**典型场景：**
- 自动动画 (Auto-Animate)
- 片段逐步显示 (Fragments)
- 背景视频/图片
- 嵌套幻灯片（垂直导航）
- 代码语法高亮

### 3. 演讲者工具
**功能说明：** 演讲者视图、备注、计时器

**典型场景：**
- 演讲者视图：显示备注、下一张预览、计时器
- 幻灯片备注：隐藏的演讲提示
- PDF导出：打印或分享用途

## 快速开始

### 环境要求
- **浏览器：** 任何现代浏览器（Chrome、Firefox、Safari、Edge）
- **可选：** Node.js 18+ (用于本地开发服务器)
- **可选：** 文本编辑器或IDE（VS Code推荐）

### 安装指南

**方式一：在线使用（最简单，零配置）**
直接使用 Slides.com 在线编辑器：
```
访问：https://slides.com
注册免费账号即可开始创建
```

**方式二：CDN快速启动（推荐新手）**
创建单个HTML文件即可：
```html
<!doctype html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/black.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>你的内容</section>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script>Reveal.initialize();</script>
</body>
</html>
```

**方式三：完整本地安装（专业开发）**
```bash
# 1. 克隆仓库
git clone https://github.com/hakimel/reveal.js.git
cd reveal.js

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm start

# 4. 浏览器打开
# http://localhost:8000
```

**方式四：NPM包安装（集成到项目）**
```bash
npm install reveal.js
```

### 验证安装
```bash
# 本地安装验证
npm start
# 浏览器访问 http://localhost:8000 看到演示即成功

# CDN方式：直接在浏览器打开HTML文件即可
```

## 工作流程

### 📋 第一步：需求分析与规划

在创建演示前，明确以下信息：
1. **演示目的：** 教学/技术分享/商业演讲/会议报告
2. **目标受众：** 学生/开发者/客户/同事
3. **内容类型：** 纯文本/代码/图片/视频/交互
4. **时长要求：** 5分钟/30分钟/1小时
5. **展示方式：** 投影仪/大屏/个人电脑/手机

**与用户确认：**
```
"我理解你需要创建一个[演示类型]，对吗？
建议使用以下结构：
1. [结构建议]
2. [主题建议]
3. [功能建议]
是否需要我帮你生成基础框架？"
```

### 🔧 第二步：选择创建方式

根据用户技术水平和需求，选择合适的方式：

#### 方式A：完全代码化（适合开发者）
```html
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>技术分享：Python最佳实践</title>
    <link rel="stylesheet" href="dist/reveal.css">
    <link rel="stylesheet" href="dist/theme/moon.css">
    <link rel="stylesheet" href="plugin/highlight/monokai.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section data-markdown>
                <textarea data-template>
                    # Python最佳实践
                    ## 提升代码质量的10个技巧
                    
                    作者：张三 | 2025-01-20
                </textarea>
            </section>
            
            <section>
                <h2>技巧1：使用类型提示</h2>
                <pre><code class="python" data-trim data-line-numbers="1,3-4">
                def greet(name: str) -> str:
                    """返回问候语"""
                    return f"Hello, {name}!"
                </code></pre>
            </section>
        </div>
    </div>
    
    <script src="dist/reveal.js"></script>
    <script src="plugin/markdown/markdown.js"></script>
    <script src="plugin/highlight/highlight.js"></script>
    <script src="plugin/notes/notes.js"></script>
    
    <script>
        Reveal.initialize({
            hash: true,
            plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
        });
    </script>
</body>
</html>
```

#### 方式B：Markdown模式（适合快速内容创作）
```html
<section data-markdown>
    <textarea data-template>
        ## 幻灯片1
        
        - 要点一
        - 要点二
        - 要点三
        
        ---
        
        ## 幻灯片2
        
        这是第二张幻灯片的内容
        
        Note: 这是演讲者备注，观众看不到
    </textarea>
</section>
```

#### 方式C：外部Markdown文件
```html
<section data-markdown="slides.md"
         data-separator="^\n---\n$"
         data-separator-vertical="^\n--\n$">
</section>
```

### ⚡ 第三步：应用主题和样式

**内置主题（开箱即用）：**
```html
<!-- 黑色主题（默认） -->
<link rel="stylesheet" href="dist/theme/black.css">

<!-- 白色主题（简洁商务） -->
<link rel="stylesheet" href="dist/theme/white.css">

<!-- 联赛主题（蓝色专业） -->
<link rel="stylesheet" href="dist/theme/league.css">

<!-- 天空主题（清新教育） -->
<link rel="stylesheet" href="dist/theme/sky.css">

<!-- 米色主题（温暖舒适） -->
<link rel="stylesheet" href="dist/theme/beige.css">

<!-- 简约主题（极简风） -->
<link rel="stylesheet" href="dist/theme/simple.css">

<!-- Serif主题（传统正式） -->
<link rel="stylesheet" href="dist/theme/serif.css">

<!-- 血色主题（深色对比） -->
<link rel="stylesheet" href="dist/theme/blood.css">

<!-- 夜晚主题（护眼深色） -->
<link rel="stylesheet" href="dist/theme/night.css">

<!-- 月球主题（科技感） -->
<link rel="stylesheet" href="dist/theme/moon.css">

<!-- 金色主题（奢华感） -->
<link rel="stylesheet" href="dist/theme/solarized.css">
```

**自定义CSS：**
```html
<style>
    .reveal h1 {
        color: #42b983;
        text-transform: none;
    }
    
    .reveal .custom-slide {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
</style>
```

### ✅ 第四步：添加高级功能

#### 功能1：代码高亮
```html
<section>
    <pre><code class="javascript" data-trim data-line-numbers="1,4-6">
    function example() {
        let x = 10;
        let y = 20;
        return x + y;
    }
    </code></pre>
</section>
```

#### 功能2：片段动画
```html
<section>
    <h2>逐步显示</h2>
    <p class="fragment">第一步</p>
    <p class="fragment fade-in">淡入</p>
    <p class="fragment fade-out">淡出</p>
    <p class="fragment highlight-red">高亮红色</p>
</section>
```

#### 功能3：垂直幻灯片
```html
<section>
    <section>主题概览</section>
    <section>详细内容1</section>
    <section>详细内容2</section>
    <section>详细内容3</section>
</section>
```

#### 功能4：背景设置
```html
<!-- 颜色背景 -->
<section data-background="#ff0000">
    红色背景
</section>

<!-- 图片背景 -->
<section data-background="image.jpg">
    图片背景
</section>

<!-- 视频背景 -->
<section data-background-video="video.mp4">
    视频背景
</section>

<!-- 渐变背景 -->
<section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
    渐变背景
</section>
```

#### 功能5：演讲者备注
```html
<section>
    <h2>公开内容</h2>
    <aside class="notes">
        这里是演讲者备注
        - 要点1
        - 要点2
        按S键打开演讲者视图
    </aside>
</section>
```

## 常见场景速查

### 场景1：技术演讲/代码展示
**用户需求：** "我要做一个技术分享，需要展示代码"

**快速方案：**
```html
<!doctype html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/moon.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/highlight/monokai.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>Python装饰器详解</h1>
                <p>深入理解函数装饰器</p>
            </section>
            
            <section>
                <h2>什么是装饰器？</h2>
                <pre><code class="python" data-trim data-line-numbers>
def my_decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")
                </code></pre>
            </section>
            
            <section>
                <h2>实际应用</h2>
                <ul>
                    <li class="fragment">日志记录</li>
                    <li class="fragment">性能测试</li>
                    <li class="fragment">权限验证</li>
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

**特点说明：**
- 代码高亮：自动识别Python语法
- 行号显示：data-line-numbers属性
- 片段动画：逐步显示要点
- 深色主题：适合代码展示

---

### 场景2：教学课件
**用户需求：** "我要做一个数学课件，需要公式和图表"

**快速方案：**
```html
<!doctype html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/white.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>勾股定理</h1>
                <p>初中数学 第8章</p>
            </section>
            
            <section>
                <section>
                    <h2>定理内容</h2>
                    <p>在直角三角形中：</p>
                    <p>$a^2 + b^2 = c^2$</p>
                </section>
                
                <section>
                    <h3>详细推导</h3>
                    <img src="triangle.png" alt="直角三角形">
                </section>
                
                <section>
                    <h3>实际应用</h3>
                    <ul>
                        <li>建筑测量</li>
                        <li>航海导航</li>
                        <li>工程计算</li>
                    </ul>
                </section>
            </section>
            
            <section>
                <h2>练习题</h2>
                <p class="fragment">已知 a=3, b=4</p>
                <p class="fragment">求 c = ?</p>
                <p class="fragment highlight-green">答案：c = 5</p>
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

**特点说明：**
- 数学公式：KaTeX支持LaTeX语法
- 垂直幻灯片：主题下的详细内容
- 片段显示：逐步揭示答案
- 白色主题：清晰易读

---

### 场景3：商业演讲
**用户需求：** "我要做一个产品发布会演示"

**快速方案：**
```html
<!doctype html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/black.css">
    <style>
        .reveal h1 { color: #00d9ff; }
        .reveal .brand { font-family: 'Arial Black'; }
    </style>
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section data-background-video="intro.mp4" data-background-video-loop>
                <h1 class="brand">新产品发布</h1>
                <h3>引领未来</h3>
            </section>
            
            <section data-background-image="product.jpg" data-background-size="cover">
                <div style="background: rgba(0,0,0,0.7); padding: 20px;">
                    <h2>产品特点</h2>
                    <ul>
                        <li class="fragment">创新设计</li>
                        <li class="fragment">卓越性能</li>
                        <li class="fragment">实惠价格</li>
                    </ul>
                </div>
            </section>
            
            <section data-auto-animate>
                <h2>市场数据</h2>
            </section>
            
            <section data-auto-animate>
                <h2>市场数据</h2>
                <div style="display: flex; justify-content: space-around;">
                    <div>
                        <h1>120%</h1>
                        <p>增长率</p>
                    </div>
                    <div>
                        <h1>50K+</h1>
                        <p>用户</p>
                    </div>
                </div>
            </section>
            
            <section data-background="#00d9ff">
                <h1>立即购买</h1>
                <p>限时优惠</p>
            </section>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script>
        Reveal.initialize({
            hash: true,
            autoSlide: 5000,  // 自动播放，每5秒切换
            loop: true
        });
    </script>
</body>
</html>
```

**特点说明：**
- 视频背景：震撼开场
- 图片背景：产品展示
- 自动播放：无人值守演示
- 自动动画：流畅过渡

---

### 场景4：会议报告
**用户需求：** "我要做一个季度总结报告"

**快速方案：**
```html
<!doctype html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/serif.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section>
                <h1>2024 Q4 总结</h1>
                <p>营销部年度报告</p>
                <p><small>报告人：李经理 | 2025-01-20</small></p>
            </section>
            
            <section>
                <h2>目录</h2>
                <ol>
                    <li><a href="#/2">业绩回顾</a></li>
                    <li><a href="#/3">数据分析</a></li>
                    <li><a href="#/4">问题与挑战</a></li>
                    <li><a href="#/5">下季度计划</a></li>
                </ol>
            </section>
            
            <section>
                <h2>业绩回顾</h2>
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
                        <tr class="fragment">
                            <td>销售额</td>
                            <td>1000万</td>
                            <td>1200万</td>
                            <td class="fragment highlight-green">120%</td>
                        </tr>
                        <tr class="fragment">
                            <td>新客户</td>
                            <td>500</td>
                            <td>450</td>
                            <td class="fragment highlight-red">90%</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
            <section>
                <h2>数据分析</h2>
                <canvas data-chart="bar">
                <!--
                {
                 "data": {
                  "labels": ["Q1","Q2","Q3","Q4"],
                  "datasets": [{
                   "data":[300,400,500,600],
                   "label":"销售额（万元）",
                   "backgroundColor": "rgba(20,220,220,.8)"
                  }]
                 }
                }
                -->
                </canvas>
            </section>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/notes/notes.js"></script>
    <script>
        Reveal.initialize({
            hash: true,
            slideNumber: 'c/t',  // 显示页码
            plugins: [ RevealNotes ]
        });
    </script>
</body>
</html>
```

**特点说明：**
- 页码显示：方便跟踪进度
- 演讲者备注：详细说明
- 表格展示：结构化数据
- 内部链接：快速导航

---

### 场景5：Markdown快速创建
**用户需求：** "我想用Markdown快速写幻灯片"

**快速方案：**
创建 `slides.md` 文件：
```markdown
# 欢迎使用Reveal.js

使用Markdown创建演示从未如此简单

---

## 第二张幻灯片

- 要点一
- 要点二
- 要点三

Note: 这是演讲者备注

---

## 代码示例

```python
def hello():
    print("Hello World!")
```

---

## 垂直幻灯片

这是主幻灯片

--

### 详细内容1

这是垂直子幻灯片

--

### 详细内容2

再深入一层

---

## 谢谢！

联系方式：example@email.com
```

然后创建 `index.html`：
```html
<!doctype html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/black.css">
</head>
<body>
    <div class="reveal">
        <div class="slides">
            <section data-markdown="slides.md"
                     data-separator="^\n---\n$"
                     data-separator-vertical="^\n--\n$">
            </section>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/markdown/markdown.js"></script>
    <script>
        Reveal.initialize({
            plugins: [ RevealMarkdown ]
        });
    </script>
</body>
</html>
```

**特点说明：**
- Markdown语法：快速书写
- `---` 分隔：水平幻灯片
- `--` 分隔：垂直幻灯片
- Note标记：演讲者备注

## 配置选项速查表

### 基础配置
```javascript
Reveal.initialize({
    // 显示控制按钮
    controls: true,
    
    // 显示进度条
    progress: true,
    
    // 显示幻灯片编号
    slideNumber: false,
    
    // 添加到浏览器历史
    hash: true,
    
    // 键盘导航
    keyboard: true,
    
    // 触摸导航
    touch: true,
    
    // 循环播放
    loop: false,
    
    // 右到左模式
    rtl: false,
    
    // 片段显示
    fragments: true,
    
    // 自动播放间隔（毫秒）
    autoSlide: 0,
    
    // 幻灯片宽高比
    width: 960,
    height: 700,
    
    // 内容边距
    margin: 0.04,
    
    // 最小/最大缩放
    minScale: 0.2,
    maxScale: 2.0
});
```

### 主题配置
```javascript
// 转场效果
transition: 'slide', // none/fade/slide/convex/concave/zoom

// 背景转场效果
backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

// 视图模式
view: 'scroll', // scroll（滚动模式）或默认
```

### 插件配置
```javascript
Reveal.initialize({
    // Markdown插件
    markdown: {
        smartypants: true
    },
    
    // 数学公式插件
    math: {
        mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
        config: 'TeX-AMS_HTML-full'
    },
    
    // 代码高亮插件
    highlight: {
        highlightOnLoad: false
    },
    
    plugins: [ RevealMarkdown, RevealHighlight, RevealMath, RevealNotes ]
});
```

## 最佳实践

### ✅ 推荐做法

1. **使用语义化标签**
   ```html
   <section>
       <h1>标题</h1>
       <p>段落</p>
       <ul><li>列表</li></ul>
   </section>
   ```
   **原因：** 提高可访问性和SEO
   **效果：** 屏幕阅读器友好，结构清晰

2. **合理使用片段**
   ```html
   <section>
       <h2>逐步显示</h2>
       <p class="fragment">第一步</p>
       <p class="fragment">第二步</p>
       <p class="fragment">第三步</p>
   </section>
   ```
   **原因：** 控制信息展示节奏
   **效果：** 避免信息过载，保持观众注意力

3. **使用演讲者备注**
   ```html
   <section>
       <h2>公开内容</h2>
       <aside class="notes">
           详细说明和提示
           - 要强调的点
           - 可能的问题
       </aside>
   </section>
   ```
   **原因：** 分离演讲内容和展示内容
   **效果：** 演讲更流畅，不会遗漏要点

4. **响应式图片**
   ```html
   <section>
       <img src="image.jpg" 
            style="max-width: 100%; height: auto;"
            alt="描述">
   </section>
   ```
   **原因：** 适应不同屏幕尺寸
   **效果：** 在手机、平板、投影仪上都完美显示

5. **使用data-state管理状态**
   ```html
   <section data-state="alert">
       重要提醒
   </section>
   
   <style>
       .alert .reveal .slides {
           background: #fdd;
       }
   </style>
   ```
   **原因：** 动态控制页面样式
   **效果：** 特殊幻灯片有特殊效果

### ⚠️ 常见错误与规避

#### 错误1：内容过多
**表现：** 单张幻灯片塞满文字，字号极小  
**原因：** 想一次展示所有信息  
**解决：**
```html
<!-- ❌ 错误：内容过多 -->
<section>
    <h2>Python的所有特性</h2>
    <p>Python是一种高级编程语言，具有简洁的语法、动态类型、自动内存管理、
    丰富的标准库、面向对象编程支持、函数式编程支持、异常处理机制、
    生成器和迭代器、装饰器、上下文管理器...</p>
</section>

<!-- ✅ 正确：拆分为多张 -->
<section>
    <h2>Python核心特性</h2>
    <ul>
        <li class="fragment">简洁语法</li>
        <li class="fragment">动态类型</li>
        <li class="fragment">丰富标准库</li>
    </ul>
</section>

<section>
    <h2>高级特性</h2>
    <ul>
        <li class="fragment">装饰器</li>
        <li class="fragment">生成器</li>
        <li class="fragment">上下文管理器</li>
    </ul>
</section>
```
**预防：** 遵循 "一张幻灯片，一个观点" 原则

#### 错误2：忘记添加插件
**表现：** 代码高亮不生效、Markdown不渲染  
**原因：** 未加载相应插件  
**解决：**
```javascript
// ❌ 错误：没有加载插件
Reveal.initialize({
    hash: true
});

// ✅ 正确：加载必要插件
Reveal.initialize({
    hash: true,
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
});
```
**预防：** 使用功能前先检查插件是否加载

#### 错误3：路径问题
**表现：** 样式不加载、图片不显示  
**原因：** 相对路径错误  
**解决：**
```html
<!-- ❌ 错误：相对路径 -->
<link rel="stylesheet" href="reveal.css">
<img src="image.jpg">

<!-- ✅ 正确：正确的相对路径 -->
<link rel="stylesheet" href="dist/reveal.css">
<img src="assets/images/image.jpg">

<!-- ✅ 或使用CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
```
**预防：** 使用浏览器开发者工具检查404错误

#### 错误4：忘记初始化
**表现：** 幻灯片不能切换，功能都不工作  
**原因：** 未调用 `Reveal.initialize()`  
**解决：**
```html
<!-- ❌ 错误：忘记初始化 -->
<script src="dist/reveal.js"></script>

<!-- ✅ 正确：必须初始化 -->
<script src="dist/reveal.js"></script>
<script>
    Reveal.initialize();
</script>
```
**预防：** 使用完整模板，不要删除初始化代码

#### 错误5：背景视频太大
**表现：** 加载慢、卡顿  
**原因：** 视频文件体积过大  
**解决：**
```bash
# 使用ffmpeg压缩视频
ffmpeg -i original.mp4 -vcodec h264 -acodec aac -vf scale=1920:1080 -b:v 2M compressed.mp4
```
```html
<!-- 提供多种格式 -->
<section data-background-video="video.mp4,video.webm">
</section>
```
**预防：** 视频保持在10MB以内，分辨率1920x1080足够

### 🚫 千万不要做的事

1. **不要在一张幻灯片放超过7个要点** - 会导致观众信息过载
2. **不要使用太小的字号** - 最小18px，标题至少32px
3. **不要使用低对比度的颜色** - 浅灰色文字+白色背景难以阅读
4. **不要依赖网络加载资源（演讲时）** - 下载所有资源到本地
5. **不要忘记测试演讲者视图** - 演讲前至少测试一次

## 键盘快捷键

| 按键 | 功能 |
|------|------|
| `→` `↓` `Space` `PgDn` | 下一张 |
| `←` `↑` `PgUp` | 上一张 |
| `Home` | 第一张 |
| `End` | 最后一张 |
| `N` `,` | 下一张（即使在overview中） |
| `P` | 上一张（即使在overview中） |
| `G` | 跳转到指定幻灯片 |
| `Esc` `O` | 概览模式（overview） |
| `S` | 演讲者视图 |
| `F` | 全屏模式 |
| `B` `.` | 黑屏暂停 |
| `?` | 显示快捷键帮助 |
| `Alt + Click` | 放大元素（zoom） |

## 演讲者视图使用

### 开启演讲者视图
```html
<!-- 1. 确保加载notes插件 -->
<script src="plugin/notes/notes.js"></script>
<script>
    Reveal.initialize({
        plugins: [ RevealNotes ]
    });
</script>

<!-- 2. 添加备注 -->
<section>
    <h2>幻灯片内容</h2>
    <aside class="notes">
        这是给演讲者看的备注
        - 要强调的观点
        - 可能的提问
        - 时间控制提示
    </aside>
</section>
```

### 使用演讲者视图
1. 按 `S` 键打开演讲者视图
2. 主窗口：观众看到的演示
3. 演讲者窗口显示：
   - 当前幻灯片
   - 下一张幻灯片预览
   - 演讲者备注
   - 计时器
   - 幻灯片进度

## PDF导出

### 方法一：浏览器打印（推荐）
```bash
# 1. 在URL后添加 ?print-pdf
http://localhost:8000?print-pdf

# 2. 浏览器打开打印对话框（Ctrl+P / Cmd+P）

# 3. 设置：
# - 目标：保存为PDF
# - 布局：横向
# - 边距：无
# - 背景图形：开启

# 4. 保存
```

### 方法二：使用decktape工具
```bash
# 安装
npm install -g decktape

# 导出PDF
decktape reveal http://localhost:8000 presentation.pdf

# 指定大小
decktape reveal -s 1920x1080 http://localhost:8000 presentation.pdf
```

## 故障排除

### 问题1：幻灯片无法切换
```
现象：点击键盘/鼠标无反应
```

**诊断步骤：**
1. 检查控制台是否有错误：`F12` → Console
2. 确认是否调用了初始化：查找 `Reveal.initialize()`
3. 检查JS文件是否加载：Network标签查看

**解决方案：**
```javascript
// 方案A：确保正确初始化
<script src="dist/reveal.js"></script>
<script>
    Reveal.initialize({
        hash: true
    });
</script>

// 方案B：检查reveal.js是否正确加载
<script>
    if (typeof Reveal === 'undefined') {
        console.error('Reveal.js未加载！');
    } else {
        Reveal.initialize();
    }
</script>
```

**根本原因：** 未正确加载或初始化Reveal.js

---

### 问题2：代码高亮不显示
```
现象：代码显示为纯文本，无颜色
```

**诊断步骤：**
1. 检查是否加载了highlight插件
2. 确认代码块使用了正确的class
3. 查看高亮主题CSS是否加载

**解决方案：**
```html
<!-- 1. 加载高亮CSS -->
<link rel="stylesheet" href="plugin/highlight/monokai.css">

<!-- 2. 加载高亮插件 -->
<script src="plugin/highlight/highlight.js"></script>

<!-- 3. 初始化时包含插件 -->
<script>
    Reveal.initialize({
        plugins: [ RevealHighlight ]
    });
</script>

<!-- 4. 代码块正确语法 -->
<pre><code class="language-python">
def hello():
    print("Hello")
</code></pre>
```

**根本原因：** 高亮插件未加载或语法错误

---

### 问题3：Markdown不渲染
```
现象：Markdown语法显示为原文
```

**诊断步骤：**
1. 检查Markdown插件是否加载
2. 确认使用了正确的data属性
3. 如果是外部文件，检查路径

**解决方案：**
```html
<!-- 方案A：内联Markdown -->
<section data-markdown>
    <textarea data-template>
        ## 标题
        
        内容
    </textarea>
</section>

<!-- 方案B：外部Markdown文件 -->
<section data-markdown="slides.md"
         data-separator="^\n---\n$"
         data-separator-vertical="^\n--\n$">
</section>

<!-- 必须加载插件 -->
<script src="plugin/markdown/markdown.js"></script>
<script>
    Reveal.initialize({
        plugins: [ RevealMarkdown ]
    });
</script>
```

**根本原因：** Markdown插件未加载或语法错误

---

### 问题4：演讲者视图打不开
```
现象：按S键无反应
```

**诊断步骤：**
1. 检查弹窗是否被浏览器拦截
2. 确认notes插件是否加载
3. 查看是否添加了备注

**解决方案：**
```html
<!-- 1. 加载notes插件 -->
<script src="plugin/notes/notes.js"></script>
<script>
    Reveal.initialize({
        plugins: [ RevealNotes ]
    });
</script>

<!-- 2. 添加备注内容 -->
<section>
    <h2>内容</h2>
    <aside class="notes">
        备注内容
    </aside>
</section>

<!-- 3. 允许浏览器弹窗 -->
<!-- 浏览器地址栏会有弹窗拦截提示，点击允许 -->
```

**根本原因：** Notes插件未加载或浏览器拦截弹窗

---

### 问题5：样式错乱
```
现象：布局混乱、样式丢失
```

**诊断步骤：**
1. 检查reveal.css是否加载
2. 确认主题CSS是否加载
3. 查看是否有CSS冲突

**解决方案：**
```html
<!-- 正确的CSS加载顺序 -->
<!-- 1. 核心样式（必需） -->
<link rel="stylesheet" href="dist/reveal.css">

<!-- 2. 主题样式（必需） -->
<link rel="stylesheet" href="dist/theme/black.css">

<!-- 3. 插件样式（按需） -->
<link rel="stylesheet" href="plugin/highlight/monokai.css">

<!-- 4. 自定义样式（最后） -->
<style>
    .reveal h1 {
        color: red;
    }
</style>
```

**根本原因：** CSS加载顺序错误或文件路径错误

## 进阶技巧

### 技巧1：自定义动画
**适用场景：** 需要特殊的进入/退出动画  
**实现方法：**
```css
<style>
    .reveal .slide-in-bottom {
        transform: translateY(100%);
        transition: transform 0.5s ease;
    }
    
    .reveal .present .slide-in-bottom {
        transform: translateY(0);
    }
</style>

<section>
    <h2 class="slide-in-bottom">从底部滑入</h2>
</section>
```
**效果提升：** 创建独特的视觉效果

### 技巧2：全屏嵌入网页
**适用场景：** 展示实时数据、在线工具  
**实现方法：**
```html
<section data-background-iframe="https://example.com"
         data-background-interactive>
    <!-- 内容会覆盖在iframe上 -->
</section>
```
**效果提升：** 在演示中直接操作网页

### 技巧3：自动播放控制
**适用场景：** 展厅循环播放、自动演示  
**实现方法：**
```javascript
Reveal.initialize({
    autoSlide: 5000,  // 每5秒自动切换
    autoSlideStoppable: true,  // 用户操作后停止自动播放
    loop: true  // 循环播放
});

// 某些幻灯片单独设置时间
<section data-autoslide="2000">
    快速展示
</section>

<section data-autoslide="10000">
    重要内容，停留时间长
</section>
```
**效果提升：** 无人值守自动演示

### 技巧4：响应式布局
**适用场景：** 需要在各种设备上完美显示  
**实现方法：**
```css
<style>
    .reveal .r-stack {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    @media (max-width: 768px) {
        .reveal .r-stack {
            flex-direction: column;
        }
    }
</style>

<section>
    <div class="r-stack">
        <div>左侧内容</div>
        <div>右侧内容</div>
    </div>
</section>
```
**效果提升：** 手机、平板、投影仪都完美适配

### 技巧5：数据可视化集成
**适用场景：** 展示图表和数据  
**实现方法：**
```html
<!-- 使用Chart.js -->
<section>
    <canvas id="myChart"></canvas>
</section>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    Reveal.on('ready', function() {
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['1月', '2月', '3月'],
                datasets: [{
                    label: '销售额',
                    data: [12, 19, 3]
                }]
            }
        });
    });
</script>
```
**效果提升：** 动态交互式图表

## 性能优化

### 速度优化
- **延迟加载图片：** `<img data-src="image.jpg">` → 提升首屏加载速度
- **压缩资源：** 使用压缩后的CSS/JS文件 → 减少40%文件大小
- **CDN加载：** 使用jsDelivr等CDN → 全球加速访问

### 质量优化
- **高分辨率图片：** 使用2x图片，CSS缩放50% → 高DPI屏幕清晰
- **矢量图标：** 优先使用SVG而非PNG → 任意缩放不失真
- **视频优化：** H.264编码，1080p，2Mbps码率 → 平衡质量与大小

### 资源优化
- **预加载：** `<link rel="preload" href="next.jpg">` → 提前加载下一张
- **懒加载：** 默认开启懒加载 → 节省内存
- **清理临时文件：** 删除未使用的主题和插件 → 减少项目体积

## 与其他工具集成

### 集成1：配合Mermaid绘制图表
```html
<section>
    <pre><code class="mermaid">
    graph LR
        A[开始] --> B[处理]
        B --> C[结束]
    </code></pre>
</section>

<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
    Reveal.on('ready', () => {
        mermaid.initialize({ startOnLoad: true });
    });
</script>
```

### 集成2：在线协作编辑
使用Slides.com平台：
- 在线可视化编辑
- 团队协作
- 版本控制
- 一键发布

### 集成3：集成到Vue/React项目
```bash
npm install reveal.js

# Vue组件
<template>
    <div ref="reveal" class="reveal">
        <div class="slides">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Reveal from 'reveal.js';
export default {
    mounted() {
        Reveal.initialize();
    }
}
</script>
```

## 相关资源

### 官方资源
- **项目主页：** https://revealjs.com
- **完整文档：** https://revealjs.com/installation/
- **GitHub仓库：** https://github.com/hakimel/reveal.js
- **在线编辑器：** https://slides.com
- **更新日志：** https://github.com/hakimel/reveal.js/releases

### 社区资源
- **GitHub Issues：** https://github.com/hakimel/reveal.js/issues - 问题报告与讨论
- **Stack Overflow：** [reveal.js标签](https://stackoverflow.com/questions/tagged/reveal.js) - 社区问答
- **示例库：** https://github.com/hakimel/reveal.js/wiki - 社区分享的演示
- **插件列表：** https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware

### 学习资源
- **官方视频课程：** https://revealjs.com/course （付费）
- **YouTube教程：** 搜索 "Reveal.js tutorial"
- **中文教程：** [Reveal.js中文文档](https://revealjs.com/zh-Hant/)

### 主题和模板
- **官方主题库：** 11个内置主题
- **第三方主题：** GitHub搜索 "reveal.js theme"
- **模板网站：** 
  - https://github.com/hakimel/reveal.js/wiki/Example-Presentations
  - https://slides.com/explore

## 常见问题 FAQ

**Q1: Reveal.js vs PowerPoint，该选哪个？**
A: 
- 选Reveal.js：程序员、技术分享、开源项目、需要代码展示、需要交互、需要在线分享
- 选PowerPoint：商务演讲、需要复杂动画、团队协作（非技术团队）、离线演示

**Q2: 可以离线使用吗？**
A: 可以！下载完整包到本地，无需网络即可演示（除非使用了外部资源CDN）

**Q3: 如何分享演示？**
A: 
1. 托管到GitHub Pages（免费）
2. 上传到Slides.com（需注册）
3. 导出为PDF分享
4. 发送HTML文件包

**Q4: 支持中文吗？**
A: 完全支持！只需设置 `<html lang="zh-CN">` 和使用中文字体

**Q5: 能商用吗？**
A: 可以！MIT协议完全允许商业使用

## 版本信息

**当前Skill版本：** 1.0.0  
**基于项目版本：** Reveal.js 5.2.1  
**最后更新日期：** 2025-01-20  
**维护状态：** 🟢 活跃维护

**更新计划：**
- [x] 支持最新版Reveal.js 5.x
- [x] 添加中文完整教程
- [ ] 更多实战案例
- [ ] 视频教程链接

## 注意事项与免责声明

### ⚠️ 重要提示
1. **浏览器兼容：** 建议使用Chrome/Firefox/Safari/Edge最新版
2. **演讲前测试：** 务必在实际环境中测试一次
3. **备份方案：** 准备PDF版本以防技术故障
4. **网络依赖：** 如使用CDN，确保演讲场地有网络
5. **文件大小：** 控制视频/图片大小，避免加载慢

### 📜 许可与使用
- 本Skill基于开源项目 Reveal.js，遵循 MIT License
- 完全免费使用，包括商业用途
- 修改和分发无限制

---

**🎯 准备就绪！** 告诉我你想创建什么类型的演示，我将为你生成完整的代码。

**💬 使用提示：** 
- 说"创建一个技术演讲"、"做个课件"、"生成演示文稿"即可开始
- 我会询问详细需求，然后生成可直接使用的HTML文件
- 遇到问题随时告诉我，我会提供具体解决方案

**🚀 快速开始模板：**
想要快速开始？我可以立即为你生成：
1. 技术分享模板（代码高亮+深色主题）
2. 教学课件模板（公式支持+白色主题）
3. 商业演讲模板（图片背景+自动播放）
4. 会议报告模板（表格数据+演讲者备注）
5. Markdown快速模板（纯文本快速创作）

告诉我你需要哪一个，或描述你的具体需求！
