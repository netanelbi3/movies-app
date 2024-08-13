import SearchInput from "../movie/SearchInput";
import "./layout.css";
const Navbar = ({filteredSearchForMovies}) => {
  
  return (
    <nav className='main-menu'>
      <div className="container">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
      <SearchInput filteredSearchForMovies={filteredSearchForMovies}/>
      </div>
    </nav>
    
  );
};

export default Navbar;
