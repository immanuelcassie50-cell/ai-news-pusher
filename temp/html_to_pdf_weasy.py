# -*- coding: utf-8 -*-
"""
使用 WeasyPrint 将 HTML 转换为 PDF
"""
import os
import warnings
warnings.filterwarnings('ignore')

from weasyprint import HTML, CSS

input_html = 'D:/CC/temp/zzpd_learning_map.html'
output_pdf = 'D:/新课开发/党业融合/政治判断力/完整课程包/002-课程学习地图/课程学习地图-政治判断力.pdf'

os.makedirs(os.path.dirname(output_pdf), exist_ok=True)

# A3 landscape
css = CSS(string='''
@page {
    size: A3 landscape;
    margin: 0;
}
''')

HTML(filename=input_html).write_pdf(output_pdf, stylesheets=[css])

print(f'PDF created: {output_pdf}')
