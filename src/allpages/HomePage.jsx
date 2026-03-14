import { NavLink } from 'react-router';
import './header.css' ;
import './HomePage.css' ;


export function HomePage() {
  return (
    <>

<title>Game Girl</title>

    <div className="header">
      <div className="left-section">
        <a href="/" className="header-link">
          <img className="logo"
            src="images/logo.png" />
          {/* <img className="mobile-logo"
            src="images/mobile-logo-white.png" /> */}
        </a>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <a className="orders-link header-link" href="/orders">

          <span className="orders-text">Orders</span>
        </a>

        {/* < NavLink className="cart-link header-link" to="checkout"> */}
          <a className="cart-link header-link" href="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </a>
      </div>
    </div>

    <div className="home-page">
      <div className="products-grid">
        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src="images/products/RE2RE.png" />
          </div>

          <div className="product-name limit-text-to-2-lines">
            Resident Evil 2 Remake
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src="images/ratings/rating-45.png" />
            <div className="product-rating-count link-primary">
              201
            </div>
          </div>

          <div className="product-price">
            $80
          </div>

          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>
</div>
          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>

        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src="images/products/RE3.jpg" />
          </div>

          <div className="product-name limit-text-to-2-lines">
            Resident Evil 3 Remake
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src="images/ratings/rating-40.png" />
            <div className="product-rating-count link-primary">
              147
            </div>
          </div>

          <div className="product-price">
            $69.99
          </div>

          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>

        <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src="images/products/RE4OG.jpg" />
          </div>

          <div className="product-name limit-text-to-2-lines">
            Resident Evil 4
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src="images/ratings/rating-45.png" />
            <div className="product-rating-count link-primary">
              467
            </div>
          </div>

          <div className="product-price">
            $39.99
          </div>

          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
}