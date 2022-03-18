import {useState} from 'react';
import './product.css';
import Date from "./date";
import Card from './Crad';
let val = 0;
const Product = (props) => {
  const [price, setPrice] = useState(props.price)

  function newPrice(e) {
    val = (e.target.value);
  }

  const changePrice = () => {
    val !=0 ? setPrice(val):alert('no inter a value')
    val = 0;
  }
   
  return (
    <Card className="list">
      <div className="items">
        <div>{props.id}</div>
        <div> {props.nameProduct}</div>
        <div>${price}</div>
        <img src={props.imag} />
      </div>
      <div>
        <form>
          <input onChange={newPrice} placeholder="newPrice" />
         </form>
        <button onClick={changePrice}>SAVE</button>
        <Date date={props.date} />
      </div>
    </Card>
  );
}

export default Product;