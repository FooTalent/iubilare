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
      {/* Separador */}

      {/* Seccion Inicio */}
      <h1 className="md:text-[20px] md:mb-[9px] md:font-semibold lg:h-16 w-full lg:text-[40px]">
        Iubilare consultora previsional
      </h1>
      <div className="flex px-[16px] justify-center ">
        <div className="flex flex-col w-[1073px] lg:gap-8 md:flex-col-reverse xl:flex-row-reverse lg:mt-16">
          <div className="xl:w-[402px] xl:flex xl:flex-row-reverse ">
            <div className="hidden md:block text-left lg:gap-[8.25rem] xl:flex xl:flex-col xl:justify-around">
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
              <div className="hidden xl:block ">
                <button
                  className="w-full active:text-active-green hover:text-inherit  py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[140.13px] md:text-[14.14px] lg:h-14 lg:text-[32px] lg:w-72 font-semibold flex justify-center items-center"
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
            {/* <VideoPlayer
              url={"https://youtu.be/bv5vMJKBAbo?si=Ey5lj7XzSBUsIYLt"}
            /> */}
            {/* <video
              src="./IUBILAREFINALYT.mp4"
              controls
              className="max-w-[637px]"
            ></video> */}
            {/* <VideoComponent /> */}
          </div>
        </div>
        <div className="xl:hidden mt-8 md:mx-[10px] flex justify-start">
          <button
            className="w-full active:text-active-green hover:text-inherit md:inline-block py-2 px-4 bg-button-[#439373] text-white rounded hover:bg-button-hover-[#2DB27D] hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[140.13px] md:text-[14.14px] font-bold"
            onClick={() => scrollToSection(formSection)}
          >
            Contactate
          </button>
        </div>
      </div>

      {/* Seccion Que Hacemos */}
      <QueHacemos />

      {/* Seccion tipo de Trámites */}
      <div
        id="tipodetramite"
        className="px-[16px] flex flex-col justify-center xl:px-[120px] xl:p-[36px]"
      >
        <div>
          <h2 className="text-xl text-left font-semibold md:text-[31px] xl:text-[31px] md:mb-8 ">
            Tipos de trámites
          </h2>
        </div>
        <div className="text-left w-[328px] h-[708px] flex-col justify-center self-center gap-10 mt-8 md:flex-row md:h-full md:flex md:w-full xl:w-[1115px] xl:h-[500px] ">
          <div className="grid grid-cols-2 items-center gap-14 md:gap-8 xl:gap-[75px] mb-[188px] md:mb-[128px]">
            {cardTramitesRVP.tramite.map((tramite) => (
              <CardTramite
                img={tramite.img}
                title={tramite.title}
                style={
                  " text-[17px] w-60 leading-5 font-semibold md:leading-3 text-center md:text-[13px] md:text-left md:mt-[10px] xl:text-[20px] xl:leading-5"
                }
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
            description="Le ofrecemos un primer diagnóstico previsional completamente gratuito que incluye un análisis detallado de sus años de servicio aportados y contribuciones, tanto como dependiente, autónomo o monotributista. De esta manera podemos determinar los pasos a seguir para comenzar el trámite lo antes posible meses antes de que cumpla la edad jubilatoria. Nuestra prioridad es que usted pueda realizar su jubilación de forma rápida y efectiva. "
            classStyle="md:flex-row-reverse"
          />
        </div>
        <div>
          <h2 className="text-xl text-left font-semibold md:text-[31px] xl:text-[31px] md:mb-8 ">
            Tipos de trámites
          </h2>
        </div>
        <div className="text-left w-[328px] h-[708px] flex-col justify-center self-center gap-10 mt-8 md:flex-row md:h-full md:flex  md:w-full xl:w-[1115px] xl:h-[500px] ">
          <div className="grid grid-cols-2 items-center gap-14 md:gap-8 xl:gap-[75px] mb-[188px] md:mb-[128px]">
            {cardTramitesJubilacion.tramite.map((tramite) => (
              <CardTramite
                img={tramite.img}
                title={tramite.title}
                style={
                  " text-[17px] w-60 leading-5 font-semibold md:leading-3 text-center md:text-[13px] md:text-left md:mt-[10px] xl:text-[20px] xl:leading-5"
                }
              />
            ))}
            <CardTramite
              img={"./exito.svg"}
              title={
                "El éxito de nuestro servicio está 100% garantizado. Con Iubilare puede tener la certeza de que está en buenas manos."
              }
              style={
                " text-[17px] w-60 leading-5 font-semibold md:leading-3 text-center md:text-[13px] md:text-left md:mt-[10px] xl:leading-5 xl:text-[16px] font-normal"
              }
            />
          </div>
        </div>
      </div>

      {/* Seccion Testimonios */}
      <TestimoniosTramites />

      {/* Separador */}

      {/* Seccion Formulario */}
      <div className="mt-32" id="formulario" ref={formSection}>
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
