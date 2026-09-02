# -*- coding: utf-8 -*-
import os

base_dir = r"D:/新课开发/领导力/一线执行/05-融进手头的活：让AI出现在你本来就在用的地方"
output_file = os.path.join(base_dir, "教学文档_HTML展示版.html")

part4 = '''<!-- MODULE 1: SYSTEM SCAN -->
<section class="module1" style="background:var(--warm);padding:96px 0">
  <div class="container">
    <div style="margin-bottom:56px">
      <p class="eyebrow reveal">模块一</p>
      <h2 class="serif reveal d1" style="font-family:var(--font-display);font-size:32px;font-weight:400;color:var(--ink);margin:14px 0 12px;line-height:1.35">系统扫描——找到你每天都在用的那几个界面</h2>
      <p class="reveal d2" style="font-size:14px;color:var(--gray-50)">本模块结束时，你需要：列出自己日常工作中最高频使用的3-5个系统和界面，并针对每个界面识别出1-2个"重复性高、操作耗时"的操作步骤</p>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:48px">
      <div class="reveal" style="background:var(--surface);border-radius:6px;padding:32px;border:1px solid var(--gray-10)">
        <h3 style="font-size:15px;font-weight:700;color:var(--ink);margin-bottom:16px">为什么先扫描，而不是直接找AI功能？</h3>
        <p style="font-size:13.5px;color:var(--gray-70);line-height:1.8">很多人在接触"AI落地"这个话题时，脑子里第一个反应是："AI能帮我做什么？"然后就开始搜索"AI能写邮件吗""AI能处理表格吗"这类问题。<br><br>这个思路有一个根本性的问题：<strong style="color:var(--red)">它从"AI能做什么"出发，而不是从"你实际在做什么"出发。</strong></p>
      </div>
      <div class="reveal d1" style="background:var(--surface);border-radius:6px;padding:32px;border:1px solid var(--gray-10)">
        <h3 style="font-size:15px;font-weight:700;color:var(--ink);margin-bottom:16px">更有效的思路是反过来</h3>
        <p style="font-size:13.5px;color:var(--gray-70);line-height:1.8"><strong style="color:var(--red)">先把你每天在用的那些界面和操作梳理清楚，再问"AI能在哪个环节帮我"。</strong><br><br>1. 需求更真实<br>2. 效果更可衡量<br>3. 切换成本更低</p>
      </div>
    </div>

    <div class="reveal" style="background:var(--surface);border-radius:6px;border:1px solid var(--gray-10);overflow:hidden;margin-bottom:48px">
      <div style="background:var(--red);color:#fff;padding:20px 28px">
        <h3 style="font-size:14px;font-weight:700;margin-bottom:4px">练习1：界面清单梳理</h3>
        <p style="font-size:12px;opacity:0.8">填写说明：闭上眼睛，回想一个普通工作日——从早上到下午，你一天之内打开最多的那几个系统/软件/界面是哪些？</p>
      </div>
      <div style="padding:28px">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="border-bottom:2px solid var(--gray-10)">
              <th style="text-align:left;padding:12px 16px;color:var(--gray-50);font-weight:600">序号</th>
              <th style="text-align:left;padding:12px 16px;color:var(--gray-50);font-weight:600">系统/界面名称</th>
              <th style="text-align:left;padding:12px 16px;color:var(--gray-50);font-weight:600">每天打开次数</th>
              <th style="text-align:left;padding:12px 16px;color:var(--gray-50);font-weight:600">主要用来做什么</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px;color:var(--gray-50)">1</td><td style="padding:16px"></td><td style="padding:16px"></td><td style="padding:16px"></td></tr>
            <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px;color:var(--gray-50)">2</td><td style="padding:16px"></td><td style="padding:16px"></td><td style="padding:16px"></td></tr>
            <tr style="border-bottom:1px solid var(--gray-10)"><td style="padding:16px;color:var(--gray-50)">3</td><td style="padding:16px"></td><td style="padding:16px"></td><td style="padding:16px"></td></tr>
            <tr><td style="padding:16px;color:var(--gray-50)">4</td><td style="padding:16px"></td><td style="padding:16px"></td><td style="padding:16px"></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div style="margin-bottom:48px">
      <h3 class="reveal" style="font-size:20px;font-weight:700;color:var(--ink);margin-bottom:20px">在每个界面里，找到那个"重复又讨厌"的操作</h3>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:32px">
        <div class="reveal" style="background:var(--red-wash);border-radius:6px;padding:24px;text-align:center;border:1px solid rgba(184,16,37,0.1)">
          <div style="font-size:28px;margin-bottom:12px">🔄</div>
          <h4 style="font-size:13px;font-weight:700;color:var(--ink);margin-bottom:8px">重复</h4>
          <p style="font-size:12px;color:var(--gray-70)">这件事你经常做，一周至少做3次以上</p>
        </div>
        <div class="reveal d1" style="background:var(--red-wash);border-radius:6px;padding:24px;text-align:center;border:1px solid rgba(184,16,37,0.1)">
          <div style="font-size:28px;margin-bottom:12px">😫</div>
          <h4 style="font-size:13px;font-weight:700;color:var(--ink);margin-bottom:8px">讨厌</h4>
          <p style="font-size:12px;color:var(--gray-70)">做这件事的时候心里很烦躁，因为没什么技术含量，就是耗时间</p>
        </div>
        <div class="reveal d2" style="background:var(--red-wash);border-radius:6px;padding:24px;text-align:center;border:1px solid rgba(184,16,37,0.1)">
          <div style="font-size:28px;margin-bottom:12px">📋</div>
          <h4 style="font-size:13px;font-weight:700;color:var(--ink);margin-bottom:8px">固定</h4>
          <p style="font-size:12px;color:var(--gray-70)">这件事的步骤是相对固定的，不会有太大变化</p>
        </div>
      </div>
    </div>

    <div class="reveal" style="background:var(--gray-90);border-radius:6px;padding:40px;color:#fff;position:relative;overflow:hidden">
      <div style="position:absolute;top:0;right:0;width:200px;height:200px;background:rgba(184,16,37,0.15);border-radius:50%;transform:translate(60px,-60px)"></div>
      <p style="font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--red-light);font-weight:700;margin-bottom:16px">真实案例</p>
      <h3 style="font-size:20px;font-weight:700;margin-bottom:20px;position:relative">质检员王姐的界面清单</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;position:relative">
        <div>
          <p style="font-size:13px;color:rgba(255,255,255,0.7);line-height:2;margin-bottom:20px">王姐是南方某电子厂的质检员，每天主要跟三个系统打交道：<br>08:30 打开ERP系统，查当天生产工单<br>09:00 开始质检，在Excel里记录检测数据<br>10:30 在企业微信里向班组长汇报质检结果<br>11:30 打开Word写质检报告<br>14:00 继续质检，在Excel里追加数据<br>15:30 在企业微信里回复客户的投诉邮件<br>17:00 在ERP里录入当天的质检完成情况</p>
        </div>
        <div>
          <p style="font-size:13px;font-weight:700;color:#fff;margin-bottom:12px">王姐最讨厌的操作是什么？</p>
          <p style="font-size:13px;color:rgba(255,255,255,0.85);line-height:1.8;background:rgba(184,16,37,0.2);padding:16px;border-radius:4px">在Excel里整理质检报表。每天要把检测数据按固定格式整理好，填进模板里，还要算良品率、不良率、各种百分比。"这些事其实不难，就是太机械了，每次都要对着模板一个格子一个格子填，还要检查有没有填错。"</p>
          <p style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:16px">王姐后来用AI帮她写公式，一次搞定，现在每周填报表的时间从两个小时缩短到二十分钟。</p>
        </div>
      </div>
    </div>
  </div>
</section>
'''

with open(output_file, 'a', encoding='utf-8') as f:
    f.write(part4)

print("Part 4 written: Module 1")
