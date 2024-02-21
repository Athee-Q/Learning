import colorNames from "colornames"
import { useState } from "react"


const Aside = () =>{

    const [colorValue , setColorValue] = useState('')
    const [hexValue , setHexValue] = useState('')
    const [isDarkText , setIsDarkText] = useState(true)

    return(
        <>
        
        <div style={{backgroundColor:colorValue , color : isDarkText ? '#000' : '#fff' , height:'200px', width : '80vw' , border : '1px  solid  #000'}}>
            <p>Color : {colorValue ? colorValue : 'Empty Value'}</p>
            <p>HexValue : {hexValue ? hexValue : null }</p>
        </div>
        <label htmlFor="Addcolor">Add Color Name</label>
        <input 
        tabIndex={0}
        type="text"
        id="Addcolor"
        placeholder="Add Color Name"
        value={colorValue}
        onChange={(e) => {
            setColorValue(e.target.value);
            setHexValue(colorNames(e.target.value));
        }}
        />
        <button
        onClick={() => setIsDarkText(!isDarkText)}
        >
        Toggle Text Color
        </button>
        </>
    )
}
export default Aside