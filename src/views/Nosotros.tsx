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
                <div>
                    <h3 className="text-[20px]">Fundadores</h3>
                    <div className="flex flex-row justify-center gap-3">
                        <CardNosotros/>
                        <CardNosotros/>
                    </div>
                </div>
                <div>
                    <h3 className="text-[20px]">Abogados</h3>
                    <div>Cards</div>
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