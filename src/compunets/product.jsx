import './product.css';
import Date from "./date";
import Card from './Crad';

const Product = (props) => {
  const {id, nameProduct, price, imag, date} = props;
  console.log(props);
  return (
     <Card className="list">
       <div className="items">
         <div>{id}</div>
         <div> {nameProduct}</div>
         <div>${price}</div>
         <div>
           <img src={imag}  height={60} />
         </div>
       </div>
       <div>
         <Date date={date} />
       </div>
      </Card>
      );
}

export default Product;