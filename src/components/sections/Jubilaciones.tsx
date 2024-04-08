// import { useState, useEffect } from "react";

const Jubilaciones = () => {
  return (
    <section className=" mb-[70px] px-2 md:px-0">
      <h3 className="text-[49px]">Jubilaciones</h3>
      <p className=" text-[31px] ">¿Cómo trabajamos?</p>

      <div className="bg-background-violet w-full md:h-[500px] mt-[40px] py-6 flex flex-col-reverse xl:flex-row md:items-center justify-center items-center rounded-md md:rounded-none">
        <div className="md:w-[690px] xl:w-[370px] text-left my-5 xl:my-0 px-10 md:px-0">
          <h4 className="text-[20px] text-white font-semibold mb-2 md:hidden">
            Pensamos en usted
          </h4>
          <p className=" text-white xl:mb-4">
            No queremos que pierda tiempo ni dinero, por eso brindamos un primer
            diagnóstico previsional totalmente gratuito que incluye el análisis
            detallado de sus años de aportes registrados en ANSES.
          </p>
          <p className=" text-white xl:mb-4">
            Contamos con una amplia experiencia y las mejores herramientas para
            brindarle un servicio de calidad que garantice que su Jubilación sea
            otorgada en el menor tiempo posible.
          </p>
          <p className=" text-white xl:mb-4">
            En caso de ser necesario armamos una nueva moratoria previsional,
            para que usted reciba la mejor jubilación posible.
          </p>
          <p className=" text-white">
            Nuestra prioridad es que usted pueda realizar su trámite jubilatorio
            de forma rápida y efectiva. 
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
