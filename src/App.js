import './App.css';
import NavBar from './components/NavBar';
import Pocetna from './pages/Pocetna';
import Kontakt from './pages/Kontakt';
import Favourites from './pages/Favourites';
import items from './data'
import { useState } from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom'


function App() {
  const [numOfFavourites, setNumOfFavourites] = useState(0);
    

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Pocetna />} /> 
        <Route path='/kontakt' element={<Kontakt />} /> 
        <Route path='/omiljeno' element={<Favourites favourites={items} numOfFavourites={numOfFavourites}/>} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
