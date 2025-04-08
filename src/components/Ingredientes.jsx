import React from 'react'

export default function Ingredientes() {
  return (
   <section className='border border-[#474747] md:w-1/2 m-5 p-4 max-w-[700px] '>
   
        <h2 className='flex justify-left space-x-1 gap-2 text-[#474747] underline tracking-wider p-4 mt-3 text-2xl'><img src="https://www.gourmet.cl/wp-content/themes/gourmet/img/icons/sombrero.png" alt="gormet" className='h-7 '/>I N  G R E D I E N T E S</h2>
        <div>
            <ul className='text-[#474747] p-4 mt-0 list-disc ml-3'>
                <li className='py-2'>450g de mantequilla de maní</li>
                <li className='py-2'>400g de azúcar granulada y un poco más para cubrir</li>
                <li className='py-2'>3 huevos</li>
                <li className='py-2'>1 cdta de Esencia de Vainilla Gourmet</li>
                <li className='py-2'>1 pizca de Sal de Mar Gourmet</li>
                <li className='py-2'>3 cdtas de harina sin polvos de hornear</li>
            </ul>
      
        </div>
    </section>
   
  )
}
