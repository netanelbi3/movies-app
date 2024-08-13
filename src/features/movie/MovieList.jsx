import React from "react";
import "./movie.css";
import ItemMovie from "./ItemMovie";
const MovieList = ({ moviesArr }) => {
  return (
    <div className='row'>
      {moviesArr.map((movie) => (
        <ItemMovie
          key={movie.imdbID}
          poster={movie.Poster}
          title={movie.Title}
          year={movie.Year}
          id={movie.imdbID}
        />
      ))}
    </div>
  );
};

export default MovieList;
