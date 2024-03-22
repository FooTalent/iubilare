
import FAQ from '../components/FAQ/FAQ';
import "leaflet/dist/leaflet.css";

export default function Ayuda() {
  return (
    <>
      {/* Separador */}
      <div className="mt-[150px] md:mt-[250px]"></div>

      {/* Sección Guía */}
      <div>
        <div className="flex flex-col justify-start items-center gap-6 w-full max-w-lg mx-auto">
          <div className="text-center">
            <span className="text-[45px] text-neutral-900 font-semibold font-['Raleway']">
              Guía{" "}
            </span>
            <span className="text-[45px] text-indigo-400 font-semibold font-['Raleway']">
              paso a paso{" "}
            </span>
          </div>
          <div className="text-[27px] text-center text-neutral-900 text-lg md:text-lg lg:text-xl font-normal font-['Inter']">
            Le ofrecemos una guía informativa sobre cada uno de los procesos{" "}
          </div>
        </div>

        {/* Separador */}
        <div className="mt-[70px] md:mt-[140px]"></div>
        {/* Titulos de cartas */}
        <div className="flex justify-center items-center mb-24">
          <div className="flex justify-center items-center w-1/3">
            <div className="text-center text-slate-500 text-[31px] font-semibold font-['Source Sans Pro'] underline">
              Rentas Vitalicias
            </div>
          </div>

          <div className="flex justify-center items-center w-1/3">
            <div className="text-center text-indigo-400 text-[31px] font-semibold font-sans underline">
              Jubilación
            </div>
          </div>
        </div>
      </div>

      <div
        className="hidden lg:flex justify-center items-center flex-wrap mx-auto mt-20"
        style={{ maxWidth: "1440px" }}
      >
        <img
          className="w-[650px] mx-14"
          src="/gruporentas.png"
          alt="gruporentas"
        />
        <img
          className="w-[500px] mx-14"
          src="/grupojubilacion.png"
          alt="grupojubilacion"
        />
      </div>

      {/* Carta de ayuda - Tablet */}
      <div className="flex lg:hidden justify-center items-center w-full h-auto">
        <div className="">
          <img
            className="max-w-[650px] w-full h-auto"
            src="/cartasmobile.png"
            alt="cartasmobile"
          />
        </div>
      </div>

      {/* Sección Por qué elegirnos */}
      <div>
        <div className="px-[16px] flex flex-col justify-center 2xl:px-[120px] 2xl:p-[36px] mt-40">
          <div>
            <h2 className="text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8 ">
              Porque elegirnos
            </h2>
          </div>
          
        {/* Iconos con Informacion */}
          <div className="text-left flex-col justify-center gap-5 md:flex-row md:h-full md:flex md:w-full lg:gap-x-32 2xl:w-[1115px] 2xl:h-[500px] ">
            <div className="flex flex-col justify-start items-center h-[205px] p-4 gap-[22px] md:w-[217px] md:h-full 2xl:h-full 2xl:w-full">
              <div className="flex h-[91px] flex-col justify-start items-start gap-[3px] md:flex-col-reverse md:h-full  2xl:justify-end">
                <div className="">
                  <div className="w-[300px] h-7 text-lg font-normal font-['Source Sans Pro']  md:w-[250px] md:text-black md:h-full md:text-center mx-auto 2xl:h-auto 2xl:mb-[10px] md:font-bold">
                    Experiencia y trayectoria{" "}
                  </div>
                  <div
                    className="hidden md:block lg:hidden w-[301.66px] text-neutral-900 font-normal font-['Source Sans Pro'] md:w-[245px] md:text-center md:pt-[16px] ml-5"
                    style={{ fontSize: "13px" }}
                  >
                    Con más de 27 años de experiencia en el mercado, nuestro
                    equipo cuenta con el conocimiento y la habilidad necesarios
                    para guiarlo a través del proceso de jubilación.
                  </div>
                  <div className="hidden xl:block w-[301.66px] text-neutral-900 font-normal font-['Source Sans Pro'] xl:w-[270px] xl:text-center xl:pt-[16px]">
                    Con más de 27 años de experiencia en el mercado, nuestro
                    equipo cuenta con el conocimiento y la habilidad necesarios
                    para guiarlo a través del proceso de jubilación.
                  </div>
                </div>
                <div className="flex justify-center w-full">
                  <img className="md:hidden" src="/copaicono.png" alt="Hero" />
                  <img
                    className="hidden md:block 2xl:w-[197px]"
                    src="/copaicono.png"
                    alt="Hero"
                  />
                </div>
              </div>
            </div>

            <div className="h-[40px] md:hidden"></div>
            <div className="flex flex-col justify-start items-center h-[205px] p-4 bg-white rounded-[5px] gap-[22px] md:w-[217px] ml-5 md:h-full 2xl:h-full 2xl:w-full">
              <div className="flex h-[91px] flex-col justify-start items-start gap-[3px] md:flex-col-reverse  md:h-full 2xl:justify-end">
                <div>
                  <div className="w-[300px] h-7  text-lg font-normal font-['Source Sans Pro'] md:w-[200px] md:text-black md:h-full md:text-center mx-auto 2xl:h-auto 2xl:mb-[10px] md:font-bold">
                    Enfoque personalizado
                  </div>

                  <div
                    className="hidden md:block lg:hidden w-[301.66px] text-neutral-900 font-normal font-['Source Sans Pro'] md:w-[245px] md:text-center md:pt-[16px] ml-5"
                    style={{ fontSize: "13px" }}
                  >
                    Valoramos las necesidades individuales de cada cliente y nos
                    esforzamos por ofrecer un servicio personalizado y adaptado
                    a sus circunstancias particulares.
                  </div>
                  <div className="hidden xl:block w-[301.66px] text-neutral-900 font-normal font-['Source Sans Pro'] xl:w-[270px] xl:text-center xl:pt-[16px]">
                    Valoramos las necesidades individuales de cada cliente y nos
                    esforzamos por ofrecer un servicio personalizado y adaptado
                    a sus circunstancias particulares.
                  </div>
                </div>
                <div className="flex justify-center w-full">
                  <img className="md:hidden" src="/personamas.png" alt="Hero" />
                  <img
                    className="hidden md:block 2xl:w-[197px]"
                    src="./personamas.png"
                    alt="Hero"
                  />
                </div>
              </div>
            </div>
            <div className="h-[40px] md:hidden"></div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full h-auto py-4  md:w-[217px] md:h-full gap-4 ">
              <div className="flex h-[111px] flex-col justify-start items-start gap-[3px] md:flex-col-reverse  md:h-full 2xl:justify-end">
                <div className="">
                  <div className="w-[300px] h-7 text-lg font-normal font-['Source Sans Pro'] md:w-[250px] md:text-black md:h-full md:text-center mx-auto 2xl:h-auto 2xl:mb-[10px] md:font-bold">
                    Transparencia y confianza
                  </div>
                  <div
                    className="hidden md:block lg:hidden w-[301.66px] text-neutral-900 font-normal font-['Source Sans Pro'] md:w-[240px] md:text-center md:pt-[16px]"
                    style={{ fontSize: "13px" }}
                  >
                    Nos comprometemos a brindarle información clara,
                    transparente y confiable en cada paso del proceso.
                  </div>
                  <div className="hidden xl:block w-[301.66px] text-neutral-900 font-normal font-['Source Sans Pro'] xl:w-[270px] xl:text-center xl:pt-[16px]">
                    Nos comprometemos a brindarle información clara,
                    transparente y confiable en cada paso del proceso.
                  </div>
                </div>
                <div className="flex justify-center w-full">
                  <img
                    className="md:hidden"
                    src="/escudoicono.png"
                    alt="Hero"
                  />
                  <img
                    className="hidden md:block 2xl:w-[197px]"
                    src="/escudoicono.png"
                    alt="Hero"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="h-[36px]"></div>
        </div>
      </div>


      {/* Preguntas Frecuentes */}
      <div>
        <FAQ></FAQ>
      </div>
    </>
  );
}
