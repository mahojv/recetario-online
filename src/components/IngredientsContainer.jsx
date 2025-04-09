import React from 'react';
import Ingredientes from './Ingredientes';
import Preparacion from './Preparacion';

export default function IngredientsContainer() {
  return (
    <main>
        <section className='h-[300px]'>
            <div className='h-full w-full m-auto flex justify-center'>
            <h1 className='text-9xl text-center m-auto'>PLACE HOLDER</h1> 
            </div>
            

        </section>
    <section className='mt-5'>
      <h2 className='p-4 text-3xl text-[#474747]'>
      ¿Cómo hacer <span>Esta Receta?</span> </h2>
      <div className='flex justify-center space-x-1'>
        <Ingredientes/>
        <Preparacion/>
      </div>
    </section>
    </main>
  )
}
