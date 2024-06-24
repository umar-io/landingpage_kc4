const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = "",
  className = "",
}) => {
  const baseStyles =
    "border font-bold  focus:outline-none focus:ring-2 focus:ring-opacity-50";

  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 focus:ring-slate-500 text-white",
    secondary:
      "bg-gray-200 hover:invert focus:ring-gray-500 text-gray-800",
    danger: "bg-red-500 hover:bg-red-600 focus:ring-red-500 text-white",
  };

  const sizes = {
    small: "px-2 py-1 text-sm",
    medium: "px-2 py-2",
    large: "px-6 py-3 text-lg",
  };

  const buttonStyles = `
  ${baseStyles}
  ${variants[variant]}
  ${sizes[size]}
  ${disabled ? "opacity-50 cursor-not-allowed bg-indigo" : ""}
  ${className}
`;
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
