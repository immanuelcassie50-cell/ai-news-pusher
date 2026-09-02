
import os, zipfile
WORK = "D:/CC/temp/xlsx_guide"
OUT  = "D:/Downloads/行动计划进化课/完成课程包/06_全流程工具表单/配套表单_使用指引.xlsx"
for d in [WORK, WORK+"/xl/worksheets", WORK+"/xl/_rels", WORK+"/_rels"]:
    os.makedirs(d, exist_ok=True)
print("dirs ok")
