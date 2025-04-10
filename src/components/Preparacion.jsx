import React from "react";

import RecipeInstruction from "./RecipeInstruction";

export default function Preparacion({ recipe }) {
  console.log(recipe)
  // {recipe.strInstructions}
  let instRecipe = recipe.strInstructions.split(".")  || [];
  console.log(instRecipe)
  console.log(instRecipe[-1])

  if (instRecipe.at(-1)?.trim() === "") {
    instRecipe = instRecipe.slice(0, -1);
  }


  

  return (
    <section className="border border-[#474747] md:w-1/2 m-5 p-4 max-w-[700px]">
      <h2 className="flex justify-left space-x-1 gap-2 text-[#474747] underline tracking-wider p-4 mt-3 text-2xl">
        <img
          src="https://www.gourmet.cl/wp-content/themes/gourmet/img/icons/cubierto.png"
          className="h-7"
        ></img>

        Preparación de {recipe.strMeal}
      </h2>

      <ul className='text-[#474747] p-4 mt-0 list-disc ml-3'>
        <li className=''>
          {
            instRecipe.map((inst) => {


              return (
                <RecipeInstruction 
                inst={inst}
                />
              )
            })
          }


        </li>
      </ul>
    </section>
  );
}
