// 精准打印验证：真实模拟 print 媒体
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const HTML_PATH = 'D:/Downloads/xinjian/GROW 引导器/group-contract.html';
const OUT = 'D:/CC/temp/screenshots-contract/print-verify.png';
const PDF_OUT = 'D:/CC/temp/screenshots-contract/contract.pdf';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({width: 1280, height: 900, deviceScaleFactor: 1.5});

  // 注入localStorage数据
  await page.goto('file://' + HTML_PATH.replace(/\\/g, '/'), {waitUntil: 'networkidle0'});
  await page.evaluate(() => {
    localStorage.setItem('al_contract', JSON.stringify({
      groupName: '凤凰小组',
      config: 'crossFunctional',
      members: ['张三','李四','王五','赵六'],
      projectDuration: '3months',
      meetingFrequency: 'biweekly',
      hasFacilitator: true,
      facilitatorName: '陈老师',
      selectedClauses: ['attend_on_time','notify_48h','confidentiality_strict','share_learning_not_detail','equal_speaking','active_listening','no_advice_only_questions','encourage_challenge','stay_curious','open_questions','one_question_at_a_time','no_fake_advice'],
      customClauses: ['每次会议结束前5分钟留给反思'],
      clauseInputs: {},
      roles: { currentHost: '张三', techChecker: null },
      createdAt: '2026-06-04T00:00:00Z',
      version: 1
    }));
  });
  await page.reload({waitUntil: 'networkidle0'});
  await new Promise(r => setTimeout(r, 500));

  // 先走到 view-step4 让契约预览渲染
  await page.evaluate(() => {
    showView('step4');
    updateStepBar();
    renderContractPreview();
  });
  await new Promise(r => setTimeout(r, 300));

  // 标记打印视图
  await page.evaluate(() => {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active','printing'));
    document.getElementById('view-step4').classList.add('printing');
  });

  // 模拟 print 媒体
  await page.emulateMediaType('print');
  await new Promise(r => setTimeout(r, 500));

  // 截图（非fullPage，只截一屏）
  await page.screenshot({path: OUT, fullPage: true});
  console.log('✓ 打印截图:', OUT);

  // 直接生成 PDF
  await page.pdf({
    path: PDF_OUT,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });
  console.log('✓ PDF:', PDF_OUT);

  // 验证 print 时 .view 元素都不可见（除了 printing）
  const visCheck = await page.evaluate(() => {
    const views = document.querySelectorAll('.view');
    return Array.from(views).map(v => ({
      id: v.id,
      printing: v.classList.contains('printing'),
      display: getComputedStyle(v).display
    }));
  });
  console.log('print 媒体下视图状态:');
  visCheck.forEach(v => console.log('  -', v));

  await browser.close();
})();
