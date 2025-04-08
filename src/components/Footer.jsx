import React from 'react'

export default function Footer() {
  return (
    <footer className=' bg-[var(--color-grisClaro)] p-4 my-5'>

    <div className='flex justify-between items-center mx-10 '> 
        <img src="https://www.gourmet.cl/wp-content/themes/gourmet/img/logo-header.png" alt="Logo" className='shrink-0 '/>
        <ul className='text-white md:flex md:space-around'>
            <li className='px-3  '><a target='blank' href="https://miguelangelfuentesalvis.github.io/mp-miguel-fuentes/" className=' hover:text-[var(--color-rojoBotones)]'>Miguel Fuentes</a></li>
            <li className='px-3  '><a target='blank' href="https://eldersound.github.io/proyecto-1/" className='hover:text-[var(--color-rojoBotones)]'>Elder Cuases</a></li>
            <li className='px-3  '><a target='blank' href="https://mahojv.github.io/Portafolio-Web-para-Desarrollador-Frontend/" className='hover:text-[var(--color-rojoBotones)]'>Moises Javier</a></li>
            <li className='px-3  '><a target='blank' href="" className='hover:text-[var(--color-rojoBotones)]'>Luis Portugal</a></li>
        </ul>
        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="bg-[var(--color-rojoBotones)]  rounded-full  ">
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M15 9l-6 6" />
            <path d="M15 15v-6h-6" />
          </svg>
        </a>
    </div>
    </footer>
  )
}
