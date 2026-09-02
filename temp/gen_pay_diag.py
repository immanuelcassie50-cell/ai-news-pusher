#!/usr/bin/env python3
import os

BASE = "D:/temp/xlsx_work_pay/xl/worksheets".replace("/", os.sep)

employees = [
    ("E001", "李明", "技术部", "软件工程师", "T3", 85000, 88000, 82000, 4, 3, "2024-06-15", "男", "汉族"),
    ("E002", "张丽", "技术部", "软件工程师", "T3", 82000, 88000, 82000, 4, 2, "2025-03-20", "女", "汉族"),
    ("E003", "王强", "市场部", "市场主管", "M4", 95000, 100000, 90000, 5, 5, "2023-01-10", "男", "汉族"),
    ("E004", "刘芳", "市场部", "市场专员", "M2", 58000, 60000, 55000, 3, 2, "2025-07-01", "女", "汉族"),
    ("E005", "赵军", "技术部", "技术总监", "T5", 150000, 155000, 145000, 5, 8, "2022-11-01", "男", "汉族"),
    ("E006", "陈静", "人事部", "HR经理", "H4", 78000, 80000, 75000, 4, 4, "2024-02-15", "女", "汉族"),
    ("E007", "周伟", "技术部", "软件工程师", "T3", 88000, 88000, 82000, 4, 1, "2026-01-15", "男", "回族"),
    ("E008", "吴婷", "财务部", "财务专员", "F2", 62000, 65000, 60000, 3, 3, "2024-09-01", "女", "汉族"),
    ("E009", "郑浩", "技术部", "架构师", "T4", 120000, 125000, 115000, 5, 6, "2023-05-20", "男", "汉族"),
    ("E010", "孙丽", "市场部", "市场专员", "M2", 52000, 60000, 55000, 3, 1, "2026-03-01", "女", "汉族"),
    ("E011", "林涛", "技术部", "测试工程师", "T2", 65000, 68000, 62000, 4, 4, "2024-04-10", "男", "汉族"),
    ("E012", "黄蓉", "人事部", "招聘专员", "H2", 48000, 50000, 45000, 3, 2, "2025-08-15", "女", "汉族"),
    ("E013", "许磊", "技术部", "软件工程师", "T3", 86000, 88000, 82000, 4, 3, "2024-07-01", "男", "汉族"),
    ("E014", "何云", "财务部", "财务经理", "F4", 92000, 95000, 88000, 4, 5, "2023-12-01", "女", "汉族"),
    ("E015", "高建", "技术部", "技术总监", "T5", 155000, 155000, 145000, 5, 7, "2022-06-01", "男", "汉族"),
    ("E016", "罗燕", "市场部", "市场主管", "M4", 72000, 100000, 90000, 3, 3, "2024-10-01", "女", "汉族"),
    ("E017", "宋波", "技术部", "DevOps工程师", "T3", 78000, 82000, 78000, 4, 2, "2025-02-01", "男", "汉族"),
    ("E018", "崔霞", "人事部", "培训专员", "H2", 45000, 48000, 42000, 3, 1, "2026-04-01", "女", "汉族"),
    ("E019", "丁勇", "技术部", "数据工程师", "T3", 90000, 92000, 85000, 5, 4, "2024-01-15", "男", "满族"),
    ("E020", "范玲", "财务部", "会计", "F2", 55000, 58000, 52000, 3, 2, "2025-06-01", "女", "汉族"),
    ("E021", "苏强", "技术部", "前端工程师", "T3", 83000, 86000, 80000, 4, 3, "2024-08-01", "男", "汉族"),
    ("E022", "杜梅", "市场部", "品牌专员", "M2", 50000, 55000, 48000, 3, 1, "2026-02-01", "女", "汉族"),
]

def col_letter(n):
    result = ""
    while n > 0:
        n, rem = divmod(n - 1, 26)
        result = chr(65 + rem) + result
    return result

headers = ["员工ID", "姓名", "部门", "职位", "等级/职级", "当前薪资", "目标薪资", "市场中位值",
           "绩效评分（1-5）", "司龄（年）", "最近调薪日期", "性别", "民族（仅用于统计分析，已匿名化）", "受保护特征"]

xml_lines = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
'<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"',
'  xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">',
'  <sheetViews>',
'    <sheetView workbookViewId="0"/>',
'  </sheetViews>',
'  <sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"',
'    xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"/>',
'  <cols>']

# Column widths: ID(10), Name(10), Dept(10), Title(14), Level(8), CurSal(12), TarSal(12), MktMed(14), Perf(10), Tenure(8), RaiseDate(16), Gender(6), Ethnic(12), Protected(14)
widths = [10, 10, 10, 14, 8, 12, 12, 14, 10, 8, 16, 6, 18, 14]
for i, w in enumerate(widths, 1):
    xml_lines.append(f'    <col min="{i}" max="{i}" width="{w}" customWidth="1"/>')
xml_lines.append('  </cols>')
xml_lines.append('  <sheetData>')

# Header row (row 1)
xml_lines.append('    <row r="1">')
for col_num, h in enumerate(headers, 1):
    cell_ref = f"{col_letter(col_num)}1"
    xml_lines.append(f'      <c r="{cell_ref}" t="inlineStr"><is><t>{h}</t></is></c>')
xml_lines.append('    </row>')

# Data rows
for row_num, emp in enumerate(employees, 2):
    xml_lines.append(f'    <row r="{row_num}">')
    for col_num, val in enumerate(emp, 1):
        cell_ref = f"{col_letter(col_num)}{row_num}"
        if col_num in (1, 2, 3, 4, 5, 11, 12, 13):
            # Text cells
            xml_lines.append(f'      <c r="{cell_ref}" t="inlineStr"><is><t>{val}</t></is></c>')
        elif col_num == 14:
            # Protected characteristic - empty for privacy
            xml_lines.append(f'      <c r="{cell_ref}" t="inlineStr"><is><t></t></is></c>')
        else:
            # Numeric - use appropriate style
            xml_lines.append(f'      <c r="{cell_ref}" s="5"><v>{val}</v></c>')
    xml_lines.append('    </row>')

# Add totals row
total_row = len(employees) + 2
xml_lines.append(f'    <row r="{total_row}">')
xml_lines.append(f'      <c r="A{total_row}" t="inlineStr"><is><t>合计</t></is></c>')
# Sum formulas for numeric columns
for col_num in (6, 7, 8):
    cell_ref = f"{col_letter(col_num)}{total_row}"
    start_ref = f"{col_letter(col_num)}2"
    end_ref = f"{col_letter(col_num)}{len(employees)+1}"
    xml_lines.append(f'      <c r="{cell_ref}" s="6"><f>SUM({start_ref}:{end_ref})</f><v></v></c>')
xml_lines.append(f'    </row>')

# Add average row
avg_row = total_row + 1
xml_lines.append(f'    <row r="{avg_row}">')
xml_lines.append(f'      <c r="A{avg_row}" t="inlineStr"><is><t>平均值</t></is></c>')
for col_num in (6, 7, 8):
    cell_ref = f"{col_letter(col_num)}{avg_row}"
    sum_ref = f"{col_letter(col_num)}{total_row}"
    xml_lines.append(f'      <c r="{cell_ref}" s="8"><f>{sum_ref}/({total_row}-2)</f><v></v></c>')
xml_lines.append(f'    </row>')

xml_lines.append('  </sheetData>')
xml_lines.append('  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>')
xml_lines.append('</worksheet>')

content = '\n'.join(xml_lines)
with open(os.path.join(BASE, "sheet2.xml"), 'w', encoding='utf-8') as f:
    f.write(content)
print(f"Sheet 2 written with {len(employees)} employees")
