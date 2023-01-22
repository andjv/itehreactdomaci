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
    
  function addFavourite(id){
    items.forEach((p)=>{
      if(p.id===id){
        p.isFavourite = p.isFavourite + 1;
        setNumOfFavourites(numOfFavourites+1)
      }
    });
  }

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Pocetna addFavourite={addFavourite}/>} /> 
        <Route path='/kontakt' element={<Kontakt />} /> 
        <Route path='/omiljeno' element={<Favourites favourites={items} numOfFavourites={numOfFavourites}/>} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
