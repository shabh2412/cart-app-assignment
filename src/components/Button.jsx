function Button ({
  onClick,
  children,
  disabled
}) {
  return (
    <button onClick={onClick} disabled={disabled} className="btn btn-outline-primary">
      {children}
    </button>
  );
}

export default Button;