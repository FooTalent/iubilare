export const CardImg = ({ img, title, desc }) => {
  return (
    <div className='md:w-1/3 font-["source sans pro"]'>
      <div className='grid justify-center justify-items-center'>
        <img
          className='w-[110px] h-[107px] md:w-[83px] md:h-[82px] xl:w-[156px] xl:h-[153px]'
          src={img}
          alt={title}
        />
        <h3 className='text-[20px] font-medium md:text-[16px] md:mt-[28px] xl:text-[25px]'>
          {title}
        </h3>
        <p className='px-[16px] text-[17px] leading-5 md:leading-3 text-center md:text-[13px] md:text-center md:mt-[10px] xl:text-[20px] xl:leading-5'>
          {desc}
        </p>
      </div>
    </div>
  )
}
