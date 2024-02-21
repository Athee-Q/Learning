using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learning
{
    class One_Dimension_Array
    {
        public void OneDimensionArray()
        {

            string[] employee = new string[2];

            int P, r, t, si;

            for (int i = 0; i < employee.Length; i++)
            {
                Console.Write("Enter the Name : ");
                employee[i] += Console.ReadLine();

            Console.Write($"Enter The Principal Amount : ");
            P = int.Parse(Console.ReadLine());

            Console.Write($"Enter The Rate of intrest : ");
            r = int.Parse(Console.ReadLine());

            Console.Write($"Enter The Time Duration : ");
            t = int.Parse(Console.ReadLine()); // another methpod to convert "int" is : Conver.ToInt32();

            si = (P * r * t) / 100;

            Console.WriteLine($"{employee[i]} simple intrest is : {si} ");
            }
            Console.ReadKey();
        }
    }
}
