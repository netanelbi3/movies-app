import React from "react";
import { Link } from "react-router-dom";

const ItemMovie = ({ poster, title, year, id }) => {
  
  return (
    <Link to={`/${id}`} className="card">
      <div>
        <img src={poster} alt={title} />
        <h2>{title}</h2>
        <h3>{year}</h3>
      </div>
    </Link>
  );
};

export default ItemMovie;
