import { useState } from "react";
import "./inputPrice.css"
let val = 0;
const InputPrice = (props) => {
    const [input,setInput]=useState()  
    function newPrice(e) {
     val = e.target.value;
    };
    
    function subhandel(e) {
        e.preventDefault();
        setInput('');
    };
    
    const changePrice = () => {
        val != 0 ? props.changePrice(val) : alert("NO INTER A NEW PRICE AT INPUT");
        val = 0;
    };

   return (
     <>
       <form onSubmit={subhandel} className="input">
         <input value={input}  onChange={newPrice} placeholder="newPrice"  />
         <button onClick={changePrice}>SAVE</button>
       </form>
     </>
   );
}
export default InputPrice

