export default function Checkbox({ checked, onChange }) {
  return (
    <label className="flex items-center text-sm">
      <input
        type="checkbox"
        name="agree"
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      I agree with terms & conditions
    </label>
  );
}
