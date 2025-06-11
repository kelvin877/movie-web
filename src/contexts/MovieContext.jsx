import { createContext,useState,useContext,useEffect } from "react";    

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);


    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);


    const addToFavorites = (movie) => {
        if (!favorites.some((fav) => fav.id === movie.id)) {
            setFavorites((prevFavorites) => [...prevFavorites, movie]);
        }
    }

    const removeFromFavorites = (movieId) => {
        setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some((fav) => fav.id === movieId);
    }


    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    };

    return <MovieContext.Provider value={value}>
        {children}  
        </MovieContext.Provider>
}