import React from "react";

export default function Preparacion() {
  return (
    <section className="border border-[#474747] md:w-1/2 m-5 p-4 max-w-[700px]">
      <h2 className="flex justify-left space-x-1 gap-2 text-[#474747] underline tracking-wider p-4 mt-3 text-2xl">
        <img
          src="https://www.gourmet.cl/wp-content/themes/gourmet/img/icons/cubierto.png"
          className="h-7"
        ></img>
        Preparación de Arroz Vegetal
      </h2>

      <ul className="text-[#474747] p-4 mt-0">
        <li>
          En una olla grande, calienta el aceite de oliva a fuego medio. Agrega
          la cebolla y el ajo, y sofríe hasta que estén dorados. Agrega los
          pimientos y la zanahoria, y cocina por unos minutos más. Incorpora el
          arroz y revuelve bien para que se mezcle con las verduras. Agrega el
          caldo de verduras caliente y lleva a ebullición. Reduce el fuego a
          bajo, cubre la olla y cocina durante 15-20 minutos o hasta que el
          arroz esté tierno. Retira del fuego y deja reposar durante 5 minutos
          antes de servir.
        </li>
      </ul>
    </section>
  );
}
