import { useState } from "react";
import "./heart.css";

function Heart({ itemId }) {
  const [hearts, setHearts] = useState([]);

  const giveHeart = (id) => {
    const newHearts = Array.from({ length: 5 }).map((_, i) => ({
      id: Date.now() + i
    }));
    setHearts(prev => [...prev, ...newHearts]);
    setTimeout(() => setHearts([]), 1000);
  };

  return (
    <div className="heart-container">
      <button className="heart-button" onClick={() => giveHeart(itemId)}>❤️</button>

      {hearts.map(h => (
        <span key={h.id} className="floating-heart">❤️</span>
      ))}
    </div>
  );
}

export default Heart;