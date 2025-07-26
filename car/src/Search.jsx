import React from 'react'
import PropTypes from 'prop-types'

function Search({searchVal, onSearch}) {
  return (
    <>
    <form >
      <input type="text" 
      value = {searchVal}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search Cars..." 
      className=" border-1 border-gray-300 rounded-md w-full text-[18px] p-2  mb-6" />
    </form>
    
    </>
  )
}


Search.propTypes = {

  searchVal:PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
}
export default Search