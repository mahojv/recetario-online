
import React from 'react'



import HomePage from './pages/HomePage'
import RecipePage from './pages/RecipePage';






export default function App() {
  return (
    <>

    <HeaderBar/>

<div className='flex flex-col grow'>


      <RecipePage/>

</div>
      
      <Footer/>



    </>
  );
}
