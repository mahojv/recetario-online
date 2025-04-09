import React from 'react'
import IngredientsContainer from '../components/IngredientsContainer'
import {RecipeDetail} from '../components/RecipeDetail'
import {sampleMeals} from '../sampleMeals';

export default function RecipePage() {
  const meals = sampleMeals[0];
  return (
    <>
    <main className='my-15'>

          <section >
                 
              <RecipeDetail recipe={meals}/>
      
              </section>
              <IngredientsContainer/>
    </main>
     
    </>
  )
}
