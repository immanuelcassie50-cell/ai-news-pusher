import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
import os

OUT = "D:/Downloads/行动计划进化课/完成课程包/06_全流程工具表单/配套表单_使用指引.xlsx"

wb = openpyxl.Workbook()
ws = wb.active
ws.title = "使用指引"