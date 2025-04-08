import React from 'react'
import { useState, useEffect } from 'react';
import RecipesContainer from './components/RecipesContainer';
import RecipeDetail from './components/RecipeDetail';
import sampleMeals from './sampleMeals';

const App = () => {
  const recipe = sampleMeals[0]; // Ejemplo con la primera receta
  return (
    <div className="min-h-screen bg-gray-100">
      
      <main>
        <RecipesContainer meals={sampleMeals} />

        <RecipeDetail recipe={recipe} />

      </main>
    </div>
  );
};

export default App;