/* eslint-disable @typescript-eslint/no-explicit-any */
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

export default Select;
