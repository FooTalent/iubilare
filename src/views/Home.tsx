import Form from "../components/form/Form";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import QueHacemos from "../components/sections/QueHacemos";
import cardTramitesRVP from "../json/cardTramitesRVP.json";
import cardTramitesJubilacion from "../json/cardTramitesJubilacion.json";
import TestimoniosTramites from "../components/sections/TestimoniosTramites";
import CardTramite from "../components/cardTramite/CardTramite";
import CardQueHacemos from "../components/cardQueHacemos/cardQueHacemos";
import YouTubePlayer from "../components/youTubePlayer/YouTubePlayer";

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
    <div className="mt-[140px]">
      {/* Seccion Inicio */}
      <h1 className="hidden xl:flex xl:justify-center xl:mb-[9px] xl:font-semibold xl:h-16 xl:w-full xl:text-[40px]">
        Iubilare consultora previsional
      </h1>
      <div className="flex px-[16px] justify-center ">
        <div className="flex flex-col w-[1073px] lg:gap-16 md:flex-col-reverse xl:flex-row-reverse lg:mt-16">
          <div className="xl:w-[402px] xl:flex xl:flex-row-reverse ">
            <div className=" text-left  flex flex-col items-center  xl:justify-between">
              <h1 className="hidden md:flex md:text-[39px] md:mb-[9px] md:font-semibold xl:hidden">
                Iubilare consultora previsional
              </h1>
              <ul className="text-center mb-8 md:mb-0 xl:text-left flex flex-col text-[20px]  xl:text-[28px] list-disc">
                <li>Especialistas en Rentas Vitalicias Previsionales</li>
                <li>30 años de trayectoria en el Mercado</li>
                <li>Asesoramos a Clientes de todo el país</li>
              </ul>
              <div className="hidden md:block mt-8">
                <button
                  className="w-full active:text-active-green hover:text-inherit  py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[140.13px] md:text-[14.14px] lg:h-14 lg:text-[32px] lg:w-72 font-semibold flex justify-center items-center"
                  onClick={() => scrollToSection(formSection)}
                >
                  Contactate
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <YouTubePlayer />
          </div>
          <div className="flex justify-center  md:hidden mt-8">
            <button
              className=" active:text-active-green hover:text-inherit  py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none   font-semibold flex justify-center items-center sm:w-[140.13px] sm:text-[14.14px]"
              onClick={() => scrollToSection(formSection)}
            >
              Contactate
            </button>
          </div>
        </div>
      </div>

      {/* Seccion Que Hacemos */}
      <QueHacemos />

      {/* Seccion tipo de Trámites */}
      <div
        id="tipodetramite"
        className="px-[16px] flex flex-col justify-center lg:items-center xl:p-[36px]"
      >
        <h2 className="text-xl text-center font-semibold mt-11 md:text-[31px] xl:text-[31px]  md:mb-8 lg:w-[69.688rem] ">
          Tipos de trámites
        </h2>
        <div className="text-left w-[328px]  flex-col justify-center self-center gap-10 mt-8 md:flex-row md:h-full md:flex md:w-full xl:w-[1115px]  ">
          <div className="grid grid-cols-1 md:grid-cols-3 md:w-full  items-center  md:gap-8 xl:gap-[75px]">
            {cardTramitesRVP.tramite.map((tramite) => (
              <CardTramite
                img={tramite.img}
                title={tramite.title}
                title2={tramite.title2}
                style={
                  " text-[16px] w-60 md:w-[8rem] lg:w-60 leading-5 font-semibold md:leading-3 text-center md:text-[15px] md:text-left md:mt-[10px] xl:text-[20px] xl:leading-5"
                }
                borde=""
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="lg:text-[31px] text-[#747DD6] py-16">Jubilaciones</h2>
          <CardQueHacemos
            src="./QueHacemos2.svg"
            description="Le ofrecemos un diagnóstico de su situación previsional con los años registrados de aportes que usted tiene en el ANSES."
            description1="En caso de ser necesario le armamos la nueva moratoria previsional."
            description2="Obtenemos su mejor jubilación en tiempo y monto."
            classStyle="md:flex-row-reverse"
          />
        </div>
        <h2 className="text-xl mt-11  text-center font-semibold md:text-[31px] xl:text-[31px] md:mb-8 lg:w-[69.688rem] ">
          Tipos de trámites
        </h2>
        <div className="text-left w-[328px] flex-col justify-center self-center gap-10 mt-8 md:flex-row md:h-full md:flex  md:w-full xl:w-[1115px]  ">
          <div className="grid grid-cols-1 md:grid-cols-3 md:w-full  items-center gap-14 md:gap-8 xl:gap-[75px] md:mb-[128px]">
            {cardTramitesJubilacion.tramite.map((tramite) => (
              <CardTramite
                img={tramite.img}
                title={tramite.title}
                title2={tramite.title2}
                style={
                  " text-[16px] w-60 md:w-[8rem] xl:w-[13rem] leading-5 font-semibold  text-center md:text-[13px] md:text-left md:mt-[10px] xl:text-[20px] xl:leading-5"
                }
                borde=""
              />
            ))}
          </div>
        </div>
      </div>

      {/* Seccion Testimonios */}
      <TestimoniosTramites />

      {/* Seccion Formulario */}
      <div className="mt-32 mb-28" id="formulario" ref={formSection}>
        <Form />
      </div>
    </div>
  );
}
