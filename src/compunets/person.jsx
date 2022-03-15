import './product.css';
import Date from "./date";
import Card from './Crad';

const Person = (props) => { 
  return (
    <>
     <Card className="list">
       <div className="items">
         <div>{props.id}</div>
         <div> {props.nameProduct}</div>
         <div>${props.price}</div>
         <div>
           <img src={props.imag}  height={60} />
         </div>
       </div>
       <div>
         <Date date={props.date} />
       </div>
   </Card>
      </>
      );
}

export default Person;