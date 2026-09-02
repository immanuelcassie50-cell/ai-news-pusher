
def ah(ws,row,cols,texts,bg=HEADER_BG,fg=HEADER_FG,height=22):
 for col,text in zip(cols,texts):
  c=ws.cell(row=row,column=col,value=text)
  c.font=Font(bold=True,color=fg,size=11)
  c.fill=hf(bg);c.alignment=ctr();c.border=tb()
 ws.row_dimensions[row].height=height

def at(ws,row,cols,text,span_cols=None,height=28):
 if span_cols:ws.merge_cells(start_row=row,start_column=span_cols[0],end_row=row,end_column=span_cols[1])
 c=ws.cell(row=row,column=cols[0],value=text)
 c.font=Font(bold=True,color=HEADER_FG,size=13);c.fill=hf(TITLE_BG);c.alignment=ctr();c.border=tb()
 ws.row_dimensions[row].height=height

def asec(ws,row,col,text,ncols,height=18):
 ws.merge_cells(start_row=row,start_column=col,end_row=row,end_column=col+ncols-1)
 c=ws.cell(row=row,column=col,value=text)
 c.font=Font(bold=True,size=10);c.fill=hf(SECTION_BG);c.alignment=lft();c.border=tb()
 ws.row_dimensions[row].height=height

def adr(ws,row,col,text,style="normal",alt=False,height=18):
 bg=ALT_ROW_BG if alt else "FFFFFF"
 if style=="input":bg=INPUT_BG
 c=ws.cell(row=row,column=col,value=text)
 c.font=Font(size=10,color="0000FF" if style=="input" else "000000")
 c.fill=hf(bg);c.alignment=lft();c.border=tb();ws.row_dimensions[row].height=height
 return c

def scw(ws,widths):
 for i,w in enumerate(widths,1):ws.column_dimensions[get_column_letter(i)].width=w

def ash(ws,title):
 ws.row_dimensions[1].height=8;at(ws,2,[1],title,span_cols=(1,6),height=30);ws.row_dimensions[3].height=8

def ai(ws,instructions,start_row=4):
 ws.merge_cells(start_row=start_row,start_column=1,end_row=start_row,end_column=6)
 c=ws.cell(row=start_row,column=1,value=instructions)
 c.font=Font(italic=True,size=9,color="595959");c.alignment=lft();ws.row_dimensions[start_row].height=30
 return start_row+1
