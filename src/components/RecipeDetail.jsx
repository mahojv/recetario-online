import React, { useState } from 'react';
import VideoComponent from './VideoComponent';

export const RecipeDetail = ({ recipe }) => {
  const youtubeId = recipe.strYoutube ? recipe.strYoutube.split('v=')[1] : 'hiUDb8_AEG8';
  console.log(recipe)

  const [videoToggle, setVideoToggle] = useState(false)
  function toggleVideo(e) {

    setVideoToggle(!videoToggle)
    
  }

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white  px-auto ">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg flex justify-center">

          

          
         


           { videoToggle ? 
            (<VideoComponent
            youtubeId = {youtubeId}
            recipe = {recipe}  
            />)  : 
            (<figure className='sm:w-[300px] md:w-full md:max-w-[400px]'>
              <img src={recipe.strMealThumb} alt="" />
            </figure>)  }

          </div>
        </div>

        {/* Columna derecha - Información */}
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-3xl font-bold titleFont mb-2 text-center">{recipe.strMeal}</h1>
          
          <div className="flex flex-col space-y-2 mb-6 text-center md:text-left">
            <div>
              <span className="font-semibold">CATEGORÍA: </span>
              <span className="text-grisClaro">{recipe.strCategory || 'No especificada'}</span>
            </div>
            <div>
              <span className="font-semibold">PAÍS DE ORIGEN: </span>
              <span className="text-grisClaro">{recipe.strArea || 'No especificado'}</span>
            </div>
          </div>

          {/* Botón único */}
          <button className="mt-auto flex justify-center " onClick={toggleVideo}>
            <p 
             
              className="inline-block px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              VER VIDEO COMPLETO
            </p>
          </button>
        </div>
      </div>
    </div> 
  );
};

export default RecipeDetail;