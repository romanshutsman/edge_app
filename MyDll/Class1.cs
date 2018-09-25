using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EdgeJs;

namespace MyDll
{
    public class Class1
    {
        public static async Task Start()
        {
            var func = Edge.Func(@"
            return function (data, callback) {
                callback(null, 'Node.js welcomes ' + data);
            }
        ");

            var temp = await func(".NET");
            Console.WriteLine(await func(".NET"));
        }
    }
    public class Startup
    {
        public async Task<object> Test(object input)
        {
            Console.WriteLine("Hello C# method");
            return "Hello C# method";


        }
    }
}
