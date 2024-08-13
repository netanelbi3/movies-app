import React from 'react'
import "./movie.css";

const SearchInput = ({filteredSearchForMovies}) => {

    
    const handleInput = (e)=>{
//    setSearchValue(e.target.parentElement.children[0].value ) 
    filteredSearchForMovies(e.target.value) 
        
  }
  return (<>
    <div className="search-block">
        <input onChange={handleInput} type="text" placeholder="search by title"  />
      
      
      </div>
      </>
  )
}

export default SearchInput
