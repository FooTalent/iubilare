import React, { useState } from 'react';
import Arrow from '@mui/icons-material/ExpandMore';

interface Props {
  isActive: boolean;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const preguntas = [
    '¿Quiénes pueden reclamar?',
    '¿Por qué ahora se puede realizar este reclamo?',
    '¿Puedo comenzar un reclamo si perdí la copia de mi póliza?',
    '¿Cuánto demora el juicio?',
    '¿Cuáles son los beneficios del reclamo?',
    '¿Qué pasa si el beneficiario fallece?',
    '¿Cómo se abona el servicio?',
    '¿Dónde atendemos a nuestros clientes?'
  ];

  const respuestas = [
    'Todos los beneficiarios de Rentas Vitalicias Previsionales pueden asesorarse sin cargo con nosotros para evaluar si están en condiciones de comenzar un reclamo.',
    'Hace unos años, existieron casos en los que la justicia falló en favor de los beneficiarios de rentas vitalicias previsionales. Esto sentó un precedente y les otorgó la posibilidad de reclamar para actualizar y mejorar el valor de su haber.',
    'Por supuesto. Usted tiene el derecho de pedir una copia digital de su póliza a la compañia aseguradora. Este trámite se realiza por correo electrónico o por Whatsapp.',
    'El tiempo estimado de duración del juicio es de 3 años. Sin embargo, cada juicio es diferente y los tiempos pueden variar en cada caso.',
    'Una vez finalizado el proceso, usted recibirá un ajuste de su haber y un retroactivo desde hasta 2 años antes de comenzado el reclamo hasta el momento del cobro.',
    'En caso de fallecimiento del beneficiario, los herederos pueden cobrar el retroactivo correspondiente una vez finalizado el trámite.',
    'Una vez que usted haya cobrado el retroactivo, deberá abonar a la consultora un porcentaje estipulado previamente en nuestro convenio. Nos comunicaremos con usted para informarle cómo debe hacer para cobrar y también para realizar el pago.',
    'Nuestras oficinas en la Ciudad de Buenos Aires están disponibles para recibir a aquellas personas que deseen realizar una consulta o asesorarse personalmente.'
  ];

  return (
    <div>
      <h1 className='font-semibold text-center text-2xl mb-14'>Preguntas Frecuentes</h1>
      {preguntas.map((pregunta, index) => (
        <div key={index} className=' mx-5 my-3 rounded-lg py-4 px-6 shadow-card-shadow md:mx-7 lg:mx-10' onClick={() => handleClick(index)}>
          <div className='flex justify-between'>
          <p className={`font-semibold text-md text-left ${openIndex === index ? 'text-blue-500' : ''}`}>{pregunta}</p>
          <Arrow className={openIndex === index ? 'text-blue-500 transform rotate-180 ' : ''} />
          </div>
          {openIndex === index && <p className='text-left text-sm pt-5'>{respuestas[index]}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;