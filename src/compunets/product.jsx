import {useState} from 'react';
import './product.css';
import Date from "./date";
import Card from './Crad';
const Product = (props) => {
  const [price,setPrice] = useState(props.price)
  const priceHandel = () => {
      setPrice(1)
  }
  return (
    <Card className="list">
      <div className="items">
        <div>{props.id}</div>
        <div> {props.nameProduct}</div>
        <div>${price}</div>
        <button onClick={priceHandel}>Update Price</button>
        <img src={props.imag} />
      </div>
      <div>
        <Date date={props.date} />
      </div>
    </Card>
  );
}

export default Product;