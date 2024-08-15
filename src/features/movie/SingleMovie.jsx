import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if(localStorage.getItem('movie')){
      const movie = JSON.parse(localStorage.getItem("movie"));      
      if (movie.imdbID === id) setMovie(movie);
      else{
        const fetchMovie = async () => {
          const url = `https://www.omdbapi.com/?i=${id}&apikey=e88d8bda`;
          try {
            const { data } = await axios.get(url);
            console.log(data);
            setMovie(data);
            localStorage.setItem("movie", JSON.stringify(data));
          } catch (error) {
            console.error("Error fetching movie:", error);
          }
        };
        fetchMovie();
      }
    }else{const fetchMovie = async () => {
      const url = `https://www.omdbapi.com/?i=${id}&apikey=e88d8bda`;
      try {
        const { data } = await axios.get(url);
        console.log(data);
        setMovie(data);
        localStorage.setItem("movie", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };
    fetchMovie();}
    
  }, [id]);

  return (
    <div>
      <div>
        <img src={movie.Poster} alt={movie.Title}></img>
        <h1>{movie.Title}</h1>
        <h2>{movie.Year}</h2>
        <p>{movie.Plot}</p>
      </div>
      <Link to={"/"}>
        <button>Back To Main</button>
      </Link>
    </div>
  );
};

export default SingleMovie;
