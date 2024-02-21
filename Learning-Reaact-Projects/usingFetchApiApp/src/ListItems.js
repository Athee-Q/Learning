import { FaTrashAlt } from "react-icons/fa";


const ListItems = ({items , handleCheck,handleDelete}) =>{

    return(
        <ul className = "item">
            {items.map((item) => (
                <li key={item.id} >
                    <input
                    tabIndex={0}
                    name="checkbox"
                    type="checkbox"
                    onChange={()=>handleCheck(item.id)} 
                    checked ={item.checked} />
                    <label >{item.item}</label>
                    <FaTrashAlt 
                    onClick={()=>handleDelete(item.id)}
                    />   
                </li>
            ))}
        </ul>   
    )
}
export default ListItems