# -*- coding: utf-8 -*-
import win32com.client
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

path = r'D:/2026年课程/云南磷化/第一阶段作业/第二组作业/第二组作业/第一期作业-第二组-杨强(1)/第一期作业-第二组-杨强/5.《胶带拉绳开关失效故障处理》课程结业测试卷-胶带拉绳开关失效故障处理-第二组-杨强 .doc'

try:
    word = win32com.client.Dispatch('Word.Application')
    word.Visible = False
    doc = word.Documents.Open(os.path.abspath(path))
    text = doc.Content.Text
    doc.Close(False)
    print("=== 测试卷内容 ===")
    print(text)
except Exception as e:
    print(f"Error: {e}")