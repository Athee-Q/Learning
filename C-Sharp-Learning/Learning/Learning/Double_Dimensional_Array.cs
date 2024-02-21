using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learning
{
    class Double_Dimensional_Array
    {
        public void TwoDimensionArray()
        {
            string[] months = { "Jan", "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "sep" , "Oct" , "Nov" , "Dec" };
            string[] employee = new string[1];
            int[,] sales = new int[ 1 , 12];

            for (int i = 0; i < employee.Length; i++)
            {
                Console.Write("Enter the Name : ");
                employee[i] = Console.ReadLine();

                for (int j = 0; j < sales.GetLength(1); j++)
                {
                    Console.Write($"Enter Sales for {months[j]} : ");
                    sales[i, j]= int.Parse(Console.ReadLine());
                }

            }

            for (int i = 0; i < employee.Length; i++)
            {
                Console.Write($" {employee[i]} \t ");

                int total = 0;

                for (int j = 0; j < sales.GetLength(1); j++)
                {
                    Console.Write($"{sales[i, j]} \t ");
                    total += sales[i, j];
                }
                Console.WriteLine(total);

            }
            Console.ReadKey();
            
        }
    }
}
