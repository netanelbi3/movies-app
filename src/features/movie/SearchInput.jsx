import React, { useState } from 'react'
import "./movie.css";

const SearchInput = ({filteredSearchForMovies}) => {
    const [serchValue,setSearchValue]= useState("")

    
    const handleInput = (e)=>{
    setSearchValue(e.target.value)
    filteredSearchForMovies(e.target.value) 
        
  }
  return (<>
    <div className="search-block">
        <input onChange={handleInput} type="text" placeholder="search by title" value={serchValue} />
      
      
      </div>
      </>
  )
}

export default SearchInput
