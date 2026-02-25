# AI新闻每日推送 - 部署指南

## 部署步骤

### 第一步：上传到GitHub
1. 创建一个新的GitHub仓库
2. 把这3个文件上传上去：
   - `api/news.js`
   - `vercel.json`
   - `package.json`

### 第二步：部署到Vercel
1. 访问 https://vercel.com
2. 用GitHub账号登录
3. 点击 "New Project"
4. 选择刚才创建的仓库
5. 点击 "Deploy"

### 第三步：获取API地址
1. 部署完成后，Vercel会给你一个URL，类似：https://your-project.vercel.app
2. 你的API地址是：https://your-project.vercel.app/api/news

### 第四步：配置GitHub定时触发
1. 打开你的GitHub仓库
2. 进入 Settings → Secrets and variables → Actions
3. 点击 "New repository secret"
4. 名称：`VERCEL_API_URL`
5. 值：填入上面的API地址（https://your-project.vercel.app/api/news）

### 第五步：关注测试号
1. 微信扫描测试号二维码关注
2. 扫码后会自动成为测试号的关注用户

---

## 完成后
- 每天早上8点（北京时间）会自动抓取AI新闻
- 翻译成中文后推送到你微信
- 你也可以手动触发：在GitHub仓库的Actions页面点击 "Run workflow"

## 测试
手动运行一次试试：
1. 去GitHub仓库的Actions
2. 点击 "Daily News Push"
3. 点击 "Run workflow"
