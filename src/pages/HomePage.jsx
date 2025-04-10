import React, { use, useEffect } from 'react'
import CategoryBar from '../components/CategoryBar'
import HeaderBar from '../components/HeaderBar'
import BarraDeFiltros from '../components/BarraDeFiltros'
import RecipesContainer from '../components/RecipesContainer'
// import sampleMeals from '../sampleMeals'
import setData from '../hooks/setData'

export default function HomePage() {
    // const meals = sampleMeals;
    const { loading, error, response } = setData('https://www.themealdb.com/api/json/v1/1/search.php?s=');


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
                    {/* {loading && <p>Cargando recetas...</p>}
                    {error && <p className="text-red-500">Error: {error}.</p>} */}

                    <RecipesContainer meals={response?.meals} />



                </div>


            </div>

        </>
    )
}
