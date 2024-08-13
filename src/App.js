import Header from "./features/layout/Header";
import movies from "./movies";
import "./App.css";
import MovieList from "./features/movie/MovieList";
import { useState } from "react";
const App = () => {
  const [moviesArr,setMoviesArr]= useState(movies)
  const filteredSearchForMovies = (movieTitle)=>{
    setMoviesArr(
    movies.filter((movie)=>(
      movie.Title.toLowerCase().includes(movieTitle.toLowerCase())
     ) ))
  }
    // const filteredSearchForMovies = (username) => {
    //   setMoviesArr(
    //     movies.filter((user) =>
    //       user.Title.toLowerCase().includes(username.toLowerCase())
    //     )
    //   );
    // };
  return (
    <div className="App">
      <Header filteredSearchForMovies={filteredSearchForMovies} />
      <main className="container">
        <MovieList moviesArr={moviesArr} />
      </main>
    </div>
  );
};

export default App;
