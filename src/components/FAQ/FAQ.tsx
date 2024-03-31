import { useState } from 'react'
import Arrow from '@mui/icons-material/ExpandMore'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  const preguntas = [
    '¿Quiénes pueden reclamar?',
    '¿Por qué ahora se puede realizar este reclamo?',
    '¿Puedo comenzar un reclamo si perdí la copia de mi póliza?',
    '¿Cuánto demora el juicio?',
    '¿Cuáles son los beneficios del reclamo?',
    '¿Qué pasa si el beneficiario fallece?',
    '¿Cómo se abona el servicio?',
    '¿Dónde atendemos a nuestros clientes?'
  ]
  const preguntas2 = [
    'No tengo 30 años de aportes ¿me puedo jubilar?',
    'Si me jubilo, puedo seguir trabajando en relación de dependencia?',
    'Cuánto tiempo lleva tramitar mi jubilación?',
    '¿Qué pasa si ya no existen las empresas donde trabajé y no tengo certificación de servicios?',
    'Puedo jubilarme si soy extranjero?'
  ]

  const respuestas = [
    'Todos los beneficiarios de Rentas Vitalicias Previsionales pueden asesorarse sin cargo con nosotros para evaluar si están en condiciones de comenzar un reclamo.',
    'Hace unos años, existieron casos en los que la justicia falló en favor de los beneficiarios de rentas vitalicias previsionales. Esto sentó un precedente y les otorgó la posibilidad de reclamar para actualizar y mejorar el valor de su haber.',
    'Por supuesto. Usted tiene el derecho de pedir una copia digital de su póliza a la compañia aseguradora. Este trámite se realiza por correo electrónico o por Whatsapp.',
    'El tiempo estimado de duración del juicio es de 3 años. Sin embargo, cada juicio es diferente y los tiempos pueden variar en cada caso.',
    'Una vez finalizado el proceso, usted recibirá un ajuste de su haber y un retroactivo desde hasta 2 años antes de comenzado el reclamo hasta el momento del cobro.',
    'En caso de fallecimiento del beneficiario, los herederos pueden cobrar el retroactivo correspondiente una vez finalizado el trámite.',
    'Una vez que usted haya cobrado el retroactivo, deberá abonar a la consultora un porcentaje estipulado previamente en nuestro convenio. Nos comunicaremos con usted para informarle cómo debe hacer para cobrar y también para realizar el pago.',
    'Nuestras oficinas en la Ciudad de Buenos Aires están disponibles para recibir a aquellas personas que deseen realizar una consulta o asesorarse personalmente.'
  ]
  const respuestas2 = [
    'Podemos ayudarte a adherir a la moratoria previsional para acreditar los períodos entre los 18 años y hasta el mes de Septiembre de 1993, inclusive. El plan de facilidades puede ser abonado hasta en 60 cuota y podés adherirte al plan antes de cumplir la edad jubilatoria o al momento de iniciar el tramite de jubilacion.',
    '¡Si! Sólo hay que informar al empleador que sos jubilado y de la remuneración mensual, le deducirán un 11 % en conceptos de aportes al "Fondo Nacional de Empleo"',
    'Esto varía de acuerdo a la historia laboral de cada persona, la documentación que tenga para acreditarlo y los registros que Anses tenga sobre los años trabajados.En la actualidad, si el caso no es muy complejo transcurren entre 3 y 4 meses desde que se inicia el trámite ante la ANSES hasta el cobro del primer haber.',
    'En estos casos se contabilizarán automáticamente los años que figuren en la historia previsional de la ANSES. Para acreditar los años faltantes se pueden presentar pruebas como recibos de sueldo que son analizados por el sector de legales de Anses, y serán ellos lo que determinen la acreditación o no, de los servicios por las pruebas acompañadas.',
    'Si tenés 65 años o más y cumplís con los 30 años de servicios, podés jubilarte.También pueden jubilarse quienes sean argentinos o naturalizados con 10 años de residencia en el país (anteriores a la solicitud), o los extranjeros con una residencia mínima de 20 años.'

  ]

  return (
    <div className='lg:px-[80px]'>
      <h1 className='font-semibold text-center text-2xl xl:text-[49px] mb-14 xl:px-[80px]'>
        Preguntas Frecuentes
      </h1>
      <h4 className='text-center text-slate-500 text-[20px] font-semibold font-[Source Sans Pro] xl:text-[31px] mb-7'>
        Rentas Vitalicias
      </h4>
      {preguntas.map((pregunta, index) => (
        <div
          key={index}
          className=' mx-5 my-3 rounded-lg py-4 px-6 shadow-card-shadow md:mx-7 cursor-pointer'
          onClick={() => handleClick(index)}>
          <div className='flex justify-between'>
            <p
              className={`font-semibold text-md text-left ${
                openIndex === index ? 'text-blue-500' : ''
              }`}>
              {pregunta}
            </p>
            <Arrow
              className={
                openIndex === index ? 'text-blue-500 transform rotate-180 ' : ''
              }
            />
          </div>
          {openIndex === index && (
            <p className='text-left text-sm pt-5'>{respuestas[index]}</p>
          )}
        </div>
      ))}
      <h4 className='text-center text-indigo-400 text-[20px] font-semibold font-[Source Sans Pro] xl:text-[31px] mb-7 md:mb-[50px] xl:mt-[112px] mt-[67px] md:mt-[95px]'>
        Jubilacion
      </h4>
      {preguntas2.map((pregunta, index) => (
        <div
          key={index}
          className=' mx-5 my-3 rounded-lg py-4 px-6 shadow-card-shadow md:mx-7 cursor-pointer'
          onClick={() => handleClick(index)}>
          <div className='flex justify-between'>
            <p
              className={`font-semibold text-md text-left ${
                openIndex === index ? 'text-blue-500' : ''
              }`}>
              {pregunta}
            </p>
            <Arrow
              className={
                openIndex === index ? 'text-blue-500 transform rotate-180 ' : ''
              }
            />
          </div>
          {openIndex === index && (
            <p className='text-left text-sm pt-5'>{respuestas2[index]}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQ
