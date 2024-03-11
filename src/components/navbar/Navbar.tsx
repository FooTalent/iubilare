import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex flex-wrap justify-between w-full h-[64px] md:h-[112px] items-center">
                <div className="flex flex-start w-1/2  text-center items-center md:w-[40%]">
                    <img src="./iubilare_logo.png" alt="" className="w-[107px] text-base md:w-[186px]" />
                    {/* <h1 className="h-[49px] bg-slate-400  w-[107px] text-base md:w-[186px] md:h-[85px]">logo</h1> */}
                </div>
                <div className="w-1/2 md:hidden">
                    <div
                        className={`ml-auto w-[24px] h-[24px] cursor-pointer transition-transform duration-300 transform ${
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
                className={`w-full md:overflow-visible md:w-[60%] overflow-hidden ${
                    isOpen ? "transition-height duration-2000 h-auto" : "transition-height duration-2000 h-0"
                }`}
            >
                <ul className="h-full md:flex md:space-x-0.5 md:justify-around items-center">
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Nosotros</a>
                    </li>
                    <li>
                        <a href="#">Trámites</a>
                    </li>
                    <li>
                        <a href="#">Ayuda</a>
                    </li>
                    <li>
                        <a className="md:inline-block md:py-2 md:px-4 md:bg-button-green md:text-white md:rounded" href="#">Contacto</a>
                    </li>
                </ul>
                </div>
            </div>
        </>
    );
}
