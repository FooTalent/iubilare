import { useState } from "react";


const Footer = (): JSX.Element => {

    const [contacto, setContacto] = useState(false);
    const [nosotros, setNosotros] = useState(false);
    const [tramites, setTramites] = useState(false);
    const [ayuda, setAyuda] = useState(false);



    return (
        /* w-[360px]  */
        <div className="flex flex-wrap h-[548px] items-start gap-[32px_32px] pt-[32px] pb-[36px] px-[16px] relative bg-[#a3bdb3]">

        <div className='md:flex md:flex-col '>
        <div className='flex flex-row  md:flex-col'>
        <div className="relative w-[194px] h-[88px]">
                <div className="relative w-[174px] h-[78px] -top-px">
                    <div className="absolute w-[174px] h-[78px] top-0 left-0">
                        <img src="./iubilare_logo.png" alt="Logo" />
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
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
            </div>
        </div>
            



            <div className="flex flex-col w-[300px]">
                <div className='flex flex-row'>
                    <div className='w-[24px] h-[24px] flex justify-center'>
                        <img className="" src="./call.png" alt="Telefono" />                        
                    </div>
                    <div className='pl-[8px] flex self-end'>
                        <p className='text-sm'>(011) 4342-1817/4783</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                <div className='w-[24px] h-[24px] flex justify-center'>
                        <img className="" src="./email.png" alt="Email" /> 
                    </div>
                    <div className='pl-[8px] flex self-end'>
                        <p className='text-sm'>info@iubilare.com</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='w-[24px] h-[24px] flex justify-center'>
                        <img className="" src="location.png" alt="Ubicacion" />
                    </div>
                    <div className='pl-[8px] flex self-end'>
                        <p className='text-sm'>Av. de Mayo 881 - 4to D - CABA - CP:1084</p>
                    </div>
                </div>


                <div className="flex w-[320px] items-end gap-[8px] relative flex-[0_0_auto]">
                    <div className="flex flex-row relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">

                    </div>
                </div>
            </div>
        </div>



            
            <div className="Footer flex flex-col justify-start">
            <div className='mb-4'>
                    <h2 className='text-left font-bold cursor-pointer' onClick={()=> {setContacto(!contacto)} }>Contacto</h2>
                    <ul className={`text-left md:block ${contacto ? 'block' : 'hidden'}`}>
                        <li>Formulario</li>
                        <li>Donde encontrarnos</li>
                        <li>Números de contacto</li>
                    </ul>
            </div>
            <div className='mb-4'>
                    <h2 className='text-left font-bold cursor-pointer' onClick={() => setNosotros(!nosotros)}>Nosotros</h2>
                    <ul className={`text-left md:block ${nosotros ? 'block' : 'hidden'}`}>
                        <li>Misión y visión</li>
                        <li>Equipo</li>
                        <li>Casos de éxito en todo el país</li>
                    </ul>
            </div>
            <div className='mb-4'>
                    <h2 className='text-left font-bold cursor-pointer' onClick={() => setTramites(!tramites)}>Trámites</h2>
                    <ul className={`text-left md:block ${tramites ? 'block' : 'hidden'}`}>
                        <li>Tipos de trámite</li>
                        <li>Testimonios</li>
                    </ul>
            </div>
            <div className='mb-4'>
                    <h2 className='text-left font-bold cursor-pointer' onClick={() => {setAyuda(!ayuda)}}>Ayuda</h2>
                    <ul className={`text-left md:block ${ayuda ? 'block' : 'hidden'}`}>
                        <li>Guía de trámites paso a paso</li>
                        <li>Preguntas frecuentes</li>
                    </ul>
            </div>
            </div>


            <div className="flex w-full flex-col items-start gap-[4px] relative flex-[0_0_auto]">
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