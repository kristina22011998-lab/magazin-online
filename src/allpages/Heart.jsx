import { useState } from "react";
import "./heart.css";

function Heart() {
  const [hearts, setHearts] = useState([]);

  const giveHeart = (e) => {
    // get button position
    const rect = e.target.getBoundingClientRect();

    // create multiple hearts with random x offsets
    const newHearts = Array.from({ length: 5 }).map((_, i) => ({
      id: Date.now() + i,
      x: rect.left + rect.width / 2,
      y: rect.top
    }));

    setHearts(prev => [...prev, ...newHearts]);

    // remove hearts after animation
    setTimeout(() => setHearts([]), 1000);
  };

  return (
    <>
      <button className="heart-button" onClick={giveHeart}>❤️</button>

      {hearts.map(h => (
        <span
          key={h.id}
          className="floating-heart"
          style={{ left: h.x, top: h.y }}
        >
          ❤️
        </span>
      ))}
    </>
  );
}

export default Heart;