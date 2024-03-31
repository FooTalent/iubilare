import Form from "../components/form/Form";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import QueHacemos from "../components/sections/QueHacemos";
import Testimonios from "../components/sections/Testimonios";

export default function Home() {
  const formSection: any = useRef(null);

  const scrollToSection = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    if (state) {
      if (state.from === "contact") {
        formSection.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [state]);

  return (
    <div className="md:mt-[140px]">
      {/* Separador */}
      <div className="min-h-[69px] md:hidden"></div>

      {/* Seccion Inicio */}
      <div className="flex flex-col px-[16px] md:px-[40px] 2xl:px-[120px]">
        <div className="flex flex-col md:flex-col-reverse xl:flex-row- xl:flex-row-reverse xl:gap-[132px]  xl:mt-[100px]">
          <div className="xl:w-[50%] xl:flex">
            <div className="hidden md:block text-left md:m-[10px] xl:flex xl:flex-col xl:justify-around xl:w-[70%]">
              <h1 className="md:text-[20px] md:mb-[9px] md:font-semibold xl:text-[40px]">
                Iubilare consultora previsional
              </h1>
              <p className="text-left hidden xl:block xl:text-[28px]">
                27 años de experiencia. Asesoramiento personalizado. Soluciones
                previsionales confiables en{" "}
                <span className="xl:font-bold">todo el país.</span>
              </p>
              <p className="md:w-2/3 xl:hidden">
                Somos un equipo de abogados y ejecutivos en gestión previsional
                con 27+ años de experiencia. Más de 4500 clientes en todo el
                país. Asesoramiento personalizado para tranquilidad y solución
                de problemas previsionales.
              </p>
              <div className="hidden xl:block xl:mt-5">
                <button
                  className="w-full active:text-active-green hover:text-inherit md:inline-block py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[140.13px] md:text-[14.14px] xl:w-[100%] font-bold"
                  onClick={() => scrollToSection(formSection)}
                >
                  Contactate
                </button>
              </div>
            </div>
            <div className="text-left text-[20px] md:hidden">
              <p>
                27 años de experiencia. Asesoramiento personalizado. Soluciones
                previsionales confiables en{" "}
                <span className="font-bold">todo el país.</span>
              </p>
            </div>
          </div>
          <div className="">
            <img
              className="w-full mx-auto mb-5 mt-5 md:w-[688px] md:h-auto"
              src="/Youtubeplayer.png"
              alt="Hero"
            />
          </div>
        </div>
        <div className="xl:hidden mt-8 md:mx-[10px] flex justify-start">
          <button
            className="w-full active:text-active-green hover:text-inherit md:inline-block py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[140.13px] md:text-[14.14px] font-bold"
            onClick={() => scrollToSection(formSection)}
          >
            Contactate
          </button>
        </div>
      </div>

      {/* Separador */}
      <div className="h-[78px] xl:h-[100px]"></div>
      {/* Seccion Que Hacemos */}
      <QueHacemos></QueHacemos>

      {/* Separador */}
      <div className="h-[84px] md:h-[172px]"></div>

      {/* Seccion tipo de Trámites */}
      <div
        id="tipodetramite"
        className="px-[16px] flex flex-col justify-center xl:px-[120px] xl:p-[36px]"
      >
        <div>
          <h2 className="text-xl font-semibold md:text-[32px] xl:text-[49px] md:mb-8 ">
            Tipos de trámites
          </h2>
        </div>
        <div className="text-left w-[328px] h-[708px] flex-col justify-center self-center gap-10 mt-8 md:flex-row md:h-full md:flex md:w-full xl:w-[1115px] xl:h-[500px] ">
          <div className="flex flex-col justify-start items-center h-[205px] p-4 bg-white rounded-[5px] shadow-light-top-heavy-bottom-light-sides  gap-[22px]  md:shadow-[0_35px_60px_-15px_rgba(255,255,255)] md:w-[217px] md:h-full xl:h-full xl:w-full">
            <div className="flex h-[91px] flex-col justify-start items-start gap-[3px] md:flex-col-reverse md:h-full  xl:justify-end">
              <div className="">
                <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']  md:w-[175px] md:text-black md:h-full  md:text-center xl:h-auto  xl:mb-[10px] md:font-bold">
                  Renta Vitalicia Previsional{" "}
                  <span className="hidden xl:block">pactada</span> en Dólares
                </div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']  md:w-[175px] md:text-center md:pt-[16px] xl:hidden">
                  Le ofrecemos realizar una entrevista o conversación telefónica
                  para brindarle un diagnóstico completo.
                </div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']  md:w-[175px] md:text-center md:pt-[16px] hidden xl:block">
                  Luego de una entrevista o charla telefónica podemos brindarle
                  un diagnóstico completo.
                </div>
              </div>
              <div className="flex justify-center w-full">
                <img
                  className="md:hidden"
                  src="/actualizacionIcono.png"
                  alt="Hero"
                />
                <img
                  className="hidden md:block xl:w-[197px]"
                  src="./tramites/actualizacionFill.png"
                  alt="Hero"
                />
              </div>
            </div>
          </div>

          <div className="h-[40px] md:hidden"></div>
          <div className="flex flex-col justify-start items-center h-[205px] p-4 bg-white rounded-[5px] shadow-light-top-heavy-bottom-light-sides  gap-[22px]  md:shadow-[0_35px_60px_-15px_rgba(255,255,255)] md:w-[217px] md:h-full xl:h-full xl:w-full">
            <div className="flex h-[91px] flex-col justify-start items-start gap-[3px] md:flex-col-reverse  md:h-full xl:justify-end">
              <div>
                <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro'] md:w-[175px] md:text-black md:h-full md:text-center  xl:h-auto xl:mb-[10px] md:font-bold">
                  Complemento al Haber Mínimo{" "}
                  <span className="hidden xl:block">Garantizado</span>
                </div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']  md:w-[175px] md:text-center md:pt-[16px] xl:hidden">
                  Es un pago que realiza ANSES a quienes reciben una Renta
                  Vitalicia y no alcanzan el Haber Mínimo Garantizado.
                </div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']  md:w-[175px] md:text-center md:pt-[16px] hidden xl:block">
                  Es un pago que abona ANSES a aquellas personas que cobran una
                  Renta Vitalicia y no llegan al Haber Mínimo Garantizado. Este
                  monto, que se obtiene luego de la Sentencia Judicial.
                </div>
              </div>
              <div className="flex justify-center w-full">
                <img
                  className="md:hidden"
                  src="/complenebtoIcono.png"
                  alt="Hero"
                />
                <img
                  className="hidden md:block xl:w-[197px]"
                  src="./tramites/complementoFill.png"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
          <div className="h-[40px] md:hidden"></div>
          <div className="flex flex-col justify-start items-center h-[235px] p-4 bg-white rounded-[5px] shadow-light-top-heavy-bottom-light-sides  gap-[22px]  md:shadow-[0_35px_60px_-15px_rgba(255,255,255)] md:w-[217px] md:h-full xl:h-full xl:w-full">
            <div className="flex h-[111px] flex-col justify-start items-start gap-[3px] md:flex-col-reverse  md:h-full  xl:justify-end">
              <div>
                <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro'] md:w-[175px] md:text-black md:h-full md:text-center xl:h-auto xl:mb-[10px] md:font-bold">
                  Actualización de su Renta Previsional
                </div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro'] md:w-[175px] md:text-center md:pt-[16px]">
                  La Compañía de Seguros de Retiro otorga aumentos menores a su
                  Renta. <span className="xl:hidden">Sin embargo,</span>
                  <span className="hidden xl:inline">Usted</span> debería
                  recibir los aumentos que ANSES ha otorgado desde enero de
                  2002.
                </div>
              </div>
              <div className="flex justify-center w-full">
                <img className="md:hidden" src="/rentaIcono.png" alt="Hero" />
                <img
                  className="hidden md:block xl:w-[197px]"
                  src="./tramites/rentasFill.png"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="h-[36px]"></div>
      </div>

      {/* Separador */}
      <div className="min-h-[110px]"></div>

      {/* Seccion Testimonios */}
      <Testimonios />

      {/* Separador */}
      <div className="min-h-[106.08px]"></div>

      {/* Seccion Formulario */}
      <div id="formulario" ref={formSection}>
        <Form />
      </div>

      {/* Imagen Separador */}
      <div className="hidden xl:flex  xl:justify-center">
        <img src="./home/iubilare.png" alt="" />
      </div>

      {/* Separador */}
      <div className="min-h-[106.08px] xl:none"></div>
    </div>
  );
}
