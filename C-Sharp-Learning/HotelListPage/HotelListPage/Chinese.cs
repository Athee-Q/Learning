using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelListPage
{
    internal class Chinese:Hotel
    {
        protected static int id;
        protected static string[] name = { "Chick In", "Chick Punch" };
        protected static string[] phone = { "8889692892", "8882423237" };

        public string HotelDetails()
        {
            return HotelDetails(name, phone);
        }
    }
}
