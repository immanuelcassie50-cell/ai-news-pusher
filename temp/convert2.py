#!/usr/bin/env python3
import os, markdown
BASE = r"D:\新课开发\营销\9. 营销团队管理：目标拆解、过程管控与战斗力建设"

TPL='''<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>TITLE</title>
<style>
body{font-family:Microsoft YaHei,Arial,sans-serif;max-width:1200px;margin:0 auto;padding:40px 60px;font-size:15px;line-height:1.8;color:#22223b;background:#fff}
h1{font-size:2em;font-weight:700;border-bottom:3px solid #9a8c98;padding-bottom:12px;margin-bottom:25px}
h2{font-size:1.4em;font-weight:600;margin-top:30px;margin-bottom:12px;padding-left:10px;border-left:4px solid #9a8c98}
h3{font-size:1.15em;font-weight:600;color:#4a4e69;margin-top:20px;margin-bottom:10px}
table{width:100%;border-collapse:collapse;margin:15px 0}
th{background:#22223b;color:#fff;padding:10px 12px;text-align:left}
td{padding:8px 12px;border-bottom:1px solid #c9ada7}
tr:hover{background:#f2e9e4}
code{background:#f2e9e4;padding:2px 5px;border-radius:3px}
pre{background:#22223b;color:#fff;padding:15px;border-radius:6px}
pre code{background:transparent;color:inherit}
blockquote{border-left:4px solid #9a8c98;background:#f2e9e4;padding:12px 18px;margin:15px 0}
ul,ol{margin-left:25px;margin-bottom:12px}
li{margin-bottom:5px}
strong{font-weight:700}
@media print{body{padding:20px}}
</style></head><body>CONTENT</body></html>'''

def conv(mf):
    with open(mf,encoding='utf-8') as f: c=f.read()
    t="文档"
    for l in c.split('\n'):
        if l.startswith('# '): t=l[2:].strip();break
    hc=markdown.markdown(c,extensions=['tables','fenced_code','nl2br','sane_lists'])
    return TPL.replace('TITLE',t).replace('CONTENT',hc)

n=0
for r,ds,fs in os.walk(BASE):
    for f in fs:
        if f.endswith('.md') and not f.endswith('.html.md'):
            mf=os.path.join(r,f)
            try:
                with open(mf.replace('.md','.html'),'w',encoding='utf-8') as out:
                    out.write(conv(mf))
                print(f"OK: {f}")
                n+=1
            except Exception as e:
                print(f"ERR {f}: {e}")
print(f"Done: {n}")
