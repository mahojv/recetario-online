import React from 'react'
import { useState, useEffect } from 'react';
import RecipesContainer from './components/RecipeCard';
import sampleMeals from './sampleMeals';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">Recetario (Demo)</h1>
      </header>
      <main>
        <RecipesContainer meals={sampleMeals} />
      </main>
    </div>
  );
};

export default App;