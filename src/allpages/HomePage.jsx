import React, { useState } from "react";
import { Header } from "../components/Header.jsx";
import { products } from "../data/products.js";
import "./HomePage.css";
import LeonPopup from "./LeonPopup";

export function HomePage({ cart, setCart, notify, theme, toggleTheme }) {
  const [quantities, setQuantities] = useState({});
  const [sortOption, setSortOption] = useState("default");
  const [minRating, setMinRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showLeon, setShowLeon] = useState(false); // popup state

  const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleQuantityChange = (productId, value) => {
    setQuantities((prev) => ({ ...prev, [productId]: Number(value) }));
  };

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.priceCents / 100,
          image: product.image,
          quantity: quantity,
        },
      ];
    });

    notify();

    // Trigger Leon popup for 2.5 seconds
    setShowLeon(true);
    setTimeout(() => setShowLeon(false), 2500);
  };

  // Filter products based on search query
  const queryWords = searchQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);
  let visibleProducts = products.filter((product) => {
    const keywordsArray = Array.isArray(product.keywords) ? product.keywords : [];
    const text = `${product.name || ""} ${keywordsArray.join(" ")}`.toLowerCase();
    return queryWords.every((word) => text.includes(word));
  });

  visibleProducts = visibleProducts.filter((product) => product.rating.stars >= minRating);

  if (sortOption === "price-low-high") visibleProducts.sort((a, b) => a.priceCents - b.priceCents);
  if (sortOption === "price-high-low") visibleProducts.sort((a, b) => b.priceCents - a.priceCents);
  if (sortOption === "rating") visibleProducts.sort((a, b) => b.rating.stars - a.rating.stars);

  return (
    <>
      <Header
        cartCount={totalItemsInCart}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Leon popup */}
      <LeonPopup trigger={showLeon} />

      <div className="home-page">
        <div className="controls">
          <label>Sort:</label>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low → High</option>
            <option value="price-high-low">Price: High → Low</option>
            <option value="rating">Best Rating</option>
          </select>

          <label>Rating:</label>
          <select value={minRating} onChange={(e) => setMinRating(Number(e.target.value))}>
            <option value="0">All</option>
            <option value="5">5★</option>
            <option value="4">4★</option>
            <option value="3">3★</option>
            <option value="2">2★</option>
          </select>
        </div>

        <div className="products-grid">
          {visibleProducts.map((product) => (
            <div key={product.id} className="product-container">
              <div className="product-image-container">
                <img className="product-image" src={product.image} alt={product.name} />
              </div>

              <div className="product-name limit-text-to-2-lines">{product.name}</div>

              <div className="product-rating-container">
                <img
                  className="product-rating-stars"
                  src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                  alt={`${product.rating.stars} stars`}
                />
                <div className="product-rating-count link-primary">{product.rating.count}</div>
              </div>

              <div className="product-price">${(product.priceCents / 100).toFixed(2)}</div>

              <div className="product-quantity-wrapper">
                <select
                  value={quantities[product.id] || 1}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>

              <button
                className="add-to-cart-button button-primary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}