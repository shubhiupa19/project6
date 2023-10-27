import { useState } from 'react'

import './App.css'
import RecipeSearch from './RecipeSearch'
import RecipeDetails from './RecipeDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <>
     <h1>Meal Database!</h1>
     <Router>
      <Routes>
        <Route path="/" element={<RecipeSearch />} />
        <Route path="/meal/:mealId" element={<RecipeDetails />} />
      </Routes>

     </Router>
    </>
  );
}

export default App;
