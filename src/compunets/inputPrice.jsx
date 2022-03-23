import { useState } from "react";
import "./inputPrice.css"
let val = 0;
const InputPrice = (props) => {
    const [input,setInput]=useState()  
    
    function subhandel(e) {
        e.preventDefault();
        setInput('');
    };
    
    const changePrice = () => {
        val != 0 ? props.changePrice(val) :show("NO INTER A NEW PRICE AT INPUT");
        val = 0;
  };
  const show = () => {
    
  }

   return (
     <>
       <form onSubmit={subhandel} className="input">
         <input value={input}  onChange={(e)=> val=e.target.value} placeholder="changePrice"  />
         <span className="messge" >sve</span>
         <button onClick={changePrice}>Update</button>
       </form>
     </>
   );
}
export default InputPrice

