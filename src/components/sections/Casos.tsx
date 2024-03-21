import CardTramites from "../cardTramites/CardTramites";



export default function Casos (){

    const data = [
        {
            title: "Cobra menos que la jubilación mínima",
            description: "Un nuevo fallo ordena pagar la jubilación mínima a las Rentas Previsionales que no llegan a ese monto.",
            items: [
                "Todas las personas jubiladas o pensionadas por una Compañía de Seguro de Retiro –ex AFJP- pueden mejorar su haber mensual.",
                "Si Usted cobra de una Compañía de Seguro de Retiro una Renta Vitalicia Previsional inferior a la jubilación mínima -conforme fallo de la CORTE SUPREMA DE JUSTICIA DE LA NACIÓN, ¨Etchart, Fernando Martín c/ANSES s/Amparos y Sumarísimos¨ -CSJN- 27/10/2015. está en condiciones de iniciar un reclamo.",
                "Este nuevo fallo habilita nuevos derechos.",
                "Quienes viven en la Patagonia disponen de una bonificación por Zona Austral.",
            ],
        },
        {
            title: "Renta anterior al 2002",
            description: "Todas las personas jubiladas o pensionadas por una Compañía de Seguros de Retiro (ex AFJP) pueden mejorar su haber mensual.",
            subtitle: "Lo importante a saber respecto a estos casos donde Usted tiene una Renta Previsional anterior al 2002, es que:",
            items: [
                "Un nuevo fallo ordena pagar las Restas Vitalicias dolarizadas en su equivalente en pesos.",
                "Si Usted cobra de una Compañía de Seguros de Retiro -ex AFPJ- una Renta Vitalicia Previsional anterior al 2002 un fallo de la Corte Suprema de Justicia de la Nación ordena pagar las Rentas Vitalicias dolarizas en su equivalente en pesos. 'Benedetti Estela c/PEN', C.S.J.N., 16/9/2008",
            ]
        },
        {
            title: "No recibe los aumentos que otorga el ANSES",
            description: "Un nuevo fallo sienta un precedente importante para la movilidad jubilatoria",
            items: [
                "Todas las personas jubiladas o pensionadas por una Compañía de Seguros de Retiro -ex AFJP- pueden mejorar su haber mensual.",
                "Si Usted cobra una Compañía de Seguros de retiro una Renta Vitalicia Previsional, gracias al fallo de la Corte Suprema de Justicia de la Nación 'Depatri Adrián Francisco' tiene derecho a recibir los aumentos trimestrales que otorga la ANSES.",
                "Usted ahora está en condiciones de iniciar un reclamo para reajustar su Renta Previsional. Este nuevo fallo habilita nuevos derechos que si Usted reclama accedé al beneficio.",
                "Quienes viven en la Patagonia disponen de una bonificación por Zona Austral.",
            ]
        }
    ]

    return(
                <div className="flex-1 mt-16 px-[16px] md:px-[40px] 2xl:px-[116px]">
                <div className="flex flex-col">
                <h2 className=" text-2xl font-semibold mt-10">Rentas vitalicias previsionales</h2>
                <p className="text-2xl mb-4 mt-3">¿Cuál es tu caso?</p>


                {/* Primera Card */}
{/*                 <div className={`flex flex-col my-2 rounded justify-between items-center shadow-card-shadow ${isExpanded ? 'bg-747DD6 text-white' : ''}`}>
                    <div className="flex flex-row justify align-middle py-5 w-full md:w-[687px] md:h-[146px] 2xl:w-full 2xl:px-[53px]">
                        <div className="flex w-2/3 items-center">
                            <div className="md:w-[213px] md:h-[62px]">
                                <p className="ml-2 pl-2 text-left font-semibold text-base md:text-[20px]">Cobra menos que la jubilación mínima</p>
                            </div>
                        </div>
                        <div className="flex w-1/3 items-center 2xl:justify-end">
                            <button onClick={() => setIsExpanded(!isExpanded)} className={`${isExpanded ? 'md:w-[165px] bg-white text-747DD6' : 'bg-747DD6 text-white'} font-semibold flex flex-row py-0.5 px-[4px] items-center text-sm rounded shadow-card-shadow focus:outline-none md:w-[151px] md:h-[37px] md:pl-[22px] md:py-[6px] md:text-[20px]`}>{isExpanded ? 'Ver menos' : 'Ver más'}
                            <KeyboardArrowDownOutlined/>
                            </button>
                        </div>
                    </div>
                    {isExpanded && 
                    <div className="flex flex-col justify-start px-5 py-5">
                        <p className="ml-2 pl-2 text-left font-semibold text-base 2xl:text-lg">Un nuevo fallo ordena pagar la jubilación mínima a las Rentas Previsionales que no llegan a ese monto.</p>
                        <ul>
                        <li className="ml-2 pl-2 text-left text-base 2xl:text-lg">Todas las personas jubiladas o pensionadas por una Compañía de Seguro de Retiro –ex AFJP- pueden mejorar su haber mensual.</li>
                        <li className="ml-2 pl-2 text-left text-base 2xl:text-lg">Si Usted cobra de una Compañía de Seguro de Retiro una Renta Vitalicia Previsional inferior a la jubilación mínima -conforme fallo de la CORTE SUPREMA DE JUSTICIA DE LA NACIÓN, ¨Etchart, Fernando Martín c/ANSES s/Amparos y Sumarísimos¨ -CSJN- 27/10/2015. está en condiciones de iniciar un reclamo.</li>
                        <li className="ml-2 pl-2 text-left text-base 2xl:text-lg">Este nuevo fallo habilita nuevos derechos.</li>
                        <li className="ml-2 pl-2 text-left text-base 2xl:text-lg">Quienes viven en la Patagonia disponen de una bonificación por Zona Austral.</li>
                        </ul>
                    </div>
                    }
                </div> */}

                {data.map((item, index) => (
                    <CardTramites
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    items={item.items}
                    />
                ))}

                </div>
                </div>


    )

}



