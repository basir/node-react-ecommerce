import React from 'react';


function Header(openMenu,userInfo) {

  <header className="header">
    <div className="brand">
      <button onClick={openMenu}>&#9776;</button>
      <Link to="/">amazona</Link>
    </div>
    <div className="header-links">
      <a href="cart.html">Cart</a>
      {userInfo ? (
        <Link to="/profile">{userInfo.name}</Link>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
      {userInfo && userInfo.isAdmin && (
        <div className="dropdown">
          <a href="#">Admin</a>
          <ul className="dropdown-content">
            <li>
              <Link to="/orders">Orders</Link>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  </header>

}

export default App;


