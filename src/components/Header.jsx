import { Link } from 'react-router';
import './header.css';

export function Header({ cartCount, searchQuery, setSearchQuery, theme, toggleTheme }) {
  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo" src="/images/logo.png" alt="Logo" />
        </Link>
      </div>

<Link to="/wishlist" className="wishlist">Wishlist</Link>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Arrow button toggles theme */}
        <button className="search-button" onClick={toggleTheme}>
          <img
            className="search-icon"
            src="/images/icons/search-icon.png"
            alt="Toggle Theme"
          />
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="/images/icons/cart-icon.png" alt="Cart" />
          {cartCount > 0 && <div className="cart-quantity">{cartCount}</div>}
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}
