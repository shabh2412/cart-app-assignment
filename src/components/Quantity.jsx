import Button from "./Button";


function Quantity ({
  id,qty, decrementCount, incrementCount,
  // changeCount,
}) {
  return (
    <div className="col">
      <div className="row justify-content-center gap-1 align-items-center">
        <div className="col-3 p-0">
          {/* <Button disabled={qty === 0 ? true : false} onClick={()=>{changeCount(id,-1)}}>-</Button> */}
          <Button disabled={qty === 0 ? true : false} onClick={decrementCount}>-</Button>
        </div>
        <div className="col-3 p-0">
          <h4 className="mb-0">{qty}</h4>
        </div>
        <div className="col-3 p-0">
          {/* <Button onClick={()=>{changeCount(id,1)}}>+</Button> */}
          <Button onClick={incrementCount}>+</Button>
        </div>
      </div>
    </div>
  )
}

export default Quantity;