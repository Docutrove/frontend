import React from 'react'
import { SearchIcon } from '../../../../assets'
//import './SearchBar.scss'

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <i className="search-icon">
        <img src={SearchIcon} alt="Search Icon" />
      </i>
    </div>
  )
}

export default SearchBar
