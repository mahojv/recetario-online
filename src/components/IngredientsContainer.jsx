import React from 'react';
import Ingredientes from './Ingredientes';
import Preparacion from './Preparacion';

export default function IngredientsContainer({ recipe, ingredientes, medidas }) {
  // console.log(medidas)
  return (


    <section className='mt-5 max-w-6xl m-auto'>
      <h2 className='p-4 text-3xl text-[#474747]'>
        ¿Cómo hacer <span>Esta Receta?</span> </h2>
      <div className='md:flex md:justify-center md:space-x-1'>
        <Ingredientes
          recipe={recipe}
          ingredientes={ingredientes}
          medidas={medidas}
        />
        <Preparacion
          recipe={recipe}
          
           />
      </div>
    </section>

  )
}
