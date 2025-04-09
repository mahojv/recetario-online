import React from 'react'
import CategoryBar from '../components/CategoryBar'
import HeaderBar from '../components/HeaderBar'
import BarraDeFiltros from '../components/BarraDeFiltros'
import RecipesContainer from '../components/RecipesContainer'
import { sampleMeals } from '../sampleMeals'

export default function HomePage() {
    const meals = sampleMeals;

    return (
        <>

            <HeaderBar />

            <div>
                <figure className>
                    <img src="https://www.gourmet.cl/wp-content/uploads/2025/04/Home-gourmet-desk.jpg" alt="" />
                </figure>

            </div>

            <CategoryBar />
            <div>

                <BarraDeFiltros />
                <div className=''>

                    <RecipesContainer meals={meals} />



                </div>


            </div>

        </>
    )
}
