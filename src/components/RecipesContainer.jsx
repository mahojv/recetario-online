import React from "react";
import { RecipeCard } from "./RecipeCard";

// Componente contenedor
export const RecipesContainer = ({ meals }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-grisClaro text-white titleFont p-4 shadow-md">
        <h1 className="text-2xl font-bold titleFont text-center">
          Recetario (Demo)
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default RecipesContainer;

