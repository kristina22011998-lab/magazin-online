import { NavLink } from 'react-router';
import { Header } from '../components/Header'
import './HomePage.css' ;


export function HomePage() {
  return (
    <>
    <Header />
    
<title>Game Girl</title>



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