import { Link } from "react-router-dom";
import TestimoniosTramites from "../components/sections/TestimoniosTramites";
import Casos from "../components/sections/Casos";
import { useEffect } from "react";
import Jubilaciones from "../components/sections/Jubilaciones";
import CualEsTuCaso from "../components/sections/CualEsTuCaso";
import TipoDeTramites from "../components/sections/TipoDeTramites";

export default function Tramites() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-[5.2rem] md:mt-[140px]">
      {/* Primera Sección */}
      <div className="">
        <Casos />
      </div>
      {/* Segunda Sección */}
      <div className="flex-1 flex justify-center mb-20 items-center overflow-auto">
        {/* Seccion tipo de Trámites */}
        <div className=" flex flex-col  justify-center ">
          <div className="text-left flex w-[328px] h-[708px] sm:w-[609px] sm:h-[350px]  flex-col justify-center sm:flex-row self-center gap-10 mt-8 md:flex-row md:h-full  md:w-full xl:w-[1115px] xl:h-[500px] ">
            <div className="flex flex-col justify-start items-center h-[235px] p-4 sm:p-0 md:p-4 bg-white rounded-[5px]  gap-[22px]  md:w-[217px] md:h-full xl:h-full xl:w-full">
              <div className="flex justify-center w-full">
                <img
                  className="md:hidden"
                  src="/checkpluswhite.png"
                  alt="Hero"
                />
                <img
                  className="hidden md:block xl:w-[197px]"
                  src="./checkplus.png"
                  alt="check con signo de mas"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-[3px] w-full px-5 sm:px-0 md:px-5">
                <div className="text-center text-neutral-900 text-lg font-bold font-source-sans-pro md:w-[329px] md:text-black md:h-full md:text-center xl:h-auto xl:mb-[10px]">
                  Sin gastos anticipados
                </div>
                <div className="text-center text-neutral-900 text-base font-normal font-source-sans-pro w-[360px] sm:w-[269px] md:w-[240px] lg:w-[262px]">
                  No tiene ningún gasto de inicio. El pago se realiza una vez
                  que se haya resuelto el caso.
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-center h-[235px] p-4 sm:p-0 md:p-4 bg-white rounded-[5px]  gap-[22px]  md:w-[217px] md:h-full xl:h-full xl:w-full ">
              <div className="flex justify-center w-full">
                <img
                  className="md:hidden "
                  src="/peoplewhite.png"
                  alt="Icono blanco con personas"
                />
                <img
                  className="hidden md:block xl:w-[197px]"
                  src="./people.png"
                  alt="icono azul con personas"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-[3px] w-full px-10 sm:px-0 md:px-10">
                <div className="text-center w-[300px] h-7 text-neutral-900 text-lg font-bold font-source-sans-pro md:w-[175px] md:text-black md:h-full md:text-center xl:h-auto xl:mb-[10px]">
                  Garantía
                </div>
                <div className="text-center text-neutral-900 text-base font-normal font-source-sans-pro w-[340px] sm:w-[269px] md:w-[275px] lg:w-[275px]">
                  Le ofrecemos contactarse con nuestros clientes de su misma
                  localidad para conocer su experiencia.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separador */}

      <Jubilaciones />
      <CualEsTuCaso />
      <TipoDeTramites />

      {/* Tercera Sección */}
      <div
        id="testimonios"
        className="flex flex-col justify-center bg-transparent"
      >
        <TestimoniosTramites></TestimoniosTramites>
      </div>

      {/* Separador */}
      <div className="min-h-[72px] md:min-h-[90px]"></div>

      {/* Cuarta Sección */}
      <div className="flex flex-col justify-center bg-transparent px-[16px]">
        <div>
          <h3 className="text-[20px] font-semibold md:text-[25px] xl:text-[49px]">
            Si tiene alguna duda o consulta, no dude en contactarnos.
          </h3>
          <p className="md:hidden xl:font-semibold  xl:block xl:text-[49px]">
            Estamos para ayudarlo.
          </p>
        </div>
        <div className="min-h-[30px]"></div>
        <div className="flex justify-center">
          <Link
            to={"/"}
            state={{ from: "contact" }}
            className="w-full h-[46px] md:h-[60px] active:text-active-green hover:text-inherit md:inline-block py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none sm:w-[286px] md:text-[32px] font-semibold cursor-pointer"
          >
            Contactate
          </Link>
        </div>
      </div>

      {/* Separador */}
      <div className="min-h-[72px] md:min-h-[90px]"></div>
    </div>
  );
}
