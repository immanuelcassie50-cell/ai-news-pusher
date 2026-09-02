// 入口：生成全部 5 份 Word 文档
using System;
using System.IO;

namespace DesayDocxGen;

public class Program
{
    public static int Main(string[] args)
    {
        var outDir = @"D:\Downloads\xinjian\德赛西威评审全流程PRD\产出物\01-评审筹备";
        Directory.CreateDirectory(outDir);

        var jobs = new (string fileName, Action<string> build)[]
        {
            ("D-01-评审项目推进计划.docx",          Doc01.Build),
            ("D-02-评审及结营仪式流程表.docx",      Doc02.Build),
            ("D-03-评审团组建方案与职责分工.docx",  Doc03.Build),
            ("D-04-评审奖项设置与评奖标准.docx",    Doc04.Build),
            ("D-05-评审物料清单.docx",              Doc05.Build),
        };

        int ok = 0;
        foreach (var (name, build) in jobs)
        {
            var path = Path.Combine(outDir, name);
            try
            {
                build(path);
                var size = new FileInfo(path).Length;
                Console.WriteLine($"[OK]   {name}  ({size:N0} bytes)");
                ok++;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[FAIL] {name}: {ex.GetType().Name}: {ex.Message}");
                Console.WriteLine(ex.StackTrace);
            }
        }
        Console.WriteLine($"\n生成完成：{ok} / {jobs.Length}");
        return ok == jobs.Length ? 0 : 1;
    }
}
