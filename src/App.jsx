import React from "react";
import RecipePage from "./pages/RecipePage";
import HomePage from "./pages/HomePage";
import { Routes, Route, Link } from "react-router";
import HeaderBar from "./components/HeaderBar";
import CategoryBar from "./components/CategoryBar";
import  Footer  from "./components/Footer";

export default function App() {
  return (
    <>

      <HeaderBar />
     

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorias" element={<CategoryBar />} />
        <Route path="/receta/:nombre?" element={<RecipePage />} />
       
       
      </Routes>

      <Footer/>

    </>
  );
}
