# -*- coding: utf-8 -*-
import os

base_dir = r"D:/新课开发/领导力/一线执行/05-融进手头的活：让AI出现在你本来就在用的地方"
output_file = os.path.join(base_dir, "教学文档_HTML展示版.html")

final = '''<!-- FOOTER -->
<footer style="background:var(--gray-90);padding:56px 0">
  <div class="container">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px">
      <div style="display:flex;align-items:center;gap:20px">
        <div style="background:var(--red);color:#fff;font-size:13px;font-weight:700;letter-spacing:.06em;padding:8px 18px;border-radius:2px">一线突围</div>
        <div>
          <p style="font-size:14px;font-weight:700;color:rgba(255,255,255,.85);margin-bottom:3px">融进手头的活：让AI出现在你本来就在用的地方</p>
          <p style="font-size:12px;color:rgba(255,255,255,.35);letter-spacing:.04em">课程五 · 90分钟 · 核心能力：嵌入力</p>
        </div>
      </div>
      <div style="text-align:right;font-size:11.5px;color:rgba(255,255,255,.28);line-height:1.8">
        <p>一线突围：AI落地最后一公里 · 课程体系</p>
        <p>本课程可独立交付，也可作为系列课程的一部分</p>
      </div>
    </div>
  </div>
</footer>

<!-- RESPONSIVE & PRINT STYLES -->
<style>
@media (max-width: 860px) {
  .container { padding-left: 24px !important; padding-right: 24px !important; }
  .hero-body { grid-template-columns: 1fr !important; }
  .hero-metrics { flex-direction: row !important; border-left: none !important; padding-left: 0 !important; border-top: 1px solid var(--gray-10); padding-top: 32px; margin-top: 32px; }
  .metric { padding: 0 24px 0 0 !important; border-bottom: none !important; text-align: left !important; }
  .overview-intro { grid-template-columns: 1fr !important; }
  .overview-table-header, .overview-table-row { grid-template-columns: 80px 1fr 80px !important; }
  .overview-table-header span:nth-child(3), .overview-table-row span:nth-child(3) { display: none !important; }
  div[style*="grid-template-columns:repeat(3,1fr)"] { grid-template-columns: 1fr !important; }
  div[style*="grid-template-columns:repeat(4,1fr)"] { grid-template-columns: 1fr 1fr !important; }
  div[style*="grid-template-columns:1fr 1fr"] { grid-template-columns: 1fr !important; }
  div[style*="gap:24px"] { gap: 16px !important; }
  .insight-dark { padding: 32px 24px !important; }
  .insight-dark p { font-size: 18px !important; }
}

@media print {
  @page { size: A4 landscape; margin: 15mm; }
  body { background: #fff !important; font-size: 11pt; }
  .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
  .hero { border: none !important; box-shadow: none !important; }
  section { page-break-inside: avoid; }
  .overview, .module1, .module2, .module3, .module4, .closing, .appendix { background: #fafafa !important; padding: 40px 0 !important; }
  .metric-val { color: #B81025 !important; }
  .brand-rect, .overview-card::before, .scenario-label, .overview-table-header, .insight-dark::before { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  footer { background: #333 !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  input[type="checkbox"] { appearance: none; -webkit-appearance: none; width: 16px; height: 16px; border: 2px solid #999; border-radius: 2px; display: inline-block; }
}
</style>

<script>
(function(){
  var els = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
  els.forEach(function(el){ io.observe(el); });

  setTimeout(function(){
    document.querySelectorAll('.hero .reveal').forEach(function(el, i){
      setTimeout(function(){ el.classList.add('in'); }, i * 120);
    });
  }, 200);
})();
</script>
</body>
</html>
'''

with open(output_file, 'a', encoding='utf-8') as f:
    f.write(final)

print("Part 9 written: Footer, responsive/print styles, and JavaScript - FILE COMPLETE")
