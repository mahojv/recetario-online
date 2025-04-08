import React from 'react';

// Componente individual de Card
const RecipeCard = ({ meal }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={meal.strMealThumb} 
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium text-center">{meal.strMeal}</h3>
      </div>
    </div>
  );
};

// Componente contenedor de los cards
const RecipesContainer = ({ meals }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default RecipesContainer;