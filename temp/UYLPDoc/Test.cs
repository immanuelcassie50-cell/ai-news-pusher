using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

class TestDoc
{
    static void Main(string[] args)
    {
        string outputPath = "D:/CC/temp/test_minimal.docx";
        Console.WriteLine("Creating document...");

        using var doc = WordprocessingDocument.Create(outputPath, WordprocessingDocumentType.Document);
        Console.WriteLine("Document created, getting main part...");

        var mainPart = doc.MainDocumentPart;
        Console.WriteLine($"MainDocumentPart is null: {mainPart == null}");

        if (mainPart == null)
        {
            Console.WriteLine("ERROR: MainDocumentPart is null!");
            return;
        }

        var body = mainPart.Document?.Body;
        Console.WriteLine($"Body is null: {body == null}");

        Console.WriteLine("Adding paragraph...");
        body ??= new Body();
        if (mainPart.Document == null)
            mainPart.Document = new Document(body);
        else if (mainPart.Document.Body == null)
            mainPart.Document.Body = body;

        mainPart.Document.Body.Append(new Paragraph(
            new Run(new Text("Hello World"))
        ));

        Console.WriteLine("Saving...");
        mainPart.Document.Save();
        Console.WriteLine($"Document saved to: {outputPath}");
    }
}