import xml.etree.ElementTree as ET

NS = 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'
R_NS = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
X14AC = 'http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac'

for prefix, uri in [('', NS), ('r', R_NS), ('x14ac', X14AC)]:
    ET.register_namespace(prefix, uri)

NM = {'ns': NS}

# String indices 0-66
STR = {
    'title': 0,
    'name': 1, 'date': 2, 'dept': 3,
    'sec1': 4,
    'col_type': 5, 'col_status': 6, 'col_sat': 7, 'col_priority': 8, 'col_remark': 9,
    't1': 10, 't2': 11, 't3': 12, 't4': 13, 't5': 14, 't6': 15,
    'total_score': 16, 'avg_score': 17,
    'sec2': 18,
    'col_dim': 19, 'col_freq': 20, 'col_sincere': 21, 'col_diverse': 22, 'col_visible': 23, 'col_subtotal': 24,
    'p1': 25, 'p2': 26, 'p3': 27,
    'sec3': 28,
    'col_growth': 29, 'col_train': 30, 'col_mentor': 31, 'col_rotate': 32, 'col_promo': 33,
    'train_hours': 35, 'promo_count': 36,
    'sec4': 37,
    'col_exp': 38, 'col_rhythm': 39, 'col_collab': 40, 'col_transp': 41, 'col_resource': 42,
    'overwork_days': 44, 'cross_proj': 45,
    'sec5': 46,
    'col_ai_tool': 47, 'col_ai适用': 48, 'col_ai_effect': 49, 'col_ai_diff': 50, 'col_ai_prio': 51,
    'ai1_name': 52, 'ai1适用': 53, 'ai1_effect': 54,
    'ai2_name': 55, 'ai2适用': 56, 'ai2_effect': 57,
    'ai3_name': 58, 'ai3适用': 59, 'ai3_effect': 60,
    'ai4_name': 61, 'ai4适用': 62, 'ai4_effect': 63,
    'ai5_name': 64, 'ai5适用': 65, 'ai5_effect': 66,
}

def c(ref, t=None, s=None, v=None, f=None):
    attribs = {'r': ref}
    if t: attribs['t'] = t
    if s is not None: attribs['s'] = str(s)
    cell = ET.Element('c', attribs)
    if f is not None:
        f_elem = ET.SubElement(cell, 'f')
        f_elem.text = f
        v_elem = ET.SubElement(cell, 'v')
        if v is not None: v_elem.text = str(v)
    elif v is not None:
        v_elem = ET.SubElement(cell, 'v')
        v_elem.text = str(v)
    return cell

def row_elem(r_num, cells):
    row_e = ET.Element('row', {'r': str(r_num)})
    for cell in cells:
        row_e.append(cell)
    return row_e

work_dir = 'D:/temp/xlsx_work/F3_work'
sheet_path = f'{work_dir}/xl/worksheets/sheet1.xml'
tree = ET.parse(sheet_path)
root2 = tree.getroot()

# Remove old sheetData
sd_elem = root2.find('ns:sheetData', namespaces=NM)
if sd_elem is not None:
    root2.remove(sd_elem)

# Build new sheetData
sd = ET.Element('sheetData')

sd.append(row_elem(1, [c('A1', t='s', s=4, v=STR['title'])]))

sd.append(row_elem(2, [
    c('A2', t='s', s=1, v=STR['name']), c('B2', s=1),
    c('C2', t='s', s=1, v=STR['date']), c('D2', s=1),
    c('E2', t='s', s=1, v=STR['dept']), c('F2', s=1),
]))

sd.append(row_elem(3, [c('A3', t='s', s=4, v=STR['sec1'])]))

sd.append(row_elem(4, [
    c('A4', t='s', s=4, v=STR['col_type']), c('B4', t='s', s=4, v=STR['col_status']),
    c('C4', t='s', s=4, v=STR['col_sat']), c('D4', t='s', s=4, v=STR['col_priority']),
    c('E4', t='s', s=4, v=STR['col_remark']),
]))

types = [STR['t1'], STR['t2'], STR['t3'], STR['t4'], STR['t5'], STR['t6']]
for i, type_idx in enumerate(types):
    r = 5 + i
    sd.append(row_elem(r, [
        c(f'A{r}', t='s', s=1, v=type_idx), c(f'B{r}', s=1), c(f'C{r}', s=1),
        c(f'D{r}', s=2, f=f'IF(B{r}=0,"",IF(B{r}&lt;3,"高",IF(B{r}&lt;4,"中","低")))'),
        c(f'E{r}', s=1),
    ]))

sd.append(row_elem(11, [
    c('A11', t='s', s=4, v=STR['total_score']),
    c('B11', s=2, f='SUM(B5:B10)'), c('C11', s=2, f='SUM(C5:C10)'),
]))

sd.append(row_elem(12, [
    c('A12', t='s', s=4, v=STR['avg_score']),
    c('B12', s=2, f='IFERROR(AVERAGE(B5:B10),0)'),
    c('C12', s=2, f='IFERROR(AVERAGE(C5:C10),0)'),
]))

sd.append(row_elem(13, []))
sd.append(row_elem(14, [c('A14', t='s', s=4, v=STR['sec2'])]))
sd.append(row_elem(15, [
    c('A15', t='s', s=4, v=STR['col_dim']), c('B15', t='s', s=4, v=STR['col_freq']),
    c('C15', t='s', s=4, v=STR['col_sincere']), c('D15', t='s', s=4, v=STR['col_diverse']),
    c('E15', t='s', s=4, v=STR['col_visible']), c('F15', t='s', s=4, v=STR['col_subtotal']),
]))

p_items = [STR['p1'], STR['p2'], STR['p3']]
for i, p_idx in enumerate(p_items):
    r = 16 + i
    sd.append(row_elem(r, [
        c(f'A{r}', t='s', s=1, v=p_idx),
        c(f'B{r}', s=1), c(f'C{r}', s=1), c(f'D{r}', s=1), c(f'E{r}', s=1),
        c(f'F{r}', s=2, f=f'SUM(B{r}:E{r})'),
    ]))

sd.append(row_elem(19, []))
sd.append(row_elem(20, [c('A20', t='s', s=4, v=STR['sec3'])]))
sd.append(row_elem(21, [
    c('A21', t='s', s=4, v=STR['col_growth']), c('B21', t='s', s=4, v=STR['col_train']),
    c('C21', t='s', s=4, v=STR['col_mentor']), c('D21', t='s', s=4, v=STR['col_rotate']),
    c('E21', t='s', s=4, v=STR['col_promo']), c('F21', t='s', s=4, v=STR['col_subtotal']),
]))

sd.append(row_elem(22, [
    c('A22', t='s', s=1, v=STR['train_hours']),
    c('B22', s=1), c('C22', s=1), c('D22', s=1), c('E22', s=1),
    c('F22', s=2, f='SUM(B22:E22)'),
]))
sd.append(row_elem(23, [
    c('A23', t='s', s=1, v=STR['promo_count']),
    c('B23', s=1), c('C23', s=1), c('D23', s=1), c('E23', s=1),
    c('F23', s=2, f='SUM(B23:E23)'),
]))

sd.append(row_elem(24, []))
sd.append(row_elem(25, [c('A25', t='s', s=4, v=STR['sec4'])]))
sd.append(row_elem(26, [
    c('A26', t='s', s=4, v=STR['col_exp']), c('B26', t='s', s=4, v=STR['col_rhythm']),
    c('C26', t='s', s=4, v=STR['col_collab']), c('D26', t='s', s=4, v=STR['col_transp']),
    c('E26', t='s', s=4, v=STR['col_resource']), c('F26', t='s', s=4, v=STR['col_subtotal']),
]))

sd.append(row_elem(27, [
    c('A27', t='s', s=1, v=STR['overwork_days']),
    c('B27', s=1), c('C27', s=1), c('D27', s=1), c('E27', s=1),
    c('F27', s=2, f='SUM(B27:E27)'),
]))
sd.append(row_elem(28, [
    c('A28', t='s', s=1, v=STR['cross_proj']),
    c('B28', s=1), c('C28', s=1), c('D28', s=1), c('E28', s=1),
    c('F28', s=2, f='SUM(B28:E28)'),
]))

sd.append(row_elem(29, []))
sd.append(row_elem(30, [c('A30', t='s', s=4, v=STR['sec5'])]))
sd.append(row_elem(31, [
    c('A31', t='s', s=4, v=STR['col_ai_tool']), c('B31', t='s', s=4, v=STR['col_ai适用']),
    c('C31', t='s', s=4, v=STR['col_ai_effect']), c('D31', t='s', s=4, v=STR['col_ai_diff']),
    c('E31', t='s', s=4, v=STR['col_ai_prio']),
]))

ai_items = [
    (STR['ai1_name'], STR['ai1适用'], STR['ai1_effect']),
    (STR['ai2_name'], STR['ai2适用'], STR['ai2_effect']),
    (STR['ai3_name'], STR['ai3适用'], STR['ai3_effect']),
    (STR['ai4_name'], STR['ai4适用'], STR['ai4_effect']),
    (STR['ai5_name'], STR['ai5适用'], STR['ai5_effect']),
]
for i, (name_idx, app_idx, eff_idx) in enumerate(ai_items):
    r = 32 + i
    sd.append(row_elem(r, [
        c(f'A{r}', t='s', s=1, v=name_idx), c(f'B{r}', t='s', s=1, v=app_idx),
        c(f'C{r}', t='s', s=1, v=eff_idx), c(f'D{r}', s=1), c(f'E{r}', s=1),
    ]))

# Add freeze pane
sv = root2.find('ns:sheetViews/ns:sheetView', namespaces=NM)
for p in list(sv.findall('ns:pane', namespaces=NM)):
    sv.remove(p)
pane = ET.SubElement(sv, 'pane')
pane.set('ySplit', '4')
pane.set('topLeftCell', 'A5')
pane.set('activePane', 'bottomLeft')
pane.set('state', 'frozen')

# Add column widths
cols = ET.Element('cols')
for min_c, max_c, width, cw in [(1,1,20,1), (2,5,14,1), (6,6,22,1)]:
    col = ET.SubElement(cols, 'col')
    col.set('min', str(min_c)); col.set('max', str(max_c))
    col.set('width', str(width)); col.set('customWidth', str(cw))

root2.append(cols)
root2.append(sd)

tree.write(sheet_path, xml_declaration=True, encoding='UTF-8')
print("Done writing sheet1.xml")
