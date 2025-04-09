
import React from 'react'

import HomePage from './pages/HomePage'
import HeaderBar from './components/HeaderBar';
import Footer from './components/Footer';



export default function App() {

  return (
    <>

    <HeaderBar/>

<div className='flex flex-col grow'>

      <HomePage/>

</div>
      
      <Footer/>



    </>
  );

}


