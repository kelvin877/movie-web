import './css/App.css'
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';


function App() {
  
  return (
    
      <MovieProvider>
          <NavBar/>
        <main className="main-content" style={{ backgroundColor: 'black' }}>
            <Routes>  
                <Route path="/movie-web"  element={<Home />} />
                <Route path="/movie-web/favorites" element={<Favorites />} />
                
            </Routes>
        </main>
      </MovieProvider>
    
  );
}






export default App
