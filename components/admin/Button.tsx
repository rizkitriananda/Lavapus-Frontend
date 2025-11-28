/* eslint-disable @typescript-eslint/no-explicit-any */
const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: any) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "hover:bg-gray-100 text-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({ className = "", ...props }: any) => (
  <input
    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

const Select = ({ options, className = "", ...props }: any) => (
  <select
    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${className}`}
    {...props}
  >
    {options.map((opt: any) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

export default Button;
