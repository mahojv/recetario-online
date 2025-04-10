import React from "react";
import CategoryItem from "./CategoryItem";
import setData from "../hooks/setData";
// import placeholder from './placeholder.jpg';

export default function CategoryBar() {
  const { loading, error, response } = setData(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const categories = response?.categories || [];

  return (
    <section className="m-5">
      <div className="flex justify-center items-center max-w-[1200px] mx-auto bg-[var(--color-grisClaro)] py-1 px-4 rounded-md">
        <div className="w-full h-full py-4 overflow-x-auto inline-flex gap-3 font-bold ">
          {loading && <p>Cargando categorías...</p>}
          {error && <p className="text-red-500">Error al cargar categorías</p>}

          {categories.map((category) => (
            <CategoryItem key={category.idCategory} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
