import React from "react";
import "./movie.css";
import ItemMovie from "./ItemMovie";
const MovieList = ({ movies }) => {
  return (
    <div className='row'>
      {movies.map((movie) => (
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
