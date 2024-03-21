import "leaflet/dist/leaflet.css";

export default function Ayuda() {
  return (
    <>
      {/* Separador */}
      <div className="mt-[150px] md:mt-[317px]"></div>

      {/* Sección Guía */}
      <div>
        <div className="w-[737px] h-[185px] flex-col justify-start items-center gap-[34px] inline-flex">
          <div className="text-center">
            <span
              style={{
                color: "#2D3748",
                fontSize: "64px",
                fontWeight: "600",
                fontFamily: "Raleway",
              }}
            >
              Guía{" "}
            </span>
            <span
              style={{
                color: "#667EEA",
                fontSize: "64px",
                fontWeight: "600",
                fontFamily: "Raleway",
              }}
            >
              paso a paso{" "}
            </span>
          </div>
          <div className="w-[737px] text-center text-neutral-900 text-[31px] font-normal font-['Inter']">
            Le ofrecemos una guía informativa sobre cada uno de los procesos{" "}
          </div>
        </div>

        {/* Separador */}
        <div className="mt-[70px] md:mt-[140px]"></div>
        {/* Titulos de cartas*/}
        <div className="flex mb-24">
          <div className="flex-1 flex justify-center items-center">
            <div className="text-center text-slate-500 text-[31px] font-semibold font-['Source Sans Pro'] underline">
              Rentas Vitalicias
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="text-center text-indigo-400 text-[31px] font-semibold font-sans underline">
              Jubilación
            </div>
          </div>
        </div>
      </div>

      {/* Cartas de ayuda*/}
      <div className="w-[1280px] h-[905px] justify-start items-center inline-flex gap-x-40">
        <div className="mt-20">
          <img
            className="hidden md:block 2xl:w-[650px]"
            src="/gruporentas.png"
            alt="gruporentas"
          />
        </div>

        <div className="mt-20">
          <img
            className="hidden md:block 2xl:w-[500px]"
            src="/grupojubilacion.png"
            alt="gruporentas"
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
          <div className="text-left w-[328px] h-[708px] flex-col justify-center self-center gap-10 mt-8 md:flex-row md:h-full md:flex md:w-full 2xl:w-[1115px] 2xl:h-[500px] ">
            <div className="flex flex-col justify-start items-center h-[205px] p-4 bg-white rounded-[5px] shadow-light-top-heavy-bottom-light-sides  gap-[22px]  md:shadow-[0_35px_60px_-15px_rgba(255,255,255)] md:w-[217px] md:h-full 2xl:h-full 2xl:w-full">
              <div className="flex h-[91px] flex-col justify-start items-start gap-[3px] md:flex-col-reverse md:h-full  2xl:justify-end">
                <div className="">
                  <div className="w-[300px] h-7 text-indigo-400 text-lg font-normal font-['Source Sans Pro'] md:w-[250px] md:text-black md:h-full md:text-center mx-auto 2xl:h-auto 2xl:mb-[10px] md:font-bold">
                    Experiencia y trayectoria{" "}
                  </div>
                  <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']  md:w-[175px] md:text-center md:pt-[16px] 2xl:hidden">
                    Con más de 27 años de experiencia en el mercado, nuestro
                    equipo cuenta con el conocimiento y la habilidad necesarios
                    para guiarlo a través del proceso de jubilación.
                  </div>
                  <div className=" w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']  md:w-[px] md:text-center md:pt-[16px] hidden 2xl:block">
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
            <div className="flex flex-col justify-start items-center h-[205px] p-4 bg-white rounded-[5px] shadow-light-top-heavy-bottom-light-sides  gap-[22px]  md:shadow-[0_35px_60px_-15px_rgba(255,255,255)] md:w-[217px] md:h-full 2xl:h-full 2xl:w-full">
              <div className="flex h-[91px] flex-col justify-start items-start gap-[3px] md:flex-col-reverse  md:h-full 2xl:justify-end">
                <div>
                  <div className="w-[300px] h-7 text-indigo-400 text-lg font-normal font-['Source Sans Pro'] md:w-[200px] md:text-black md:h-full md:text-center mx-auto 2xl:h-auto 2xl:mb-[10px] md:font-bold">
                    Enfoque personalizado
                  </div>

                  <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']  md:w-[175px] md:text-center md:pt-[16px] 2xl:hidden">
                    Valoramos las necesidades individuales de cada cliente y nos
                    esforzamos por ofrecer un servicio personalizado y adaptado
                    a sus circunstancias particulares.
                  </div>
                  <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']  md:w-[250px] md:text-center md:pt-[16px] hidden 2xl:block">
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
            <div className="flex flex-col justify-start items-center h-[235px] p-4 bg-white rounded-[5px] shadow-light-top-heavy-bottom-light-sides  gap-[22px]  md:shadow-[0_35px_60px_-15px_rgba(255,255,255)] md:w-[217px] md:h-full 2xl:h-full 2xl:w-full">
              <div className="flex h-[111px] flex-col justify-start items-start gap-[3px] md:flex-col-reverse  md:h-full  2xl:justify-end">
                <div>
                  <div className="w-[300px] h-7 text-indigo-400 text-lg font-normal font-['Source Sans Pro'] md:w-[250px] md:text-black md:h-full md:text-center mx-auto 2xl:h-auto 2xl:mb-[10px] md:font-bold">
                    Transparencia y confianza
                  </div>
                  <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']  md:w-[175px] md:text-center md:pt-[16px] 2xl:hidden">
                    Nos comprometemos a brindarle información clara,
                    transparente y confiable en cada paso del proceso.
                  </div>
                  <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']  md:w-[275px] md:text-center md:pt-[16px] hidden 2xl:block">
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
        <h2 className="text-black text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8 ">
          Tercera sección
        </h2>
      </div>
    </>
  );
}
