import React from 'react';

export default function Home() {

    return (
        <>
            <div className="text-center mb-40" >
            27 años de experiencia. Asesoramiento personalizado. 
            Soluciones previsionales confiables en todo el país.
                <img src="/Youtubeplayer.png" alt="Hero" className="mx-auto" />
                <img src="/botoncontactodefault.png" alt="Hero" className="mx-auto" />
            </div>
            <div className="mb-50">
                Que hacemos
            </div>
            <div>
                <h2 className='font-bold text-xl text-center mb-10'>¿Quienes somos?</h2>
                <div className='flex flex-col items-center'>
                    <div>
                        <img src="/quienesSomos1.jpg" className='w-[195px] h-[195px] rounded-full mx-auto mb-5 shadow-xl' alt="Marcelo Visceglie" />
                        <h3 className='font-bold text-lg text-center'>Marcelo Visceglie</h3>
                        <h4 className='text-lg text-center mb-10'>Fundador de Iubilare</h4>
                    </div>
                    <div>
                        <img src="/quienesSomos2.jpg" className='w-[195px] h-[195px] rounded-full mx-auto mb-5 shadow-xl' alt="Cristian Pavlovsky" />
                        <h3 className='font-bold text-lg text-center'>Cristian Pavlovsky</h3>
                        <h4 className='text-lg text-center mb-10'>Fundador de Iubilare</h4>
                    </div>
                    <button className='w-11/12 bg-button-green text-white font-bold text-xl mx-auto max-h-[50px]'>Ver al equipo</button>
                </div>
            </div>
            <div>
                Testomonios
                Formulario
            </div>
            <footer className="text-center py-4">
            </footer>
        </>
    )
};