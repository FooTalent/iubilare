import React,  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer:React.FC = () => {
    const [open, setOpen] = useState([false, false, false, false]);

    const clickHandle = (index: number) => {
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
            elements: ["Misión y Visión", "Equipo", "Casos de éxito en todo el país"]
        },
        {
            title: "Trámites",
            elements: ["Tiipos de trámite", "Testimonios"]
        },
        {
            title: "Ayuda",
            elements: ["Guía de trámites paso a paso", "Preguntas frecuentes"]
        }
    ];

    return (
        <div className="inset-x-0 bottom-0 flex flex-col bg-background-green p-4 max-w-[425px] mx-auto">
            <div className='flex flex-row justify-between items-center'>
                <img src="./iubilare_logo.png" alt="" className="w-[200px] text-base md:w-[186px]" />
                <div className="flex space-x-4 mb-4">
                    <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-gray-950" />
                    <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 text-gray-950" />
                </div>
            </div>
            <div className='text-left'>
                <p className="mb-2"><FontAwesomeIcon icon={faPhone} className="h-6 w-6 text-gray-950" />Tel: (011) 4342-1817/4783</p>
                <p className='mb-2'><FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-gray-950" />info@iubilare.com</p>
                <p className="mb-2">Av. de Mayo 881 - 4to piso D - CABA - CP: 1084</p>
                <br />
                <div>
                    {lists.map((list, index) => (
                        <div key={index} className='mb-4 relative'>
                            <h2 className='font-bold cursor-pointer' onClick={() => clickHandle(index)}>
                                {list.title}
                            </h2>
                            {open[index] && (
                                <ul>
                                    {list.elements.map((element, i) => (
                                        <li key={i} className='list-none pl-0'>
                                            {element}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      );
};

export default Footer;
