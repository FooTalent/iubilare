// import { useState, useEffect } from "react";

const Jubilaciones = () => {
  return (
    <section className=" mb-[135px] px-2 md:px-0">
      <h3 className="text-[49px]">Jubilaciones</h3>
      <p className=" text-[31px] ">¿Cómo trabajamos?</p>

      <div className="bg-background-violet w-full md:h-[500px] mt-[40px] py-6 flex flex-col-reverse xl:flex-row md:items-center justify-center items-center rounded-md md:rounded-none">
        <div className="md:w-[690px] xl:w-[370px] text-left my-5 xl:my-0 px-10 md:px-0">
          <p className=" text-white xl:mb-4">
            Realizamos todos los trámites de su jubilación sin necesidad de que
            se acerque a nuestras oficinas.
          </p>
          <p className=" text-white xl:mb-4">
            No queremos que pierda tiempo ni dinero, por eso brindamos un primer
            diagnóstico previsional totalmente gratuito que incluye el análisis
            detallado de sus años de servicios y aportes en relación de
            dependencia y autónomo o monotributo.
          </p>
          <p className=" text-white xl:mb-4">
            De esta manera podemos determinar los pasos a seguir y evaluar si
            está en condiciones de iniciar su trámite.
          </p>
          <p className=" text-white">
            Contamos con una amplia experiencia y las mejores herramientas para
            brindarle un servicio de calidad que garantice que su Beneficio
            Previsional sea otorgado en el menor tiempo posible.
          </p>
        </div>

        <img
          className="hidden md:flex xl:hidden filter-custom w-full h-56 xl:h-auto mt-5 xl:mt-0 md:w-[690px] xl:ml-20  xl:px-5 mb-5 md:mb-0"
          src="./tramites/jubiladotablet.svg"
          alt="jubilaciones"
        />
        <img
          className="hidden md:hidden xl:flex  filter-custom w-full h-56 xl:h-auto mt-5 xl:mt-0 md:w-[690px] xl:ml-20  xl:px-5 mb-5 md:mb-0"
          src="./tramites/jubilacionesdesktop.svg"
          alt="jubilaciones"
        />
        <img
          className="flex md:hidden  filter-custom w-full h-56 xl:h-auto mt-5 xl:mt-0 md:w-[690px] xl:ml-20  xl:px-5 mb-5 md:mb-0"
          src="./tramites/jubilacionesmobile.svg"
          alt="jubilaciones"
        />
      </div>
    </section>
  );
};

export default Jubilaciones;
