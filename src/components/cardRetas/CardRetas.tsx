export const CardRetas = () => {
  return (
    <div>
      <h4 className='text-center text-slate-500 text-[20px] font-semibold font-[Source Sans Pro] md:hidden'>
        Rentas Vitalicias
      </h4>
      <div className='flex mx-[16px] mt-[27px] h-[239px] rounded-md bg-slate-200 '>
        <div className='bg-slate-500 w-2/12 place-content-center font-bold rounded-l-md'>
          <p className='text-white text-[30px]'>1</p>
        </div>
        <div className=' w-10/12 grid text-left pl-[25px] pr-[18px]'>
          <h4 className='mt-[18px] font-bold text-[20px]'>Documentación</h4>
          <p className='text-[16px] mt-[7px] mb-[17px] leading-5'>
            Para iniciar el trámite es necesario recopilar los documentos
            necesarios, como identificación oficial y comprobantes de ingresos.
            Luego se completan los formularios requeridos y finalmente se
            entrega toda la documentación recopilada en la entidad previsional
            (ANSES)
          </p>
        </div>
      </div>
      <div className='flex mx-[16px] mt-[27px] h-[239px]  rounded-md bg-slate-200 '>
        <div className='bg-slate-500 w-2/12 place-content-center font-bold rounded-l-md'>
          <p className='text-white text-[30px]'>2</p>
        </div>
        <div className=' w-10/12 grid text-left pl-[25px] pr-[18px] '>
          <h4 className='mt-[18px] font-bold text-[20px]'>
            Evaluación y aprobación
          </h4>
          <p className='text-[16px] mt-[7px] mb-[17px] leading-5'>
            La entidad previsional evalúa la documentación y verifica la
            elegibilidad del solicitante.
          </p>
        </div>
      </div>
      <div className='flex mx-[16px] mt-[27px] h-[239px] rounded-md bg-slate-200 '>
        <div className='bg-slate-500 w-2/12 place-content-center font-bold rounded-l-md'>
          <p className='text-white text-[30px]'>3</p>
        </div>
        <div className=' w-10/12 grid text-left pl-[25px] pr-[18px]'>
          <h4 className='mt-[18px] font-bold text-[20px]'>Aprobación</h4>
          <p className='text-[16px] mt-[7px] mb-[17px] leading-5'>
            Notificamos al solicitante si el trámite ha sido aprobado o
            rechazado. En caso de aprobación, el beneficiario puede comenzar a
            percibir la renta previsional.
          </p>
        </div>
      </div>
      <div className='flex mx-[16px] mt-[27px] h-[239px] rounded-md bg-slate-200 '>
        <div className='bg-slate-500 w-2/12 place-content-center font-bold rounded-l-md'>
          <p className='text-white text-[30px]'>4</p>
        </div>
        <div className=' w-10/12 grid text-left pl-[25px] pr-[18px]'>
          <h4 className='mt-[18px] font-bold text-[20px]'>
            Seguimiento y actualización
          </h4>
          <p className='text-[16px] mt-[7px] mb-[17px] leading-5'>
            Realizamos el seguimiento del estado del trámite y mantenemos
            actualizada toda la información relevante con la entidad previsional
          </p>
        </div>
      </div>
    </div>
  )
}
