import {useState} from 'react';

const Footer = (): JSX.Element => {
    const [open, setOpen] = useState([false, false, false, false]);

  const handleClic = (index: number) => {
    const newState = [...open];
    newState[index] = !newState[index];
    setOpen(newState);
  };

  const lists = [
    {
      title: "Contacto",
      elements: ["Formulario", "Dónde encontrarnos", "Números de contacto"]
    },
    {
      title: "Nosotros",
      elements: ["Misión y visión", "Equipo", "Casos de éxito en todo el país"]
    },
    {
      title: "Trámites",
      elements: ["Tipos de trámite", "Testimonios"]
    },
    {
      title: "Ayuda",
      elements: ["Guía de trámites paso a paso", "Preguntas frecuentes"]
    }
  ];


    return (
        <div className="flex flex-wrap w-[360px] h-[548px] items-start gap-[32px_32px] pt-[32px] pb-[36px] px-[16px] relative bg-[#a3bdb3]">
            <div className="relative w-[194px] h-[88px]">
                <div className="relative w-[174px] h-[78px] -top-px">
                    <div className="absolute w-[174px] h-[78px] top-0 left-0">
                        <img src="./iubilare_logo.png" alt="Logo" />
                    </div>
                </div>
            </div>
            <div className="inline-flex items-start gap-[20px] relative flex-[0_0_auto]">
                <div className="relative w-[33px] h-[33px] bg-x1-secundario rounded-[16.5px]" />
                <div className="inline-flex items-start gap-[10px] px-[5px] py-[2px] absolute top-[7px] left-[7px]">
                    <img className="relative w-[8.23px] h-[15.04px]" alt="Vector" src="vector.png" />
                </div>
            </div>
            <div className="relative w-[32px] h-[33px] bg-x1-secundario rounded-[16px/16.5px]">
                <img
                    className="absolute w-[14px] h-[15px] top-[9px] left-[9px]"
                    alt="Icomoon free"
                    src="icomoon-free-instagram.png"
                />
            </div>
            <div className="flex flex-col w-[300px] items-start gap-[12px] relative">
                <div className="flex w-[178px] h-[24px] items-end gap-[8px] relative">
                    
                    <div className="flex flex-row w-[320px] relative [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[normal]">
                       <img className="w-[24px] h-[24px] mr-3" src="./call.png" alt="Telefono" /> (011) 4342-1817/4783
                       <p></p>
                    </div>
                </div>
                <div className="inline-flex items-end gap-[8px] relative flex-[0_0_auto]">
                    
                    <div className="flex flex-row relative w-fit [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
                       <img className="w-[24px] h-[24px] mr-3" src="./email.png" alt="Email" /> info@iubilare.com
                    </div>
                </div>
                <div className="flex w-[320px] items-end gap-[8px] relative flex-[0_0_auto]">
                    <div className="flex flex-row relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                       <img className="w-[14px] h-[20px] mr-3" src="location.png" alt="Ubicacion" /> Av. de Mayo 881 - 4to D - CABA - CP:1084
                    </div>
                </div>
            </div>
            <div className="Footer flex flex-col justify-start">
            {lists.map((list, index) => (
                <div key={index} className='mb-4'>
                    <h2 className='text-left font-bold cursor-pointer' onClick={() => handleClic(index)}>
                        {list.title}
                    </h2>
                    {open[index] && (
                <ul>
                    {list.elements.map((element, i) => (
                    <li key={i} className='list-none pl-0 flex'>
                        {element}
                    </li>
                            ))}
                        </ul>
                    )}
                </div>
                ))}
            </div>
            <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                <p className="relative w-[270px] mt-[-1.00px] [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
                    Política de Privacidad&nbsp;&nbsp;&nbsp;&nbsp;Términos del Servicio.
                </p>
                <p className="relative w-[280px] [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-[14px] tracking-[0] leading-[normal]">
                    Copyright 2023 - Todos los derechos reservados
                </p>
            </div>
        </div>
    );
};

export default Footer;