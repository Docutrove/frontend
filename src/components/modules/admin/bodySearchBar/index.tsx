import React from 'react'
import { SearchIcon } from '../../../../assets'
import './index.css'

const SearchBar: React.FC = () => {
  return (
    <div className="unique-search-bar">
      <input type="text" placeholder="Search..." />
      <i className="unique-search-icon">
        <img src={SearchIcon} alt="Search Icon" />
      </i>
    </div>
  )
}

export default SearchBar
