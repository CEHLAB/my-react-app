import {useEffect,useState} from 'react'
import SearchIcon from './search.svg'
import './App.css'
import MovieCard from './MovieCard'
//e1a517b6  

const API_URL ='http://www.omdbapi.com/?apikey=e1a517b6'
const App = ()  => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies('batman');
  },[]);
  return (
    <div className="App">
      <h1>Movie App</h1>

      <div className="search">
        <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <img src={SearchIcon} alt="Search" onClick={() => searchMovies(searchTerm)}/>
      </div>
      {
        movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) =>
              <MovieCard movie={movie}/>
            )}
          </div>
        ) :
        (
          <div className="empty"><h2>No movies found</h2></div>
        )
      }
      
    </div>
  );
}

export default App
