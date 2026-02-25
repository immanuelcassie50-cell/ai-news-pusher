# Reveal.js 快速启动模板库

> 5个常用场景的即用模板，复制即可开始

## 📋 模板列表

1. [技术分享模板](#模板1技术分享) - 代码高亮+深色主题
2. [教学课件模板](#模板2教学课件) - 公式支持+白色主题
3. [商业演讲模板](#模板3商业演讲) - 图片背景+自动播放
4. [会议报告模板](#模板4会议报告) - 表格数据+演讲者备注
5. [Markdown快速模板](#模板5markdown快速) - 纯文本快速创作

---

## 模板1：技术分享

### 适用场景
- 技术演讲、代码展示
- 开源项目介绍
- 编程教学

### 特点
- ✅ Monokai代码高亮
- ✅ 深色护眼主题
- ✅ 片段逐步显示
- ✅ 演讲者备注

### 完整代码

**template-tech-talk.html**
```html
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>技术分享 - Reveal.js</title>
    
    <!-- Reveal.js 核心CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <!-- 主题 - Moon深色主题 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/moon.css">
    <!-- 代码高亮 - Monokai主题 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/highlight/monokai.css">
    
    <style>
        /* 自定义样式 */
        .reveal h1 {
            text-transform: none;
            color: #42b983;
        }
        
        .reveal code {
            font-family: 'Monaco', 'Courier New', monospace;
        }
    </style>
</head>
<body>
    <div class="reveal">
        <div class="slides">
            
            <!-- 封面 -->
            <section>
                <h1>Python装饰器详解</h1>
                <h3>深入理解函数装饰器原理与应用</h3>
                <p>
                    <small>演讲人：张三 | 2025-01-20</small>
                </p>
                <aside class="notes">
                    开场白：大家好，今天我将为大家讲解Python中的装饰器。
                    预计时间：30分钟
                </aside>
            </section>
            
            <!-- 目录 -->
            <section>
                <h2>今天的内容</h2>
                <ol>
                    <li class="fragment">什么是装饰器</li>
                    <li class="fragment">装饰器的工作原理</li>
                    <li class="fragment">实际应用场景</li>
                    <li class="fragment">高级技巧</li>
                </ol>
                <aside class="notes">
                    简要介绍今天要讲的四个部分
                </aside>
            </section>
            
            <!-- 第一部分 -->
            <section>
                <section>
                    <h2>1. 什么是装饰器？</h2>
                    <p class="fragment">装饰器是一种设计模式</p>
                    <p class="fragment">可以在不修改原函数的情况下增加新功能</p>
                </section>
                
                <section>
                    <h3>基础示例</h3>
                    <pre><code class="python" data-trim data-line-numbers="1-7|1-3|5-7">
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
                    <aside class="notes">
                        先讲装饰器的定义（1-3行）
                        然后讲如何使用（5-7行）
                    </aside>
                </section>
            </section>
            
            <!-- 第二部分 -->
            <section>
                <section>
                    <h2>2. 工作原理</h2>
                    <p>装饰器本质上是一个返回函数的函数</p>
                </section>
                
                <section>
                    <h3>等价写法</h3>
                    <pre><code class="python" data-trim data-line-numbers>
# 使用@语法糖
@my_decorator
def func():
    pass

# 等价于
func = my_decorator(func)
                    </code></pre>
                </section>
                
                <section>
                    <h3>带参数的装饰器</h3>
                    <pre><code class="python" data-trim data-line-numbers>
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(times=3)
def greet(name):
    print(f"Hello, {name}!")
                    </code></pre>
                </section>
            </section>
            
            <!-- 第三部分 -->
            <section>
                <h2>3. 实际应用</h2>
                <ul>
                    <li class="fragment">
                        <strong>日志记录</strong>
                        <pre><code class="python" data-trim>
@log
def calculate(x, y):
    return x + y
                        </code></pre>
                    </li>
                    <li class="fragment">
                        <strong>性能测试</strong>
                        <pre><code class="python" data-trim>
@timer
def slow_function():
    # 耗时操作
    pass
                        </code></pre>
                    </li>
                    <li class="fragment">
                        <strong>权限验证</strong>
                        <pre><code class="python" data-trim>
@require_auth
def admin_panel():
    # 管理员操作
    pass
                        </code></pre>
                    </li>
                </ul>
            </section>
            
            <!-- 第四部分 -->
            <section>
                <h2>4. 高级技巧</h2>
                <ul>
                    <li class="fragment">使用 functools.wraps 保留元数据</li>
                    <li class="fragment">类装饰器</li>
                    <li class="fragment">装饰器链</li>
                    <li class="fragment">装饰器工厂</li>
                </ul>
            </section>
            
            <!-- 总结 -->
            <section>
                <h2>总结</h2>
                <ul>
                    <li class="fragment">装饰器 = 高阶函数 + 闭包</li>
                    <li class="fragment">用于功能增强，不修改原代码</li>
                    <li class="fragment">广泛应用于框架和库中</li>
                </ul>
                <p class="fragment" style="margin-top: 50px;">
                    <strong>谢谢！有问题吗？</strong>
                </p>
            </section>
            
        </div>
    </div>
    
    <!-- Reveal.js 核心JS -->
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <!-- 插件 -->
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/highlight/highlight.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/notes/notes.js"></script>
    
    <script>
        // 初始化Reveal.js
        Reveal.initialize({
            // 显示控制按钮
            controls: true,
            
            // 显示进度条
            progress: true,
            
            // 显示幻灯片编号
            slideNumber: 'c/t',
            
            // URL中反映当前幻灯片
            hash: true,
            
            // 转场效果
            transition: 'slide',
            
            // 加载插件
            plugins: [ RevealHighlight, RevealNotes ]
        });
    </script>
</body>
</html>
```

### 使用方法
1. 复制代码保存为 `presentation.html`
2. 双击打开或部署到服务器
3. 按 `S` 键打开演讲者视图
4. 修改内容替换为你的实际内容

---

## 模板2：教学课件

### 适用场景
- 学校课堂教学
- 培训课程
- 知识讲解

### 特点
- ✅ KaTeX数学公式
- ✅ 白色清晰主题
- ✅ 垂直嵌套结构
- ✅ 片段逐步揭示

### 完整代码

**template-teaching.html**
```html
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>教学课件 - Reveal.js</title>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/theme/white.css">
    
    <style>
        .reveal h1, .reveal h2 {
            color: #2c3e50;
        }
        
        .reveal .theorem {
            background: #e8f4f8;
            padding: 20px;
            border-left: 5px solid #3498db;
            margin: 20px 0;
        }
        
        .reveal .example {
            background: #fff3cd;
            padding: 20px;
            border-left: 5px solid #ffc107;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="reveal">
        <div class="slides">
            
            <!-- 封面 -->
            <section>
                <h1>勾股定理</h1>
                <h3>初中数学 第8章</h3>
                <p>
                    <small>授课教师：李老师 | 课时：2节</small>
                </p>
            </section>
            
            <!-- 学习目标 -->
            <section>
                <h2>学习目标</h2>
                <ul>
                    <li class="fragment">理解勾股定理的内容</li>
                    <li class="fragment">掌握勾股定理的证明方法</li>
                    <li class="fragment">学会运用勾股定理解决实际问题</li>
                </ul>
            </section>
            
            <!-- 主要内容 -->
            <section>
                <section>
                    <h2>一、定理内容</h2>
                </section>
                
                <section>
                    <div class="theorem">
                        <h3>勾股定理</h3>
                        <p>在直角三角形中，两条直角边的平方和等于斜边的平方。</p>
                        <p style="font-size: 1.5em; text-align: center;">
                            $a^2 + b^2 = c^2$
                        </p>
                    </div>
                    <img src="https://via.placeholder.com/400x300?text=直角三角形示意图" 
                         alt="直角三角形" 
                         style="margin-top: 20px;">
                </section>
                
                <section>
                    <h3>符号说明</h3>
                    <ul>
                        <li>$a$, $b$ - 直角边</li>
                        <li>$c$ - 斜边（最长边）</li>
                        <li>$\angle C = 90°$ - 直角</li>
                    </ul>
                </section>
            </section>
            
            <!-- 证明 -->
            <section>
                <section>
                    <h2>二、证明方法</h2>
                    <p>勾股定理有多种证明方法</p>
                </section>
                
                <section>
                    <h3>方法一：面积法</h3>
                    <p class="fragment">构造一个大正方形</p>
                    <p class="fragment">大正方形面积 = $(a+b)^2$</p>
                    <p class="fragment">内部四个直角三角形 + 小正方形</p>
                    <p class="fragment">$4 \times \frac{1}{2}ab + c^2 = (a+b)^2$</p>
                    <p class="fragment">化简得：$a^2 + b^2 = c^2$</p>
                </section>
            </section>
            
            <!-- 例题 -->
            <section>
                <section>
                    <h2>三、例题讲解</h2>
                </section>
                
                <section>
                    <div class="example">
                        <h3>例题1</h3>
                        <p>在直角三角形ABC中，$\angle C = 90°$，
                           $a = 3$，$b = 4$，求 $c$。</p>
                    </div>
                    
                    <div class="fragment">
                        <h4>解：</h4>
                        <p>根据勾股定理：</p>
                        <p>$c^2 = a^2 + b^2 = 3^2 + 4^2 = 9 + 16 = 25$</p>
                        <p>$c = 5$</p>
                    </div>
                </section>
                
                <section>
                    <div class="example">
                        <h3>例题2：实际应用</h3>
                        <p>一个梯子长5米，靠在墙上，梯子底端距墙3米，
                           梯子顶端距地面多高？</p>
                    </div>
                    
                    <div class="fragment">
                        <h4>解：</h4>
                        <p>设高度为 $h$ 米</p>
                        <p>$h^2 + 3^2 = 5^2$</p>
                        <p>$h^2 = 25 - 9 = 16$</p>
                        <p>$h = 4$ 米</p>
                    </div>
                </section>
            </section>
            
            <!-- 练习 -->
            <section>
                <h2>四、课堂练习</h2>
                <div class="example">
                    <p>1. 已知 $a=5$，$b=12$，求 $c$</p>
                    <p class="fragment">答案：$c = 13$</p>
                </div>
                
                <div class="example fragment">
                    <p>2. 已知 $c=10$，$a=6$，求 $b$</p>
                    <p class="fragment">答案：$b = 8$</p>
                </div>
            </section>
            
            <!-- 总结 -->
            <section>
                <h2>课堂小结</h2>
                <ul>
                    <li class="fragment">勾股定理：$a^2 + b^2 = c^2$</li>
                    <li class="fragment">适用于直角三角形</li>
                    <li class="fragment">可用于求第三边长</li>
                    <li class="fragment">广泛应用于实际问题</li>
                </ul>
                
                <p class="fragment" style="margin-top: 50px;">
                    <strong>课后作业：</strong>练习册 P56-58
                </p>
            </section>
            
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/dist/reveal.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/math/math.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/notes/notes.js"></script>
    
    <script>
        Reveal.initialize({
            controls: true,
            progress: true,
            slideNumber: true,
            hash: true,
            transition: 'convex',
            
            math: {
                mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
                config: 'TeX-AMS_HTML-full'
            },
            
            plugins: [ RevealMath.KaTeX, RevealNotes ]
        });
    </script>
</body>
</html>
```

---

## 模板3：商业演讲

**完整代码见：** `template-business.html` （文件过长，提供简化版）

### 核心特性
```html
<!-- 视频背景 -->
<section data-background-video="intro.mp4" data-background-video-loop>
    <h1>新产品发布</h1>
</section>

<!-- 自动播放配置 -->
<script>
Reveal.initialize({
    autoSlide: 5000,  // 5秒自动切换
    loop: true,       // 循环播放
    controls: false   // 隐藏控制按钮
});
</script>
```

---

## 模板4：会议报告

**完整代码见：** `template-report.html`

### 核心特性
```html
<!-- 演讲者备注详细版 -->
<section>
    <h2>Q4业绩</h2>
    <aside class="notes">
        重点强调：
        - 销售额增长20%
        - 新客户获取超预期
        - 下季度保持增长势头
        
        可能的提问：
        Q: 增长的主要原因？
        A: 新产品线+市场推广
    </aside>
</section>
```

---

## 模板5：Markdown快速

### 适用场景
- 快速起草
- 纯文本内容
- 简单演示

### 使用方法

**1. 创建 slides.md**
```markdown
# 我的演示

快速创建演示文稿

---

## 第二张

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

垂直嵌套内容

--

### 详细内容2

再深入一层

---

## 谢谢！

Q&A
```

**2. 创建 index.html**
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
    <script src="https://cdn.jsdelivr.net/npm/reveal.js@5.2.1/plugin/highlight/highlight.js"></script>
    <script>
        Reveal.initialize({
            hash: true,
            plugins: [ RevealMarkdown, RevealHighlight ]
        });
    </script>
</body>
</html>
```

---

## 🚀 快速开始步骤

### 方式1：在线使用（最简单）
1. 访问 https://slides.com
2. 注册账号
3. 开始创作

### 方式2：本地使用
```bash
# 1. 创建项目目录
mkdir my-presentation
cd my-presentation

# 2. 复制任一模板代码
# 保存为 index.html

# 3. 双击打开或启动服务器
python -m http.server 8000
# 访问 http://localhost:8000
```

### 方式3：在线CDN（零安装）
直接使用模板中的CDN链接，无需下载任何文件。

---

## 📝 自定义指南

### 替换内容
1. 找到 `<section>` 标签
2. 修改其中的HTML内容
3. 保存刷新查看效果

### 更换主题
```html
<!-- 将这一行 -->
<link rel="stylesheet" href="...theme/black.css">

<!-- 改为其他主题 -->
<link rel="stylesheet" href="...theme/white.css">
<link rel="stylesheet" href="...theme/league.css">
<link rel="stylesheet" href="...theme/sky.css">
```

### 添加插件
```javascript
// 在 Reveal.initialize 中添加
plugins: [ 
    RevealHighlight,  // 代码高亮
    RevealNotes,      // 演讲者备注
    RevealMath.KaTeX, // 数学公式
    RevealMarkdown    // Markdown支持
]
```

---

## 💡 最佳实践建议

1. **选对模板** - 根据场景选择最适合的模板
2. **保持简洁** - 每张幻灯片不超过7个要点
3. **统一风格** - 使用同一主题和配色
4. **测试预演** - 演讲前完整测试一遍
5. **备份方案** - 准备PDF备份以防万一

---

**🎯 现在就开始创作吧！**

选择一个模板，复制代码，开始你的演示之旅！
