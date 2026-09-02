# -*- coding: utf-8 -*-
import os
import zipfile
from xml.etree import ElementTree as ET

# Define namespaces
NS = {
    'main': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
    'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
    'rel': 'http://schemas.openxmlformats.org/package/2006/relationships',
    'ct': 'http://schemas.openxmlformats.org/package/2006/content-types',
}

for prefix, uri in NS.items():
    if prefix == 'main':
        ET.register_namespace('', uri)
    else:
        ET.register_namespace(prefix, uri)

# Color scheme (matching reference files - blue theme)
COLORS = {
    'header_bg': '001B4F9B',
    'header_fg': '00FFFFFF',
    'subheader_bg': '002E75B6',
    'row_alt': '00F2F2F2',
    'row_white': '00FFFFFF',
    'input_bg': '00DEEAF1',
    'orange': '00C55A11',
    'green': '00375623',
    'teal': '00006B6B',
    'light_green': '00E2EFDA',
    'light_teal': '00E0F0F0',
    'text_dark': '00262626',
    'text_blue': '001B4F9B',
    'yellow': '00FCF4E1',
    'light_blue': '00BDD7EE',
}


def make_font(bold=False, color='00000000', size=10, italic=False):
    font = ET.Element('font')
    name = ET.SubElement(font, 'name')
    name.set('val', 'Arial')
    if bold:
        ET.SubElement(font, 'b')
    if italic:
        ET.SubElement(font, 'i')
    sz = ET.SubElement(font, 'sz')
    sz.set('val', str(size))
    col = ET.SubElement(font, 'color')
    col.set('rgb', color)
    return font


def make_fill(color_rgb):
    fill = ET.Element('fill')
    pf = ET.SubElement(fill, 'patternFill')
    pf.set('patternType', 'solid')
    fg = ET.SubElement(pf, 'fgColor')
    fg.set('rgb', color_rgb)
    return fill


def make_xf(fontId, fillId, borderId=1, numFmtId=0, ha='left', va='center', wrap=True):
    xf = ET.Element('xf')
    xf.set('numFmtId', str(numFmtId))
    xf.set('fontId', str(fontId))
    xf.set('fillId', str(fillId))
    xf.set('borderId', str(borderId))
    xf.set('xfId', '0')
    xf.set('applyFont', '1')
    xf.set('applyFill', '1')
    xf.set('applyAlignment', '1')
    align = ET.SubElement(xf, 'alignment')
    align.set('horizontal', ha)
    align.set('vertical', va)
    align.set('wrapText', '1' if wrap else '0')
    return xf


def build_styles():
    """Build comprehensive styles matching reference file"""
    root = ET.Element('styleSheet')
    root.set('xmlns', NS['main'])

    # numFmts - empty (using built-in formats)
    numFmts = ET.SubElement(root, 'numFmts')
    numFmts.set('count', '0')

    # Fonts
    fonts = ET.SubElement(root, 'fonts')
    fonts.set('count', '12')

    fonts.append(make_font(size=11))  # 0: Default
    fonts.append(make_font(bold=True, color='00FFFFFF', size=14))  # 1: White bold 14
    fonts.append(make_font(bold=True, color='00FFFFFF', size=10))  # 2: White bold 10
    fonts.append(make_font(bold=True, color=COLORS['text_blue'], size=10))  # 3: Blue bold 10
    fonts.append(make_font(color=COLORS['text_dark'], size=10))  # 4: Dark text 10
    fonts.append(make_font(color=COLORS['text_blue'], size=10))  # 5: Blue text 10
    fonts.append(make_font(color='002E75B6', size=9, italic=True))  # 6: Italic blue 9
    fonts.append(make_font(bold=True, color='00FFFFFF', size=11))  # 7: White bold 11
    fonts.append(make_font(bold=True, color=COLORS['green'], size=10))  # 8: Green bold 10
    fonts.append(make_font(bold=True, color=COLORS['teal'], size=10))  # 9: Teal bold 10
    fonts.append(make_font(color=COLORS['green'], size=10))  # 10: Green 10
    fonts.append(make_font(bold=True, color=COLORS['orange'], size=10))  # 11: Orange bold 10

    # Fills
    fills = ET.SubElement(root, 'fills')
    fills.set('count', '14')
    fills.append(make_fill('00FFFFFF'))  # 0: none
    fills.append(make_fill('00FFFFFF'))  # 1: gray125
    fills.append(make_fill(COLORS['header_bg']))  # 2: dark blue
    fills.append(make_fill(COLORS['row_alt']))  # 3: light gray
    fills.append(make_fill(COLORS['row_white']))  # 4: white
    fills.append(make_fill(COLORS['input_bg']))  # 5: light blue
    fills.append(make_fill(COLORS['subheader_bg']))  # 6: blue
    fills.append(make_fill(COLORS['orange']))  # 7: orange
    fills.append(make_fill(COLORS['light_green']))  # 8: light green
    fills.append(make_fill(COLORS['teal']))  # 9: teal
    fills.append(make_fill(COLORS['light_teal']))  # 10: light teal
    fills.append(make_fill(COLORS['green']))  # 11: green
    fills.append(make_fill(COLORS['yellow']))  # 12: yellow
    fills.append(make_fill(COLORS['light_blue']))  # 13: light blue

    # Borders
    borders = ET.SubElement(root, 'borders')
    borders.set('count', '6')

    def make_border(left=False, right=False, top=False, bottom=False, color='00AAAAAA', style='thin'):
        border = ET.Element('border')
        for side, enabled in [('left', left), ('right', right), ('top', top), ('bottom', bottom)]:
            el = ET.SubElement(border, side)
            if enabled:
                el.set('style', style)
                c = ET.SubElement(el, 'color')
                c.set('rgb', color)
        return border

    borders.append(make_border())  # 0: none
    borders.append(make_border(left=True, right=True, top=True, bottom=True))  # 1: all thin
    borders.append(make_border(bottom=True, color='00CCCCCC'))  # 2: bottom only
    borders.append(make_border(top=True))  # 3: top only
    borders.append(make_border(right=True, top=True))  # 4: right+top
    borders.append(make_border(right=True, top=True, bottom=True))  # 5: right+top+bottom

    # cellStyleXfs
    cellStyleXfs = ET.SubElement(root, 'cellStyleXfs')
    cellStyleXfs.set('count', '1')
    cellStyleXfs.append(make_xf(0, 0, 0, 0, 'left', wrap=False))

    # cellXfs - comprehensive style definitions
    cellXfs = ET.SubElement(root, 'cellXfs')
    cellXfs.set('count', '34')

    cellXfs.append(make_xf(0, 0, 0, 0, 'left', wrap=False))  # 0: Default
    cellXfs.append(make_xf(1, 2, 0, 0, 'left'))  # 1: Title row
    cellXfs.append(make_xf(2, 2, 1, 0, 'center'))  # 2: Header row white bold
    cellXfs.append(make_xf(3, 3, 1, 0, 'center'))  # 3: Subheader blue bold on gray
    cellXfs.append(make_xf(4, 3, 1, 0, 'left'))  # 4: Label dark on gray left
    cellXfs.append(make_xf(4, 3, 1, 0, 'center'))  # 5: Label dark on gray center
    cellXfs.append(make_xf(3, 4, 1, 0, 'center'))  # 6: Value blue on white center
    cellXfs.append(make_xf(4, 4, 1, 0, 'left'))  # 7: Value dark on white left
    cellXfs.append(make_xf(4, 4, 1, 0, 'center'))  # 8: Value dark on white center
    cellXfs.append(make_xf(5, 5, 1, 0, 'left'))  # 9: Input blue on light blue
    cellXfs.append(make_xf(1, 6, 0, 0, 'left'))  # 10: Section white on blue
    cellXfs.append(make_xf(6, 5, 0, 0, 'left'))  # 11: Note italic blue
    cellXfs.append(make_xf(2, 7, 1, 0, 'center'))  # 12: Orange header white bold
    cellXfs.append(make_xf(7, 7, 0, 0, 'left'))  # 13: Orange label white
    cellXfs.append(make_xf(2, 9, 1, 0, 'center'))  # 14: Teal header white bold
    cellXfs.append(make_xf(3, 5, 1, 0, 'left'))  # 15: Teal label blue text
    cellXfs.append(make_xf(0, 4, 2, 0, 'left', wrap=False))  # 16: Bottom border
    cellXfs.append(make_xf(8, 8, 1, 0, 'left'))  # 17: Green header
    cellXfs.append(make_xf(1, 9, 0, 0, 'left'))  # 18: Light green value
    cellXfs.append(make_xf(7, 10, 0, 0, 'left'))  # 19: Light teal value
    cellXfs.append(make_xf(2, 9, 1, 0, 'center'))  # 20: Teal centered
    cellXfs.append(make_xf(9, 10, 1, 0, 'left'))  # 21: Teal label left
    cellXfs.append(make_xf(1, 11, 0, 0, 'left'))  # 22: Green label
    cellXfs.append(make_xf(7, 11, 0, 0, 'left'))  # 23: Light teal label
    cellXfs.append(make_xf(2, 11, 1, 0, 'center'))  # 24: Teal centered
    cellXfs.append(make_xf(10, 8, 1, 0, 'left'))  # 25: Orange text on light green
    cellXfs.append(make_xf(8, 3, 1, 0, 'left'))  # 26: Green on gray
    cellXfs.append(make_xf(8, 4, 1, 0, 'left'))  # 27: Green on white
    cellXfs.append(make_xf(1, 7, 0, 0, 'left'))  # 28: White on orange
    cellXfs.append(make_xf(11, 12, 1, 0, 'left'))  # 29: Orange bold on yellow
    cellXfs.append(make_xf(5, 13, 1, 0, 'left'))  # 30: Blue text on light blue
    cellXfs.append(make_xf(3, 13, 1, 0, 'left'))  # 31: Blue bold on light blue
    cellXfs.append(make_xf(0, 0, 5, 0, 'left', wrap=False))  # 32: All borders
    cellXfs.append(make_xf(5, 5, 1, 0, 'center'))  # 33: Number input centered

    # cellStyles
    cellStyles = ET.SubElement(root, 'cellStyles')
    cellStyles.set('count', '1')
    cs = ET.SubElement(cellStyles, 'cellStyle')
    cs.set('name', 'Normal')
    cs.set('xfId', '0')
    cs.set('builtinId', '0')

    # tableStyles
    tableStyles = ET.SubElement(root, 'tableStyles')
    tableStyles.set('count', '0')
    tableStyles.set('defaultTableStyle', 'TableStyleMedium9')
    tableStyles.set('defaultPivotStyle', 'PivotStyleLight16')

    return root


def create_sheet_data(rows):
    """Convert rows list to sheetData XML"""
    sd = ET.Element('sheetData')

    for r_idx, row in enumerate(rows, 1):
        row_el = ET.SubElement(sd, 'row')
        row_el.set('r', str(r_idx))

        for c_idx, cell in enumerate(row, 1):
            if cell is None:
                continue
            c_ref = f"{chr(64+c_idx)}{r_idx}"
            c = ET.SubElement(row_el, 'c')
            c.set('r', c_ref)

            if isinstance(cell, dict):
                c.set('s', str(cell.get('s', 7)))
                t = cell.get('t', 'inlineStr')
                if t == 'inlineStr':
                    c.set('t', 'inlineStr')
                    is_el = ET.SubElement(c, 'is')
                    t_el = ET.SubElement(is_el, 't')
                    t_el.text = str(cell.get('v', '')) if cell.get('v') is not None else ''
                elif t == 'f':
                    f_el = ET.SubElement(c, 'f')
                    f_el.text = cell.get('v', '')
                elif t == 'n' or t == 's':
                    c.set('t', t)
                    v = ET.SubElement(c, 'v')
                    v.text = str(cell.get('v', ''))
                else:
                    v = ET.SubElement(c, 'v')
                    v.text = str(cell.get('v', ''))
            else:
                c.set('t', 'inlineStr')
                c.set('s', '7')
                is_el = ET.SubElement(c, 'is')
                t_el = ET.SubElement(is_el, 't')
                t_el.text = str(cell) if cell else ''

    return sd


def create_worksheet(name, data_rows, col_widths, merged_cells=None, tab_color=None):
    """Create a complete worksheet XML"""
    ws = ET.Element('worksheet')
    ws.set('xmlns', NS['main'])

    # sheetPr
    sheetPr = ET.SubElement(ws, 'sheetPr')
    if tab_color:
        tc = ET.SubElement(sheetPr, 'tabColor')
        tc.set('rgb', tab_color)
    outline = ET.SubElement(sheetPr, 'outlinePr')
    outline.set('summaryBelow', '1')
    outline.set('summaryRight', '1')

    # Calculate dimension
    if data_rows:
        max_col = max(len(row) for row in data_rows if row)
        last_col = chr(64 + max_col) if max_col <= 26 else 'A' + chr(64 + max_col - 26)
        ref = f"A1:{last_col}{len(data_rows)}"
    else:
        ref = "A1:A1"
    dim = ET.SubElement(ws, 'dimension')
    dim.set('ref', ref)

    # sheetViews
    sheetViews = ET.SubElement(ws, 'sheetViews')
    sv = ET.SubElement(sheetViews, 'sheetView')
    sv.set('workbookViewId', '0')
    sel = ET.SubElement(sv, 'selection')
    sel.set('activeCell', 'A1')
    sel.set('sqref', 'A1')

    # sheetFormatPr
    sf = ET.SubElement(ws, 'sheetFormatPr')
    sf.set('baseColWidth', '8')
    sf.set('defaultRowHeight', '15')

    # cols
    cols = ET.SubElement(ws, 'cols')
    for i, w in enumerate(col_widths, 1):
        col = ET.SubElement(cols, 'col')
        col.set('min', str(i))
        col.set('max', str(i))
        col.set('width', str(w))
        col.set('customWidth', '1')

    # sheetData
    ws.append(create_sheet_data(data_rows))

    # mergeCells
    if merged_cells:
        mc = ET.SubElement(ws, 'mergeCells')
        mc.set('count', str(len(merged_cells)))
        for ref in merged_cells:
            m = ET.SubElement(mc, 'mergeCell')
            m.set('ref', ref)

    # pageMargins
    pm = ET.SubElement(ws, 'pageMargins')
    pm.set('left', '0.75')
    pm.set('right', '0.75')
    pm.set('top', '1')
    pm.set('bottom', '1')
    pm.set('header', '0.5')
    pm.set('footer', '0.5')

    return ws


def build_workbook_xml(sheet_names):
    """Build workbook.xml with sheet definitions"""
    wb = ET.Element('workbook')
    wb.set('xmlns', NS['main'])

    wbPr = ET.SubElement(wb, 'workbookPr')
    calcPr = ET.SubElement(wb, 'calcPr')
    calcPr.set('calcId', '124519')
    calcPr.set('fullCalcOnLoad', '1')

    bookViews = ET.SubElement(wb, 'bookViews')
    wbView = ET.SubElement(bookViews, 'workbookView')
    wbView.set('visibility', 'visible')
    wbView.set('showHorizontalScroll', '1')
    wbView.set('showVerticalScroll', '1')
    wbView.set('showSheetTabs', '1')
    wbView.set('tabRatio', '600')
    wbView.set('firstSheet', '0')
    wbView.set('activeTab', '0')

    sheets = ET.SubElement(wb, 'sheets')
    for i, name in enumerate(sheet_names, 1):
        sheet = ET.SubElement(sheets, 'sheet')
        sheet.set('xmlns:r', NS['r'])
        sheet.set('name', name)
        sheet.set('sheetId', str(i))
        sheet.set('state', 'visible')
        sheet.set('r:id', f'rId{i}')

    definedNames = ET.SubElement(wb, 'definedNames')

    return wb


def build_workbook_rels(num_sheets):
    """Build workbook.xml.rels"""
    rels = ET.Element('Relationships')
    rels.set('xmlns', NS['rel'])

    for i in range(1, num_sheets + 1):
        rel = ET.SubElement(rels, 'Relationship')
        rel.set('Id', f'rId{i}')
        rel.set('Type', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet')
        rel.set('Target', f'worksheets/sheet{i}.xml')

    rel = ET.SubElement(rels, 'Relationship')
    rel.set('Id', f'rId{num_sheets+1}')
    rel.set('Type', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles')
    rel.set('Target', 'styles.xml')

    return rels


def build_content_types(num_sheets):
    """Build [Content_Types].xml"""
    ct = ET.Element('Types')
    ct.set('xmlns', NS['ct'])

    for ext, ctype in [('rels', 'application/vnd.openxmlformats-package.relationships+xml'),
                       ('xml', 'application/xml')]:
        d = ET.SubElement(ct, 'Default')
        d.set('Extension', ext)
        d.set('ContentType', ctype)

    ov = ET.SubElement(ct, 'Override')
    ov.set('PartName', '/xl/workbook.xml')
    ov.set('ContentType', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml')

    for i in range(1, num_sheets + 1):
        ov = ET.SubElement(ct, 'Override')
        ov.set('PartName', f'/xl/worksheets/sheet{i}.xml')
        ov.set('ContentType', 'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml')

    ov = ET.SubElement(ct, 'Override')
    ov.set('PartName', '/xl/styles.xml')
    ov.set('ContentType', 'application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml')

    return ct


def indent_xml(elem, level=0):
    """Pretty print XML"""
    i = "\n" + level * "  "
    if len(elem):
        if not elem.text or not elem.text.strip():
            elem.text = i + "  "
        if not elem.tail or not elem.tail.strip():
            elem.tail = i
        for child in elem:
            indent_xml(child, level+1)
        if not child.tail or not child.tail.strip():
            child.tail = i
    else:
        if level and (not elem.tail or not elem.tail.strip()):
            elem.tail = i


def save_pretty_xml(elem, path):
    indent_xml(elem)
    tree = ET.ElementTree(elem)
    tree.write(path, encoding='UTF-8', xml_declaration=True)


def cell(text, style=7, cell_type='inlineStr', value=None):
    """Helper to create a cell dict"""
    return {'t': cell_type, 's': style, 'v': value if value is not None else text}


def hdr(text, style=2):
    """Header cell"""
    return cell(text, style)


def lbl(text, style=7):
    """Label cell"""
    return cell(text, style)


def val(text, style=7):
    """Value cell"""
    return cell(text, style)


def inp(text, style=9):
    """Input cell"""
    return cell(text, style)


def formula(formula_text, style=6):
    """Formula cell"""
    return {'t': 'f', 's': style, 'v': formula_text}


# ==============================================================================
# Sheet definitions
# ==============================================================================

def make_sheet1():
    """契约类型判断表"""
    rows = [
        [hdr('契约类型判断表', 1)],
        [],
        [hdr('契约场景描述', 2), hdr('契约类型选项', 2), hdr('判断理由', 2), hdr('评分', 2)],
        [inp(''), lbl('A. 正式契约\n(法律约束)'), inp(''), inp('')],
        [inp(''), lbl('B. 关系性契约\n(信任约束)'), inp(''), inp('')],
        [inp(''), lbl('C. 混合契约\n(双重约束)'), inp(''), inp('')],
        [inp(''), lbl('D. 习惯性契约\n(自我执行)'), inp(''), inp('')],
        [],
        [lbl('使用说明：', 11), lbl('填写契约场景描述，选择最合适的契约类型，并说明判断理由。评分标准：1-5分，5分表示完全匹配。', 11)],
    ]
    return rows, [4, 30, 40, 12], ['A1:D1', 'A9:D9']


def make_sheet2():
    """信任成本计算表"""
    rows = [
        [hdr('信任成本计算表', 1)],
        [],
        [hdr('情境参数输入', 2), hdr('数值', 2), hdr('说明', 2)],
        [lbl('交易金额（元）', 4), inp('100000'), lbl('合同标的金额', 7)],
        [lbl('信任建立成本（元）', 4), inp('5000'), lbl('尽调、谈判等前期投入', 7)],
        [lbl('违约概率（%）', 4), inp('15'), lbl('基于历史数据估算', 7)],
        [lbl('违约损失率（%）', 4), inp('80'), lbl('违约后能收回的比例', 7)],
        [],
        [hdr('成本计算结果', 2), hdr('数值', 2), hdr('公式', 2)],
        [lbl('信任成本（元）', 4), formula('B4*B5/100'), lbl('交易金额 x 违约概率', 7)],
        [lbl('不信任成本（元）', 4), formula('B4*(1-B6/100)*0.3'), lbl('错失机会成本估算', 7)],
        [lbl('净收益（元）', 4), formula('B10-B11'), lbl('信任收益 - 信任成本', 7)],
        [],
        [lbl('结论：', 11), lbl('净收益>0 建立信任更优；净收益<0 降低信任依赖', 11)],
    ]
    return rows, [25, 15, 35], ['A1:D1', 'A13:D13']


def make_sheet3():
    """制度落差评估矩阵"""
    rows = [
        [hdr('制度落差评估矩阵', 1)],
        [],
        [hdr('评估维度', 2), hdr('评分(1-5)', 2), hdr('现状描述', 2), hdr('落差类型', 2)],
        [lbl('正式制度完备性', 4), inp(''), inp(''), lbl('', 7)],
        [lbl('执行力度', 4), inp(''), inp(''), lbl('', 7)],
        [lbl('非正式信任度', 4), inp(''), inp(''), lbl('', 7)],
        [lbl('文化适配度', 4), inp(''), inp(''), lbl('', 7)],
        [],
        [hdr('综合评估', 2)],
        [lbl('平均分', 4), formula('AVERAGE(B4:B7)'), lbl('1-2分：严重落差 | 3分：一般落差 | 4-5分：基本完善', 11)],
        [lbl('落差类型判定', 4), formula('IF(B10<2,"严重落差型",IF(B10<3,"一般落差型","基本完善型"))'), lbl('', 7)],
        [],
    ]
    return rows, [20, 12, 35, 18], ['A1:D1', 'A9:D9']


def make_sheet4():
    """制度有效性评分表"""
    rows = [
        [hdr('制度有效性评分表', 1)],
        [],
        [hdr('评估指标', 2), hdr('权重', 2), hdr('评分(1-5)', 2), hdr('加权得分', 2), hdr('有效性等级', 2)],
        [lbl('制度完整性', 4), inp('25%'), inp(''), formula('C4*B4'), lbl('', 7)],
        [lbl('执行一致性', 4), inp('25%'), inp(''), formula('C5*B5'), lbl('', 7)],
        [lbl('监督有效性', 4), inp('20%'), inp(''), formula('C6*B6'), lbl('', 7)],
        [lbl('违规处罚力度', 4), inp('15%'), inp(''), formula('C7*B7'), lbl('', 7)],
        [lbl('制度适应性与更新速度', 4), inp('15%'), inp(''), formula('C8*B8'), lbl('', 7)],
        [],
        [lbl('综合得分', 4), lbl('100%', 8), formula('SUM(D4:D8)'), lbl('', 7)],
        [lbl('有效性等级', 4), lbl('', 7), lbl('', 7), lbl('=IF(D10<2,"低效",IF(D10<3.5,"一般","高效"))', 11), lbl('', 7)],
        [],
    ]
    return rows, [22, 10, 12, 12, 15], ['A1:E1', 'A10:E10', 'A11:E11']


def make_sheet5():
    """制度改进优先级排序"""
    rows = [
        [hdr('制度改进优先级排序', 1)],
        [],
        [hdr('改进事项', 2), hdr('紧迫性\n(1-5)', 2), hdr('影响度\n(1-5)', 2), hdr('实施难度\n(1-5)', 2), hdr('综合优先级', 2), hdr('行动计划', 2)],
        [inp(''), inp(''), inp(''), inp(''), formula('(B4+C4+(5-D4))/3'), inp('')],
        [inp(''), inp(''), inp(''), inp(''), formula('(B5+C5+(5-D5))/3'), inp('')],
        [inp(''), inp(''), inp(''), inp(''), formula('(B6+C6+(5-D6))/3'), inp('')],
        [inp(''), inp(''), inp(''), inp(''), formula('(B7+C7+(5-D7))/3'), inp('')],
        [inp(''), inp(''), inp(''), inp(''), formula('(B8+C8+(5-D8))/3'), inp('')],
        [],
        [lbl('优先级计算公式：', 11), lbl('（紧迫性 + 影响度 + (5-实施难度)）/ 3，分数越高越优先', 11)],
    ]
    return rows, [25, 10, 10, 10, 12, 25], ['A1:F1']


def make_sheet6():
    """契约检查清单"""
    rows = [
        [hdr('契约检查清单', 1)],
        [],
        [hdr('检查项目', 2), hdr('是否完成', 2), hdr('备注', 2), hdr('负责人', 2), hdr('完成日期', 2)],
        [inp(''), lbl('是 / 否', 7), inp(''), inp(''), inp('')],
        [inp(''), lbl('是 / 否', 7), inp(''), inp(''), inp('')],
        [inp(''), lbl('是 / 否', 7), inp(''), inp(''), inp('')],
        [inp(''), lbl('是 / 否', 7), inp(''), inp(''), inp('')],
        [inp(''), lbl('是 / 否', 7), inp(''), inp(''), inp('')],
        [inp(''), lbl('是 / 否', 7), inp(''), inp(''), inp('')],
        [inp(''), lbl('是 / 否', 7), inp(''), inp(''), inp('')],
        [inp(''), lbl('是 / 否', 7), inp(''), inp(''), inp('')],
        [inp(''), lbl('是 / 否', 7), inp(''), inp(''), inp('')],
        [],
        [lbl('完成率', 4), formula('COUNTIF(B4:B13,"是")/10'), lbl('填写"是"的数量/总项目数', 11)],
    ]
    return rows, [30, 10, 25, 12, 12], ['A1:E1']


def make_sheet7():
    """制度执行跟踪表"""
    rows = [
        [hdr('制度执行跟踪表', 1)],
        [],
        [hdr('制度名称', 2), hdr('执行指标', 2), hdr('当前状态', 2), hdr('问题记录', 2), hdr('改进措施', 2)],
        [inp(''), inp(''), inp(''), inp(''), inp('')],
        [inp(''), inp(''), inp(''), inp(''), inp('')],
        [inp(''), inp(''), inp(''), inp(''), inp('')],
        [inp(''), inp(''), inp(''), inp(''), inp('')],
        [inp(''), inp(''), inp(''), inp(''), inp('')],
        [],
        [lbl('跟踪周期：', 11), lbl('建议每周或每月更新一次', 11)],
    ]
    return rows, [20, 20, 15, 25, 20], ['A1:E1']


def pack_xlsx(work_dir, output_path):
    """Pack directory into xlsx file"""
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(work_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arc_name = os.path.relpath(file_path, work_dir)
                zf.write(file_path, arc_name)
    print(f'Packed: {output_path}')


def create_empty_form():
    """Create the empty form workbook"""
    work_dir = '/tmp/contract_empty'
    os.makedirs(work_dir, exist_ok=True)
    os.makedirs(f'{work_dir}/xl', exist_ok=True)
    os.makedirs(f'{work_dir}/xl/worksheets', exist_ok=True)
    os.makedirs(f'{work_dir}/xl/_rels', exist_ok=True)
    os.makedirs(f'{work_dir}/_rels', exist_ok=True)
    os.makedirs(f'{work_dir}/docProps', exist_ok=True)

    sheet_names = [
        '契约类型判断表',
        '信任成本计算表',
        '制度落差评估矩阵',
        '制度有效性评分表',
        '制度改进优先级排序',
        '契约检查清单',
        '制度执行跟踪表',
    ]
    tab_colors = ['001B4F9B', '002E75B6', '00375623', '00006B6B', '00C55A11', '00C55A11', '00375623']

    sheet_data = [
        make_sheet1(),
        make_sheet2(),
        make_sheet3(),
        make_sheet4(),
        make_sheet5(),
        make_sheet6(),
        make_sheet7(),
    ]

    # Write workbook.xml
    wb = build_workbook_xml(sheet_names)
    save_pretty_xml(wb, f'{work_dir}/xl/workbook.xml')

    # Write workbook.xml.rels
    rels = build_workbook_rels(len(sheet_names))
    save_pretty_xml(rels, f'{work_dir}/xl/_rels/workbook.xml.rels')

    # Write [Content_Types].xml
    ct = build_content_types(len(sheet_names))
    save_pretty_xml(ct, f'{work_dir}/[Content_Types].xml')

    # Write styles.xml
    styles = build_styles()
    save_pretty_xml(styles, f'{work_dir}/xl/styles.xml')

    # Write worksheets
    for i, (data, widths, merges) in enumerate(sheet_data, 1):
        ws = create_worksheet(sheet_names[i-1], data, widths, merges, tab_colors[i-1])
        save_pretty_xml(ws, f'{work_dir}/xl/worksheets/sheet{i}.xml')

    # Write _rels/.rels
    root_rels = ET.Element('Relationships')
    root_rels.set('xmlns', NS['rel'])
    rel = ET.SubElement(root_rels, 'Relationship')
    rel.set('Id', 'rId1')
    rel.set('Type', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument')
    rel.set('Target', 'xl/workbook.xml')
    save_pretty_xml(root_rels, f'{work_dir}/_rels/.rels')

    # Write docProps/app.xml
    app = ET.Element('Properties')
    app.set('xmlns', 'http://schemas.openxmlformats.org/officeDocument/2006/extended-properties')
    app.set('xmlns:vt', 'http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes')
    tn = ET.SubElement(app, 'Application')
    tn.text = 'Microsoft Excel'
    save_pretty_xml(app, f'{work_dir}/docProps/app.xml')

    # Pack
    output = '/d/新课开发/经济学/06_契约与信任/配套表单和指引-Excel版/配套表单_空表.xlsx'
    pack_xlsx(work_dir, output)
    print(f'Created: {output}')


def create_filled_form():
    """Create the filled example workbook"""
    work_dir = '/tmp/contract_filled'
    os.makedirs(work_dir, exist_ok=True)
    os.makedirs(f'{work_dir}/xl', exist_ok=True)
    os.makedirs(f'{work_dir}/xl/worksheets', exist_ok=True)
    os.makedirs(f'{work_dir}/xl/_rels', exist_ok=True)
    os.makedirs(f'{work_dir}/_rels', exist_ok=True)
    os.makedirs(f'{work_dir}/docProps', exist_ok=True)

    sheet_names = [
        '契约类型判断表',
        '信任成本计算表',
        '制度落差评估矩阵',
        '制度有效性评分表',
        '制度改进优先级排序',
        '契约检查清单',
        '制度执行跟踪表',
    ]
    tab_colors = ['001B4F9B', '002E75B6', '00375623', '00006B6B', '00C55A11', '00C55A11', '00375623']

    def make_sheet1_filled():
        rows = [
            [hdr('契约类型判断表', 1)],
            [],
            [hdr('契约场景描述', 2), hdr('契约类型选项', 2), hdr('判断理由', 2), hdr('评分', 2)],
            [val('供应商A提供原材料，买方B在收货后30天内付款'), lbl('A. 正式契约'), val('通过合同明确双方权利义务，有法律约束力'), val('5')],
            [val('长期合作伙伴，每季度对账一次，信任度高'), lbl('B. 关系性契约'), val('依赖双方信任和关系维护，无正式合同'), val('4')],
            [val('连锁品牌与加盟商，加盟合同+品牌授权'), lbl('C. 混合契约'), val('既有法律合同又有品牌信任约束'), val('5')],
            [val('菜市场摊贩间的口头交易约定'), lbl('D. 习惯性契约'), val('基于长期习惯和社区规范的自我执行'), val('3')],
            [],
            [lbl('使用说明：', 11), lbl('填写契约场景描述，选择最合适的契约类型，并说明判断理由。评分标准：1-5分，5分表示完全匹配。', 11)],
        ]
        return rows, [4, 30, 40, 12], ['A1:D1', 'A9:D9']

    def make_sheet2_filled():
        rows = [
            [hdr('信任成本计算表', 1)],
            [],
            [hdr('情境参数输入', 2), hdr('数值', 2), hdr('说明', 2)],
            [lbl('交易金额（元）', 4), val('100,000', 6), lbl('合同标的金额', 7)],
            [lbl('信任建立成本（元）', 4), val('5,000', 6), lbl('尽调、谈判等前期投入', 7)],
            [lbl('违约概率（%）', 4), val('15%', 7), lbl('基于历史数据估算', 7)],
            [lbl('违约损失率（%）', 4), val('80%', 7), lbl('违约后能收回的比例', 7)],
            [],
            [hdr('成本计算结果', 2), hdr('数值', 2), hdr('公式', 2)],
            [lbl('信任成本（元）', 4), val('15,000', 6), lbl('交易金额 x 违约概率', 7)],
            [lbl('不信任成本（元）', 4), val('25,500', 6), lbl('错失机会成本估算', 7)],
            [lbl('净收益（元）', 4), val('-10,500', 6), lbl('信任收益 - 信任成本', 7)],
            [],
            [lbl('结论：', 11), lbl('净收益<0，降低信任依赖，增加正式保障', 11)],
        ]
        return rows, [25, 15, 35], ['A1:D1', 'A13:D13']

    def make_sheet3_filled():
        rows = [
            [hdr('制度落差评估矩阵', 1)],
            [],
            [hdr('评估维度', 2), hdr('评分(1-5)', 2), hdr('现状描述', 2), hdr('落差类型', 2)],
            [lbl('正式制度完备性', 4), val('4'), val('制度框架完整，但细节需完善', 7), val('轻微落差', 6)],
            [lbl('执行力度', 4), val('2'), val('执行不一致，监督薄弱', 7), val('严重落差', 6)],
            [lbl('非正式信任度', 4), val('3'), val('团队信任度一般', 7), val('一般落差', 6)],
            [lbl('文化适配度', 4), val('4'), val('与企业文化较匹配', 7), val('轻微落差', 6)],
            [],
            [hdr('综合评估', 2)],
            [lbl('平均分', 4), val('3.25', 6), lbl('1-2分：严重落差 | 3分：一般落差 | 4-5分：基本完善', 11)],
            [lbl('落差类型判定', 4), val('一般落差型', 6), lbl('', 7), lbl('', 7)],
            [],
        ]
        return rows, [20, 12, 35, 18], ['A1:D1', 'A9:D9']

    def make_sheet4_filled():
        rows = [
            [hdr('制度有效性评分表', 1)],
            [],
            [hdr('评估指标', 2), hdr('权重', 2), hdr('评分(1-5)', 2), hdr('加权得分', 2), hdr('有效性等级', 2)],
            [lbl('制度完整性', 4), val('25%', 7), val('4'), val('1.00', 6), lbl('', 7)],
            [lbl('执行一致性', 4), val('25%', 7), val('2'), val('0.50', 6), lbl('', 7)],
            [lbl('监督有效性', 4), val('20%', 7), val('3'), val('0.60', 6), lbl('', 7)],
            [lbl('违规处罚力度', 4), val('15%', 7), val('2'), val('0.30', 6), lbl('', 7)],
            [lbl('制度适应性与更新速度', 4), val('15%', 7), val('3'), val('0.45', 6), lbl('', 7)],
            [],
            [lbl('综合得分', 4), lbl('100%', 8), val('2.85', 6), lbl('一般', 6), lbl('', 7)],
            [lbl('有效性等级', 4), lbl('', 7), lbl('', 7), lbl('2-3.5分：一般', 11), lbl('', 7)],
            [],
        ]
        return rows, [22, 10, 12, 12, 15], ['A1:E1', 'A10:E10', 'A11:E11']

    def make_sheet5_filled():
        rows = [
            [hdr('制度改进优先级排序', 1)],
            [],
            [hdr('改进事项', 2), hdr('紧迫性\n(1-5)', 2), hdr('影响度\n(1-5)', 2), hdr('实施难度\n(1-5)', 2), hdr('综合优先级', 2), hdr('行动计划', 2)],
            [val('完善合同条款'), val('5'), val('4'), val('2'), val('4.33', 6), val('法务部门牵头，2周内完成'), ],
            [val('建立监督机制'), val('4'), val('5'), val('3'), val('3.67', 6), val('管理层设立专岗'), ],
            [val('培训宣贯'), val('3'), val('3'), val('2'), val('3.33', 6), val('HR组织季度培训'), ],
            [val('考核激励配套'), val('2'), val('4'), val('4'), val('2.67', 6), val('纳入KPI体系'), ],
            [val('定期评估更新'), val('2'), val('2'), val('2'), val('2.67', 6), val('年度审视机制'), ],
            [],
            [lbl('优先级计算公式：', 11), lbl('（紧迫性 + 影响度 + (5-实施难度)）/ 3，分数越高越优先', 11)],
        ]
        return rows, [25, 10, 10, 10, 12, 25], ['A1:F1']

    def make_sheet6_filled():
        rows = [
            [hdr('契约检查清单', 1)],
            [],
            [hdr('检查项目', 2), hdr('是否完成', 2), hdr('备注', 2), hdr('负责人', 2), hdr('完成日期', 2)],
            [val('合同文本完整性检查'), val('是'), val('已通过法务审核', 7), val('张三', 7), val('2024-01-15', 7)],
            [val('签章真实性核对'), val('是'), val('双方签章齐全', 7), val('李四', 7), val('2024-01-16', 7)],
            [val('关键条款确认'), val('是'), val('付款周期已明确', 7), val('王五', 7), val('2024-01-16', 7)],
            [val('违约责任明确'), val('否'), val('需补充违约金条款', 7), val('张三', 7), val('', 7)],
            [val('争议解决条款'), val('是'), val('约定仲裁条款', 7), val('李四', 7), val('2024-01-17', 7)],
            [val('保密条款检查'), val('是'), val('已包含保密义务', 7), val('王五', 7), val('2024-01-17', 7)],
            [val('附件资料齐全'), val('否'), val('技术规范书缺失', 7), val('张三', 7), val('', 7)],
            [val('双方资质验证'), val('是'), val('营业执照已核实', 7), val('李四', 7), val('2024-01-18', 7)],
            [val('审批流程合规'), val('是'), val('已获总经理批准', 7), val('王五', 7), val('2024-01-18', 7)],
            [val('存档备案'), val('是'), val('已归档至合同管理系统', 7), val('档案室', 7), val('2024-01-19', 7)],
            [],
            [lbl('完成率', 4), val('80%', 6), lbl('8/10项已完成', 11)],
        ]
        return rows, [30, 10, 25, 12, 12], ['A1:E1']

    def make_sheet7_filled():
        rows = [
            [hdr('制度执行跟踪表', 1)],
            [],
            [hdr('制度名称', 2), hdr('执行指标', 2), hdr('当前状态', 2), hdr('问题记录', 2), hdr('改进措施', 2)],
            [val('合同审批制度'), val('审批时效<3天'), val('达标 2.5天'), val('部分紧急项目超时', 7), val('增加绿色通道'), ],
            [val('供应商准入制度'), val('年度审计覆盖率'), val('达标 95%'), val('新供应商资料不全', 7), val('完善资料清单'), ],
            [val('付款审批制度'), val('月结30天内付款'), val('未达标 38天'), val('审批环节过多', 7), val('简化审批流程'), ],
            [val('保密管理制度'), val('全员签署率'), val('达标 100%'), val('无', 7), val('继续保持'), ],
            [val('争议处理制度'), val('争议解决时效'), val('基本达标'), val('仲裁条款理解不足', 7), val('开展专项培训'), ],
            [],
            [lbl('跟踪周期：', 11), lbl('建议每周或每月更新一次', 11)],
        ]
        return rows, [20, 20, 15, 25, 20], ['A1:E1']

    sheet_data_filled = [
        make_sheet1_filled(),
        make_sheet2_filled(),
        make_sheet3_filled(),
        make_sheet4_filled(),
        make_sheet5_filled(),
        make_sheet6_filled(),
        make_sheet7_filled(),
    ]

    # Write workbook.xml
    wb = build_workbook_xml(sheet_names)
    save_pretty_xml(wb, f'{work_dir}/xl/workbook.xml')

    # Write workbook.xml.rels
    rels = build_workbook_rels(len(sheet_names))
    save_pretty_xml(rels, f'{work_dir}/xl/_rels/workbook.xml.rels')

    # Write [Content_Types].xml
    ct = build_content_types(len(sheet_names))
    save_pretty_xml(ct, f'{work_dir}/[Content_Types].xml')

    # Write styles.xml
    styles = build_styles()
    save_pretty_xml(styles, f'{work_dir}/xl/styles.xml')

    # Write worksheets
    for i, (data, widths, merges) in enumerate(sheet_data_filled, 1):
        ws = create_worksheet(sheet_names[i-1], data, widths, merges, tab_colors[i-1])
        save_pretty_xml(ws, f'{work_dir}/xl/worksheets/sheet{i}.xml')

    # Write _rels/.rels
    root_rels = ET.Element('Relationships')
    root_rels.set('xmlns', NS['rel'])
    rel = ET.SubElement(root_rels, 'Relationship')
    rel.set('Id', 'rId1')
    rel.set('Type', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument')
    rel.set('Target', 'xl/workbook.xml')
    save_pretty_xml(root_rels, f'{work_dir}/_rels/.rels')

    # Write docProps/app.xml
    app = ET.Element('Properties')
    app.set('xmlns', 'http://schemas.openxmlformats.org/officeDocument/2006/extended-properties')
    app.set('xmlns:vt', 'http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes')
    tn = ET.SubElement(app, 'Application')
    tn.text = 'Microsoft Excel'
    save_pretty_xml(app, f'{work_dir}/docProps/app.xml')

    # Pack
    output = '/d/新课开发/经济学/06_契约与信任/配套表单和指引-Excel版/配套表单_填好版.xlsx'
    pack_xlsx(work_dir, output)
    print(f'Created: {output}')


def create_guide_form():
    """Create the guide workbook"""
    work_dir = '/tmp/contract_guide'
    os.makedirs(work_dir, exist_ok=True)
    os.makedirs(f'{work_dir}/xl', exist_ok=True)
    os.makedirs(f'{work_dir}/xl/worksheets', exist_ok=True)
    os.makedirs(f'{work_dir}/xl/_rels', exist_ok=True)
    os.makedirs(f'{work_dir}/_rels', exist_ok=True)
    os.makedirs(f'{work_dir}/docProps', exist_ok=True)

    def make_guide_sheet1():
        rows = [
            [hdr('表单使用指引', 1)],
            [],
            [hdr('表单名称', 2), hdr('用途说明', 2)],
            [val('契约类型判断表', 6), val('用于判断具体场景适用哪种契约类型，帮助选择合适的契约治理方式', 7)],
            [val('信任成本计算表', 6), val('量化信任建立的成本与收益，为信任决策提供数据支撑', 7)],
            [val('制度落差评估矩阵', 6), val('评估正式制度与非正式信任之间的落差，识别制度短板', 7)],
            [val('制度有效性评分表', 6), val('多维度评估制度的有效性，找出改进重点', 7)],
            [val('制度改进优先级排序', 6), val('根据紧迫性、影响度和难度对改进事项排序', 7)],
            [val('契约检查清单', 6), val('契约签订前的全面检查，确保契约完整性', 7)],
            [val('制度执行跟踪表', 6), val('跟踪制度执行情况，及时发现和解决问题', 7)],
            [],
        ]
        return rows, [25, 60], ['A1:B1']

    def make_guide_sheet2():
        rows = [
            [hdr('填写指南', 1)],
            [],
            [hdr('表单名称', 2), hdr('填写要点', 2)],
            [val('契约类型判断表', 6), val('1. 场景描述要具体明确\n2. 契约类型选择唯一答案\n3. 判断理由要充分\n4. 评分1-5分，5分最匹配', 7)],
            [val('信任成本计算表', 6), val('1. 交易金额填写实际数值\n2. 信任成本包括尽调、谈判等\n3. 违约概率参考历史数据\n4. 净收益正数表示信任更优', 7)],
            [val('制度落差评估矩阵', 6), val('1. 每项评分1-5分\n2. 现状描述要客观\n3. 落差类型系统自动判定\n4. 平均分<2分需重点改进', 7)],
            [val('制度有效性评分表', 6), val('1. 权重总和=100%\n2. 评分1-5分\n3. 加权得分自动计算\n4. 综合得分决定有效性等级', 7)],
            [val('制度改进优先级排序', 6), val('1. 每项评分1-5分\n2. 紧迫性：时间敏感度\n3. 影响度：对业务的影响\n4. 难度：实施复杂性\n5. 综合优先级越高越优先', 7)],
            [val('契约检查清单', 6), val('1. 每项检查后勾选是/否\n2. 备注栏记录具体情况\n3. 明确负责人和完成日期\n4. 完成率自动计算', 7)],
            [val('制度执行跟踪表', 6), val('1. 执行指标要可量化\n2. 当前状态如实填写\n3. 问题记录要具体\n4. 改进措施要可执行', 7)],
            [],
        ]
        return rows, [25, 60], ['A1:B1']

    def make_guide_sheet3():
        rows = [
            [hdr('使用时机建议', 1)],
            [],
            [hdr('场景', 2), hdr('推荐表单', 2)],
            [val('契约签订前', 7), val('契约类型判断表 + 契约检查清单', 7)],
            [val('信任决策时', 7), val('信任成本计算表', 7)],
            [val('制度设计/评估', 7), val('制度落差评估矩阵 + 制度有效性评分表', 7)],
            [val('制度改进规划', 7), val('制度改进优先级排序', 7)],
            [val('日常跟踪管理', 7), val('制度执行跟踪表', 7)],
            [val('培训/演练', 7), val('全表单套件', 7)],
            [],
            [lbl('使用顺序建议：', 11)],
            [val('1.先用制度落差评估矩阵发现差距', 7), val('', 7)],
            [val('2.再用制度有效性评分表确认重点', 7), val('', 7)],
            [val('3.然后用制度改进优先级排序规划行动', 7), val('', 7)],
            [val('4.签订契约时用契约类型判断表+检查清单', 7), val('', 7)],
            [val('5.最后用执行跟踪表持续监控', 7), val('', 7)],
        ]
        return rows, [30, 50], ['A1:B1']

    def make_guide_sheet4():
        rows = [
            [hdr('常见问题解答', 1)],
            [],
            [hdr('问题', 2), hdr('解答', 2)],
            [val('Q: 评分标准不明确怎么办？', 7), val('A: 评分标准建议根据企业实际情况定制，一般1分=很差，5分=很好。各表单的评分标准已在填写指南中说明。', 7)],
            [val('Q: 权重可以调整吗？', 7), val('A: 可以。制度有效性评分表的权重是企业自定义的，应根据行业特点和管理重点调整，但总和必须等于100%。', 7)],
            [val('Q: 公式显示错误怎么办？', 7), val('A: 检查输入值是否在合理范围内。例如违约概率应在0-100%之间。如持续出错，请检查Excel公式语法。', 7)],
            [val('Q: 可以添加新的评估维度吗？', 7), val('A: 可以。除契约检查清单外，其他表单都可以根据需要增加行。建议新增维度后同步更新公式。', 7)],
            [val('Q: 填好版的内容可以直接使用吗？', 7), val('A: 填好版仅供示例参考，案例数据为虚构的。请根据实际情况修改或重新填写。', 7)],
            [val('Q: 如何打印这些表单？', 7), val('A: 全选内容 → 右键 → 设置单元格格式 → 对齐 → 勾选"自动换行" → 打印预览调整。', 7)],
            [],
            [lbl('联系方式：', 11), lbl('如有更多问题，请联系课程开发团队', 11)],
        ]
        return rows, [35, 50], ['A1:B1']

    sheet_names = ['表单概览', '填写指南', '使用时机建议', '常见问题解答']
    tab_colors = ['001B4F9B', '002E75B6', '00375623', '00006B6B']
    sheet_data = [make_guide_sheet1(), make_guide_sheet2(), make_guide_sheet3(), make_guide_sheet4()]

    wb = build_workbook_xml(sheet_names)
    save_pretty_xml(wb, f'{work_dir}/xl/workbook.xml')

    rels = build_workbook_rels(len(sheet_names))
    save_pretty_xml(rels, f'{work_dir}/xl/_rels/workbook.xml.rels')

    ct = build_content_types(len(sheet_names))
    save_pretty_xml(ct, f'{work_dir}/[Content_Types].xml')

    styles = build_styles()
    save_pretty_xml(styles, f'{work_dir}/xl/styles.xml')

    for i, (data, widths, merges) in enumerate(sheet_data, 1):
        ws = create_worksheet(sheet_names[i-1], data, widths, merges, tab_colors[i-1])
        save_pretty_xml(ws, f'{work_dir}/xl/worksheets/sheet{i}.xml')

    root_rels = ET.Element('Relationships')
    root_rels.set('xmlns', NS['rel'])
    rel = ET.SubElement(root_rels, 'Relationship')
    rel.set('Id', 'rId1')
    rel.set('Type', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument')
    rel.set('Target', 'xl/workbook.xml')
    save_pretty_xml(root_rels, f'{work_dir}/_rels/.rels')

    app = ET.Element('Properties')
    app.set('xmlns', 'http://schemas.openxmlformats.org/officeDocument/2006/extended-properties')
    app.set('xmlns:vt', 'http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes')
    tn = ET.SubElement(app, 'Application')
    tn.text = 'Microsoft Excel'
    save_pretty_xml(app, f'{work_dir}/docProps/app.xml')

    output = '/d/新课开发/经济学/06_契约与信任/配套表单和指引-Excel版/表单使用指引.xlsx'
    pack_xlsx(work_dir, output)
    print(f'Created: {output}')


if __name__ == '__main__':
    create_empty_form()
    create_filled_form()
    create_guide_form()
    print('All forms created successfully!')
