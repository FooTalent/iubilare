

export default function SectionQuienesSomos (){

    return (
              {/* Seccion Quienes somos */}
              <div>
                   <div className="px-[16px] md:px-[40px] 2xl:px-[120px] md:hidden">
                <h2 className="font-bold text-xl text-center mb-10">¿Quienes somos?</h2>
                <div className="flex flex-col items-center">
                    <div>
                    <img
                        src="/quienesSomos1.jpg"
                        className="w-[195px] h-[195px] rounded-full mx-auto mb-5 shadow-xl"
                        alt="Marcelo Visceglie"
                    />
                    <h3 className="font-bold text-lg text-center">Marcelo Visceglie</h3>
                    <h4 className="text-lg text-center mb-10">Fundador de Iubilare</h4>
                    </div>
                    <div>
                    <img
                        src="/quienesSomos2.jpg"
                        className="w-[195px] h-[195px] rounded-full mx-auto mb-5 shadow-xl"
                        alt="Cristian Pavlovsky"
                    />
                    <h3 className="font-bold text-lg text-center">
                        Cristian Pavlovsky
                    </h3>
                    <h4 className="text-lg text-center mb-10">Fundador de Iubilare</h4>
                    </div>
                    <button className="w-full active:text-active-green hover:text-inherit md:inline-block py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[140.13px] md:text-[14.14px]">
                    Ver al equipo
                    </button>
                </div>
                </div>
              </div>
    )
}