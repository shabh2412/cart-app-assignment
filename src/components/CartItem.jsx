import LabelPrice from "./LabelPrice";
import Quantity from "./Quantity";

function CartItem ({
  id,
  label,
  qty,
  price,
  handleChangeQty
}) {
  return (
    <div className="row justify-content-evenly border border-primary my-2 py-2 mx-1 align-items-center">
      <LabelPrice label={label} price={price} />
      {/* <Quantity id={id} qty={qty} changeCount={handleChangeQty}/> */}
      <Quantity
       id={id} 
       qty={qty} 
       incrementCount={()=>{handleChangeQty(id, 1)}}
       decrementCount={()=>{handleChangeQty(id, -1)}}
       />
    </div>
  );
}
export default CartItem;