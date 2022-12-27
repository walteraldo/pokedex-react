import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Items, Pokemon, Pokemons } from './pages/Index';




function App() {

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/pokemons/:name' element={<Pokemon />} />
          <Route path='/items' element={<Items />} />
          <Route path='/pokemons' element={<Pokemons />} />
          <Route path='/' element={<Pokemons />} />

          
        </Routes>
      </div>
    </Router>
  )
}

export default App
