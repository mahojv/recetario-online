import React from 'react'

export default function Ingrediente({ medida, index, ingrediente }) {


  return (
    <>
      <li className='py-2'>{medida[1]} - {ingrediente[1]} </li>
      
    </>
  )
}
