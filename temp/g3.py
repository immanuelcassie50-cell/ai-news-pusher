
def title_fill(): return PatternFill("solid", fgColor=wine_red)
def title_font(): return Font(name="Microsoft YaHei", size=18, bold=True, color="FFFFFF")
def sub_font(): return Font(name="Microsoft YaHei", size=11, color="FFFFFF")
def sec_font(): return Font(name="Microsoft YaHei", size=12, bold=True, color="FFFFFF")
def hdr_font(): return Font(name="Microsoft YaHei", size=11, bold=True)
def dat_font(): return Font(name="Microsoft YaHei", size=10)
def beige_fill(): return PatternFill("solid", fgColor=beige)
def white_fill(): return PatternFill("solid", fgColor=white)
def aln_c(): return Alignment(horizontal="center", vertical="center", wrap_text=True)
def aln_l(): return Alignment(horizontal="left", vertical="center", wrap_text=True)

def style_cell(cell, font, fill, aln, border):
    cell.font = font
    cell.fill = fill
    cell.alignment = aln
    cell.border = border