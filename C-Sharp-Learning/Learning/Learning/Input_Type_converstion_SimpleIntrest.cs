using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learning
{
    class Input_Type_converstion_SimpleIntrest
    {
        public void SimpleIntrest()
        {
            int P, r, t, si;

            Console.Write($"Enter The Principal Amount : ");
            P = int.Parse(Console.ReadLine());

            Console.Write($"Enter The Rate of intrest : ");
            r = int.Parse(Console.ReadLine());

            Console.Write($"Enter The Time Duration : ");
            t = int.Parse(Console.ReadLine()); // another methpod to convert "int" is : Conver.ToInt32();

            si = (P * r * t) / 100;
            Console.WriteLine($"Simple Intrest : {si}");

            Console.ReadKey();
        }
    }
}
