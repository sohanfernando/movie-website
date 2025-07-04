const AuthInput = ({ label, type, name, value, onChange, required, id }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm mb-1">{label}</label>
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
    />
  </div>
);

export default AuthInput;
