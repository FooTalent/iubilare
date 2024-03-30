import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => {
    setIsOpen(false);
    window.scroll(0, 0);
  };

  const handleOnClick = () => {
    window.open("/", "_self");
  };

  return (
    <>
      <div className="flex flex-wrap justify-between w-full h-[64px] shadow-md md:h-[112px] items-center mb-[10px] pt-[7px] pb-[8px] md:shadow-md 2xl:px-[120px] fixed bg-white border z-10">
        <div className="flex flex-start w-1/2  text-center items-center md:w-[40%] cursor-pointer">
          <img
            src="./iubilare_logo.png"
            alt=""
            className="w-[107px] text-base md:w-[186px] ml-[17px]"
            onClick={handleOnClick}
          />
        </div>
        <div className="w-1/2 flex justify-end pr-[15px]  md:hidden">
          <div
            className={`w-[24px] h-[24px] cursor-pointer transition-transform duration-300 transform ${
              isOpen ? "rotate-90" : "-rotate-0"
            }`}
          >
            {isOpen ? (
              <CloseIcon
                className="w-6 h-6 text-black hover:scale-110"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <MenuIcon
                className="w-6 h-6 text-black hover:scale-110"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </div>
        </div>
        <div
          className={`mt-[10px] w-full md:mt-0 md:overflow-visible md:w-[60%] z-10 ${
            isOpen
              ? "transition-height duration-2000 h-auto"
              : "transition-height duration-2000 h-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col justify-around bg-white items-start pl-5 shadow-md h-[178px] md:flex md:flex-row md:h-auto md:shadow-none md:space-x-0.5 md:justify-around  md:items-center ">
            <li className="md:pt-[3px]">
              <span>
                {/* se agregaron las clases active:text-active-green para el color cuando activas el link en version mobile*/}
                {/* se agregaron las clases hover:text-inherit para eliminar el violet como color por defecto de los tags a*/}
                <Link
                  to={"/"}
                  className="group active:text-active-green hover:text-inherit font-bold"
                  onClick={handleCloseMenu}
                >
                  Inicio
                  <div className="md:bg-active-green md:h-[2.3px] md:w-0 md:group-hover:w-full md:transition-all md:duration-500"></div>
                </Link>
              </span>
            </li>
            <li className="md:pt-[3px]">
              <Link
                to={"/nosotros"}
                className="group active:text-active-green hover:text-inherit font-bold"
                onClick={handleCloseMenu}
              >
                Nosotros
                <div className="md:bg-active-green md:h-[2.3px] md:w-0 md:group-hover:w-full md:transition-all md:duration-500"></div>
              </Link>
            </li>
            <li className="md:pt-[3px]">
              <Link
                to={"/tramites"}
                className="group active:text-active-green hover:text-inherit font-bold"
                onClick={handleCloseMenu}
              >
                Trámites
                <div className="md:bg-active-green md:h-[2.3px] md:w-0 md:group-hover:w-full md:transition-all md:duration-500"></div>
              </Link>
            </li>

            <li className="md:pt-[3px]">
              <Link
                to={"/ayuda"}
                className="group active:text-active-green hover:text-inherit font-bold"
                onClick={handleCloseMenu}
              >
                Ayuda
                <div className="md:bg-active-green md:h-[2.3px] md:w-0 md:group-hover:w-full md:transition-all md:duration-500"></div>
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                state={{ from: "contact" }}
                className="active:text-active-green hover:text-inherit md:inline-block md:py-2 md:px-4 md:bg-button-green md:text-white md:rounded md:hover:bg-button-hover-green md:hover:text-white md:active:bg-active-green font-bold"
                onClick={handleCloseMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
