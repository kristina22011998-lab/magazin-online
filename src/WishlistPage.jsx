import React, { useRef } from "react";
import { useWishlistStore } from "./useWishlistStore";
import "./WishlistPage.css";

export function WishlistPage({ cart, setCart, notify }) {
  const { savedGames, removeFromWishlist } = useWishlistStore();
  const audioRef = useRef(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="wishlist-page">
      {/* Floating spinning disk always visible */}
      <div className="floating-disk" onClick={playMusic}>
        <img src="images/products/disk2.png" alt="decorative disk" />
      </div>
      <audio ref={audioRef} src="re4.mp3" preload="auto" />

      {savedGames.length === 0 ? (
        <div className="wishlist-empty">
          <h1 className="page-title">
            <img src="images/products/disks.png" className="emoji-disk" alt="disk" />
            Discover, Play, Repeat!
            <img src="images/products/disks.png" className="emoji-disk" alt="disk" />
          </h1>
          <h3>Your wishlist is empty.</h3>
        </div>
      ) : (
        <div>
          <h1 className="page-title">Your Wishlist</h1>
          <div className="wishlist-grid">
            {savedGames.map((game) => (
              <div key={game.id} className="order-details-grid">
                <div className="product-image-container">
                  <img src={game.image} alt={game.name} />
                </div>

                <div>
                  <div className="product-name">{game.name}</div>
                  <div className="product-price">
                    ${(game.priceCents / 100).toFixed(2)}
                  </div>
                </div>

                <div className="product-actions">
                  <button
                    className="remove-button"
                    onClick={() => removeFromWishlist(game.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="add-to-cart-button"
                    onClick={() => {
                      setCart((prev) => {
                        const existing = prev.find((item) => item.id === game.id);
                        if (existing) {
                          return prev.map((item) =>
                            item.id === game.id
                              ? { ...item, quantity: item.quantity + 1 }
                              : item
                          );
                        }
                        return [
                          ...prev,
                          {
                            id: game.id,
                            name: game.name,
                            price: game.priceCents / 100,
                            image: game.image,
                            quantity: 1,
                          },
                        ];
                      });
                      notify();
                    }}
                  >
                   Buy now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}