import React from "react";
import setData from "../hooks/setData";

export default function BarraDeFiltros() {
  const { loading, error, response } = setData(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  console.log(response);
  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          {/* Filtro por categoría */}
          <div className="flex-1 w-full">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Categoría
            </label>
            <select
              id="category"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Todas las categorías</option>
              {response?.categories?.map((category) => {
                return (
                  <option
                    key={category.idCategory}
                    value={category.strCategory}  
                  >
                    {" "}
                    {category.strCategory}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Botón de búsqueda */}

          <button className="bg-rojoBotones text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}
