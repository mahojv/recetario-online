import React from 'react'
import { useState, useEffect } from 'react';
import RecipesContainer from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';
import sampleMeals from './sampleMeals';

const App = () => {
  const recipe = sampleMeals[0]; // Ejemplo con la primera receta
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-grisClaro text-white titleFont p-4 shadow-md">
        <h1 className="text-2xl font-bold titleFont text-center">Recetario (Demo)</h1>
      </header>
      <main>
        <RecipesContainer meals={sampleMeals} />

        <RecipeDetail recipe={recipe} />

      </main>
    </div>
  );
};

export default App;