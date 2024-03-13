import CardAbogados from "../components/cardNosotros/CardAbogados"
import CardNosotros from "../components/cardNosotros/CardNosotros"


export default function Nosotros () {



    return (
        <>
            {/* Separador 48px */}
            <div className="min-h-[48px]"></div>

            <div className="px-[16px]">
                <div>
                    <h1 className="font-semibold text-[25px]" >Equipo de Trabajo</h1>
                </div>

            {/* Separador 16px */}
            <div className="min-h-[16px]"></div>

                <div>
                    <h3 className="text-[20px]">Fundadores</h3>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                    <div className="flex flex-row justify-center gap-3">
                        <CardNosotros name={"Marcelo Visceglie"} status={"Fundador"} image={"./nosotros/image-1.png"} />
                        <CardNosotros name={"Cristian Pavlovsky"} status={"Fundador"} image={"./nosotros/image-1.png"}/>
                    </div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]"></div>

                {/* Imagen separador */}
                <div className="px-[16px] flex justify-center" >
                    <img src="./divider.png" alt="" />
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]"></div>

                <div className="px-[16px]">
                    <h3 className="text-[20px]">Abogados</h3>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                    <div className=" flex justify-center gap-3">
                        <CardAbogados name={"Dr. Federico Sallustio"} status={"Abogado"} image={"./nosotros/image-1.png"} />
                        <CardAbogados name={"Dr. Federico Sallustio"} status={"Abogado"} image={"./nosotros/image-1.png"} />
                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    <h3 className="text-[20px]">Secretarias</h3>
                    <div>Cards</div>
                </div>
                <div>
                    <h3 className="text-[20px]">Ejecutivos en Gestión Previsional</h3>
                    <div></div>
                </div>
                <div>
                    <h3  className="text-[20px]">Asistentes legales</h3>
                    <div></div>
                </div>

                <div>
                    <h1 className="font-semibold text-[25px]" >Misión</h1>
                    <div>Card Mision</div>
                </div>
                <div>
                    <h1 className="font-semibold text-[25px]" >Visión</h1>
                    <div>Card Visión</div>
                </div>
                <div>
                    <h1 className="font-semibold text-[25px]" >Donde encontrarnos</h1>
                    <div className="min-w-[328px] min-h-[318px]">Mapa</div>
                </div>
                
            </div>
        </>
    )

};