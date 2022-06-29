function Total ({
  total
}) {
  return (
    <div className="row border justify-content-center my-2 mx-1 py-2">
      <div className="col-12 col-sm-12 col-md-6 col-lg-4 my-1">
        <div className="d-flex justify-content-center">
          <span>Total: ₹ {total}</span>
        </div>
      </div>
    </div>
  );
}

export default Total;