import React from 'react'
import "./search-box.scss"

const SearchBox = ({placeholder, handleChange}) => (
    <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handleChange}
    />
);

export default SearchBox;