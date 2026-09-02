// 端到端测试：模拟完整用户流程
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const HTML_PATH = 'D:/Downloads/xinjian/GROW 引导器/group-contract.html';
const SCREENSHOT_DIR = 'D:/CC/temp/screenshots-contract';
if (!fs.existsSync(SCREENSHOT_DIR)) fs.mkdirSync(SCREENSHOT_DIR, {recursive: true});

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({width: 1440, height: 900, deviceScaleFactor: 1});

  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console.error: ' + m.text()); });

  await page.goto('file://' + HTML_PATH.replace(/\\/g, '/'), {waitUntil: 'networkidle0'});
  await new Promise(r => setTimeout(r, 800));

  console.log('--- 1. 首页加载 ---');
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '01-home.png')});

  const homeTitle = await page.$eval('.home-title', el => el.textContent);
  console.log('首页标题:', homeTitle);
  if (!homeTitle.includes('盟约之书')) throw new Error('首页标题缺失');

  const actionCount = await page.$$eval('.action-card', els => els.length);
  console.log('首页选项数:', actionCount);
  if (actionCount !== 3) throw new Error('应有 3 个首页选项');

  console.log('--- 2. 新建契约 ---');
  await page.click('.action-card:nth-child(1)');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '02-step1.png')});

  const stepTitle = await page.$eval('.step-title', el => el.textContent);
  console.log('步骤1标题:', stepTitle);
  if (!stepTitle.includes('基本信息')) throw new Error('步骤1标题错误');

  await page.type('#fGroupName', '凤凰小组');
  await page.type('#fMembers', '张三\n李四\n王五\n赵六');
  await page.select('#fDuration', '3months');
  await page.select('#fFrequency', 'biweekly');
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '02b-step1-filled.png')});

  console.log('--- 3. 进入步骤2（条款） ---');
  await page.click('.btn-primary');
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '03-step2.png')});

  const clauseCount = await page.$$eval('.clause-item', els => els.length);
  console.log('渲染条款数:', clauseCount);
  if (clauseCount < 20) throw new Error('条款数应大于 20，实际: ' + clauseCount);

  const checkedCount = await page.$$eval('.clause-item.checked', els => els.length);
  console.log('默认选中条款数:', checkedCount);
  if (checkedCount < 5) throw new Error('应有默认选中');

  const previewCount = await page.$eval('#previewCount', el => el.textContent);
  console.log('预览区计数:', previewCount);

  await page.type('#customInput', '每次会议结束前5分钟留给反思');
  await page.click('.clause-custom .btn');
  await new Promise(r => setTimeout(r, 300));
  const customCount = await page.$$eval('.clause-custom-item', els => els.length);
  console.log('自定义条款数:', customCount);
  if (customCount !== 1) throw new Error('自定义条款未添加');
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '03b-step2-custom.png')});

  const beforeChecked = await page.$$eval('.clause-item.checked', els => els.length);
  await page.click('.clause-item:not(.checked)');
  await new Promise(r => setTimeout(r, 200));
  const afterChecked = await page.$$eval('.clause-item.checked', els => els.length);
  console.log(`点击切换: ${beforeChecked} -> ${afterChecked}`);
  if (afterChecked !== beforeChecked + 1) throw new Error('点击条款未增加选中');

  const hasInput = await page.$$eval('.clause-item-input input', els => els.length);
  console.log('带数字输入的条款数:', hasInput);
  if (hasInput === 0) throw new Error('应至少有 1 个带数字输入的条款');

  // 滚动到下一步按钮位置
  await page.evaluate(() => {
    const btns = document.querySelectorAll('#view-step2 .btn-primary');
    btns[btns.length-1].scrollIntoView({block: 'center'});
  });
  await new Promise(r => setTimeout(r, 300));

  console.log('--- 4. 步骤3（角色） ---');
  await page.evaluate(() => {
    const btns = document.querySelectorAll('#view-step2 .btn-primary');
    btns[btns.length-1].click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '04-step3.png')});

  const roleCount = await page.$$eval('.role-card', els => els.length);
  console.log('角色卡片数:', roleCount);
  if (roleCount < 3) throw new Error('角色卡片缺失');

  const hostOptions = await page.$$eval('#fHost option', els => els.length);
  console.log('Host 下拉选项数:', hostOptions);
  if (hostOptions !== 4) throw new Error('Host 选项数不对');

  await page.click('.role-toggle-btn[data-val="no"]');
  await new Promise(r => setTimeout(r, 200));
  const facHidden = await page.$eval('#facilitatorAssign', el => el.style.display);
  console.log('无引导员时引导员输入框是否隐藏:', facHidden);
  if (facHidden !== 'none') throw new Error('切换无效');
  await page.click('.role-toggle-btn[data-val="yes"]');
  await page.type('#fFacilitatorName', '陈老师');
  await new Promise(r => setTimeout(r, 200));

  console.log('--- 5. 步骤4（预览） ---');
  const activeViewBefore = await page.evaluate(() => {
    const active = document.querySelector('.view.active');
    return active ? active.id : 'none';
  });
  console.log('步骤3点击前激活视图:', activeViewBefore);

  await page.evaluate(() => {
    const btns = document.querySelectorAll('#view-step3 .btn-primary');
    btns[btns.length-1].click();
  });
  await new Promise(r => setTimeout(r, 800));

  const activeViewAfter = await page.evaluate(() => {
    const active = document.querySelector('.view.active');
    return active ? active.id : 'none';
  });
  console.log('点击后激活视图:', activeViewAfter);
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '05-step4-debug.png')});
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '05-step4.png'), fullPage: true});

  const groupName = await page.$eval('.contract-group', el => el.textContent);
  console.log('契约小组名:', groupName);
  if (!groupName.includes('凤凰小组')) throw new Error('契约小组名错误');

  const memberCount = await page.$$eval('.contract-sign-item', els => els.length);
  console.log('签名项数:', memberCount);
  if (memberCount !== 4) throw new Error('签名项应为 4');

  const clauseCountInContract = await page.$$eval('.contract-clause-list li', els => els.length);
  console.log('契约中条款数:', clauseCountInContract);
  if (clauseCountInContract < 5) throw new Error('契约条款数过少');

  const seal = await page.$('.contract-seal');
  if (!seal) throw new Error('盟约印章未渲染');

  const stored = await page.evaluate(() => localStorage.getItem('al_contract'));
  console.log('localStorage 已保存:', stored ? '✓' : '✗');
  if (!stored) throw new Error('未保存到 localStorage');

  console.log('--- 6. 完成 ---');
  await page.evaluate(() => {
    const btns = document.querySelectorAll('#view-step4 .btn-primary');
    btns[btns.length-1].scrollIntoView({block: 'center'});
    btns[btns.length-1].click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '06-done.png')});
  const doneTitle = await page.$eval('#view-done h1', el => el.textContent);
  console.log('完成页标题:', doneTitle);
  if (!doneTitle.includes('封印')) throw new Error('完成页错误');

  console.log('--- 7. 回顾模式 ---');
  await page.evaluate(() => {
    const btns = document.querySelectorAll('#view-done .btn-primary');
    btns[0].click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '07-review.png'), fullPage: true});

  const reviewTitle = await page.$eval('#reviewTitle', el => el.textContent);
  console.log('回顾页标题:', reviewTitle);
  if (!reviewTitle.includes('凤凰小组')) throw new Error('回顾页标题错误');

  const reviewClauses = await page.$$eval('.review-clause', els => els.length);
  console.log('回顾模式核心条款数:', reviewClauses);
  if (reviewClauses < 1) throw new Error('回顾模式无核心条款');

  await page.type('#healthWentWell', '大家都很认真在提问');
  await page.type('#healthToImprove', '时间控制可改进');
  await new Promise(r => setTimeout(r, 300));
  const valuesBefore = await page.evaluate(() => ({
    wentWell: document.getElementById('healthWentWell').value,
    toImprove: document.getElementById('healthToImprove').value
  }));
  console.log('输入值:', valuesBefore);
  await page.evaluate(() => {
    const btn = document.querySelector('.review-health .btn');
    btn.scrollIntoView({block: 'center'});
    btn.click();
  });
  await new Promise(r => setTimeout(r, 1000));
  const healthStored = await page.evaluate(() => localStorage.getItem('al_contract_health'));
  console.log('健康度已保存:', healthStored ? '✓' : '✗');
  if (healthStored) console.log('  内容:', healthStored);
  else {
    const error = await page.evaluate(() => document.getElementById('toast').textContent);
    console.log('  toast:', error);
  }
  if (!healthStored) throw new Error('健康度未保存');

  console.log('--- 8. 切换到虚拟场景 ---');
  await page.evaluate(() => {
    localStorage.removeItem('al_contract');
    localStorage.removeItem('al_contract_health');
  });
  await page.reload({waitUntil: 'networkidle0'});
  await new Promise(r => setTimeout(r, 500));
  await page.evaluate(() => document.querySelector('.action-card').click());
  await new Promise(r => setTimeout(r, 600));
  await page.select('#fConfig', 'virtual');
  await new Promise(r => setTimeout(r, 300));
  await page.type('#fGroupName', '云端小组');
  await page.type('#fMembers', 'Alice\nBob\nCarol');
  await page.evaluate(() => {
    const btns = document.querySelectorAll('#view-step1 .btn-primary');
    btns[0].click();
  });
  await new Promise(r => setTimeout(r, 800));

  const virtualClauses = await page.$$eval('.clause-cat-virtual .clause-item', els => els.length);
  console.log('虚拟场景数字礼仪条款数:', virtualClauses);
  if (virtualClauses < 5) throw new Error('虚拟场景数字礼仪条款不足');

  await page.screenshot({path: path.join(SCREENSHOT_DIR, '08-virtual.png'), fullPage: true});

  await page.evaluate(() => {
    const btns = document.querySelectorAll('#view-step2 .btn-primary');
    btns[btns.length-1].click();
  });
  await new Promise(r => setTimeout(r, 600));
  const techVisible = await page.$eval('#techCard', el => el.style.display);
  console.log('虚拟场景技术检查员卡片显示:', techVisible);
  if (techVisible === 'none') throw new Error('技术检查员未显示');

  await page.screenshot({path: path.join(SCREENSHOT_DIR, '09-virtual-step3.png')});

  // 虚拟场景不需要引导员填
  await page.click('.role-toggle-btn[data-val="no"]');
  await new Promise(r => setTimeout(r, 200));
  await page.evaluate(() => {
    const btns = document.querySelectorAll('#view-step3 .btn-primary');
    btns[btns.length-1].click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '10-virtual-step4.png'), fullPage: true});

  // 虚拟场景也要完成保存
  await page.evaluate(() => {
    const btns = document.querySelectorAll('#view-step4 .btn-primary');
    btns[btns.length-1].click();
  });
  await new Promise(r => setTimeout(r, 500));
  // 回到首页
  await page.evaluate(() => goHome());
  await new Promise(r => setTimeout(r, 500));

  console.log('--- 9. JSON导出测试 ---');
  const jsonData = await page.evaluate(() => {
    return JSON.stringify({
      contract: JSON.parse(localStorage.getItem('al_contract')),
      health: JSON.parse(localStorage.getItem('al_contract_health') || '[]')
    });
  });
  console.log('导出的 JSON 长度:', jsonData.length);
  if (jsonData.length < 100) throw new Error('导出 JSON 数据不完整');

  await page.evaluate(() => {
    const cards = document.querySelectorAll('.action-card');
    cards[1].click();
  });
  await new Promise(r => setTimeout(r, 600));
  const reviewAgain = await page.$eval('#reviewTitle', el => el.textContent);
  console.log('打开已有契约后回顾页:', reviewAgain);
  if (!reviewAgain.includes('云端小组')) throw new Error('已保存契约未正确加载');

  console.log('--- 10. 测试打印样式 ---');
  await page.evaluate(() => {
    const view = document.getElementById('view-step4');
    document.querySelectorAll('.view').forEach(v => v.classList.remove('printing'));
    view.classList.add('printing');
  });
  await page.emulateMediaType('print');
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '11-print.png'), fullPage: true});
  await page.emulateMediaType('screen');

  console.log('--- 11. 移动端响应式 ---');
  await page.setViewport({width: 390, height: 844, deviceScaleFactor: 2});
  await page.goto('file://' + HTML_PATH.replace(/\\/g, '/'), {waitUntil: 'networkidle0'});
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '12-mobile-home.png')});

  await page.click('.action-card:nth-child(1)');
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '13-mobile-step1.png')});

  await page.type('#fGroupName', '小屏测试');
  await page.type('#fMembers', '甲\n乙');
  await page.click('.btn-primary');
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({path: path.join(SCREENSHOT_DIR, '14-mobile-step2.png'), fullPage: true});

  if (errors.length > 0) {
    console.log('\n!!! 发现错误:');
    errors.forEach(e => console.log('  -', e));
    throw new Error('页面有 JS 错误');
  }

  console.log('\n========================================');
  console.log('✓ 全部测试通过！');
  console.log('截图目录:', SCREENSHOT_DIR);
  console.log('========================================');

  await browser.close();
})().catch(err => {
  console.error('\n✗ 测试失败:', err.message);
  console.error(err.stack);
  process.exit(1);
});
