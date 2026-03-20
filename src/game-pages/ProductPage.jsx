import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { products } from "../products.js";
import "./ProductPage.css";

export function ProductPage({ cart, setCart, theme, toggleTheme, notify }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  if (!product) {
    return (
      <>
        <Header
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          searchQuery=""
          setSearchQuery={() => {}}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <div className="product-page">
          <h2>Product not found 😢</h2>
        </div>
      </>
    );
  }

  const handleAddToCart = () => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    if (notify) notify();
  };

  return (
    <>
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        searchQuery=""
        setSearchQuery={() => {}}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Featured Image */}
 <div className="product-page-container">

  {/* Featured Image */}
  {product.featuredImage && (
    <div className="product-featured-image">
      <img
        src={product.featuredImage}
        alt={`${product.name} featured`}
      />
    </div>
  )}
        {/* Top section: Cover + Description */}
        <div className="product-main">
          <div className="product-description-section">
            <h1 className="product-title">{product.name}</h1>

            {/* Rating */}
            <div className="product-rating-container">
              <img
                className="product-rating-stars"
                src={`/images/ratings/rating-${product.rating.stars * 10}.png`}
                alt={`${product.rating.stars} stars`}
              />
              <div className="product-rating-count link-primary">
                {product.rating.count}
              </div>
            </div>

            <div className="product-description">{product.description}</div>
          </div>

          <div className="product-cover-section">
            <img
              className="product-cover"
              src={product.image}
              alt={product.name}
            />
          </div>
        </div>

        {/* Video section */}
        {product.youtube && (
          <div className="product-video">
            <iframe
              width="100%"
              height="480"
              src={product.youtube}
              title={product.name + " trailer"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Screenshots */}
        {product.screenshots && (
          <div className="product-screenshots">
            {product.screenshots.map((shot, idx) => (
              <img
                key={idx}
                src={shot}
                alt={`${product.name} screenshot ${idx + 1}`}
                onClick={() => setLightbox({ open: true, index: idx })}
              />
            ))}
          </div>
        )}

        {/* Lightbox */}
        {lightbox.open && (
          <div
            className="lightbox"
            onClick={() => setLightbox({ open: false, index: 0 })}
          >
            <img src={product.screenshots[lightbox.index]} alt="full view" />
          </div>
        )}

        {/* Additional Text Section */}
        <div className="product-extra-text">
          {product.extraText && <p>{product.extraText}</p>}
        </div>

        {/* Add to Cart Button */}
        <div className="add-to-cart-container">
          <button
            className="add-to-cart-btn button-primary"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}