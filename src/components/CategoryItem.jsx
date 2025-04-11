import React from 'react'

export default function CategoryItem({category, setFilter}) {

  const handleClick = () => {
    setFilter(category.strCategory)
  }
  return (
    <div className="cursor-pointer w-26 h-30 md:w-40 shrink-0 md:h-46 bg-white text-[var(--color-rojoBotones)]
    shadow-[6px_6px_10px_rgba(180,180,180,0.1)] border border-gray-800 
    ring-1 ring-gray-500 rounded-md flex flex-col items-center justify-center 
    transition-all duration-300 hover:translate-y-1 hover:shadow-md 
    active:translate-y-1 active:shadow-md px-5" onClick={handleClick} value={category.strCategory}>
      <div className="w-15 h-15 md:w-25 md:h-25 overflow-hidden mt-2">
        <img src={category.strCategoryThumb} alt={category.strCategory} className='object-cover' />
      </div>
      <h2 className='md:text-2xl'>{category.strCategory}</h2>
    </div>
  )
}
