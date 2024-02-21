using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelListPage
{
    internal class Hotel
    {
        static int id;
        protected virtual string HotelDetails(string[] names, string[] phones)
        {
            string hotel = "";
            for (int i = 0; i < names.Length; i++)
            {
                id++;
                hotel += $"{id}\t Hotel Name : {names[i]}\n\t Contact Number : {phones[i]}\n";
            }

            if (names.Length > 0)
            {
                return hotel;
            }

            return "No more hotels available.";
        }
    }
}
