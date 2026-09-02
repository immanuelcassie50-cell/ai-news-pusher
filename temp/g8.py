ws.row_dimensions[18].height = 8
ws.row_dimensions[19].height = 8
ws.merge_cells("A20:E20")
ws.row_dimensions[20].height = 30
c = ws["A20"]
c.value = "二、推荐使用流程"
c.font = sec_font()
c.fill = title_fill()
c.alignment = aln_l()
c.border = border_thin
ws.row_dimensions[21].height = 30
ws.merge_cells("A21:E21")
c = ws["A21"]
c.value = "1. 用 F1 找到自己真实经历的一次计划失败"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
ws.row_dimensions[22].height = 30
ws.merge_cells("A22:E22")
c = ws["A22"]
c.value = "2. 用 F2 诊断这次失败卡在哪一层（触发/能力/动机）"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
ws.row_dimensions[23].height = 30
ws.merge_cells("A23:E23")
c = ws["A23"]
c.value = "3. 根据诊断结果，选择对应的方法表单（F3-F10）"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
ws.row_dimensions[24].height = 30
ws.merge_cells("A24:E24")
c = ws["A24"]
c.value = "4. 每个方法表单都按识别→模仿→创造的顺序完成"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
ws.row_dimensions[25].height = 30
ws.merge_cells("A25:E25")
c = ws["A25"]
c.value = "5. 用 F11 设计预案，防止意外中断"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
ws.row_dimensions[26].height = 30
ws.merge_cells("A26:E26")
c = ws["A26"]
c.value = "6. 用 F12 整合所有设计，产出最终版行动计划"
c.font = dat_font()
c.fill = white_fill()
c.alignment = aln_l()
c.border = border_thin
ws.row_dimensions[27].height = 8
ws.row_dimensions[28].height = 8
ws.row_dimensions[29].height = 8