using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using System;
using System.Linq;

class Inspect
{
    static void Main(string[] args)
    {
        var path = @"D:\2026年课程\竞越\绩效管理和绩效面谈：通过绩效面谈让员工更加胜任\完整课程包\03_讲师手册\讲师手册_完整版.docx";
        using var doc = WordprocessingDocument.Open(path, false);
        var body = doc.MainDocumentPart!.Document!.Body!;
        var paras = body.Elements<Paragraph>().Count();
        var tables = body.Elements<Table>().Count();
        var runs = body.Descendants<Run>().Count();
        Console.WriteLine($"Paragraphs: {paras}");
        Console.WriteLine($"Tables: {tables}");
        Console.WriteLine($"Runs: {runs}");
        var allText = string.Join("", body.Descendants<Text>().Select(t => t.Text));
        int cn = allText.Count(c => c >= '一' && c <= '鿿');
        Console.WriteLine($"Total text length: {allText.Length}");
        Console.WriteLine($"Chinese chars: {cn}");
    }
}
