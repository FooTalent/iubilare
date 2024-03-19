import Carousel from "../Carousel/Carousel"

export default function Form (){
    let slides = [
        "./form/formCarousel_1.png",
        "./form/formCarousel_2.png",
        "./form/formCarousel_3.png",
        "./form/formCarousel_4.png",
        "./form/formCarousel_5.png",
        "./form/formCarousel_6.png",
      ];
    
    return (
        <>
            <div className="px-[16px] md:px-[40px] 2xl:px-[120px] w-[319px] m-auto md:w-[546px] 2xl:w-full">
                <h3 className="text-[20px] font-semibold md:text-[25px] 2xl:hidden">¿Tenés alguna duda o consulta?</h3>
                <h3 className="text-[20px] font-semibold md:text-[25px] 2xl:hidden">Contactanos, estamos para ayudarte.</h3>

                <h3 className="hidden font-semibold 2xl:block 2xl:text-[39px]">Si tiene alguna duda o consulta, no dude en contactarnos</h3>
                <h3 className="hidden font-semibold 2xl:block 2xl:text-[39px]">Estamos para ayudarlo.</h3>

            </div>
            <div className="min-h-[53px]"></div>
            <div className="flex flex-row md:bg-background-grey md:justify-center md:w-[686px] md:h-[438px] md:m-auto md:pt-[20px] 2xl:w-[1057px] 2xl:h-[675px] 2xl:pt-[48px] 2xl:pb-[48px] 2xl:pl-[60px] 2xl:pr-[60px]">
                <div className="hidden  md:block md:h-full ">
                        <div className="md:h-[373.89px] md:w-[265.4px] bg-white 2xl:w-[411px] 2xl:h-[576px]">
                                <Carousel slides={slides} />

{/*                             <img src="./form/Rectangle 88.png" alt="image"/>
                            <img src="./form/Rectangle 88.png" alt="image"/>
                            <img src="./form/Rectangle 88.png" alt="image"/> */}
                        </div>
                </div>
                <div className="hidden md:block md:w-[15.5px] 2xl:w-[42px]"></div>
                <div className="w-[328px] h-[560px] bg-background-grey flex flex-col items-center m-auto pb-[8px] md:m-0 md:h-[413px]  2xl:w-[484px] 2xl:h[572px]">
                    <div className="flex flex-col items-start w-full pl-[8.5px] pr-[8.5px] pt-[8px]">
                        <label className="pl-3 text-sm" htmlFor="name">Nombre y Apellido</label>
                        <input className="w-full h-[48px] rounded-md border-solid border-slate-300 border focus:outline-none focus:border-active-green pl-4 md:h-[31px] md:w-[265.4px] md:rounded-sm 2xl:h-[48px] 2xl:w-full bg-background-grey" placeholder="Juan Pérez" type="text" name="name" id="name" />
                    </div>
                    <div className="h-[16px] 2xl:min-h-[16px]"></div>
                    <div className="flex flex-col items-start w-full pl-[8.5px] pr-[8.5px]">
                        <label className="pl-3 text-sm" htmlFor="phone">Teléfono</label>
                        <input className="w-full h-[48px] rounded-md border-solid border-slate-300 border focus:outline-none focus:border-active-green pl-4 md:h-[31px] md:w-[265.4px] md:rounded-sm 2xl:h-[48px] 2xl:w-full bg-background-grey" placeholder="3515972515" type="text" name="phone" id="phone" />
                    </div>
                    <div className="h-[16px] 2xl:min-h-[16px]"></div>
                    <div className="flex flex-col items-start w-full pl-[8.5px] pr-[8.5px]">
                        <label className="pl-3 text-sm" htmlFor="phone">Email</label>
                        <input className="w-full h-[48px] rounded-md border-solid border-slate-300 border focus:outline-none focus:border-active-green pl-4 md:h-[31px] md:w-[265.4px] md:rounded-sm 2xl:h-[48px] 2xl:w-full bg-background-grey" placeholder="juanperez@gmail.com" type="text" name="phone" id="phone" />
                    </div>
                    <div className="h-[16px] 2xl:min-h-[16px]"></div>
                    <div className="flex flex-col items-start w-full pl-[8.5px] pr-[8.5px]">
                        <label className="pl-3 text-sm" htmlFor="phone">Consulta</label>
                        <textarea className="w-full h-[160px] rounded-md border-solid border-slate-300 border focus:outline-none focus:border-active-green pl-4 pt-4 md:w-[265.4px] md:h-[103.32px] md:rounded-sm 2xl:h-[160px] 2xl:w-full bg-background-grey" placeholder="Dejanos aquí tus comentarios" name="" id=""></textarea>
                    </div>
                    <div className="h-[16px] 2xl:min-h-[16px]"></div>
                    <div className="flex items-start w-full pl-[8.5px] pr-[8.5px]">
                        <input className="w-[24px] h-[24px] ml-[12px]" type="checkbox" name="checkbox" id="checkbox" />
                        <label className="ml-2" htmlFor="checkbox">Quiero que me asesoren</label>
                    </div>
                    <div className="h-[36px] min-h-[36px]"></div>
                    <div className="w-full pl-[7.5px] pr-[7.5px]">
                        <button className="w-full active:text-active-green hover:text-inherit md:inline-block py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:w-[145.13px] md:text-[14.14px] font-bold  2xl:w-[160px] ">Enviar consulta</button>
                    </div>
                </div>
            </div>
        </>
    )



};