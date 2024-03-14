import React, { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const buttonImage = isHovered
    ? "/botoncontactohover.png"
    : "/botoncontactodefault.png";

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-8 hidden sm:block ">
          <img
            src="/Youtubeplayer.png"
            alt="Hero"
            className="mx-auto mb-5 mt-5 w-[636.53px] h-[406.55px]"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          {/* Desktop Message */}
          <div className="text-left text-2xl mb-10 mt-10 hidden lg:block">
            Somos un equipo de abogados y ejecutivos en gestión previsional con
            27+ años de experiencia. Más de 4500 clientes en todo el país.
            Asesoramiento personalizado para tranquilidad y solución de
            problemas previsionales.
          </div>
          {/* Button for desktop view */}
          <div className="w-[328px] px-[17px] py-2 rounded-[5px] justify-center items-center gap-2.5 inline-flex ml-7 hidden lg:block">
            <img
              src={buttonImage}
              alt="Hero"
              className="mx-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>

          {/* Mobile Message */}
          <div className="text-left text-2xl mb-10 mt-8 ml-7 lg:hidden">
            27 años de experiencia. Asesoramiento personalizado. Soluciones
            previsionales confiables en todo el país.
          </div>
        </div>
        {/* Content for small screens (mobile view) */}
        <div className="lg:hidden">
          <img
            src="/Youtubeplayer.png"
            alt="Hero"
            className="mx-auto mb-3 mt-5"
          />{" "}
          {/* Adjusted margin-bottom here */}
          <div className="w-[328px] px-[17px] py-2 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
            <img
              src="/botoncontactodefault.png"
              alt="Hero"
              className="mx-auto"
            />
          </div>
          <div className="text-left w-[328px] h-[708px] flex-col justify-start items-start gap-10 inline-flex mt-8">
            <div className="h-[198px] p-4 bg-gray-200 rounded-[5px] shadow flex-col justify-start items-center gap-[22px] flex">
              <div className=" h-[91px] flex-col justify-start items-start gap-[3px] flex">
                <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']">
                  Renta Vitalicia Previsional en Dólares
                </div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']">
                  Le ofrecemos realizar una entrevista o conversación telefónica
                  para brindarle un diagnóstico completo.
                </div>
                <img
                  src="/actualizacionIcono.png"
                  alt="Hero"
                  className="mx-auto mt-3"
                />
              </div>
              <div className="w-[55px] h-[53px] relative" />
            </div>
            <div className="h-[205px] p-4 bg-gray-200 rounded-[5px] shadow flex-col justify-start items-center gap-[22px] flex">
              <div className="h-[91px] flex-col justify-start items-start gap-[3px] flex">
                <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']">
                  Complemento al Haber Mínimo
                </div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']">
                  Es un pago que realiza ANSES a quienes reciben una Renta
                  Vitalicia y no alcanzan el Haber Mínimo Garantizado.
                </div>
                <img
                  src="/complenebtoIcono.png"
                  alt="Hero"
                  className="mx-auto mt-3"
                />
              </div>
              <div className="w-[60px] h-[60px] relative" />
            </div>
            <div className="h-[225px] p-4 bg-gray-200 rounded-[5px] shadow flex-col justify-start items-center gap-[22px] flex">
              <div className="h-[111px] flex-col justify-start items-start gap-[3px] flex">
                <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']">
                  Actualización de su Renta Previsional
                </div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']">
                  La Compañía de Seguros de Retiro otorga aumentos menores a su
                  Renta. Sin embargo, debería recibir los aumentos que ANSES ha
                  otorgado desde enero de 2002.
                </div>
              </div>
              <div className="w-[60px] h-[60px] justify-center items-center inline-flex">
                <div className="w-[60px] h-[60px] relative" />
                <img
                  src="/rentaIcono.png"
                  alt="Hero"
                  className="mx-auto mt-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className='font-bold text-xl text-center mb-10'>¿Quienes somos?</h2>
        <div className='flex flex-col items-center'>
          <div>
            <img src="/quienesSomos1.jpg" className='w-[195px] h-[195px] rounded-full mx-auto mb-5 shadow-xl' alt="Marcelo Visceglie" />
            <h3 className='font-bold text-lg text-center'>Marcelo Visceglie</h3>
            <h4 className='text-lg text-center mb-10'>Fundador de Iubilare</h4>
          </div>
          <div>
            <img src="/quienesSomos2.jpg" className='w-[195px] h-[195px] rounded-full mx-auto mb-5 shadow-xl' alt="Cristian Pavlovsky" />
            <h3 className='font-bold text-lg text-center'>Cristian Pavlovsky</h3>
            <h4 className='text-lg text-center mb-10'>Fundador de Iubilare</h4>
          </div>
          <button className='w-11/12 bg-button-green text-white font-bold text-xl mx-auto max-h-[50px]'>Ver al equipo</button>
        </div>
      </div>
    </>
  );
}
