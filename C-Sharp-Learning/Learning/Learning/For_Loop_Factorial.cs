using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learning
{
    class For_Loop_Factorial
    {
    public void Factorial()
    {   
        int n , f;

        Console.Write("Enter the Number : ");
        n = Convert.ToInt32(Console.ReadLine());

        f = 1;

        for ( int i = 1; i <= n; i++)
        {
            f = f * i;
        }
        Console.WriteLine($"Factorial of {n} is {f}");

            Console.ReadKey();

    }
        
    }
}
