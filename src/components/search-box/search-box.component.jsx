import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, searchField, setSearchField }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={(e) => {
        setSearchField(e.target.value);
      }}
      value={searchField}
    />
  );
};
