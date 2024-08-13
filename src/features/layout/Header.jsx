import "./layout.css";
import Navbar from "./Navbar";
const Header = ({filteredSearchForMovies}) => {
  return (
    <>
      <header className='header'>
        <h1>Movie Finder</h1>
      </header>
      <Navbar filteredSearchForMovies={filteredSearchForMovies} />
    </>
  );
};
export default Header;
