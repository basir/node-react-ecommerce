import React from 'react';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <div class="grid-container">
      <header class="header">
        <div class="brand">
          <button onClick={openMenu}>
            &#9776;
        </button>
          <a href="index.html">amazona</a>
        </div>
        <div class="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside class="sidebar">
        <h3>Shopping Categories</h3>
        <button class="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>

          <li>
            <a href="index.html">Shirts</a>
          </li>

        </ul>
      </aside>
      <main class="main">
        <div class="content">
          <ul class="products">
            <li>
              <div class="product">
                <img class="product-image" src="/images/d1.jpg" alt="product" />
                <div class="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div class="product-brand">Nike</div>
                <div class="product-price">$60</div>
                <div class="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product">
                <img class="product-image" src="/images/d1.jpg" alt="product" />
                <div class="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div class="product-brand">Nike</div>
                <div class="product-price">$60</div>
                <div class="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product">
                <img class="product-image" src="/images/d1.jpg" alt="product" />
                <div class="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div class="product-brand">Nike</div>
                <div class="product-price">$60</div>
                <div class="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product">
                <img class="product-image" src="/images/d1.jpg" alt="product" />
                <div class="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div class="product-brand">Nike</div>
                <div class="product-price">$60</div>
                <div class="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product">
                <img class="product-image" src="/images/d1.jpg" alt="product" />
                <div class="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div class="product-brand">Nike</div>
                <div class="product-price">$60</div>
                <div class="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div class="product">
                <img class="product-image" src="/images/d1.jpg" alt="product" />
                <div class="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div class="product-brand">Nike</div>
                <div class="product-price">$60</div>
                <div class="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>

          </ul>
        </div>

      </main>
      <footer class="footer">
        All right reserved.
    </footer>
    </div>
  );
}

export default App;
