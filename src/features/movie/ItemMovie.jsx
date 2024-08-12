import React from "react";

const ItemMovie = ({ poster, title, year, id }) => {
  return (
    <div className='card'>
      <img src={poster} alt={title} />
      <h2>{title}</h2>
      <h3>{year}</h3>
    </div>
  );
};

export default ItemMovie;
