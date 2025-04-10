import React from 'react'
import IngredientsContainer from '../components/IngredientsContainer'
import {RecipeDetail} from '../components/RecipeDetail'
import {sampleMeals} from '../sampleMeals';
import useData from "../hooks/setData";

//Se requiere enviar el string de la receta dentro del arrar de la categoria proyectada para modificar el contenido
export default function RecipePage({}) {
  // const meals = sampleMeals[0];

  let receta = "Tuna Nicoise"
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${receta}`
  const {loading, error, response} = useData(url)
  // console.log(response)

  if (loading) {
    return (
    <p className="text-center text-gray-500 mt-10">Cargando receta...</p>
    )
  }


  if (error || !response || !response.meals || response.meals.length === 0) {
    return (
    <p className="text-center text-red-500 mt-10">Error al cargar los datos de la receta.</p>
  )
  }

  

  const apiMeals = response?.meals[0] || []




  const miObjeto = response?.meals?.[ 0 ] || {} 
  const ingredientes = Object.entries(miObjeto)
  ?.filter(([ key, value ]) => key.includes("strIngredient") && value);
  const medidas = Object.entries(miObjeto)
  ?.filter(([ key, value ]) => key.includes("strMeasure") && value); 


  // console.log(ingredientes)
  // console.log(medidas)


  return (
    <>
    <main className='my-15'>

          <section >
                 
              <RecipeDetail
              key={apiMeals.idMeal}
               recipe={apiMeals}

               />
      
              </section>
              <IngredientsContainer
              key={apiMeals.idMeal}
              recipe={apiMeals}
              ingredientes ={ ingredientes}
              medidas={medidas}
              
              />
    </main>
     
    </>
  )
}
