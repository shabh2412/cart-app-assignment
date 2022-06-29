function LabelPrice ({
  label, price
}) {
  return (
    <>
    <div className="col">
      <span>{label}</span>
    </div>
    <div className="col">
      <span>₹ {price}</span>
    </div>
    </>
  );
}

export default LabelPrice;