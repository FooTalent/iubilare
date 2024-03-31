import { CardAyuda } from '../components/cardAyuda/CardAyuda.jsx'
import { CardImg } from '../components/cardImg/CardImg.jsx'

import FAQ from '../components/FAQ/FAQ'
import 'leaflet/dist/leaflet.css'
import cardAyuda from '../json/cardAyuda.json'
import cardImg from '../json/cardImg.json'

export default function Ayuda() {
  return (
    <>
      <div>
        <h3 className='mt-[152px] text-[31px] text-neutral-900 font-semibold font-[source sans pro] md:text-[39px] xl:text-[64px]'>
          Guía
          <span className='text-indigo-400'> paso a paso</span>
        </h3>
        <p className="text-[20px] mx-[48px] mt-[24px] px-8 text-center text-neutral-900 font-['Inter'] md:mx-[197px] xl:px-16 xl:text-[31px] xl:mx-[270px]">
          Le ofrecemos una guía informativa sobre cada uno de los procesos{' '}
        </p>
        {/* grid md:flex mt-[54px] md:mt-[32px] mx-[1px] md:mx-[40px] xl:mx-[120px] */}
        <div className='grid md:flex mt-[54px] md:mt-[32px] mx-[16px] md:mx-[40px] xl:mx-[120px] gap-[36px] xl:gap-[71px]'>
          <div className=''>
            <h4 className='text-center text-slate-500 text-[20px] font-semibold font-[Source Sans Pro] xl:text-[31px] mb-7'>
              Rentas Vitalicias
            </h4>
            {cardAyuda.pasos.map((paso) => (
              <CardAyuda
                title={paso.title}
                number={paso.number}
                desc={paso.desc}
                color={'green'}
              />
            ))}
          </div>
          <div>
            <h4 className='text-center text-indigo-400 text-[20px] font-semibold font-[Source Sans Pro] xl:text-[31px] mb-7 md:mb-[50px]'>
              Jubilacion
            </h4>
            {cardAyuda.paso2.map((paso) => (
              <CardAyuda
                title={paso.title}
                number={paso.number}
                desc={paso.desc}
                color={'blue'}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='mt-[160px] md:px-[56px] xl:px-[112px]'>
        <h2 className='text-[25px] font-semibold mb-[67px] md:text-[31px] xl:text-[49px]'>
          ¿Por qué elegirnos?
        </h2>
        <div className='grid md:flex gap-14 md:gap-8 xl:gap-[75px] mb-[188px] md:mb-[128px]'>
          {cardImg.items.map((item) => (
            <CardImg
              img={item.img}
              title={item.title}
              desc={item.descripcion}
            />
          ))}
        </div>
      </div>
      <FAQ />
      <div className='flex justify-center mb-16 mt-[67px] '>
        <img
          src='./home/iubilare.png'
          alt=''
          className='w-[71px] h-[47px] xl:w-[172px] xl:h-[113px]'
        />
      </div>
    </>
  )
}
