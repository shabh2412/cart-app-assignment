import { useState } from "react";
import CartItem from "./CartItem";
import Total from "./Total";

const initData = [
  {
    id:1,
    productName: "Noodles",
    price: 30,
    qty:1
  },
  {
    id:2,
    productName: "Biriyani",
    price: 100,
    qty:3
  },
  {
    id:3,
    productName: "Chips",
    price: 10,
    qty:3
  },
]

function calculateTotal(products) {
  // calculate total cost
  return products.reduce(((acc, c) => (acc+ (c.price * c.qty))),0);
}

function CartContainer () {
  const [data, setData] = useState(initData);

  const handleChangeQty = (id, amount)=>{
    let updatedData = data.map((item)=> {
      if(item.id === id) {
        return {
          ...item,
          qty: item.qty+amount
        }
      }
      else {
        return item;
      }
    });
    setData(updatedData);
  }
  // data
  // event handlers
  return (
    <div className="row my-2">
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 mx-auto border border-danger">
        {/* 
          Body
        */}
        {/* 
        List of products
        */}
        {
          data.map(item => (
            <CartItem key={item.id} id={item.id} label={item.productName} qty={item.qty} price={item.price} handleChangeQty={handleChangeQty} />
          ))
        }
        {/* <CartItem />
        <CartItem />
        <CartItem /> */}
        {/* 
        Total
        */}
        <Total total={calculateTotal(data)}/>

      </div>
    </div>
  )
}
export default CartContainer;