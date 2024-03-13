import CardInfo from "../components/cardNosotros/CardInfo"
import CardNosotros from "../components/cardNosotros/CardNosotros"

export default function Nosotros () {

    const vision = "Ser reconocidos como líderes en el ámbito de las Rentas Vitalicias  Previsionales, siendo la opción preferida de las personas y familias que buscan seguridad y tranquilidad en el reclamo a realizar. Buscamos ser pioneros en defender sus derechos, ofreciendo soluciones integrales y personalizadas, que superen las expectativas de nuestros clientes.";
    const mision = "En IUBILARE, nos comprometemos a brindar un asesoramiento experto y personalizado en todo lo referente a su Renta Vitalicia Previsional, respaldado por más de 29 años de experiencia y trayectoria en el mercado. Nuestro objetivo es proporcionar tranquilidad y confianza a cada uno de nuestros más de 4500 clientes distribuidos por todo el país, resolviendo sus problemáticas previsionales de manera eficiente y efectiva. Nos esforzamos por garantizar que cada cliente reciba el pago de su Renta Vitalicia Previsional con todos los derechos constitucionales que la amparan, satisfaciendo sus necesidades y expectativas.";

    return (
        <>
            {/* Separador 48px */}
            <div className="min-h-[48px]"></div>

            <div className="px-[16px]">
                <div>
                    <h1 className="font-semibold text-[25px]" >Equipo de Trabajo</h1>
                </div>

                    {/* Separador 16px Para Seccion Tablet min height 768px*/}
                    <div className="md:min-h-[16px]"></div>
                    {/* Seccion Equipo de Tabajo para Tablet min height 768px */}
                    <div className="hidden md:flex md:flex-row md:justify-center md:gap-3 md:px-[41px]">
                        <CardNosotros name={"Marcelo Visceglie"} status={"Fundador"} image={"./nosotros/image-1.png"} className="bg-background-violet shadow-avatar-shadow" />
                        <CardNosotros name={"Cristian Pavlovsky"} status={"Fundador"} image={"./nosotros/image-1.png"} className="bg-background-violet shadow-avatar-shadow"/>
                        <CardNosotros name={"Dr. Federico Sallustio"} status={"Abogado"} image={"./nosotros/image-1.png"} className="bg-white shadow-avatar-shadow text-black" />
                        <CardNosotros name={"Dr. Federico Sallustio"} status={"Abogado"} image={"./nosotros/image-1.png"} className="bg-white shadow-avatar-shadow text-black" />
                    </div>


            {/* Separador 16px */}
            <div className="min-h-[16px]"></div>

                <div className="px-[16px] md:hidden">
                    <h3 className="text-[20px]">Fundadores</h3>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                    <div className="flex flex-row justify-center gap-3">
                        <CardNosotros name={"Marcelo Visceglie"} status={"Fundador"} image={"./nosotros/image-1.png"} className="bg-background-violet shadow-avatar-shadow" />
                        <CardNosotros name={"Cristian Pavlovsky"} status={"Fundador"} image={"./nosotros/image-1.png"} className="bg-background-violet shadow-avatar-shadow"/>
                    </div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]"></div>

                {/* Imagen separador */}
                <div className="px-[16px] flex justify-center md:hidden" >
                    <img src="./divider.png" alt="" />
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px] md:hidden"></div>

                {/* Seccion Abogados */}
                <div className="px-[16px] md:hidden">
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
                <div className="min-h-[48px] md:hidden"></div>

                {/* Seccion Secretarias */}
                <div className="px-[16px]  md:hidden">
                    <h3 className="text-[20px]">Secretarias</h3>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                    <div className="flex justify-center gap-3">
                        <CardNosotros name={"Mariana Ruiz Perovsky"} status={"Secretaria"} image={"./nosotros/image-2.png"} className="bg-white shadow-avatar-shadow text-black" />
                        <CardNosotros name={"Mariana Ruiz Perovsky"} status={"Secretaria"} image={"./nosotros/image-2.png"} className="bg-white shadow-avatar-shadow text-black" />                        
                    </div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]  md:hidden"></div>

                {/* Seccion Ejecutivos */}
                <div className="px-[16px]  md:hidden">
                    <h3 className="text-[20px]">Ejecutivos en Gestión Previsional</h3>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                    <div className="flex justify-center gap-3">
                    <CardNosotros name={"Susan Guaragna"} status={"Ejecutivo"} image={"./nosotros/image-3.png"} className="bg-white shadow-avatar-shadow text-black" />
                    <CardNosotros name={"Susan Guaragna"} status={"Ejecutivo"} image={"./nosotros/image-3.png"} className="bg-white shadow-avatar-shadow text-black" />
                    </div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px] md:hidden"></div>

                {/* Seccion Asistentes */}
                <div className="px-[16px] md:hidden">
                    <h3  className="text-[20px]">Asistentes legales</h3>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                    <div className="flex justify-center gap-3">
                    <CardNosotros name={"Susan Guaragna"} status={"Asistente legal"} image={"./nosotros/image-3.png"} className="bg-white shadow-avatar-shadow text-black" />
                    <CardNosotros name={"Susan Guaragna"} status={"Asistente legal"} image={"./nosotros/image-3.png"} className="bg-white shadow-avatar-shadow text-black" />
                    </div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px] md:hidden"></div>

                {/* Seccion Mision */}
                <div className="px-[16px] md:px-[41px]">
                    <h1 className="font-semibold text-[25px]" >Misión</h1>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                    <div>
                        <CardInfo info={mision} url="./nosotros/mision.png"/>
                    </div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]"></div>

                {/* Seccion Vision */}
                <div className="px-[16px] md:px-[41px]">
                    <h1 className="font-semibold text-[25px]" >Visión</h1>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                    <div>
                        <CardInfo info={vision} url="./nosotros/vision.png" classOptions="md:flex-row-reverse" />
                    </div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]"></div>

                {/* Seccion Mapa */}
                <div className="px-[16px] md:px-[41px]">
                    <h1 className="font-semibold text-[25px]" >Donde encontrarnos</h1>
                        {/* Separador 15px */}
                        <div className="min-h-[15px]"></div>
                    <div className="min-w-[328px] min-h-[318px]">
                        <img className="hidden md:block" src="./nosotros/map-tablet.png" alt="" />
                        <img className="md:hidden" src="./nosotros/map.png" alt="" />
                    </div>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                </div>
                
            </div>
        </>
    )

};