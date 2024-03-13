import React from 'react';

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-8 hidden sm:block">
          <img src="/Youtubeplayer.png" alt="Hero" className="mx-auto mb-5 mt-5" />
          <div className="w-[328px] px-[17px] py-2 rounded-[5px] justify-center items-center gap-2.5 inline-flex lg:hidden">
            <img src="/botoncontactodefault.png" alt="Hero" className="mx-auto" />
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <div className="text-left text-2xl mb-10 mt-8 ml-7">
            27 años de experiencia. Asesoramiento personalizado. Soluciones previsionales confiables en todo el país.
          </div>


        </div>

        {/* Content for small screens (mobile view) */}
        <div className="lg:hidden">
          <img src="/Youtubeplayer.png" alt="Hero" className="mx-auto mb-3 mt-5" /> {/* Adjusted margin-bottom here */}
          <div className="w-[328px] px-[17px] py-2 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
            <img src="/botoncontactodefault.png" alt="Hero" className="mx-auto" />
          </div>

          {/* Your other components for mobile view */}
          <div className="text-left w-[328px] h-[708px] flex-col justify-start items-start gap-10 inline-flex mt-8">
            <div className="h-[198px] p-4 bg-gray-200 rounded-[5px] shadow flex-col justify-start items-center gap-[22px] flex">
              <div className=" h-[91px] flex-col justify-start items-start gap-[3px] flex">
                <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']">Renta Vitalicia Previsional en Dólares</div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']">Le ofrecemos realizar una entrevista o conversación telefónica para brindarle un diagnóstico completo.</div>
              </div>
              <div className="w-[55px] h-[53px] relative" />
            </div>
            <div className="h-[205px] p-4 bg-gray-200 rounded-[5px] shadow flex-col justify-start items-center gap-[22px] flex">
              <div className="h-[91px] flex-col justify-start items-start gap-[3px] flex">
                <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']">Complemento al Haber Mínimo</div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']">Es un pago que realiza ANSES a quienes reciben una Renta Vitalicia y no alcanzan el Haber Mínimo Garantizado.</div>
              </div>
              <div className="w-[60px] h-[60px] relative" />
            </div>
            <div className="h-[225px] p-4 bg-gray-200 rounded-[5px] shadow flex-col justify-start items-center gap-[22px] flex">
              <div className="h-[111px] flex-col justify-start items-start gap-[3px] flex">
                <div className="w-[300px] h-7 text-indigo-400 text-base font-normal font-['Source Sans Pro']">Actualización de su Renta Previsional</div>
                <div className="w-[301.66px] text-neutral-900 text-base font-normal font-['Source Sans Pro']">La Compañía de Seguros de Retiro otorga aumentos menores a su Renta. Sin embargo, debería recibir los aumentos que ANSES ha otorgado desde enero de 2002.</div>
              </div>
              <div className="w-[60px] h-[60px] justify-center items-center inline-flex">
                <div className="w-[60px] h-[60px] relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
