
import { useRef } from "react";
import { CgAddR } from "react-icons/cg";

function AddItem({ newItem , setNewItem , handleSubmit }){

    
    const inputRef = useRef()

    return (
        <form 
        onSubmit={(e) => handleSubmit(e)}
        >
            <label htmlFor="addItem">Add Item</label>
            <input 
            ref={inputRef}
            autoFocus
            id="addItem"
            type="text"
            placeholder="Add new Item"
            value = {newItem}
            onChange={(e)=>setNewItem(e.target.value)}
            required
            />
            <button 
            type = "submit"
            onClick={()=>inputRef.current.focus()}
            >
                <CgAddR />
            </button>
        </form>
    )
}

export default AddItem