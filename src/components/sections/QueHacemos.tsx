import CardQueHacemos from "../cardQueHacemos/cardQueHacemos";

export default function QueHacemos() {
  return (
    <div className="flex flex-col mt-20 xl:mt-0 justify-center items-center px-[16px] xl:p-[36px] md:bg-hero  md:bg-no-repeat md:bg-center md:bg-[length:690px] xl:bg-bottom xl:bg-[length:1290px] ">
      <h1 className="text-[25px] font-semibold md:text-[32px] xl:text-[49px] md:mb-8">
        ¿Qué hacemos?
      </h1>
      <div className="w-[21.75rem] xl:flex xl:justify-center xl:w-[1076px]">
        <p
          style={{ wordSpacing: "4px" }}
          className="text-justify leading-tight md:text-center xl:text-[31px]"
        >
          Gestionamos todos los trámites relacionados  con su Renta Vitalicia
          Previsional o Jubilación.
        </p>
      </div>
      <h2 className="lg:text-[31px] text-[#747DD6] py-16">
        Rentas Vitalicias Previsionales
      </h2>

      <div className="flex flex-col justify-center items-center w-full">
        <CardQueHacemos
          src="./QueHacemos1.svg"
          description="Brindamos un asesoramiento gratuito sobre su Renta Vitalicia para definir si usted tiene
          derecho a un reclamo ante ANSES o su Compañía de Seguros de Retiro.
          
          "
          description1="Le ofrecemos un informe detallado de a cuanto ascendería su Haber, el monto del
          Retroactivo aproximado y duración del juicio."
          description2="Garantizamos 100% de efectividad en la gestión."
        />
      </div>
    </div>
  );
}
