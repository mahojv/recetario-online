import React from 'react'
import { useState, useEffect } from 'react';
import RecipesContainer from './components/RecipeCard';
import sampleMeals from './sampleMeals';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-grisClaro text-white titleFont p-4 shadow-md">
        <h1 className="text-2xl font-bold titleFont text-center">Recetario (Demo)</h1>
      </header>
      <main>
        <RecipesContainer meals={sampleMeals} />
      </main>
    </div>
  );
};

export default App;