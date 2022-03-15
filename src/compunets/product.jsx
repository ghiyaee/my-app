import './product.css';
import Date from "./date";
import Card from './Crad';

const Product = (props) => {
  const {id, nameProduct, price, imag, date} = props;
  return (
     <Card className="list">
       <div className="items">
         <div>{id}</div>
         <div> {nameProduct}</div>
         <div>${price}</div>
        <img src={imag}/>
       </div>
       <div>
         <Date date={date} />
       </div>
      </Card>
      );
}

export default Product;