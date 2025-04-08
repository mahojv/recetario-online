import React from 'react'

export default function CategoryItem() {
  return (
    <div className=" w-24 shrink-0 h-30 bg-white text-[var(--color-rojoBotones)]
    shadow-[6px_6px_10px_rgba(180,180,180,0.1)] border border-gray-800 
    ring-1 ring-gray-500 rounded-md flex flex-col items-center justify-center 
    transition-all duration-300 hover:translate-y-1 hover:shadow-md 
    active:translate-y-1 active:shadow-md px-5">
      <div className="w-15 h-15 overflow-hidden mt-2">
        <img src="https://hips.hearstapps.com/hmg-prod/images/air-fryer-squash-soup-1658251143.jpg?crop=0.668xw:1.00xh;0.238xw,0&resize=980:*" alt="Imagen" className='object-cover' />
      </div>
      <h2>Category Name</h2>
    </div>
  )
}
