using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learning
{
    class Jagged_Array
    {
        public void JaggedArray()
        {
            string[][] student= new string [1][];
            string name = "";
            for (int i = 0; i < student.GetLength(0); i++)
            {
                Console.Write($"Enter your Name : ");
                name = Console.ReadLine();

                Console.Write($"Number of Language did you know : ");
                int n = int.Parse(Console.ReadLine());

                student[i] = new string [n];

                for (int j = 0; j < student[i].Length; j++)
                {
                    Console.Write($"Enter the language : ");
                    student[i][j] = Console.ReadLine();

                }
            }
            for(int i = 0; i<student.GetLength(0); i++)
            {
                Console.Write($"{name}\t");
                for (int j = 0; j < student[i].Length; j++)
                {
                    Console.Write($"{student[i][j]}\t");
                }
            }
            Console.ReadKey();
        }
    }
}
