import { Link } from "react-router-dom";
import TestimoniosTramites from "../components/sections/TestimoniosTramites";
import { useEffect } from "react";



export default function Tramites() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Primera Sección */}
      <div className="flex justify-center items-center bg-blue-100 h-24">
        <p>Primera Sección</p>
      </div>

      {/* Segunda Sección */}

      <div className="flex-1 flex justify-center items-center overflow-auto">
        {/* Seccion tipo de Trámites */}
        <div className="px-[16px] flex flex-col justify-center 2xl:px-[120px] 2xl:p-[36px]">
          <div className="text-left w-[328px] h-[708px] flex-col justify-center self-center gap-10 mt-8 md:flex-row md:h-full md:flex md:w-full 2xl:w-[1115px] 2xl:h-[500px] ">
            <div className="flex flex-col justify-start items-center h-[235px] p-4 bg-white rounded-[5px]  gap-[22px] md:mr-24 md:w-[217px] md:h-full 2xl:h-full 2xl:w-full mr-">
              <div className="flex justify-center w-full">
                <img
                  className="md:hidden"
                  src="/checkpluswhite.png"
                  alt="Hero"
                />
                <img
                  className="hidden md:block 2xl:w-[197px]"
                  src="./checkplus.png"
                  alt="check con signo de mas"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-[3px] w-full">
                <div className="text-center text-neutral-900 text-lg font-bold font-source-sans-pro md:w-[329px] md:text-black md:h-full md:text-center 2xl:h-auto 2xl:mb-[10px]">
                  Sin gastos anticipados
                </div>
                <div
                  className="text-center text-neutral-900 text-base font-normal font-source-sans-pro w-[360px] md:w-[240px] lg:w-[262px]"
                >
                  No tiene ningún gasto de inicio. El pago se realiza una vez
                  que se haya resulto el caso.
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-start items-center h-[235px] p-4 bg-white rounded-[5px]  gap-[22px]  md:w-[217px] md:h-full 2xl:h-full 2xl:w-full ">
              <div className="flex justify-center w-full">
                <img
                  className="md:hidden mt-32"
                  src="/peoplewhite.png"
                  alt="Icono blanco con personas"
                />
                <img
                  className="hidden md:block 2xl:w-[197px]"
                  src="./people.png"
                  alt="icono azul con personas"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-[3px] w-full">
                <div className="text-center w-[300px] h-7 text-neutral-900 text-lg font-bold font-source-sans-pro md:w-[175px] md:text-black md:h-full md:text-center 2xl:h-auto 2xl:mb-[10px]">
                  Garantía
                </div>
                <div
                  className="text-center text-neutral-900 text-base font-normal font-source-sans-pro w-[340px] md:w-[275px] lg:w-[275px]"
                >
                  Le ofrecemos contactarse con nuestros clientes de su misma
                  localidad para conocer su experiencia.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Separador */}
      <div className="min-h-[72px] md:min-h-[90px]"></div>


      {/* Tercera Sección */}
      <div className="flex flex-col justify-center bg-transparent">
          <TestimoniosTramites></TestimoniosTramites>
      </div>

      {/* Separador */}
      <div className="min-h-[72px] md:min-h-[90px]"></div>

      {/* Cuarta Sección */}
      <div className="flex flex-col justify-center bg-transparent px-[16px]">
          <div>
            <h3 className="text-[20px] font-semibold md:text-[25px] 2xl:text-[49px]">Si tiene alguna duda o consulta, no dude en contactarnos.</h3>
            <p className="md:hidden 2xl:font-semibold  2xl:block 2xl:text-[49px]">Estamos para ayudarlo.</p>
          </div>
          <div className="min-h-[30px]"></div>
          <div className="flex justify-center">
              <Link to={'/'} state={{from: 'contact'}}  className="w-full h-[46px] md:h-[60px] active:text-active-green hover:text-inherit md:inline-block py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[286px] md:text-[32px] font-semibold cursor-pointer">
                Contactate
              </Link>
          </div>
      </div>

            {/* Separador */}
            <div className="min-h-[72px] md:min-h-[90px]"></div>
    </div>
  );
}
