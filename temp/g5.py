ws.merge_cells("A1:E1")
ws.row_dimensions[1].height = 40
c = ws["A1"]
c.value = "行动计划进化课 · 配套表单使用指引"
c.font = title_font()
c.fill = title_fill()
c.alignment = aln_c()
c.border = border_thin
ws.merge_cells("A2:E2")
ws.row_dimensions[2].height = 30
c = ws["A2"]
c.value = "共12张工具表单 + 1份使用指引 | 空白版供练习 | 示例版供参照"
c.font = sub_font()
c.fill = title_fill()
c.alignment = aln_c()
c.border = border_thin
ws.row_dimensions[3].height = 8
ws.merge_cells("A4:E4")
ws.row_dimensions[4].height = 30
c = ws["A4"]
c.value = "一、表单总览"
c.font = sec_font()
c.fill = title_fill()
c.alignment = aln_l()
c.border = border_thin