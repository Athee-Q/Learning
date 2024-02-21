using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Learning
{
    class Type_Casting
    {
        public void TypeCasting()
        {
            //two types of type castig 
            // 1 - Implicit Casting

            char charvar = '2';
            int intvar = charvar;
            float floatvar = intvar;
            double doublevar = floatvar;

            Console.WriteLine(charvar.GetType());
            Console.WriteLine(intvar.GetType());
            Console.WriteLine(floatvar.GetType());
            Console.WriteLine(doublevar.GetType());

            // 2 - Explicit Casting

            float floatvar2 = (float)doublevar;
            int intvar2 = (int)floatvar2;
            char charavr2 = (char)intvar2;

            Console.WriteLine(floatvar2.GetType());
            Console.WriteLine(intvar2.GetType());
            Console.WriteLine(charavr2.GetType());

        }
    }
}
