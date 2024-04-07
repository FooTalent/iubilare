import Carousel from "../carousel/Carousel";
import FormularioYup from "../formularioYup/FormularioYup";

export default function Form() {
  let slides = [
    "./form/c1.svg",
    "./form/c2.svg",
    "./form/c3.svg",
    "./form/c4.svg",
    "./form/c5.svg",
    "./form/c6.svg",
  ];

  return (
    <>
      <div className="px-[16px] md:px-[40px] xl:px-[120px] w-[319px] m-auto md:w-[546px] xl:w-full">
        <h3 className="text-[20px] font-semibold md:text-[25px] xl:hidden">
          ¿Tenés alguna duda o consulta?
        </h3>
        <h3 className="text-[20px] font-semibold md:text-[25px] xl:hidden">
          Contactanos, estamos para ayudarte.
        </h3>

        <h3 className="hidden font-semibold xl:block xl:text-[49px]">
          ¿Tenés alguna duda o consulta?
        </h3>
        <h3 className="hidden font-semibold xl:block xl:text-[49px]">
          Contactanos, estamos para ayudarte.
        </h3>
      </div>
      <div className="min-h-[53px]"></div>
      <div className="flex justify-center flex-row md:bg-background-grey md:justify-center md:w-[686px] md:h-[446px] md:m-auto  xl:w-[1057px] xl:gap-6 xl:h-[675px] xl:pt-[48px] xl:pb-[48px] xl:pl-[60px] xl:pr-[60px]">
        <div className="hidden  md:block md:h-[446px] ">
          <div className="md:h-[446px] md:w-[265.4px] bg-white xl:w-[411px] xl:h-[576px]">
            <Carousel slides={slides} />
          </div>
        </div>

        <FormularioYup />
      </div>
    </>
  );
}
