import React, { useState } from 'react'
import Ingrediente from './ingrediente'

export default function Ingredientes({ recipe, ingredientes, medidas }) {

  // console.log(ingredientes)






  return (
    <section className='border border-[#474747] md:w-1/2 m-5 p-4 max-w-[700px] '>

      <h2 className='flex justify-left space-x-1 gap-2 text-[#474747] underline tracking-wider p-4 mt-3 text-2xl'><img src="https://www.gourmet.cl/wp-content/themes/gourmet/img/icons/sombrero.png" alt="gormet" className='h-7 ' />I N G R E D I E N T E S</h2>
      <div>
        <ul className='text-[#474747] p-4 mt-0 list-disc ml-3'>


          {medidas.map((medida, i) => {
             
         
            
            let ingrediente = ingredientes[i]
            // console.log(ingrediente)


            return (
              <Ingrediente
              key={i}
              medida = {medida}
              index = {i}
              ingrediente= {ingrediente}
              
              />
            )

            
          })}





        </ul>

      </div>
    </section>

  )
}
