
import './App.css';
import Person from './compunets/person';
import Imag from "./Imag/meat.jpg";
import Imag1 from "./Imag1/milk.jpg";
function App() {
 let imags=[Imag,Imag1]
  const products = [
    {
      id: 1,
      nameProduct: 'Milk',
      price: 48000,
      date: new Date(),
     imag: imags[1]
    },
    {
      id: 2,
      nameProduct: 'Meat',
      price: 200000,
      date: new Date(),
      imag:imags[0]
    },
    {
      id: 3,
      nameProduct: 'Milk',
      price: 11000,
      date: new Date(2021, 1, 1),
      imag:imags[1]
    },
    {
      id: 4,
      nameProduct: 'Meat',
      price: 110000,
      date: new Date(2021, 1, 1),
      imag:imags[0]
    },

  ]

  return (
    <div className="App">
      {
        products.map(el => < Person key = {
              el.id
            }
            id = {
              el.id
            }
            nameProduct = {
              el.nameProduct
            }
            price = {
              el.price
            }
            date = {
              el.date
            }
            imag = {
              el.imag
            }
            /> ) }
    </div>
  );
}

export default App;
