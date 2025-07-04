export default function SubmitButton({ text }) {
  return (
    <button
      type="submit"
      className="w-full bg-orange-600 text-white py-3 rounded font-bold"
    >
      {text}
    </button>
  );
}
