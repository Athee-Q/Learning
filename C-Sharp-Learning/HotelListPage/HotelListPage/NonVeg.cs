using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelListPage
{
    internal class NonVeg:Hotel
    {
        protected static string[] name = { "Real Arab", "Khalid Briyani" };
        protected static string[] phone = { "9848972323", "9232972323" };


        public string HotelDetails()
        {
            return HotelDetails(name, phone);
        }
    }
}
