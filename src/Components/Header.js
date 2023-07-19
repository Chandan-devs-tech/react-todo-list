import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="todoHeader">
      <h1 className="todoHeading">todos</h1>
      <p className="todoPara">Items will persist in the browser&rsquo;s local storage</p>
    </div>
  );
}

export default Header;
