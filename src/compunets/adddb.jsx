import "./adddb.css"
import { useState } from "react";
const Inptdb = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')
   
    const idHandel = (e) => {
      setId(e.target.value);
    }
      const nameHandel = (e) => {
        setName(e.target.value);
      };
      const priceHandel = (e) => {
        setPrice(e.target.value);
      };
      const dateHandel = (e) => {
        setDate(e.target.value);
      };
    
    const submitHandel = (e) => {
        e.preventDefault()
        const obj = {
            id: id,
            name: name,
            price: price,
            date:date
        };
        console.log(obj);
        setId('')
    };
return (
        <form onSubmit={submitHandel}>
        <label htmlFor="" className="id">id</label>
    <input type="number" className="idint" onChange={idHandel} value={id}/>
        <label htmlFor="">nameProduct</label>
        <input type="text" onChange={nameHandel}/>
        <label htmlFor="">price</label>
        <input type="number" onChange={priceHandel}/>
        <label htmlFor="">date</label>
        <input type="date" min="2021-01-01" max="2022-01-01" onChange={dateHandel}/>
        <input type="submit" />
        </form>
)
}
export default Inptdb;