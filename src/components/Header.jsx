import { Link } from 'react-router';
import './header.css';

export function Header({ cartCount, searchQuery, setSearchQuery }) {
  
  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo" src="images/logo.png" />
        
        </Link>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} />

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" />
         
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </Link>

        {/* < NavLink className="cart-link header-link" to="checkout"> */}
        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          {cartCount > 0 && (
            <div className="cart-quantity">{cartCount}</div>
            )}
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}
