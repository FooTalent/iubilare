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
                        <CardNosotros name={"Marcelo Visceglie"} status={"Fundador"} image={"./nosotros/image-1.png"} className="bg-background-violet" />
                        <CardNosotros name={"Cristian Pavlovsky"} status={"Fundador"} image={"./nosotros/image-1.png"} className="bg-background-violet"/>
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
                        <CardNosotros name={"Dr. Federico Sallustio"} status={"Abogado"} image={"./nosotros/image-1.png"} className="bg-white shadow-avatar-shadow text-black" />
                        <CardNosotros name={"Dr. Federico Sallustio"} status={"Abogado"} image={"./nosotros/image-1.png"} className="bg-white shadow-avatar-shadow text-black" />
                    </div>
                    <div>

                    </div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]"></div>

                <div className="px-[16px]">
                    <h3 className="text-[20px]">Secretarias</h3>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                    <div className="flex justify-center gap-3">
                        <CardNosotros name={"Mariana Ruiz Perovsky"} status={"Secretaria"} image={"./nosotros/image-2.png"} className="bg-white shadow-avatar-shadow text-black" />
                        <CardNosotros name={"Mariana Ruiz Perovsky"} status={"Secretaria"} image={"./nosotros/image-2.png"} className="bg-white shadow-avatar-shadow text-black" />                        
                    </div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]"></div>
                <div>
                    <h3 className="text-[20px]">Ejecutivos en Gestión Previsional</h3>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                    <div className="flex justify-center gap-3">
                    <CardNosotros name={"Susan Guaragna"} status={"Ejecutivo"} image={"./nosotros/image-3.png"} className="bg-white shadow-avatar-shadow text-black" />
                    <CardNosotros name={"Susan Guaragna"} status={"Ejecutivo"} image={"./nosotros/image-3.png"} className="bg-white shadow-avatar-shadow text-black" />
                    </div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]"></div>
                <div>
                    <h3  className="text-[20px]">Asistentes legales</h3>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                    <div className="flex justify-center gap-3">
                    <CardNosotros name={"Susan Guaragna"} status={"Asistente legal"} image={"./nosotros/image-3.png"} className="bg-white shadow-avatar-shadow text-black" />
                    <CardNosotros name={"Susan Guaragna"} status={"Asistente legal"} image={"./nosotros/image-3.png"} className="bg-white shadow-avatar-shadow text-black" />
                    </div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]"></div>
                <div>
                    <h1 className="font-semibold text-[25px]" >Misión</h1>
                    <div>Card Mision</div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]"></div>
                <div>
                    <h1 className="font-semibold text-[25px]" >Visión</h1>
                    <div>Card Visión</div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]"></div>
                <div>
                    <h1 className="font-semibold text-[25px]" >Donde encontrarnos</h1>
                    <div className="min-w-[328px] min-h-[318px]">Mapa</div>
                </div>
                
            </div>
        </>
    )

};