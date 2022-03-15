
import './App.css';
import Person from './compunets/product';
import Imag from "./Imag/meat.jpg";
import Imag1 from "./Imag1/milk.jpg";
import Header from './compunets/header';
const  App =() => {
 let imags=[Imag,Imag1]
  const products = [
    {
      id: 1,
      nameProduct: 'Milk',
      price: 480000,
      date: new Date(2022,2,2),
      imag: imags[1]
    },
    {
      id: 2,
      nameProduct: 'Meat',
      price: 2000000,
      date: new Date(2022,2,2),
      imag:imags[0]
    },
    {
      id: 3,
      nameProduct: 'Milk',
      price: 110000,
      date: new Date(2021, 2, 1),
      imag:imags[1]
    },
    {
      id: 4,
      nameProduct: 'Meat',
      price: 1100000,
      date: new Date(2021, 2, 1),
      imag:imags[0]
    },

  ]

  return (
    <div className="App">
      <Header/>
      {
        products.map(el => < Person key = {el.id} id = {el.id} nameProduct = {el.nameProduct} price = {el.price} date = {el.date} imag = {el.imag }/> ) }
    </div>
  );
}

export default App;
