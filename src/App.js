import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./features/layout/Header";
import "./App.css";
import MovieList from "./features/movie/MovieList";
import SingleMovie from "./features/movie/SingleMovie";
import axios from "axios";
//best project

const App = () => {
  const [moviesArr, setMoviesArr] = useState([]);

  // const filteredSearchForMovies = (movieTitle) => {
  //    const filtered= movies.filter(
  //       (movie) =>
          // movie.Title.toLowerCase().includes(movieTitle.toLowerCase()) ||
          // movie.Year.toLowerCase().includes(movieTitle.toLowerCase())
  //     )
  //     setMoviesArr(filtered);
  // };
  // const filteredSearchForMovies = (movieTitle) => {
  //    fetchMovies().then((data)=>{
  //     const filtered = data.filter(
  //       (movie =>
  //         movie.Title.toLowerCase().includes(movieTitle.toLowerCase()) ||
  //         movie.Year.toLowerCase().includes(movieTitle.toLowerCase()))
  //     );
  //     setMoviesArr(filtered)
  //    })
  // };
 const filteredSearchForMovies = (searchValue) => {
   console.log("Searching for:", searchValue);
     if (!searchValue.trim()) {
       fetchMovies().then((data) => {
         setMoviesArr(data);
       });
       return;
     }
   fetchMovies(searchValue).then((data) => {
     if (data) {
       setMoviesArr(data);
       localStorage.setItem("movies",JSON.stringify(data))
     }
   });
 };


  ///option 2 by alexe
  // const filteredSearchForMovies2 = (searchValue)=>{
  //   const filtered = movies.filter(movie=>movie.Title.toLowerCase().includes(searchValue.toLowerCase()))
  //   setMoviesArr(filtered)
  // }
  ////end option 2

  // const filteredSearchForMovies = (username) => {
  //   setMoviesArr(
  //     movies.filter((user) =>
  //       user.Title.toLowerCase().includes(username.toLowerCase())
  //     )
  //   );
  // };
  const fetchMovies = async (query='batman') => {

    const url = `https://omdbapi.com/?s=${query}&apikey=e88d8bda`;
    const {data} = await axios.get(url)
    console.log(data);
    
    return data.Search;
  };
  useEffect(()=>{
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setMoviesArr(movies);
    } else {
      fetchMovies().then((data) => setMoviesArr(data));
    }
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Header filteredSearchForMovies={filteredSearchForMovies} />
        <main className="container">
          <Routes>
            <Route path="/" element={<MovieList moviesArr={moviesArr} />} />
            <Route
              path="/:id"
              element={<SingleMovie moviesArr={moviesArr} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
