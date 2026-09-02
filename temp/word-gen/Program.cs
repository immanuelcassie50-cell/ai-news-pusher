using WordGen.Lib;

namespace WordGen;

public static class Program
{
    public static int Main(string[] args)
    {
        if (args.Length < 1)
        {
            Console.Error.WriteLine("Usage: WordGen <task>");
            return 1;
        }
        return args[0] switch
        {
            "D-06" => D06.Run(),
            "D-07" => D07.Run(),
            "D-09" => D09.Run(),
            "D-10" => D10.Run(),
            "D-11" => D11.Run(),
            "D-13" => D13.Run(),
            "all"  => All(),
            _ => 1
        };
    }

    static int All()
    {
        int code = 0;
        foreach (var t in new[] { "D-06", "D-07", "D-09", "D-10", "D-11", "D-13" })
        {
            Console.WriteLine("==> " + t);
            int r = t switch
            {
                "D-06" => D06.Run(),
                "D-07" => D07.Run(),
                "D-09" => D09.Run(),
                "D-10" => D10.Run(),
                "D-11" => D11.Run(),
                "D-13" => D13.Run(),
                _ => 1
            };
            if (r != 0) code = r;
        }
        return code;
    }
}
