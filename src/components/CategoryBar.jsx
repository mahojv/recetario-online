import React from 'react'
import CategoryItem from './CategoryItem'
// import placeholder from './placeholder.jpg';


export default function CategoryBar() {
    return (
        <section className='m-5'>
  <div className="flex justify-center items-center max-w-[1200px] mx-auto bg-[var(--color-grisClaro)] py-1 px-4 rounded-md">
    
    <div className="w-full h-full py-4 overflow-x-auto inline-flex gap-3 font-bold ">
      
      <CategoryItem/>
      <CategoryItem/>
      <CategoryItem/>
      <CategoryItem/>
      <CategoryItem/>
      <CategoryItem/>
      <CategoryItem/>
      
        
      
    </div>
  </div>
</section>
    )
}
