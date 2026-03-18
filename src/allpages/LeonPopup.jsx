import "./LeonPopup.css";

export default function LeonPopup({ trigger }) {
  if (!trigger) return null;

  return (
    <div className="leon-container">
      <img
        src="/re4.png"   // public folder path
        className="leon-image"
        alt="Leon Kennedy"
      />
      <div className="leon-text">Women… story of my life</div>
    </div>
  );
}