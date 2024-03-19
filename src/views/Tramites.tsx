export default function Tramites() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Primera Sección */}
      <div className="flex justify-center items-center bg-blue-100 h-24">
        <p>Primera Sección</p>
      </div>

      {/* Segunda Sección */}
      <div className="flex justify-center items-center bg-blue-200 h-24">
        <p>Segunda Sección</p>
      </div>

      {/* Tercera Sección */}
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

      {/* Cuarta Sección */}
      <div className="flex-1 flex justify-center items-center bg-blue-400">
        <p>Cuarta Sección</p>
      </div>
    </div>
  );
}
