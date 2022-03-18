import "./inputPrice.css"
let val = 0;
const InputPrice = (props) => {

 function newPrice(e) {
     val = e.target.value;
     console.log(val);
    };
    
    function subhandel(e) {
     e.preventDefault();
    };
    
 const changePrice = () => {
   val != 0 ? props.changePrice(val) : alert("no inter a value");
   val = 0;
    };

   return (
     <>
       <form onSubmit={subhandel} className="input">
         <input onChange={newPrice} placeholder="newPrice" />
         <button onClick={changePrice}>SAVE</button>
       </form>
     </>
   );
}
export default InputPrice
