import React from 'react';
import { Link } from 'react-router';

export const RecipeCard = ({ meal }) => {
  return (
    
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:shadow-xl">
      {/* Imagen de la receta */}
      <img 
        src={meal.strMealThumb} 
        alt={meal.strMeal}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      {/* Nombre de la receta */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-grisClaro text-center">{meal.strMeal}</h3>
      </div>
      
      {/* Overlay que aparece en hover */}
      <div className="absolute inset-0 bg-grisClaro/30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <p className="text-white text-sm mb-4 line-clamp-3">
          {meal.strInstructions?.substring(0, 100) || 'Deliciosa receta para preparar en casa...'}
        </p>
        <Link to={`/receta/${meal.strMeal}`}>
        {/* Botón */}
        <button className="px-4 py-2 bg-rojoBotones text-white rounded-md  hover:bg-red-500 transition-colors duration-200">
          Ver Receta
        </button>
        </Link>
        
      </div>
    </div>
   
  );
};

export default RecipeCard;

