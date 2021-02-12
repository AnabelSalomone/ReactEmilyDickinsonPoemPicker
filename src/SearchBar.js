import React from 'react'

const SearchBar = ({filterTitles}) => {
    return (
      <div className="searchbar-conteiner">
        <input
          type="text"
          placeholder="Search for a title"
          onChange={(e) => filterTitles(e.target.value)}
        />
      </div>
    );
}

export default SearchBar
