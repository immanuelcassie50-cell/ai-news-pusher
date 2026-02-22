# 🤖 AI News 每日资讯推送

一个优雅的AI新闻聚合网站，自动抓取全球AI/科技新闻，翻译成中文并推送到微信。

![Preview](https://img.shields.io/badge/Design-magazine%20style-blueviolet)
![Platform-Vercel](https://img.shields.io/badge/Platform-Vercel-brightgreen)

## ✨ 特性

- 🎨 **杂志风设计** - 极致美学的浅色系排版
- 🌐 **自动抓取** - 每日从HackerNews获取AI/科技新闻
- 🔄 **自动翻译** - 英文新闻自动翻译成中文
- 📱 **微信推送** - 每日自动推送到微信
- ⚡ **免费部署** - Vercel + GitHub Actions 零成本

---

## 🚀 快速部署

### 1. 获取ServerChan密钥（推荐用于微信推送）

1. 访问 [ServerChan](https://sct.ftqq.com/)
2. 使用微信扫码登录
3. 点击「发送消息」→ 获取你的 `SendKey`
4. 复制 SendKey（例如：`SCT1234567890abcdefghijklmn`）

### 2. 部署到Vercel

1. 访问 https://vercel.com
2. 用GitHub账号登录
3. 点击 "New Project"
4. 选择你的GitHub仓库
5. 在Environment Variables中添加：
   - `SERVERCHAN_SENDKEY` = 你刚才获取的SendKey
6. 点击 "Deploy"

### 3. 配置GitHub定时任务

1. 部署完成后，复制你的API地址（例如：`https://your-project.vercel.app/api/news`）
2. 在GitHub仓库的Settings → Secrets → Actions中添加：
   - 名称：`VERCEL_API_URL`
   - 值：粘贴上面的API地址
3. 每天早上8点会自动运行

---

## 📖 使用方法

### 访问网站

部署完成后，访问 `https://your-project.vercel.app`

你会看到精美的杂志风新闻页面

### 手动触发推送

在浏览器直接访问：`https://your-project.vercel.app/api/news`

---

## ⚙️ 配置说明

### 环境变量

| 变量名 | 必填 | 说明 |
|--------|------|------|
| `SERVERCHAN_SENDKEY` | 推荐 | ServerChan的SendKey，用于微信推送 |

### 定时任务

默认每天 **早上8点（北京时间）** 自动运行

---

## 📁 项目结构

```
ai-news-pusher/
├── api/
│   └── news.js          # 核心API（抓取+翻译+推送）
├── public/
│   └── index.html       # 前端页面（杂志风设计）
├── .github/
│   └── workflows/
│       └── daily-news.yml  # 定时任务
├── vercel.json          # Vercel配置
├── package.json         # 项目依赖
└── README.md            # 说明文档
```

---

## ❓ 常见问题

### Q: 微信收不到推送？

1. 检查是否配置了 `SERVERCHAN_SENDKEY`
2. 确认ServerChan账号已绑定微信

### Q: 翻译失败？

免费翻译API有频率限制，失败时会返回原文

---

## 📝 技术栈

- **前端**: 纯HTML/CSS/JS，杂志风设计
- **后端**: Vercel Serverless Functions (Node.js)
- **数据源**: HackerNews API
- **翻译**: MyMemory API (免费)
- **推送**: ServerChan (免费微信推送)

---

## 许可证

MIT License - 欢迎自由使用和修改！
