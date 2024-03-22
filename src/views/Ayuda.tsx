import FAQ from '../components/FAQ/FAQ';

export default function Ayuda (){


    return (
        <>
        {/* Separador */}
        <div className="mt-[70px] md:mt-[140px]"></div>

        {/* Sección Guía */}
        <div>
                    <h2 className="text-black text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8 ">
                        Primera sección
                    </h2>
        </div>

        {/* Sección Por qué elegirnos */}
        <div>
                    <h2 className="text-black text-xl font-semibold md:text-[32px] 2xl:text-[49px] md:mb-8 ">
                        Segunda sección
                    </h2>
        </div>

        {/* Preguntas Frecuentes */}

        <FAQ></FAQ>

        </>
    )
}