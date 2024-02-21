import { FaSearch } from "react-icons/fa";


const SearchItem = ({SearchItem,setSearchItem}) => {
   
    return (
        <form onSubmit={ e => e.preventDefault}>
            <label htmlFor="search">Searcch Item</label>
            <input
            tabIndex={0} 
            type="text" 
            role="search"
            name="search" 
            id="searchItem"
            placeholder="Search Item"
            value={SearchItem}
            onChange={(e)=>setSearchItem(e.target.value)}
             />
            <button>
                <FaSearch />
            </button>
        </form>
    )
} 
export default SearchItem