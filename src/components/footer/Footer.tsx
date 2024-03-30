import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Footer = (): JSX.Element => {
  const navigate = useNavigate();
  const [nosotros, setNosotros] = useState(false);
  const [tramites, setTramites] = useState(false);
  const [ayuda, setAyuda] = useState(false);

  return (
    <div>
      {/* Contenedor Secciones Logo/Redes/Datos/Servicios */}
      <div className="flex flex-wrap items-center gap-[32px_32px] pt-[32px] pb-[36px] px-[16px] relative bg-[#49508D] md:h-full md:w-full md:px-[40px] xl:px-[121px] justify-between">
        {/* Seccion Logo y Redes / Datos y Logos */}
        <div className="w-full md:flex text-white">
          <div className="w-full grid grid-cols-2  grid-rows-5 md:grid-cols-3 md:grid-rows-2 items-start lg:grid-rows-1 lg:grid-cols-4 mb-14">
            <div className="relative w-[194px] h-[88px] mr-9 md:mr-0">
              <div className="relative w-[174px] h-[78px] -top-px">
                <div className="absolute w-[174px] h-[78px] top-0 left-0">
                  <a href="/">
                    <img src="./logoWhite.svg" alt="Logo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center col-start-4 col-end-5 lg:hidden  md:mr-0">
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

            <div className="grid grid-cols-2 grid-rows-3 w-72 row-start-2 row-end-3 col-start-1 md:hidden  gap-3 ">
              <div className="row-start-3 col-start-1 col-end-4 flex flex-row items-center">
                <div className="min-w-[24px] w-[24px] h-[24px] flex justify-center">
                  <img className="" src="location.svg" alt="Ubicacion" />
                </div>
                <div className="pl-[8px] h-full w-full flex  items-center">
                  <a
                    href="https://maps.app.goo.gl/twy1BwmQ5x33qVzLA"
                    target="_blank"
                    className="text-base text-left w-[300px] text-white"
                  >
                    Av. de Mayo 881 - 4to D CABA CP:1084
                  </a>
                </div>
              </div>
              <div className="row-start-2 flex flex-row items-center">
                <div className="min-w-[24px] w-[24px] h-[24px] flex justify-center">
                  <img className="" src="./email.svg" alt="Email" />
                </div>
                <div className="pl-[8px] h-full w-full flex  items-center">
                  <a
                    href="mailto:contacto@iubilare.com"
                    target="_blank"
                    className="text-base text-white"
                  >
                    contacto@iubilare.com
                  </a>
                </div>
              </div>
              <div className="row-start-1 w-72 flex flex-row items-center">
                <div className="min-w-[24px] w-[24px] h-[24px] flex justify-center">
                  <img className="" src="./call.svg" alt="Telefono" />
                </div>
                <div className="pl-[8px] h-full w-full flex  items-center">
                  <a
                    href="tel:1143421817"
                    className="text-base text-white  text-left"
                  >
                    (011) 4342-1817
                  </a>
                </div>
              </div>

              <div className="hidden lg:col-start-8 col-end-9 lg:flex lg:flex-row mr-12 md:mr-0">
                <div className="w-[33px] h-[33px] rounded-[16px/16.5px]">
                  <a
                    href="https://www.facebook.com/share/CPEU7bY1CAH44KNK/?mibextid=qi2Omg"
                    target="_blank"
                  >
                    <img
                      className=""
                      alt="Vector"
                      src="./footer/facebook.png"
                    />
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

              {/*  <div className="flex w-[320px] items-end gap-[8px] relative flex-[0_0_auto]">
              <div className="flex flex-row relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]"></div>
            </div> */}
            </div>

            <div className="w-full mt-8 md:mt-0  col-span-2 row-start-3 row-end-4  col-start-1 col-end-2 lg:col-start-2 lg:col-end-3 md:row-start-2 lg:row-start-1   ">
              <div className="w-full flex flex-col mb-4 ">
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
                    <Link to="/nosotros#mision">Misión y visión</Link>
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
            <div className="w-full mt-8 md:mt-0  col-span-2 row-start-4 row-end-5 col-start-1 lg:w-fit  flex flex-col  md:justify-center md:items-center md:col-start-2 md:col-end-4 lg:col-start-3 lg:col-end-4 md:row-start-2 lg:row-start-1">
              <div
                className="flex w-full md:justify-center lg:justify-start md:pr-[3.2rem] lg:pr-0"
                onClick={() => setTramites(!tramites)}
              >
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
            <div className="w-full mt-8 md:mt-0  col-span-2 row-start-5 row-end-6 col-start-1 md:col-start-4 md:col-end-5 md:row-start-2  lg:row-start-1">
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
            {/* Seccion Desplegables Servicios */}
            {/* <div className="flex flex-wrap justify-start text-white md:w-[60%] gap-12">
              <div className="flex flex-wrap-reverse lg:flex-nowrap  lg:gap-16 "> */}
            {/*  <div className="w-56 md:flex ">
                  <div className="w-full flex flex-col mb-4 md:w-1/2">
                    <div
                      className="flex"
                      onClick={() => setNosotros(!nosotros)}
                    >
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
                        <Link to="/nosotros#mision">Misión y visión</Link>
                      </li>
                      <li className="cursor-pointer">
                        <Link to={"/nosotros#vision"}>Equipo</Link>
                      </li>
                      <li className="w-80 cursor-pointer">
                        <Link to={"/nosotros"}>
                          Casos de éxito en todo el país
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
            {/* <div className="w-full flex flex-col mb-4 md:w-1/2">
                  <div className="flex" onClick={() => setTramites(!tramites)}>
                    <h2 className="text-left font-bold cursor-pointer">
                      Trámites
                    </h2>
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
                </div> */}
            {/*  <div className="w-full flex flex-col mb-4 md:w-1/2">
                  <div
                    className="flex"
                    onClick={() => {
                      setAyuda(!ayuda);
                    }}
                  >
                    <h2 className="text-left font-bold cursor-pointer">
                      Ayuda
                    </h2>
                    <div className="md:hidden">
                      {ayuda ? (
                        <KeyboardArrowDown />
                      ) : (
                        <KeyboardArrowRightIcon />
                      )}
                    </div>
                  </div>
                  <ul
                    className={`text-left md:block ${
                      ayuda ? "block" : "hidden"
                    }`}
                  >
                    <li className="cursor-pointer">
                      <Link to={"/ayuda"}>Guía de trámites paso a paso</Link>
                    </li>
                    <li className="cursor-pointer">
                      <Link to={"/ayuda"}>Preguntas frecuentes</Link>
                    </li>
                  </ul>
                </div> */}
            {/* </div>
            </div> */}
            {/*  <div className="flex flex-row mr-12 md:mr-0">
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
            </div> */}
          </div>
        </div>

        {/* Separador */}
        {/* <div className="hidden xl:block xl:min-w-[10px]"></div> */}

        {/* Seccion Datos y Logos */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-8 w-full gap-3 ">
          <div className="col-start-1 col-end-4 flex flex-row items-center">
            <div className="min-w-[24px] w-[24px] h-[24px] flex justify-center">
              <img className="" src="location.svg" alt="Ubicacion" />
            </div>
            <div className="pl-[8px] h-full w-full flex  items-center">
              <a
                href="https://maps.app.goo.gl/twy1BwmQ5x33qVzLA"
                target="_blank"
                className="text-base text-left w-[300px] text-white"
              >
                Av. de Mayo 881 - 4to D CABA CP:1084
              </a>
            </div>
          </div>
          <div className="col-start-4 col-end-6 flex flex-row items-center">
            <div className="min-w-[24px] w-[24px] h-[24px] flex justify-center">
              <img className="" src="./email.svg" alt="Email" />
            </div>
            <div className="pl-[8px] h-full w-full flex  items-center">
              <a
                href="mailto:contacto@iubilare.com"
                target="_blank"
                className="text-base text-white"
              >
                contacto@iubilare.com
              </a>
            </div>
          </div>
          <div className="col-start-6 col-end-8 flex flex-row items-center">
            <div className="min-w-[24px] w-[24px] h-[24px] flex justify-center">
              <img className="" src="./call.svg" alt="Telefono" />
            </div>
            <div className="pl-[8px] h-full w-full flex  items-center">
              <a
                href="tel:1143421817"
                className="text-base text-white  text-left"
              >
                (011) 4342-1817
              </a>
            </div>
          </div>

          <div className="hidden lg:col-start-8 col-end-9 lg:flex lg:flex-row mr-12 md:mr-0">
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

          {/*  <div className="flex w-[320px] items-end gap-[8px] relative flex-[0_0_auto]">
              <div className="flex flex-row relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]"></div>
            </div> */}
        </div>
      </div>

      {/* Contendero Seccion Politicas */}
      {/* Seccion  Politicas  */}
      <div className="flex w-full flex-col items-center gap-[4px] relative flex-[0_0_auto] bg-[#3A4076]  md:flex-row md:items-center md:justify-center md:h-[65px] xl:[74px]">
        {/* <div>
          <p className="[font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-[14px]">
            Política de Privacidad&nbsp;&nbsp;&nbsp;&nbsp;Términos del Servicio.
          </p>
        </div>
        <div>
          <p className="[font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-[14px]">
            Copyright 2023 - Todos los derechos reservados
          </p>
        </div> */}
        <p className="text-white text-[14px] md:text-[16px] py-6 px-[2px]">
          Horario de atención de Lunes a Jueves de 10 a 17 hs
        </p>
      </div>
    </div>
  );
};

export default Footer;
