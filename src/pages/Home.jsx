import MovieCard from "../components/MovieCard"
import {useState,useEffect} from "react"

import { searchMovies,getPopularMovies } from "../services/api";
import "../css/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const [movies ,setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try{
               const popularMovies = await getPopularMovies();
                setMovies(popularMovies); 
            }catch(err){
                console.error("Error fetching movies:", err);
                setError("Failed to fetch movies. Please try again later.");
            }finally {
                setLoading(false);
            }
            
        }
        fetchMovies();
    }, []);




    const handleSearch = async (e) => {
        e.preventDefault();

        if(!searchQuery.trim()) return
        if(loading) return // Prevent multiple submissions while loading

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null); // Clear any previous errors
        }catch (error) {
            console.error("Error searching movies:", error);
            setError("Failed to fetch movies. Please try again later.");
        } finally {
            setLoading(false);
        }

        //setSearchQuery(""); // Clear the search input after submission
    };

    return (
    
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error">{error}</div>}

        {loading ? (<div className="loading">Loading movies...</div>) : 
            ( <div className="container bg-white text-white py-4">
                    <div className="row gx-4 gy-5">
                        {movies.map((movie) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                        ))}
                    </div>
            </div>
        )        
        
        }
       
    </div>
    );

}


export default Home;