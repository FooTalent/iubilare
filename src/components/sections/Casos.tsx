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
                <h2 className=" text-2xl font-semibold mt-10 text-[20px] md:text-[25px] 2xl:text-[49px]">Rentas vitalicias previsionales</h2>
                <p className="text-xl 2xl:font-semibold md:text-[21px] 2xl:text-[31px]">¿Cuál es tu caso?</p>
                <div className="min-h-[68px] md:min-h-[33px] 2xl:min-h-[114px]"></div>
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



