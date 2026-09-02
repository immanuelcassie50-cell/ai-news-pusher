ws.merge_cells("A30:E30")
ws.row_dimensions[30].height = 30
c = ws["A30"]
c.value = "三、表单版本说明"
c.font = sec_font()
c.fill = title_fill()
c.alignment = aln_l()
c.border = border_thin
ws.row_dimensions[31].height = 30
c = ws["A31"]
c.value = "版本"
c.font = hdr_font()
c.fill = beige_fill()
c.alignment = aln_c()
c.border = border_medium
c = ws["B31"]
c.value = "用途"
c.font = hdr_font()
c.fill = beige_fill()
c.alignment = aln_c()
c.border = border_medium
c = ws["C31"]
c.value = "特点"
c.font = hdr_font()
c.fill = beige_fill()
c.alignment = aln_c()
c.border = border_medium
ws.merge_cells("C31:E31")
ws.row_dimensions[32].height = 25
c = ws["A32"]
c.value = "空白版"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
c = ws["B32"]
c.value = "实际填写/打印使用"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
c = ws["C32"]
c.value = "可直接书写，留有填写空间"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
ws.merge_cells("C32:E32")
ws.row_dimensions[33].height = 25
c = ws["A33"]
c.value = "示例版"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
c = ws["B33"]
c.value = "参考学习"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
c = ws["C33"]
c.value = "展示一份完整的填写示例"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
ws.merge_cells("C33:E33")
ws.row_dimensions[34].height = 8
ws.row_dimensions[35].height = 8
ws.row_dimensions[36].height = 8
ws.row_dimensions[37].height = 8
ws.merge_cells("A38:E38")
ws.row_dimensions[38].height = 30
c = ws["A38"]
c.value = "四、重要提示"
c.font = sec_font()
c.fill = title_fill()
c.alignment = aln_l()
c.border = border_thin
ws.row_dimensions[39].height = 25
ws.merge_cells("A39:E39")
c = ws["A39"]
c.value = "1. 每张表单都可以独立打印使用"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
ws.row_dimensions[40].height = 25
ws.merge_cells("A40:E40")
c = ws["A40"]
c.value = "2. HTML版本适合屏幕查看和高质量打印"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
ws.row_dimensions[41].height = 25
ws.merge_cells("A41:E41")
c = ws["A41"]
c.value = "3. Excel版本适合在电脑上填写后保存"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
ws.row_dimensions[42].height = 25
ws.merge_cells("A42:E42")
c = ws["A42"]
c.value = "4. 建议先完成空白版，再对照示例版检查"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin

os.makedirs(os.path.dirname(OUT), exist_ok=True)
wb.save(OUT)
print([OUT, os.path.getsize(OUT)])