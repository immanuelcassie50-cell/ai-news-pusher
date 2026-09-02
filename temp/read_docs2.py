# -*- coding: utf-8 -*-
"""使用spire.doc读取云南磷化第四组作业文档"""
import os
from spire.doc import Document, FileFormat

base_path = r"D:\2026年课程\云南磷化\第一阶段作业\第四组作业\第四组作业\第一期专业-第四组-管林\第一期专业-第四组-管林"

files = {
    "1_定位表": os.path.join(base_path, "1、课题定位表-铲运机（FL105）安全认识与常见异常状态识别-第四组-管林.docx"),
    "2_大纲": os.path.join(base_path, "2、课题大纲-铲运机（FL105）安全认识与常见异常状态识别-第四组-管林.doc"),
    "4_百问百答": os.path.join(base_path, "4、百问百答-铲运机（FL105）安全认识与常见异常状态识别-第四组-管林.doc"),
    "5_测试题": os.path.join(base_path, "5、测试题-铲运机（FL105）安全认识与常见异常状态识别-第四组-管林.doc"),
}

for name, path in files.items():
    print(f"\n{'='*80}")
    print(f"文件: {name}")
    print(f"路径: {path}")
    print('='*80)

    if not os.path.exists(path):
        print(f"文件不存在!")
        continue

    try:
        doc = Document()
        if path.endswith('.docx'):
            doc.LoadFromFile(path, FileFormat.Docx)
        else:
            doc.LoadFromFile(path, FileFormat.Doc)
        text = doc.GetText()
        print(text[:5000])  # 打印前5000字符
        doc.Dispose()
    except Exception as e:
        print(f"读取错误: {e}")
