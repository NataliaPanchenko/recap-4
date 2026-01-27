export default function ColorInput({ id, value, onChange }) {
  return (
    <div className="color-input">
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        className={`${id}-input`}
        aria-label={`${id} input`}
        onChange={(e) => onChange(e.target.value)}
      />
      <input
        type="color"
        value={value}
        className={`${id}-color-input`}
        aria-label={`${id} color-input`}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
