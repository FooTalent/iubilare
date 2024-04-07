import { useState, useEffect } from "react";

const Jubilaciones = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className=" mb-[135px] px-2 md:px-0">
      <h3 className="text-[49px]">Jubilaciones</h3>
      <p className=" text-[31px] ">¿Cómo trabajamos?</p>

      <div className="bg-background-violet w-full md:h-[451px] mt-[40px] py-6 flex flex-col md:flex md:flex-row md:items-center justify-center items-center rounded-md md:rounded-none">
        {isMobile && (
          <img
            className="filter-custom md:ml-20 w-[528px] px-5 mb-5"
            src="./tramites/jubilaciones.webp"
            alt="jubilaciones"
          />
        )}
        <div className="w-[370px] text-left px-10 md:px-0">
          <p className=" text-white mb-4">
            Realizamos todos los trámites de su jubilación sin necesidad de que
            se acerque a nuestras oficinas.
          </p>
          <p className=" text-white mb-4">
            No queremos que pierda tiempo ni dinero, por eso brindamos un primer
            diagnóstico previsional totalmente gratuito que incluye el análisis
            detallado de sus años de servicios y aportes en relación de
            dependencia y autónomo o monotributo.
          </p>
          <p className=" text-white mb-4">
            De esta manera podemos determinar los pasos a seguir y evaluar si
            está en condiciones de iniciar su trámite.
          </p>
          <p className=" text-white">
            Contamos con una amplia experiencia y las mejores herramientas para
            brindarle un servicio de calidad que garantice que su Beneficio
            Previsional sea otorgado en el menor tiempo posible.
          </p>
        </div>
        {!isMobile && (
          <img
            className="filter-custom md:ml-20 w-[528px] px-5 mb-5 md:mb-0"
            src="./tramites/jubilaciones.webp"
            alt="jubilaciones"
          />
        )}
      </div>
    </section>
  );
};

export default Jubilaciones;
