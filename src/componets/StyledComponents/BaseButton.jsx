export default function BaseButton({ children, onClick, className }) {
  return (
    <button className={className || "base-button"} onClick={onClick}>
      {children}
    </button>
  );
}
