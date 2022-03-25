
import './App.css';
import Imag from "./Imag/meat.jpg";
import Imag1 from "./Imag1/milk.jpg";
import Imag2 from "./Imag2/rice2.jpg";
import Header from './compunets/header';
import Product from './compunets/product';
import Inptdb from './compunets/adddb';
import { useState } from 'react';

const App = () => {
  let imags = [Imag, Imag1, Imag2];
   ////این فانکشنی هستش که از کامپونت دیکه اطلاعات جدید ارسال میشه
    const transdate = (obj) => {
    products.push(obj);
    console.log(products);
    }
  
  
  ///این آرایه هم بصورت پیش فرض وجود داره  وابتدا این رندر میشه 
  const products = [ 
    {
      id: 1,
      nameProduct: 'Milk',
      price: 480000,
      date: new Date(2022, 2, 2),
      imag: imags[1],
    },
    {
      id: 2,
      nameProduct: 'Meat',
      price: 2000000,
      date: new Date(2022, 2, 2),
      imag: imags[0]
    },
    {
      id: 3,
      nameProduct: 'Milk',
      price: 110000,
      date: new Date(2021, 2, 1),
      imag: imags[1]
    },
    {
      id: 4,
      nameProduct: 'Meat',
      price: 1100000,
      date: new Date(2021, 2, 1),
      imag: imags[0]
    },
    {
      id: 5,
      nameProduct: 'Rice',
      price: 270000,
      date: new Date(2021, 2, 1),
      imag: imags[2]
    },
    {
      id: 6,
      nameProduct: 'Rice',
      price: 800000,
      date: new Date(2022, 2, 2),
      imag: imags[2]
    },
  ]
  return (
    <div className="App"> 
      < Header pro={products} />  
      < Inptdb onAdddate={transdate} />
      {
        products.map(el =>
          < Product key={el.id}
          id={el.id} nameProduct={el.nameProduct}
          price={el.price} date={el.date}
         imag={el.imag} log /> )
        };
    </div>
  );
};
export default App;
