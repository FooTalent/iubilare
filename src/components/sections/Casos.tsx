import CardTramites from "../cardTramites/CardTramites";

export default function Casos() {
  const data = [
    {
      title: "Complemento al Haber Mínimo Garantizado",
      description:
        "Un nuevo fallo ordena pagar la jubilación mínima a las Rentas Previsionales que no llegan a ese monto.",
      items: [
        "Todas las personas jubiladas o pensionadas por una Compañía de Seguro de Retiro –ex AFJP- pueden mejorar su haber mensual.",
        "Si Usted cobra de una Compañía de Seguro de Retiro una Renta Vitalicia Previsional inferior a la jubilación mínima -conforme fallo de la CORTE SUPREMA DE JUSTICIA DE LA NACIÓN, ¨Etchart, Fernando Martín c/ANSES s/Amparos y Sumarísimos¨ -CSJN- 27/10/2015. está en condiciones de iniciar un reclamo.",
        "Este nuevo fallo habilita nuevos derechos.",
        "Quienes viven en la Patagonia disponen de una bonificación por Zona Austral.",
      ],
    },
    {
      title: "Renta anterior al 2002: Dolarización",
      description:
        "Todas las personas jubiladas o pensionadas por una Compañía de Seguros de Retiro (ex AFJP) pueden mejorar su haber mensual.",
      subtitle:
        "Lo importante a saber respecto a estos casos donde Usted tiene una Renta Previsional anterior al 2002, es que:",
      items: [
        "Un nuevo fallo ordena pagar las Restas Vitalicias dolarizadas en su equivalente en pesos.",
        "Si Usted cobra de una Compañía de Seguros de Retiro -ex AFPJ- una Renta Vitalicia Previsional anterior al 2002 un fallo de la Corte Suprema de Justicia de la Nación ordena pagar las Rentas Vitalicias dolarizas en su equivalente en pesos. 'Benedetti Estela c/PEN', C.S.J.N., 16/9/2008",
      ],
    },
    {
      title: "Actualización de su Renta Vitalicia",
      description:
        "Un nuevo fallo sienta un precedente importante para la movilidad jubilatoria",
      items: [
        "Todas las personas jubiladas o pensionadas por una Compañía de Seguros de Retiro -ex AFJP- pueden mejorar su haber mensual.",
        "Si Usted cobra una Compañía de Seguros de retiro una Renta Vitalicia Previsional, gracias al fallo de la Corte Suprema de Justicia de la Nación 'Depatri Adrián Francisco' tiene derecho a recibir los aumentos trimestrales que otorga la ANSES.",
        "Usted ahora está en condiciones de iniciar un reclamo para reajustar su Renta Previsional. Este nuevo fallo habilita nuevos derechos que si Usted reclama accedé al beneficio.",
        "Quienes viven en la Patagonia disponen de una bonificación por Zona Austral.",
      ],
    },
    {
      title: "Complemento por zona Austral",
      description:
        "Puede cobrar la bonificación por Zona Austral si vive en las Provincias de La Pampa, Río Negro, Chubut, Santa Cruz, Ushuaia. La Ley le otorga un Plus adicional a su Renta Vitalicia.",
      items: [
        "Cobra menos que la Jubilación Mínima o no recibe los ajustes que otorga ANSES.",
        "Si además vive en Zona Austral hay una diferencia a su favor.",
        "En la Argentina, los fallos sólo tienen efecto sobre los jubilados que inician reclamo judicial. No pierda más tiempo y dinero. Reclame hoy mismo.",
      ],
    },
  ];

  return (
    <div className="flex-1 mt-16 px-[16px] md:px-[40px] 2xl:px-[116px]">
      <div className="flex flex-col">
        <h1 className=" text-[31px] md:text-[64px] p-2">
          Los trámites que <span className=" text-747DD6">realizamos</span>{" "}
        </h1>
        <h2 className="font-semibold mt-10 text-[25px] md:text-[49px] 2xl:text-[49px]">
          Rentas vitalicias previsionales
        </h2>
        <p className="text-[20px] 2xl:font-semibold md:text-[31px] 2xl:text-[31px] mb-5">
          ¿Cuál es tu caso?
        </p>

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
  );
}
