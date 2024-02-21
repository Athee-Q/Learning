using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learning
{
    class Condition_If_Else_PrimeNumber
    {

        public void IfElse()
        {
            int n, result;

            Console.Write("Enter the Number : ");
            n = Convert.ToInt32(Console.ReadLine());

            result = 1;

            for (int i = 2; i <= n; i++)
            {
                if (n % i == 0)
                {
                    result = 0;
                }
            }
            if (result == 0)
            {
                Console.WriteLine($"{n} is a Prime Number");
            } else
            {
                Console.WriteLine($"{n} is a Not Prime Number");
            }
        Console.ReadKey();
        }
    }
}
