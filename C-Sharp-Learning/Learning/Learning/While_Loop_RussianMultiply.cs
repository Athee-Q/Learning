using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learning
{
    class While_Loop_RussianMultiply
    {
        public void RussianMultiply()
        {
            int x , y , a , b;

            Console.Write("Enter the value for x : ");
            x = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter the value for y : ");
            y = Convert.ToInt32(Console.ReadLine());

            a = x;
            b = y;
            int total = 0; 

            while (x > 0)
            {
                if(x % 2 == 0)
                {
                    total += x;
                }
                x = x / 2;
                y = y * 2; 
            }
            Console.WriteLine($"russian multiply of {a} and {b} is {total}");
            Console.ReadKey();
        }
    }
}
