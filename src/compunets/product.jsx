import {useState} from 'react';
import './product.css';
import Date from "./date";
import Card from './Crad';
import InputPrice from "./inputPrice"
import Inptdb from "./adddb";
const Product = (props) => {
  const [price, setPrice] = useState(props.price)
  
  
  return (
    <Card className="list">
      <div className="items">
        <div>{props.id}</div>
        <div> {props.nameProduct}</div>
        <div>${price}</div>
        {/* <img src={props.imag} /> */}
      </div>
      <div>
        <InputPrice changePrice={(price) => setPrice(price)} />
        <Date date={props.date} />
      </div>
        <button >DELTED</button>
    </Card>
  );
}

export default Product;