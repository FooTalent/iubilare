import Form from "../components/form/Form";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import QueHacemos from "../components/sections/QueHacemos";
// import Testimonios from "../components/sections/Testimonios";
import cardTramitesRVP from "../json/cardTramitesRVP.json";
import cardTramitesJubilacion from "../json/cardTramitesJubilacion.json";
import TestimoniosTramites from "../components/sections/TestimoniosTramites";
import CardTramite from "../components/cardTramite/CardTramite";
import CardQueHacemos from "../components/cardQueHacemos/cardQueHacemos";
import YouTubePlayer from "../components/youTubePlayer/YouTubePlayer";
// import VideoComponent from "../components/videoHome/VideoComponent";
// import VideoPlayer from "../components/videoPlayer/VideoPlayer";

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
      {/* Seccion Inicio */}
      <h1 className="hidden xl:flex xl:justify-center xl:mb-[9px] xl:font-semibold xl:h-16 xl:w-full xl:text-[40px]">
        Iubilare consultora previsional
      </h1>
      <div className="flex px-[16px] justify-center ">
        <div className="flex flex-col w-[1073px] lg:gap-8 md:flex-col-reverse xl:flex-row-reverse lg:mt-16">
          <div className="xl:w-[402px] xl:flex xl:flex-row-reverse ">
            <div className=" text-left  flex flex-col items-center  xl:justify-between">
              <h1 className="md:text-[39px] md:mb-[9px] md:font-semibold xl:hidden">
                Iubilare consultora previsional
              </h1>
              <p className="text-center xl:text-left flex flex-col text-[20px]  xl:text-[28px]">
                Especialistas en Rentas Vitalicias Previsionales{" "}
                <span>30 años de trayectoria en el Mercado</span>{" "}
                <span>Asesoramos a Clientes de todo el país</span>
              </p>
              <div className="block mt-8">
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
        </div>
      </div>

      {/* Seccion Que Hacemos */}
      <QueHacemos />

      {/* Seccion tipo de Trámites */}
      <div
        id="tipodetramite"
        className="px-[16px] flex flex-col justify-center lg:items-center xl:p-[36px]"
      >
        <h2 className="text-xl text-left font-semibold mt-11 md:text-[31px] xl:text-[31px]  md:mb-8 lg:w-[69.688rem] ">
          Tipos de trámites
        </h2>
        <div className="text-left w-[328px] h-[708px] flex-col justify-center self-center gap-10 mt-8 md:flex-row md:h-full md:flex md:w-full xl:w-[1115px] xl:h-[500px] ">
          <div className="grid grid-cols-2 md:w-full  items-center gap-14 md:gap-8 xl:gap-[75px]">
            {cardTramitesRVP.tramite.map((tramite) => (
              <CardTramite
                img={tramite.img}
                title={tramite.title}
                title2={tramite.title2}
                style={
                  " text-[17px] w-60 leading-5 font-semibold md:leading-3 text-center md:text-[13px] md:text-left md:mt-[10px] xl:text-[20px] xl:leading-5"
                }
                borde=""
              />
            ))}
          </div>
          {/* <div className="flex flex-col justify-start items-center h-[205px] p-4 bg-white rounded-[5px] shadow-light-top-heavy-bottom-light-sides  gap-[22px]  md:shadow-[0_35px_60px_-15px_rgba(255,255,255)] md:w-[217px] md:h-full xl:h-full xl:w-full">
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
          </div> */}
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="lg:text-[31px] text-[#747DD6] py-16">Jubilaciones</h2>
          <CardQueHacemos
            src="./QueHacemos2.jpeg"
            description="Le ofrecemos un diagnóstico de su situación previsional con los años registrados de aportes
            que usted tiene en el ANSES
            En caso de ser necesario le armamos la nueva moratoria previsional
            Obtenemos su mejor jubilación en tiempo y monto. "
            classStyle="md:flex-row-reverse"
          />
        </div>
        <h2 className="text-xl mt-11 xl:mt-0 text-left font-semibold md:text-[31px] xl:text-[31px] md:mb-8 lg:w-[69.688rem] ">
          Tipos de trámites
        </h2>
        <div className="text-left w-[328px] h-[708px] flex-col justify-center self-center gap-10 mt-8 md:flex-row md:h-full md:flex  md:w-full xl:w-[1115px] xl:h-[500px] ">
          <div className="grid grid-cols-2 md:w-full  items-center gap-14 md:gap-8 xl:gap-[75px] mb-[188px] md:mb-[128px]">
            {cardTramitesJubilacion.tramite.map((tramite) => (
              <CardTramite
                img={tramite.img}
                title={tramite.title}
                title2={tramite.title2}
                style={
                  " text-[17px] w-60 leading-5 font-semibold md:leading-3 text-center md:text-[13px] md:text-left md:mt-[10px] xl:text-[20px] xl:leading-5"
                }
                borde=""
              />
            ))}
            <CardTramite
              img={"./exito.svg"}
              title2=""
              title={
                "El éxito de nuestro servicio está 100% garantizado. Con Iubilare puede tener la certeza de que está en buenas manos."
              }
              style={
                "text-[17px]   w-60 leading-5 font-semibold md:leading-3 text-center md:text-[13px] md:text-left md:mt-[10px] xl:leading-5 xl:text-[16px] font-normal"
              }
              borde={"border-2 border-[#439373]"}
            />
          </div>
        </div>
      </div>

      {/* Seccion Testimonios */}
      <TestimoniosTramites />

      {/* Separador */}

      {/* Seccion Formulario */}
      <div className="mt-32 mb-28" id="formulario" ref={formSection}>
        <Form />
      </div>
    </div>
  );
}
