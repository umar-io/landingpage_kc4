const Button = ({onClick, children, type, disabled, className, ...props}) => {
  return (
    <button
    type={type}
    className={`button ${className}`}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
  )
}

export default Button