cover_html = '''
<!-- ===== COVER PAGE ===== -->
<div class="cover">
  <div class="cover-top">
    <div class="cover-label">学员手册 · STUDENT WORKBOOK</div>
    <div class="cover-logo">财务经营思维</div>
  </div>
  <div class="cover-main">
    <div class="cover-eyebrow">非财务经理的报表解读与经营分析</div>
    <h1 class="cover-title">财务经营思维</h1>
    <div class="cover-subtitle">——让业务决策经得起财务检验</div>
    <div class="cover-divider"></div>
    <div class="cover-fields">
      <div class="field-row"><span class="field-label">学员姓名</span><span class="field-line"></span></div>
      <div class="field-row"><span class="field-label">所在部门</span><span class="field-line"></span></div>
      <div class="field-row"><span class="field-label">课程日期</span><span class="field-line"></span></div>
      <div class="field-row"><span class="field-label">课程讲师</span><span class="field-line"></span></div>
    </div>
  </div>
  <div class="cover-bottom">
    <div class="cover-quote">"资产可以被销毁，现金必须被管理，<br>利润只是意见，现金流才是事实。"</div>
    <div class="cover-meta">财务管理系列 · MANAGING THROUGH FINANCIAL LENS</div>
  </div>
</div>

<style>
.cover {
  min-height: 260mm;
  background: linear-gradient(160deg, #1a2744 0%, #2a3a5c 50%, #1a2744 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 50px 40px 50px;
  position: relative;
  overflow: hidden;
  page-break-after: always;
}
.cover::before {
  content: '';
  position: absolute;
  top: -80px; right: -80px;
  width: 350px; height: 350px;
  border: 2px solid rgba(201,168,76,0.18);
  border-radius: 50%;
}
.cover::after {
  content: '';
  position: absolute;
  bottom: -120px; left: -60px;
  width: 420px; height: 420px;
  border: 1px solid rgba(201,168,76,0.1);
  border-radius: 50%;
}
.cover-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 1;
}
.cover-label {
  font-size: 11px;
  letter-spacing: 0.15em;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase;
}
.cover-logo {
  font-size: 11px;
  color: rgba(255,255,255,0.4);
  letter-spacing: 0.1em;
}
.cover-main {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
}
.cover-eyebrow {
  font-size: 13px;
  color: rgba(255,255,255,0.6);
  letter-spacing: 0.08em;
  margin-bottom: 16px;
}
.cover-title {
  font-family: var(--font-title);
  font-size: 52px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.04em;
  line-height: 1.1;
  margin-bottom: 8px;
}
.cover-subtitle {
  font-size: 16px;
  color: rgba(255,255,255,0.7);
  margin-bottom: 30px;
}
.cover-divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #c9a84c, transparent);
  margin-bottom: 30px;
}
.cover-fields {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.field-row {
  display: flex;
  align-items: center;
  gap: 12px;
}
.field-label {
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  width: 70px;
  flex-shrink: 0;
}
.field-line {
  flex: 1;
  height: 1px;
  background: rgba(255,255,255,0.2);
  position: relative;
}
.field-line::after {
  content: '';
  position: absolute;
  right: 0;
  top: -3px;
  width: 6px;
  height: 6px;
  border-right: 1px solid rgba(201,168,76,0.5);
  border-bottom: 1px solid rgba(201,168,76,0.5);
  transform: rotate(45deg);
}
.cover-bottom {
  position: relative;
  z-index: 1;
}
.cover-quote {
  font-family: var(--font-title);
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  line-height: 1.8;
  margin-bottom: 20px;
  font-style: italic;
}
.cover-meta {
  font-size: 10px;
  color: rgba(255,255,255,0.3);
  letter-spacing: 0.12em;
}
</style>
'''

with open('D:/新课开发/管理学/30-财务经营思维/学员手册/学员手册_财务经营思维.html', 'a', encoding='utf-8') as f:
    f.write(cover_html)

print("Cover page written")
