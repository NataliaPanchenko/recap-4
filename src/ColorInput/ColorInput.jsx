export default function ColorInput({ id, value, onChange }) {
  return (
    <div className="color-input">
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
