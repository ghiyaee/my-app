import './product.css';
import Date from "./date";
function Person(props) { 
   return (
     <div className="list">
       <div className="items">
         <div>{props.id}</div>
         <div> {props.nameProduct}</div>
         <div>${props.price}</div>
         <div>
           <img src={props.imag} height={50} />
         </div>
       </div>
       <div>
         <Date date={props.date} />
       </div>
     </div>
   );
}

export default Person;