import { CardRetas } from '../components/cardRetas/CardRetas'
import { CardJubilaciones } from '../components/cardJubilaciones/CardJubilaciones.jsx'
import FAQ from '../components/FAQ/FAQ'
import 'leaflet/dist/leaflet.css'

export default function Ayuda() {
  return (
    <>
      <div>
        <h3 className='mt-[152px] text-[31px] text-neutral-900 font-semibold font-[source sans pro] md:text-[39px]'>
          Guía
          <span className='text-indigo-400'> paso a paso</span>
        </h3>
        <p className="text-[20px] mx-[48px] mt-[24px] px-8 text-center text-neutral-900 font-['Inter'] md:mx-[197px]">
          Le ofrecemos una guía informativa sobre cada uno de los procesos{' '}
        </p>
        <div className='hidden md:flex mx-[150px] md:justify-between md:mt-[69px]'>
          <h4 className='text-center text-slate-500 text-[20px] font-semibold font-[Source Sans Pro]'>
            Rentas Vitalicias
          </h4>
          <h4 className='text-center text-indigo-400 text-[20px] font-semibold font-[Source Sans Pro]'>
            Jubilacion
          </h4>
        </div>
        <div className='grid md:flex mt-[54px] md:mt-[32px]'>
          <CardRetas />
          <CardJubilaciones />
        </div>
      </div>
      <div className='mt-[160px] md:px-[56px]'>
        <h2 className='text-[25px] font-semibold mb-[67px]'>
          ¿Por qué elegirnos?
        </h2>
        <div className='grid md:flex gap-14 md:gap-8'>
          <div className='grid justify-center justify-items-center'>
            <img
              className='w-[110px] h-[107px] md:w-[83px] md:h-[82px]'
              src='/copaicono.png'
              alt='Experiencia y trayectoria'
            />
            <h3 className='text-[20px] font-medium md:text-[16px] md:mt-[28px]'>
              Experiencia y trayectoria{' '}
            </h3>
            <p className='px-[16px] text-[17px] leading-5 text-center md:text-[13px] md:mt-[10px]'>
              Con más de 27 años de experiencia en el mercado, nuestro equipo
              cuenta con el conocimiento y la habilidad necesarios para guiarlo
              a través del proceso de jubilación.
            </p>
          </div>
          <div className='grid justify-center justify-items-center '>
            <img
              className='w-[110px] h-[107px] md:w-[83px] md:h-[82px]'
              src='/personamas.png'
              alt='Enfoque personalizado'
            />
            <h3 className='text-[20px] font-medium md:text-[16px] md:mt-[28px]'>
              Enfoque personalizado
            </h3>
            <p className='px-[16px] text-[17px] leading-5 text-center md:text-[13px] md:mt-[10px]'>
              Valoramos las necesidades individuales de cada cliente y nos
              esforzamos por ofrecer un servicio personalizado y adaptado a sus
              circunstancias particulares.
            </p>
          </div>
          <div className='grid justify-center justify-items-center'>
            <img
              className='w-[110px] h-[107px] md:w-[83px] md:h-[82px]'
              src='/escudoicono.png'
              alt='¿Por qué elegirnos?'
            />
            <h3 className='text-[20px] md:text-[16px] font-medium md:mt-[28px]'>
              Transparencia y confianza
            </h3>
            <p className='px-[16px] text-[17px] leading-5 text-center md:text-[13px] md:mt-[10px]'>
              Nos comprometemos a brindarle información clara, transparente y
              confiable en cada paso del proceso.
            </p>
          </div>
        </div>
      </div>
      <FAQ />
      <div className='flex justify-center mb-16 mt-[67px] '>
        <img src='./home/iubilare.png' alt='' className='w-[71px] h-[47px]' />
      </div>
    </>
  )
}
