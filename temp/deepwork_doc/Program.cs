using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

string outputPath = @"D:\鏂拌寮€鍙慭宸ヤ綔鎵嬪唽\鐭ヨ瘑宸ヤ綔鑰呮繁搴﹀伐浣滀繚鎶瀹屾暣璇剧▼鍖匼01-璇剧▼璇存槑涔璇剧▼璇存槑涔?娣卞害宸ヤ綔涓绘潈V1.0.docx";

using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
var mainPart = doc.AddMainDocumentPart();
mainPart.Document = new Document(new Body());
Body body = mainPart.Document.Body!;

var stylesPart = mainPart.AddNewPart<StyleDefinitionsPart>();
stylesPart.Styles = new Styles();
var styles = stylesPart.Styles!;

styles.Append(new DocDefaults(
    new RunPropertiesDefault(new RunPropertiesBaseStyle(
        new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" },
        new FontSize { Val = "24" },
        new FontSizeComplexScript { Val = "24" }
    )),
    new ParagraphPropertiesDefault(new ParagraphPropertiesBaseStyle(
        new SpacingBetweenLines { After = "160", Line = "276", LineRule = LineSpacingRuleValues.Auto }
    ))
));

styles.Append(new Style(new StyleName { Val = "Title" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { After = "0", Line = "240", LineRule = LineSpacingRuleValues.Auto }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "56" }, new FontSizeComplexScript { Val = "56" }, new Color { Val = "1F3864" })
) { Type = StyleValues.Paragraph, StyleId = "Title" });

styles.Append(new Style(new StyleName { Val = "Heading 1" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "480", After = "240" }, new KeepNext(), new OutlineLevel { Val = 0 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "36" }, new FontSizeComplexScript { Val = "36" }, new Color { Val = "1F3864" })
) { Type = StyleValues.Paragraph, StyleId = "Heading1" });

styles.Append(new Style(new StyleName { Val = "Heading 2" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "360", After = "120" }, new KeepNext(), new OutlineLevel { Val = 1 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "28" }, new FontSizeComplexScript { Val = "28" }, new Color { Val = "2E5496" })
) { Type = StyleValues.Paragraph, StyleId = "Heading2" });

styles.Append(new Style(new StyleName { Val = "ChapterTitle" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "480", After = "240" }, new KeepNext(), new OutlineLevel { Val = 0 }),
    new StyleRunProperties(new RunFonts { Ascii = "Microsoft YaHei", EastAsia = "Microsoft YaHei", HighAnsi = "Microsoft YaHei" }, new Bold(), new FontSize { Val = "40" }, new FontSizeComplexScript { Val = "40" }, new Color { Val = "C62828" })
) { Type = StyleValues.Paragraph, StyleId = "ChapterTitle" });

styles.Append(new Style(new StyleName { Val = "Quote" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new Justification { Val = JustificationValues.Center }, new SpacingBetweenLines { Before = "240", After = "240" }, new ParagraphBorders(new LeftBorder { Val = BorderValues.Single, Size = 24, Color = "2E5496" }), new Indentation { Left = "720", Right = "720" }),
    new StyleRunProperties(new Italic(), new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" }, new Color { Val = "424242" })
) { Type = StyleValues.Paragraph, StyleId = "Quote" });

styles.Append(new Style(new StyleName { Val = "Tip" }, new BasedOn { Val = "Normal" },
    new StyleParagraphProperties(new SpacingBetweenLines { Before = "120", After = "120" }, new Shading { Fill = "E8F5E9" }),
    new StyleRunProperties(new Bold(), new FontSize { Val = "22" }, new FontSizeComplexScript { Val = "22" })
) { Type = StyleValues.Paragraph, StyleId = "Tip" });

void AddTitle(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Title" }), new Run(new Text(text))));
void AddH1(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading1" }), new Run(new Text(text))));
void AddH2(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Heading2" }), new Run(new Text(text))));
void AddChapterTitle(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "ChapterTitle" }), new Run(new Text(text))));
void AddP(string text) => body.Append(new Paragraph(new Run(new Text(text))));
void AddQuoteP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Quote" }), new Run(new Text(text)))));
void AddTipP(string text) => body.Append(new Paragraph(new ParagraphProperties(new ParagraphStyleId { Val = "Tip" }), new Run(new Text(">>> " + text))));
void AddBullet(string text) => body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "80" }, new Indentation { Left = "360", Hanging = "360" }), new Run(new Text("- " + text))));
void AddNum(int num, string text) => body.Append(new Paragraph(new ParagraphProperties(new SpacingBetweenLines { Before = "0", After = "80" }, new Indentation { Left = "720", Hanging = "360" }), new Run(new Text(num + ". " + text))));
void AddSpace() => body.Append(new Paragraph(new Run(new Text(""))));
void AddBreak() => body.Append(new Paragraph(new Run(new Break { Type = BreakValues.Page })));

Table CreateTable(string[] headers, string fill = "1F3864") {
    var tbl = new Table(new TableProperties(new TableWidth { Width = "5000", Type = TableWidthUnitValues.Pct },
        new TableBorders(new TopBorder { Val = BorderValues.Single, Size = 8, Color = fill }, new BottomBorder { Val = BorderValues.Single, Size = 8, Color = fill },
            new LeftBorder { Val = BorderValues.Single, Size = 8, Color = fill }, new RightBorder { Val = BorderValues.Single, Size = 8, Color = fill },
            new InsideHorizontalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" }, new InsideVerticalBorder { Val = BorderValues.Single, Size = 4, Color = "CCCCCC" })),
        new TableGrid(new GridColumn()));
    var hr = new TableRow(new TableRowProperties(new TableHeader()));
    foreach (var h in headers) hr.Append(new TableCell(new TableCellProperties(new Shading { Fill = fill }), new Paragraph(new ParagraphProperties(new Justification { Val = JustificationValues.Center }), new Run(new RunProperties(new Bold(), new Color { Val = "FFFFFF" }), new Text(h)))));
    tbl.Append(hr); return tbl;
}

void AddRow(Table tbl, string[] cells) { var tr = new TableRow(); foreach (var c in cells) tr.Append(new TableCell(new Paragraph(new Run(new Text(c))))); tbl.Append(tr); }
void FinishTable(Table tbl) => body.Append(tbl);

AddSpace(); AddSpace(); AddSpace();
AddTitle("娣卞害宸ヤ綔涓绘潈鎵嬪唽");
AddTitle("鈥斺€旇绋嬭鏄庝功");
AddSpace();
AddP("璇剧▼鍚嶇О锛氭繁搴﹀伐浣滀富鏉冩墜鍐屸€斺€旂煡璇嗗伐浣滆€呯殑娉ㄦ剰鍔涗繚鎶や笌鎭㈠绯荤粺");
AddP("璇剧▼缂栧彿锛氭繁搴﹀伐浣?鐭ヨ瘑宸ヤ綔鑰?01");
AddSpace();
AddP("鐗堟湰锛歏1.0");
AddP("缂栧埗鏃ユ湡锛?026骞?鏈?);
AddP("浣滆€咃細缃楀畯浼?);
AddSpace(); AddSpace(); AddSpace();
AddP("閫傜敤瀵硅薄锛氫紒涓氬唴璁?璁よ瘉鐝?鍏紑璇?);
AddP("棰勮鏃堕暱锛?澶╋紙姣忓ぉ6灏忔椂锛屽叡12灏忔椂锛?);
AddP("瀛﹀憳瑙勬ā锛?5-40浜?);
AddBreak();

AddH1("鐩綍");
AddP("绗竴绔? 璇剧▼姒傝堪涓庡畾浣?................................. 1");
AddP("绗簩绔? 鐩爣瀛﹀憳鐢诲儚 ................................. 2");
AddP("绗笁绔? 鏍稿績鍏悊涓庡崠鐐?............................... 3");
AddP("绗洓绔? 璇剧▼鐩爣锛堢煡璇?鎶€鑳?鎬佸害锛?.................. 4");
AddP("绗簲绔? 鍐呭妯″潡姒傝锛?6绔犵粨鏋勶級..................... 5");
AddP("绗叚绔? 鏁欏鏂规硶璁?................................... 8");
AddP("绗竷绔? 璇炬椂瀹夋帓 ..................................... 9");
AddP("绗叓绔? 棰勬湡鎴愭灉 ..................................... 11");
AddBreak();

AddChapterTitle("绗竴绔狅細璇剧▼姒傝堪涓庡畾浣?);
AddH1("璇剧▼鑳屾櫙");
AddP("鍦ㄧ煡璇嗙粡娴庢椂浠ｏ紝娣卞害宸ヤ綔鑳藉姏宸叉垚涓虹煡璇嗗伐浣滆€呯殑鏍稿績绔炰簤鍔涖€傜劧鑰岋紝闅忕潃鍗虫椂閫氳宸ュ叿鐨勬櫘鍙婂拰鍗忎綔寮哄害鐨勬彁鍗囷紝鐭ヨ瘑宸ヤ綔鑰呮闈复鍓嶆墍鏈湁鐨勬敞鎰忓姏鍗辨満銆?);
AddSpace();
AddP("澶у鏁版椂闂寸鐞嗚绋嬫暀鎺堢殑鏄伐鍏峰拰鎶€宸э紝浣嗗拷鐣ヤ簡鏈€鏍规湰鐨勯棶棰橈細娉ㄦ剰鍔涗笉鏄\"绠＄悊\"璧扮殑锛屾槸琚垜浠嚜宸变竴娆℃\"鍏佽\"鎷胯蛋鐨勩€傝繖涓€璁ょ煡閲嶆瀯锛屾槸鏈绋嬬殑鐙壒璧风偣銆?);

AddH1("璇剧▼瀹氫綅");
AddQuoteP("娣卞害宸ヤ綔涓绘潈鎵嬪唽涓嶆槸涓€闂ㄦ椂闂寸鐞嗚锛屾槸涓€闂ㄥ叧浜庢敞鎰忓姏涓绘潈璁ょ煡閲嶅缓鐨勮绋嬨€?);
AddSpace();
AddP("鏈绋嬬殑鏍稿績瀹氫綅锛?);
AddBullet("璁ょ煡灞傦細閲嶅缓瀵筡"鎵撴柇\"鐨勮鐭ユ鏋垛€斺€斾粠澶栭儴骞叉壈鍒颁富鍔ㄨ娓?);
AddBullet("瀹炴搷灞傦細鎺屾彙鍙嵆鍒昏惤鍦扮殑鏃堕棿淇濇姢鍜屾敞鎰忓姏绠＄悊宸ュ叿");
AddBullet("鍗忎綔灞傦細瀛︿細鍦ㄥ洟闃熷拰缁勭粐涓缓绔嬫繁搴﹀伐浣滄枃鍖?);
AddBullet("蹇冩€佸眰锛氬缓绔嬮暱鏈熶富涔夌殑鑱屼笟韬唤璁ょ煡");

AddH1("璇剧▼鐗硅壊");
AddNum(1, "鍏悊椹卞姩锛氭瘡绔犲唴瀹归兘鍥寸粫涓€涓牳蹇冨叕鐞嗗睍寮€锛屾嫆缁濈鐗囧寲鐭ヨ瘑鐐?);
AddNum(2, "鏈哄埗浼樺厛锛氫笉浠呭憡璇夊鍛榎"鎬庝箞鍋歕"锛屾洿鎻ず\"涓轰粈涔堣繖鏍峰仛鏈夋晥\"");
AddNum(3, "宸ュ叿钀藉湴锛氭彁渚涘彲鐩存帴浣跨敤鐨勫伐鍏锋ā鏉匡紝瀛﹀畬灏辫兘鐢?);
AddNum(4, "鐪熷疄妗堜緥锛氭墍鏈夋渚嬫潵鑷湡瀹炰紒涓氬満鏅紝鎷掔粷铏氭瀯");
AddNum(5, "鑷垜鍙嶆€濓細姣忎釜绔犺妭閮借璁″弽鎬濈幆鑺傦紝淇冭繘瀛﹀憳鑷垜瑙夊療");
AddSpace();

AddChapterTitle("绗簩绔狅細鐩爣瀛﹀憳鐢诲儚");
AddH1("鏍稿績瀛﹀憳缇や綋");
AddP("鏈绋嬮潰鍚戜互涓嬩袱绫绘牳蹇冨鍛橈細");

AddH2("A绫伙細鐭ヨ瘑宸ヤ綔鑰咃紙涓綋璐＄尞鑰咃級");
AddBullet("鍏稿瀷鐗瑰緛锛氫粠浜嬪鏉傝剳鍔涘伐浣滐紝闇€瑕佹繁搴︽€濊€冨拰鍒涢€犳€т骇鍑?);
AddBullet("鐥涚偣鎻忚堪锛氫竴澶╁緢蹇欎絾浠€涔堥兘娌″仛瀹岋紱棰戠箒琚墦鏂悗闅句互閲嶆柊杩涘叆鐘舵€?);
AddBullet("琛屼负妯″紡锛氭秷鎭鍥炪€侀殢鏃跺湪绾裤€佸姞鐝父鎬佸寲");
AddBullet("璁ょ煡鐩插尯锛氳涓洪棶棰樻槸宸ュ叿涓嶅濂斤紝鑰屼笉鏄敞鎰忓姏浣跨敤鏂瑰紡鏈夐棶棰?);
AddSpace();

AddH2("B绫伙細鍥㈤槦璐熻矗浜猴紙绠＄悊鑰咃級");
AddBullet("鍏稿瀷鐗瑰緛锛氬甫棰嗙煡璇嗗瀷鍥㈤槦锛岄渶瑕佽璁″洟闃熷伐浣滄満鍒?);
AddBullet("鐥涚偣鎻忚堪锛氬洟闃熶細璁銆佹秷鎭銆佷骇鍑哄嵈涓嶆槑鏄撅紱鍥㈤槦璁ょ煡璐熻嵎澶辨帶涓嶇煡浠庝綍鍏ユ墜");
AddBullet("琛屼负妯″紡锛氫簨蹇呰含浜层€侀殢鏃跺搷搴斻€佹垚涓哄洟闃熸渶澶т腑鏂簮");
AddBullet("璁ょ煡鐩插尯锛氭妸鍥㈤槦鏁堢巼闂褰掑拵浜庡伐鍏峰拰娴佺▼锛岃€岄潪璁ょ煡璐熻嵎璁捐");
AddSpace();

AddH1("瀛﹀憳鐢诲儚璇﹁В");
var t2_1 = CreateTable(new[] { "缁村害", "A绫伙細鐭ヨ瘑宸ヤ綔鑰?, "B绫伙細鍥㈤槦璐熻矗浜? });
AddRow(t2_1, new[] { "鍏稿瀷宀椾綅", "浜у搧缁忕悊銆佸垎鏋愬笀銆佺爺鍙戜汉鍛樸€佽璁″笀銆佸挩璇㈤【闂?, "鐮斿彂缁忕悊銆侀」鐩€荤洃銆侀儴闂ㄨ礋璐ｄ汉銆佸洟闃熻礋璐ｄ汉" });
AddRow(t2_1, new[] { "鏃ュ潎娣卞害宸ヤ綔鏃堕棿", "涓嶈冻2灏忔椂", "涓嶈冻1.5灏忔椂" });
AddRow(t2_1, new[] { "鏃ュ潎琚墦鏂鏁?, "15-30娆?, "20-40娆★紙鍚洟闃熸垚鍛樹腑鏂級" });
AddRow(t2_1, new[] { "瀵硅绋嬬殑鏈熷緟", "瀛︿細淇濇姢鑷繁鐨勬椂闂达紝鑾峰緱鏇村浜у嚭", "瀛︿細璁捐鍥㈤槦鏈哄埗锛屾彁鍗囨暣浣撹鐭ユ晥鐜? });
AddRow(t2_1, new[] { "鏈€澶ц鐭ラ殰纰?, "\"鎴戝繀椤婚殢鏃跺湪绾挎墠鑳借瘉鏄庤嚜宸辩殑浠峰€糪"", "\"鍥㈤槦闇€瑕佹垜闅忔椂鍝嶅簲锛屽惁鍒欎細鍑洪棶棰榎"" });
FinishTable(t2_1);
AddSpace();

AddH1("瀛﹀憳鍏ュ鍓嶆祴");
AddP("寤鸿鍦ㄨ绋嬪紑濮嬪墠杩涜鍏ュ鍓嶆祴锛屼簡瑙ｅ鍛樼殑浠ヤ笅鎯呭喌锛?);
AddBullet("褰撳墠姣忔棩娣卞害宸ヤ綔鏃堕棿锛堝皬鏃讹級");
AddBullet("姣忔棩琚腑鏂殑棰戠巼鍜屼富瑕佹潵婧?);
AddBullet("瀵筡"蹇欑\"鍜孿"娣卞害宸ヤ綔\"鐨勮鐭ユ€佸害");
AddBullet("宸茬粡灏濊瘯杩囩殑娉ㄦ剰鍔涚鐞嗘柟娉曞強鏁堟灉");
AddSpace();

AddChapterTitle("绗笁绔狅細鏍稿績鍏悊涓庡崠鐐?);
AddH1("鏍稿績鍏悊");
AddQuoteP("鏃堕棿绠＄悊涓嶆槸杩欎釜鏃朵唬鐨勯棶棰橈紝娉ㄦ剰鍔涘綊灞炴潈鎵嶆槸銆備綘鐨勪笓娉ㄥ姏浠庢潵涓嶆槸琚玕"绠＄悊\"璧扮殑锛屾槸琚綘鑷繁涓€娆℃\"鍏佽\"鎷胯蛋鐨勩€?);
AddSpace();
AddP("杩欎竴鍏悊鐨勫洓澶ф楠岀淮搴︼細");
AddBullet("鍒虹棝鎬э細鐩存帴鎸戞垬\"鎴戞槸琚墦鏂殑鍙楀鑰匼"杩欎釜甯歌璁ょ煡");
AddBullet("鍙紨缁庢€э細浠庡叕鐞嗗彲鎺ㄦ紨鍑?涓叿浣撹鐐癸紝鐜幆鐩告墸");
AddBullet("涓撳睘鎬э細鍙鐭ヨ瘑宸ヤ綔鑰呮湁鏁堬紙娴佹按绾垮伐浜轰笉閫傜敤锛?);
AddBullet("绮惧噯鎬э細涓嶆槸鏂规硶璁哄缓璁紝鏄竴涓叧浜庤矗浠诲綊灞炵殑鍒ゆ柇");
AddSpace();

AddH1("璇剧▼鍏ぇ鏍稿績鍗栫偣");
AddH2("鍗栫偣涓€锛氳鐭ラ噸鏋勨€斺€斾粠\"琚墦鏂璡"鍒癨"涓诲姩璁╂浮\"");
AddP("涓嶆槸鏁欎綘鎬庝箞鎶垫姉鎵撴柇锛岃€屾槸璁╀綘鐪嬫竻鎵撴柇鑳屽悗浣犺嚜宸辨壆婕旂殑瑙掕壊");
AddSpace();
AddH2("鍗栫偣浜岋細蹇欑涓婄樉鏈哄埗鈥斺€旀彮绀篭"琚渶瑕佹劅\"鐨勫績鐞嗘垚鏈?);
AddP("涓轰粈涔堜綘涓€杈规姳鎬ㄥお蹇欙紝涓€杈规嫆缁濊兘鐪熸鍑忓皯鎵撴柇鐨勫畨鎺?);
AddSpace();
AddH2("鍗栫偣涓夛細閫€鍑烘垚鏈璁♀€斺€旇杈圭晫鐪熸鏈夋晥鐨勭璇€");
AddP("涓轰粈涔堟病鏈変唬浠风殑杈圭晫绛変簬娌℃湁杈圭晫锛屼互鍙婂浣曡璁℃湁鏁堢殑閫€鍑烘垚鏈?);
AddSpace();
AddH2("鍗栫偣鍥涳細鍙鎬х鐞嗏€斺€旇娣卞害宸ヤ綔浜у嚭琚湅瑙?);
AddP("绌哄嚭鏉ョ殑鏃ュ巻鏍煎瓙鐪嬭捣鏉ュ儚鎳掓儼锛岄櫎闈炰綘璁╁埆浜虹湅瑙侀噷闈㈠彂鐢熶簡浠€涔?);
AddSpace();
AddH2("鍗栫偣浜旓細閲嶅惎绋庨噺鍖栤€斺€斿浠诲姟鍒囨崲鐨勭湡瀹炰唬浠?);
AddP("浣犱互涓鸿嚜宸卞湪澶氫换鍔″鐞嗭紝鍏跺疄鏄湪鍙嶅缂寸撼閲嶅惎绋?);
AddSpace();
AddH2("鍗栫偣鍏細鐜璁捐鈥斺€斾粠鎰忓織鍔涗緷璧栧埌绯荤粺璁捐");
AddP("闈犺嚜鍒跺姏瀹堜綇鐨勮竟鐣岋紝杩熸棭浼氬湪浣犳渶绱殑閭ｅぉ澶卞畧");
AddSpace();
AddH2("鍗栫偣涓冿細鍥㈤槦濂戠害鈥斺€斾粠涓汉杈圭晫鍒伴泦浣撲俊浠?);
AddP("浣犱竴涓汉瀹堜綇杈圭晫娌℃湁鐢紝闄ら潪澶у閮界煡閬撹鍒欎竴鏍?);
AddSpace();
AddH2("鍗栫偣鍏細鎭㈠鍗虫姇璧勨€斺€旀妸璁ょ煡璧勬簮涓诲姩瀛樺洖鍘?);
AddP("鎭㈠涓嶆槸韬哄钩锛屾槸鎶婃帍绌虹殑璁ょ煡璧勬簮涓诲姩瀛樺洖鍘荤殑涓诲姩杩囩▼");
AddSpace();

AddChapterTitle("绗洓绔狅細璇剧▼鐩爣锛堢煡璇?鎶€鑳?鎬佸害锛?);
AddH1("鐭ヨ瘑鐩爣");
AddP("瀛﹀憳鍦ㄨ绋嬬粨鏉熷悗鑳藉锛?);
AddNum(1, "瑙ｉ噴\"娉ㄦ剰鍔涗富鍔ㄨ娓"杩欎竴鏍稿績鍏悊鐨勫惈涔夊強鍏跺涓汉宸ヤ綔鐨勫惎绀?);
AddNum(2, "鎻忚堪蹇欑涓婄樉鐨勫績鐞嗘満鍒讹紝鐞嗚В\"琚渶瑕佹劅\"濡備綍褰卞搷鏃堕棿鍒嗛厤鍐崇瓥");
AddNum(3, "鍒椾妇鏃堕棿鐩掕璁″け璐ョ殑涓変釜涓昏鍘熷洜锛屽苟瑙ｉ噴閫€鍑烘垚鏈殑閲嶈鎬?);
AddNum(4, "璇存槑涓柇鏃ュ織鐨勮褰曚环鍊硷紝鐞嗚В娉ㄦ剰鍔涜璋併€佷互浠€涔堢悊鐢便€佹寜浠€涔堥鐜囧畾浠?);
AddNum(5, "闃愯堪浼氳瀹¤鐨勬牳蹇冮€昏緫锛屽尯鍒哱"浣庢晥浼氳\"涓嶾"鏈巿鏉冧細璁甛"");
AddNum(6, "瑙ｉ噴璁ょ煡鍒囨崲鎴愭湰锛堥噸鍚◣锛夌殑褰㈡垚鏈哄埗鍙婂叾瀵瑰浠诲姟宸ヤ綔鑰呯殑褰卞搷");
AddNum(7, "鍖哄垎涓诲姩鎭㈠涓庤鍔ㄦ仮澶嶏紝鐞嗚В涓嶅悓绫诲瀷鐤叉儷瀵瑰簲鐨勬仮澶嶆柟寮?);
AddNum(8, "璇存槑鍥㈤槦娣卞害宸ヤ綔濂戠害鐨勫繀瑕佹€у強璁捐鍘熷垯");
AddSpace();

AddH1("鎶€鑳界洰鏍?);
AddP("瀛﹀憳鍦ㄨ绋嬬粨鏉熷悗鑳藉锛?);
AddNum(1, "璁捐骞舵墽琛屼竴涓甫鏈夐€€鍑烘垚鏈殑鏃堕棿鐩掕鍒掞紝纭繚鏃堕棿鐩掍笉琚嚜宸辨墦鐮?);
AddNum(2, "鍒朵綔涓€浠界鍚堝洟闃熼渶姹傜殑娣卞害宸ヤ綔璁″垝琛紝璁╄竟鐣屽０鏄庣湡姝ｈ鐪嬭");
AddNum(3, "浣跨敤涓柇鏃ュ織宸ュ叿杩炵画璁板綍5涓伐浣滄棩锛屽苟鍩轰簬鏁版嵁鎻愬嚭閽堝鎬ф敼鍠勬柟妗?);
AddNum(4, "杩愮敤浼氳瀹¤妗嗘灦璇勪及鍥㈤槦浼氳鏁堢巼锛屾彁鍑哄叿浣撶殑浼氳绮剧畝鏂规");
AddNum(5, "涓轰笉鍚岀被鍨嬬殑娣卞害宸ヤ綔璁捐鐩稿簲鐨勭幆澧冮殧绂绘柟妗?);
AddNum(6, "璁捐涓€涓€傚悎涓汉鎯呭喌鐨勬仮澶嶇粌涔犲簱锛屽苟灏嗗叾宓屽叆鏃ュ父宸ヤ綔鑺傚");
AddNum(7, "涓绘寔涓€娆″洟闃熸繁搴﹀伐浣滃绾﹁璁轰細璁紝骞朵骇鍑哄彲鎵ц鐨勫洟闃熺害瀹?);
AddNum(8, "鍚戜笂绠＄悊杈圭晫锛屽湪鏁欎細棰嗗濡備綍瀹氫环鑷繁鏃堕棿鐨勫悓鏃剁淮鎶よ壇濂界殑宸ヤ綔鍏崇郴");
AddSpace();

AddH1("鎬佸害鐩爣");
AddP("瀛﹀憳鍦ㄨ绋嬬粨鏉熷悗鑳藉锛?);
AddNum(1, "鎵胯鑷繁杩囧幓鍦ㄦ敞鎰忓姏璁╂浮涓壆婕旂殑涓诲姩瑙掕壊锛屾斁寮僜"鎴戞槸鍙楀鑰匼"鐨勮鐭?);
AddNum(2, "姝ｈ\"蹇欑\"浣滀负绀句氦璐у竵鐨勬垚鐦炬€э紝鎰挎剰涓烘繁搴﹀伐浣滄斁寮冮儴鍒哱"琚渶瑕佹劅\"");
AddNum(3, "鎺ュ彈\"鎭㈠鏄笅涓€娆℃繁搴﹀伐浣滅殑鍏ュ満鍒竆"杩欎竴璁ょ煡锛屽皢鎭㈠缃簬浼樺厛绾ф洿鍓嶇");
AddNum(4, "鐞嗚В\"闀挎湡涓讳箟鑰呮渶鍏堟斁寮冪殑鏄殢鏃跺彲鐢ㄨ繖涓汉璁綷"锛屾効鎰忔壙鍙楃煭鏈熷彛纰戝帇鍔?);
AddNum(5, "璁ゅ悓鍥㈤槦娣卞害宸ヤ綔鏂囧寲闇€瑕佹湁浜哄厛鍋氱ず鑼冿紝鎰挎剰鎴愪负閭ｄ釜鍏堣鍑哄彛鐨勪汉");
AddNum(6, "寤虹珛瀵规敞鎰忓姏涓绘潈涓嶅彲璁╂浮鐨勪俊蹇碉紝鎸佺画璺佃璇剧▼涓殑鏂规硶鍜屽伐鍏?);
AddSpace();

AddChapterTitle("绗簲绔狅細鍐呭妯″潡姒傝锛?6绔犵粨鏋勶級");
AddH1("PART 1锛氳鐭ュ眰鑷冲疄鎿嶅眰锛堢1-10绔狅級");
var t5_1 = CreateTable(new[] { "绔犲簭", "绔犳爣棰?, "寮曡█閲戝彞", "鏍稿績鍐呭", "绫诲瀷" });
AddRow(t5_1, new[] { "绗?绔?, "鎵撴柇浠庢潵涓嶆槸鎰忓锛屾槸涓€鍦轰綘鍙備笌绛剧讲鐨勪氦鏄?, "姣忎竴娆￠殢鎵嬬偣寮€鐨勬彁绀猴紝閮芥槸涓€娆′富鏉冪殑杞", "鍏悊灞曞紑锛氭敞鎰忓姏涓诲姩璁╂浮鐨勬満鍒躲€佸嵆鏃舵弧瓒冲亸濂?, "鍏悊灞曞紑" });
AddRow(t5_1, new[] { "绗?绔?, "蹇欑鏄竴绉嶅彲浠ヤ笂鐦剧殑绀句氦璐у竵", "浣犱笉鏄病鏃堕棿娣卞害宸ヤ綔锛屼綘鏄垗涓嶅緱鏀惧純琚渶瑕佹劅", "蹇欑鎴愮樉鐨勫績鐞嗘満鍒躲€侀棿姝囨€у己鍖栧師鐞?, "鍘熷垱鏂板" });
AddRow(t5_1, new[] { "绗?绔?, "鏃堕棿鐩掑け璐ワ紝鏄洜涓烘病鏈夐€€鍑烘垚鏈?, "涓€涓病鏈変唬浠风殑杈圭晫锛岀瓑浜庢病鏈夎竟鐣?, "閫€鍑烘垚鏈璁″師鐞嗐€佺揣鎬ュ垽鏂殑鐒﹁檻椹卞姩", "鍘熷垱鏂板" });
AddRow(t5_1, new[] { "绗?绔?, "娣卞害宸ヤ綔璁″垝琛ㄦ槸鍐欑粰鍒汉鐪嬬殑杈圭晫澹版槑", "浣犱负鑷繁淇濇姢鐨勬椂闂达紝鏈€缁堟槸闈犲埆浜哄皧閲嶆墠瀛樺湪鐨?, "鍏紑杈圭晫鐨勭粍缁囪涓哄鍘熺悊", "鍘熷垱鏂板" });
AddRow(t5_1, new[] { "绗?绔?, "涓柇鏃ュ織璁板綍鐨勬槸浣犵殑娉ㄦ剰鍔涜璋佸畾浠蜂簡", "姣忎竴鏉′腑鏂褰曪紝閮芥槸涓€娆￠殣钘忕殑璁环杩囩▼", "涓柇鏃ュ織宸ュ叿璁捐銆佸弻鍚戝畾浠锋満鍒?, "鍘熷垱鏂板" });
AddRow(t5_1, new[] { "绗?绔?, "澶у鏁颁細璁粠鏈鎺堟潈瀛樺湪杩?, "浼氳瀹ょ殑闂ㄦ澶綆锛屾槸鍥犱负娌′汉涓哄彫寮€浼氳浠樿繃浠ｄ环", "浼氳鎴愭湰涓嶅绉版満鍒躲€佷細璁璁℃鏋?, "鍘熷垱鏂板" });
AddRow(t5_1, new[] { "绗?绔?, "浣犱互涓哄湪澶氫换鍔″鐞嗭紝鍏跺疄鍦ㄥ弽澶嶇即绾抽噸鍚◣", "鍒囨崲涓嶆槸鍏嶈垂鐨勶紝浣犲彧鏄病鐪嬪埌璐﹀崟", "娉ㄦ剰鍔涙畫鐣欐満鍒躲€侀噸鍚垚鏈噺鍖?, "杩佺Щ鏀瑰啓" });
AddRow(t5_1, new[] { "绗?绔?, "涓撴敞鍔涗笉鏄剰蹇楀姏娓告垙锛屾槸鐜璁捐娓告垙", "闈犺嚜鍒跺姏瀹堜綇鐨勮竟鐣岋紝杩熸棭浼氬湪浣犳渶绱偅澶╁け瀹?, "鎰忓織鍔涜祫婧愭湁闄愯銆佺幆澧冭璁′笁灞傞潰", "鍘熷垱鏂板" });
AddRow(t5_1, new[] { "绗?绔?, "鎭㈠涓嶆槸韬哄钩锛屾槸鎶婃帍绌虹殑璁ょ煡璧勬簮瀛樺洖鍘?, "浼戞伅濡傛灉娌℃湁璁捐锛屽氨鍙槸鎶婄柌鎯甫鍒版槑澶?, "涓诲姩vs琚姩鎭㈠銆佸垎灞傛仮澶嶇粌涔犲簱", "鍘熷垱鏂板" });
AddRow(t5_1, new[] { "绗?0绔?, "鍥㈤槦濂戠害淇濇姢鐨勬槸鍥㈤槦鐨勫叡鍚屼俊浠?, "浣犱竴涓汉瀹堜綇杈圭晫娌℃湁鐢紝闄ら潪澶у閮界煡閬撹鍒欎竴鏍?, "鍥㈤槦濂戠害vs涓汉杈圭晫銆佸绾﹀埗瀹氫笌缁存姢", "鍘熷垱鏂板" });
FinishTable(t5_1);
AddSpace();

AddH1("PART 2锛氬崗浣滃眰鑷冲績鎬佸眰锛堢11-16绔狅級");
var t5_2 = CreateTable(new[] { "绔犲簭", "绔犳爣棰?, "寮曡█閲戝彞", "鏍稿績鍐呭", "绫诲瀷" });
AddRow(t5_2, new[] { "绗?1绔?, "鍚戜笂绠＄悊杈圭晫鏄暀浼氶瀵煎畾浠蜂綘鐨勬椂闂?, "杈圭晫涓嶇敤瑙ｉ噴锛屽彧闇€瑕佸弽澶嶅嚭鐜?, "棰勬湡閲嶆牎鏈哄埗銆佸叿浣撹竟鐣岃瀹氭柟娉?, "鍘熷垱鏂板" });
AddRow(t5_2, new[] { "绗?2绔?, "鎶や綇鐨勬椂闂存病鏈変骇鍑鸿瘉鎹細琚涓€涓敹鍥?, "绌哄嚭鏉ョ殑鏃ュ巻鏍煎瓙鐪嬭捣鏉ュ儚鎳掓儼", "浜у嚭鍙鎬ц璁°€侀噷绋嬬鏍囨敞", "鍘熷垱鏂板" });
AddRow(t5_2, new[] { "绗?3绔?, "绠＄悊鑰呯殑璁ょ煡璐熻嵎鏉ヨ嚜娌¤鎵胯鐨勯噸鍚垚鏈?, "浣犱笉鏄喅绛栧お澶氾紝鏄喅绛栦箣闂寸殑缂濋殭浠庢病琚畻杩涘伐浣滈噺", "绠＄悊鑰呰瑙掔殑璁ょ煡璐熻嵎绠＄悊", "鍏悊灞曞紑" });
AddRow(t5_2, new[] { "绗?4绔?, "鍥㈤槦娣卞害宸ヤ綔鏂囧寲浠庝竴娆″叕寮€鐨勬嫆缁濆紑濮?, "娌℃湁浜轰細鍏堝仛閭ｄ欢璁╄嚜宸辨樉寰椾笉鍚堢兢鐨勪簨", "缇や綋琛屼负鍏堜緥鏁堝簲銆佹枃鍖栬浆鍙樺惎鍔ㄦ満鍒?, "鍘熷垱鏂板" });
AddRow(t5_2, new[] { "绗?5绔?, "鎭㈠缁冧範鏄笅涓€娆℃繁搴﹀伐浣滅殑鍏ュ満鍒?, "浣犱笉鏄潬鎰忓織鍔涙拺杩囦竴澶╋紝鏄潬鎭㈠鎵嶈兘鎾戝埌涓撴敞", "鎭㈠鍥犳灉棰犲€掋€侀€忔敮闅愭€ф垚鏈?, "鍘熷垱鏂板" });
AddRow(t5_2, new[] { "绗?6绔?, "闀挎湡涓讳箟鑰呮渶鍏堟斁寮冮殢鏃跺彲鐢ㄨ繖涓汉璁?, "浣犺秺鎯虫垚涓烘案杩滃湪绾跨殑浜猴紝鑳藉仛鐨勪簨瓒婂皯", "鍝嶅簲閫熷害vs鍒ゆ柇璐ㄩ噺銆佹姢鍩庢渤鏋勫缓", "杩佺Щ鏀瑰啓" });
FinishTable(t5_2);
AddSpace();

AddH1("鍐呭瀛楁暟鍒嗛厤");
AddP("鎬昏锛氱害46,900瀛楋紙鍦?涓囪嚦5.5涓囧瓧鍖洪棿鍐咃級");
AddBullet("鍐欏湪鍓嶉潰锛?,500瀛?);
AddBullet("PART 1锛?0绔狅級锛?6,000瀛?);
AddBullet("PART 1 Q&A锛?,200瀛?);
AddBullet("PART 2锛?绔狅級锛?4,600瀛?);
AddBullet("PART 2 Q&A锛?,000瀛?);
AddBullet("鍐欑粰鍚岃缁撹锛?00瀛?);
AddSpace();

AddChapterTitle("绗叚绔狅細鏁欏鏂规硶璁?);
AddH1("鏍稿績鏁欏鍘熷垯");
AddH2("鍘熷垯涓€锛氶棶棰橀┍鍔紝闈炵煡璇嗙偣椹卞姩");
AddP("姣忎釜妯″潡浠ヤ竴涓湡瀹炲け璐ユ渚嬪紑鍦猴紝宸ュ叿鍦ㄨВ鍐抽棶棰樼殑杩囩▼涓嚜鐒舵秾鐜般€?);
AddSpace();
AddH2("鍘熷垯浜岋細鍏堥渿鎾煎悗瑙ｉ噴");
AddP("寮€鍦哄厛鍛堢幇鍙嶇洿瑙夌殑妗堜緥鎴栨暟鎹紝鐒跺悗鍐嶈В閲婅儗鍚庨€昏緫銆傝鐭ュ啿绐佹槸瀛︿範鐨勬渶浣宠捣鐐广€?);
AddSpace();
AddH2("鍘熷垯涓夛細缁冧範鏄鏋?);
AddP("姣忎釜鐭ヨ瘑鐐瑰悗閮芥湁閰嶅缁冧範锛屼笁绾ч毦搴﹂€掕繘锛氳瘑鍒€佸簲鐢ㄣ€佸垱閫犮€傝鍫傜粌涔犳椂闂翠笉浣庝簬鎬绘椂闀跨殑40%銆?);
AddSpace();
AddH2("鍘熷垯鍥涳細宸ュ叿鍙洿鎺ュ甫璧?);
AddP("姣忎釜宸ュ叿閮芥槸瀹屾暣鐨勩€佸彲鐩存帴浣跨敤鐨勭増鏈紝涓嶇暀鍗婃垚鍝併€傚鍛樺瀹屽嵆鍙湪宸ヤ綔涓惤鍦般€?);
AddSpace();

AddH1("涓昏鏁欏鏂规硶");
AddH2("妗堜緥鍒嗘瀽娉?);
AddP("鎵€鏈夋渚嬪潎鏉ヨ嚜鐪熷疄浼佷笟鍦烘櫙锛屾瘡涓渚嬮兘鍖呭惈锛氳儗鏅€佸喅绛栬繃绋嬨€佺粨鏋溿€佸弽鎬濄€?);
AddSpace();
AddH2("宸ュ叿婕旂粌娉?);
AddP("姣忎釜宸ュ叿鏈夊畬鏁寸殑鎿嶄綔婕旂ず鍜岀粌涔犵幆鑺傘€傚鍛樺湪璇惧爞涓婃紨缁冿紝璁插笀鐜板満鎸囧銆?);
AddSpace();
AddH2("鑷垜鍙嶆€濇硶");
AddP("姣忎釜绔犺妭璁剧疆鍙嶆€濈幆鑺傦紝寮曞瀛﹀憳瀵圭収鑷繁鐨勫疄闄呮儏鍐佃繘琛屾€濊€冦€?);
AddSpace();
AddH2("灏忕粍璁ㄨ娉?);
AddP("澶嶆潅璇濋锛堝鍥㈤槦濂戠害璁捐銆佸悜涓婄鐞嗚竟鐣岋級閲囩敤灏忕粍璁ㄨ褰㈠紡锛岃涓嶅悓鑳屾櫙鐨勫鍛樹簰鐩稿惎鍙戙€?);
AddSpace();

AddChapterTitle("绗竷绔狅細璇炬椂瀹夋帓");
AddH1("鎬讳綋鏃堕棿瑙勫垝");
AddP("璇剧▼鎬绘椂闀匡細2澶╋紝姣忓ぉ6灏忔椂锛屽叡璁?2灏忔椂");
AddBullet("绗竴澶╀笂鍗堬細璇剧▼瀵煎叆+绗?-4绔狅紙3灏忔椂锛?);
AddBullet("绗竴澶╀笅鍗堬細绗?-8绔?缁冧範锛?灏忔椂锛?);
AddBullet("绗簩澶╀笂鍗堬細绗?-12绔?缁冧範锛?灏忔椂锛?);
AddBullet("绗簩澶╀笅鍗堬細绗?3-16绔?缁煎悎缁冧範+琛屽姩鎵胯锛?灏忔椂锛?);
AddSpace();

AddH1("璇︾粏璇炬椂鍒嗛厤");
var t7_1 = CreateTable(new[] { "鏃舵", "鍐呭", "鏃堕暱", "娲诲姩褰㈠紡" });
AddRow(t7_1, new[] { "Day 1 涓婂崍", "璇剧▼瀵煎叆+鍏悊寤虹珛", "30鍒嗛挓", "璁叉巿+浜掑姩" });
AddRow(t7_1, new[] { "Day 1 涓婂崍", "绗?绔狅細鎵撴柇浠庢潵涓嶆槸鎰忓", "30鍒嗛挓", "璁叉巿+妗堜緥" });
AddRow(t7_1, new[] { "Day 1 涓婂崍", "绗?绔狅細蹇欑涓婄樉鏈哄埗", "30鍒嗛挓", "璁叉巿+鑷垜鍙嶆€? });
AddRow(t7_1, new[] { "Day 1 涓婂崍", "绗?绔狅細鏃堕棿鐩掍笌閫€鍑烘垚鏈?, "45鍒嗛挓", "璁叉巿+宸ュ叿婕旂粌" });
AddRow(t7_1, new[] { "Day 1 涓婂崍", "绗?绔狅細娣卞害宸ヤ綔璁″垝琛?, "30鍒嗛挓", "璁叉巿+缁冧範" });
AddRow(t7_1, new[] { "Day 1 涓婂崍", "涓婂崍澶嶇洏+绛旂枒", "15鍒嗛挓", "璁ㄨ" });
AddRow(t7_1, new[] { "Day 1 涓嬪崍", "绗?绔狅細涓柇鏃ュ織", "45鍒嗛挓", "璁叉巿+宸ュ叿婕旂粌" });
AddRow(t7_1, new[] { "Day 1 涓嬪崍", "绗?绔狅細浼氳瀹¤", "45鍒嗛挓", "璁叉巿+灏忕粍璁ㄨ" });
AddRow(t7_1, new[] { "Day 1 涓嬪崍", "绗?绔狅細閲嶅惎绋?, "30鍒嗛挓", "璁叉巿+妗堜緥鍒嗘瀽" });
AddRow(t7_1, new[] { "Day 1 涓嬪崍", "绗?绔狅細鐜璁捐", "45鍒嗛挓", "璁叉巿+缁冧範" });
AddRow(t7_1, new[] { "Day 1 涓嬪崍", "绗竴澶╁鐩?宸ュ叿鏁寸悊", "15鍒嗛挓", "鍙嶆€? });
AddRow(t7_1, new[] { "Day 2 涓婂崍", "绗?绔狅細鎭㈠鏈哄埗", "45鍒嗛挓", "璁叉巿+缁冧範" });
AddRow(t7_1, new[] { "Day 2 涓婂崍", "绗?0绔狅細鍥㈤槦濂戠害", "45鍒嗛挓", "璁叉巿+灏忕粍璁ㄨ" });
AddRow(t7_1, new[] { "Day 2 涓婂崍", "绗?1绔狅細鍚戜笂绠＄悊杈圭晫", "45鍒嗛挓", "璁叉巿+瑙掕壊鎵紨" });
AddRow(t7_1, new[] { "Day 2 涓婂崍", "绗?2绔狅細浜у嚭鍙鎬?, "30鍒嗛挓", "璁叉巿+缁冧範" });
AddRow(t7_1, new[] { "Day 2 涓嬪崍", "绗?3绔狅細绠＄悊鑰呰鐭ヨ礋鑽?, "30鍒嗛挓", "璁叉巿+璁ㄨ" });
AddRow(t7_1, new[] { "Day 2 涓嬪崍", "绗?4绔狅細鍥㈤槦鏂囧寲寤虹珛", "45鍒嗛挓", "璁叉巿+灏忕粍缁冧範" });
AddRow(t7_1, new[] { "Day 2 涓嬪崍", "绗?5绔狅細鎭㈠鍗虫姇璧?, "30鍒嗛挓", "璁叉巿+鍙嶆€? });
AddRow(t7_1, new[] { "Day 2 涓嬪崍", "绗?6绔狅細闀挎湡涓讳箟鑰呭績鎬?, "30鍒嗛挓", "璁叉巿+璁ㄨ" });
AddRow(t7_1, new[] { "Day 2 涓嬪崍", "缁煎悎婕旂粌+琛屽姩鎵胯", "45鍒嗛挓", "缁冧範+鎵胯" });
FinishTable(t7_1);
AddSpace();

AddH1("鑼舵瓏涓庝紤鎭畨鎺?);
AddP("姣忓ぉ瀹夋帓涓ゆ鑼舵瓏锛氫笂鍗?0:30-10:45锛?5鍒嗛挓锛夛紝涓嬪崍15:00-15:15锛?5鍒嗛挓锛?);
AddP("鍗堥鏃堕棿锛?2:00-13:30锛?.5灏忔椂锛?);
AddSpace();

AddChapterTitle("绗叓绔狅細棰勬湡鎴愭灉");
AddH1("瀛﹀憳灞傞潰鐨勯鏈熸垚鏋?);
AddH2("鐭湡鎴愭灉锛堣绋嬬粨鏉熸椂锛?);
AddNum(1, "姣忎綅瀛﹀憳瀹屾垚涓€浠戒釜浜烘敞鎰忓姏瀹¤鎶ュ憡锛堜腑鏂棩蹇楀垎鏋愶級");
AddNum(2, "姣忎綅瀛﹀憳鍒跺畾涓€浠戒釜浜烘繁搴﹀伐浣滆鍒掞紝鍖呭惈鏃堕棿鐩掕璁″拰鐜鏀归€犳柟妗?);
AddNum(3, "姣忎綅瀛﹀憳涓绘寔鎴栧弬涓庝竴娆″洟闃熸繁搴﹀伐浣滃绾﹁璁猴紝鏄庣‘鑷冲皯3椤瑰洟闃熺害瀹?);
AddNum(4, "姣忎綅瀛﹀憳寤虹珛涓汉鐨勬仮澶嶇粌涔犲簱锛岄€夋嫨鑷冲皯3绉嶉€傚悎鐨勬仮澶嶆柟寮?);
AddNum(5, "姣忎綅瀛﹀憳鍒跺畾涓€浠?1澶╄鍔ㄦ壙璇猴紝鎵胯鍦ㄨ绋嬬粨鏉熷悗钀藉疄涓€椤瑰叿浣撴敼鍙?);
AddSpace();

AddH2("涓湡鎴愭灉锛堣绋嬪悗30澶╋級");
AddNum(1, "瀛﹀憳姣忔棩娣卞害宸ヤ綔鏃堕棿骞冲潎鎻愬崌50%浠ヤ笂");
AddNum(2, "瀛﹀憳鍛ㄥ潎琚墦鏂鏁颁笅闄?0%浠ヤ笂");
AddNum(3, "瀛﹀憳鍥㈤槦寮€濮嬭繍琛岃嚦灏戜竴椤瑰洟闃熺骇娣卞害宸ヤ綔淇濇姢鏈哄埗");
AddNum(4, "瀛﹀憳鎭㈠缁冧範鐨勬墽琛岀巼杈惧埌70%浠ヤ笂");
AddSpace();

AddH2("闀挎湡鎴愭灉锛堣绋嬪悗90澶╋級");
AddNum(1, "瀛﹀憳寤虹珛绋冲畾鐨勬繁搴﹀伐浣滀範鎯紝鏃ュ潎娣卞害宸ヤ綔鏃堕棿杈惧埌3灏忔椂浠ヤ笂");
AddNum(2, "瀛﹀憳鎵€甯﹀洟闃熺殑浼氳鏁伴噺涓嬮檷20%浠ヤ笂");
AddNum(3, "瀛﹀憳褰㈡垚\"娉ㄦ剰鍔涗富鏉冧笉鍙娓"鐨勯暱鏈熶俊蹇?);
AddNum(4, "瀛﹀憳鎴愪负缁勭粐鍐呮繁搴﹀伐浣滄枃鍖栫殑鎺ㄥ姩鑰呭拰绀鸿寖鑰?);
AddSpace();

AddH1("缁勭粐灞傞潰鐨勯鏈熸垚鏋?);
AddNum(1, "鍥㈤槦鏁翠綋璁ょ煡璐熻嵎鍙鍖栵紝璇嗗埆鍑轰富瑕佺殑娉ㄦ剰鍔涙秷鑰楅粦娲?);
AddNum(2, "寤虹珛鍥㈤槦绾ф繁搴﹀伐浣滀繚鎶ゆ満鍒讹紝闄嶄綆鏃犳晥浼氳鍜屾棤璁″垝涓柇");
AddNum(3, "褰㈡垚鍥㈤槦鍐呴儴鐨勬繁搴﹀伐浣滄枃鍖栵紝鍑忓皯瀵筡"闅忔椂鍦ㄧ嚎\"鐨勯殣鎬у鍔?);
AddNum(4, "鎻愬崌鍥㈤槦鏁翠綋浜у嚭璐ㄩ噺锛岄檷浣庡洜璁ょ煡鍒囨崲瀵艰嚧鐨勮繑宸ュ拰鍐崇瓥澶辫");
AddSpace();

AddH1("璇剧▼鏁堟灉璇勪及鏂瑰紡");
AddBullet("璇惧墠娴嬶細浜嗚В瀛﹀憳鍩虹嚎鐘舵€侊紙娣卞害宸ヤ綔鏃堕棿銆佽鎵撴柇棰戠巼銆佽鐭ョ姸鎬侊級");
AddBullet("璇句腑璇勶細璁插笀瑙傚療瀛﹀憳缁冧範琛ㄧ幇锛屽嵆鏃跺弽棣?);
AddBullet("璇惧悗娴嬶細璇剧▼缁撴潫鍚?0澶┿€?0澶╄窡韪瘎浼?);
AddBullet("缁勭粐璇勪及锛氬洟闃熷眰闈㈢殑浼氳鏁伴噺銆佷骇鍑鸿川閲忋€佹垚鍛樻弧鎰忓害鍙樺寲");
AddSpace();
AddSpace();
AddP("鈥斺€旇绋嬭鏄庝功瀹屸€斺€?);
Console.WriteLine("Document created: " + outputPath);
