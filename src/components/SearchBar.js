import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search student..." />
      <span role="img" aria-label="search">🔍</span>
    </div>
  );
}

export default SearchBar;
