const AuthInput = ({ label, type, name, value, onChange, required, id }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition-all duration-200 placeholder-gray-400"
      placeholder={`Enter your ${label.toLowerCase()}`}
    />
  </div>
);

export default AuthInput;
