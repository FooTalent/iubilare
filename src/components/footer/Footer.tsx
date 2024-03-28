import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Footer = (): JSX.Element => {
  const navigate = useNavigate();
  const [contacto, setContacto] = useState(false);
  const [nosotros, setNosotros] = useState(false);
  const [tramites, setTramites] = useState(false);
  const [ayuda, setAyuda] = useState(false);

  return (
    <div>
      {/* Contenedor Secciones Logo/Redes/Datos/Servicios */}
      <div className="flex flex-wrap items-center gap-[32px_32px] pt-[32px] pb-[36px] px-[16px] relative bg-[#a3bdb3] md:h-full md:w-full md:px-[40px] 2xl:px-[121px] justify-between">
        {/* Seccion Logo y Redes / Datos y Logos */}
        <div className="w-full md:flex md:flex-col md:w-1/4">
          <div className="w-full flex flex-row  md:flex-col justify-between">
            <div className="relative w-[194px] h-[88px]">
              <div className="relative w-[174px] h-[78px] -top-px">
                <div className="absolute w-[174px] h-[78px] top-0 left-0">
                  <a href="/">
                    <img src="./iubilare_logo.png" alt="Logo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row mr-12 md:mr-0">
              <div className="w-[33px] h-[33px] rounded-[16px/16.5px]">
                <a
                  href="https://www.facebook.com/share/CPEU7bY1CAH44KNK/?mibextid=qi2Omg"
                  target="_blank"
                >
                  <img className="" alt="Vector" src="./footer/facebook.png" />
                </a>
              </div>
              <div className="min-w-[30px]"></div>
              <div className="w-[33px] h-[33px] rounded-[16px/16.5px]">
                <a
                  href="https://www.instagram.com/iubilare.ok?igsh=MWRjcnVybzdvdnozZw=="
                  target="_blank"
                >
                  <img
                    className=""
                    alt="Icomoon free"
                    src="./footer/instagram.png"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:block md:min-h-[46px]"></div>
          {/* Seccion Datos y Logos */}
          <div className="flex flex-col w-[300px] gap-3 ">
            <div className="flex flex-row items-center">
              <div className="min-w-[24px] w-[24px] h-[24px] flex justify-center">
                <img className="" src="./call.png" alt="Telefono" />
              </div>
              <div className="pl-[8px] w-full flex flex-col self-end">
                <a href="tel:1143421817" className="text-base  text-left">
                  (011) 4342-1817
                </a>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="min-w-[24px] w-[24px] h-[24px] flex justify-center">
                <img className="" src="./email.png" alt="Email" />
              </div>
              <div className="pl-[8px] flex self-end">
                <a
                  href="mailto:contacto@iubilare.com"
                  target="_blank"
                  className="text-base"
                >
                  contacto@iubilare.com
                </a>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="min-w-[24px] w-[24px] h-[24px] flex justify-center">
                <img className="" src="location.png" alt="Ubicacion" />
              </div>
              <div className="pl-[8px] flex self-end">
                <a
                  href="https://maps.app.goo.gl/twy1BwmQ5x33qVzLA"
                  target="_blank"
                  className="text-base text-left w-[300px]"
                >
                  Av. de Mayo 881 - 4to D <br className="hidden sm:flex" />
                  CABA - CP:1084
                </a>
              </div>
            </div>

            <div className="flex w-[320px] items-end gap-[8px] relative flex-[0_0_auto]">
              <div className="flex flex-row relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]"></div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="hidden 2xl:block 2xl:min-w-[10px]"></div>
        {/* Seccion Desplegables Servicios */}
        <div className="flex flex-wrap justify-start md:w-[60%] gap-12">
          <div className="flex flex-wrap-reverse lg:flex-nowrap  lg:gap-16 ">
            <div className="w-56 md:flex ">
              <div className="w-full flex flex-col mb-4 md:w-1/2">
                <div className="flex" onClick={() => setNosotros(!nosotros)}>
                  <h2 className="text-left font-bold cursor-pointer">
                    Nosotros
                  </h2>
                  <div className="md:hidden">
                    {nosotros ? (
                      <KeyboardArrowDown />
                    ) : (
                      <KeyboardArrowRightIcon />
                    )}
                  </div>
                </div>

                <ul
                  className={`text-left md:block ${
                    nosotros ? "block" : "hidden"
                  }`}
                >
                  <li
                    className="cursor-pointer"
                    onClick={() => navigate("/nosotros")}
                  >
                    <Link to={"/nosotros#mision"}>Misión y visión</Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link to={"/nosotros#vision"}>Equipo</Link>
                  </li>
                  <li className="w-80 cursor-pointer">
                    <Link to={"/nosotros"}>Casos de éxito en todo el país</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full flex flex-col mb-4 md:w-1/2">
              <div className="flex" onClick={() => setTramites(!tramites)}>
                <h2 className="text-left font-bold cursor-pointer">Trámites</h2>
                <div className="md:hidden">
                  {tramites ? (
                    <KeyboardArrowDown />
                  ) : (
                    <KeyboardArrowRightIcon />
                  )}
                </div>
              </div>
              <ul
                className={`text-left md:block ${
                  tramites ? "block" : "hidden"
                }`}
              >
                <li className="cursor-pointer">
                  <Link to={"/tramites"}>Tipos de trámite</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to={"/tramites#testimonios"}>Testimonios</Link>
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col mb-4 md:w-1/2">
              <div
                className="flex"
                onClick={() => {
                  setAyuda(!ayuda);
                }}
              >
                <h2 className="text-left font-bold cursor-pointer">Ayuda</h2>
                <div className="md:hidden">
                  {ayuda ? <KeyboardArrowDown /> : <KeyboardArrowRightIcon />}
                </div>
              </div>
              <ul
                className={`text-left md:block ${ayuda ? "block" : "hidden"}`}
              >
                <li className="cursor-pointer">
                  <Link to={"/ayuda"}>Guía de trámites paso a paso</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to={"/ayuda"}>Preguntas frecuentes</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contendero Seccion Politicas */}
      {/* Seccion  Politicas  */}
      <div className="flex w-full flex-col items-center gap-[4px] relative flex-[0_0_auto] bg-[#a3bdb3] md:bg-white md:flex-row md:items-center md:justify-center md:h-[65px] 2xl:[74px] px-[16px]">
        <div>
          <p className="[font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-[14px]">
            Política de Privacidad&nbsp;&nbsp;&nbsp;&nbsp;Términos del Servicio.
          </p>
        </div>
        <div>
          <p className="[font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-[14px]">
            Copyright 2023 - Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
