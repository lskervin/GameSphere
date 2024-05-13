import React from 'react'

function Search({ setSearch, search }) {
  
  function handleSearch(e) {
    setSearch(e.target.value)
  }
  
  return (
    <div className='search'>
      <input 
        style={{
          width: "1000px",
          height: "40px",
          borderColor: "black",
          padding: "10px",
          color: "black",
          borderRadius: "10px",
        }}
        placeholder="Search for a game by title"
        type="text"
        onChange={handleSearch}
        value={search}
      ></input>
    </div>
  )
}

export default Search