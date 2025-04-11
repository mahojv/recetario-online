import { HomePage, RecipePage, CategoryBar } from "react";
import { Route, Routes, Link } from "react-router";

export default function HeaderBar() {
  return (
    <>
      <div className="border flex justify-between px-3 bg-grisClaro py-3">
        <figure className="border  ">
          <img
            className="object-cover"
            src="https://www.gourmet.cl/wp-content/themes/gourmet/img/logo-header.png"
            alt="Recetas de comida, cocina gourmet."
          />
        </figure>
        <button className="sm:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div className="hidden sm:flex items-center gap-20 text-white">
          <ul className=" flex gap-5">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/categorias">Categorias</Link>
            </li>
            <li>
              <Link to="/receta">Receta</Link>
            </li>
          </ul>
         

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
