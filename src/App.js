import Header from "./features/layout/Header";
import movies from "./movies";
import "./App.css";
import MovieList from "./features/movie/MovieList";
const App = () => {
  return (
    <div className='App'>
      <Header />
      <main className='container'>
        <MovieList movies={movies} />
      </main>
    </div>
  );
};

export default App;
