import CardInfo from "../components/cardNosotros/CardInfo"
import CardNosotros from "../components/cardNosotros/CardNosotros"

export default function Nosotros () {

    const vision = "Ser reconocidos como líderes en el ámbito de las Rentas Vitalicias  Previsionales, siendo la opción preferida de las personas y familias que buscan seguridad y tranquilidad en el reclamo a realizar. Buscamos ser pioneros en defender sus derechos, ofreciendo soluciones integrales y personalizadas, que superen las expectativas de nuestros clientes.";
    const mision = "En IUBILARE, nos comprometemos a brindar un asesoramiento experto y personalizado en todo lo referente a su Renta Vitalicia Previsional, respaldado por más de 29 años de experiencia y trayectoria en el mercado. Nuestro objetivo es proporcionar tranquilidad y confianza a cada uno de nuestros más de 4500 clientes distribuidos por todo el país, resolviendo sus problemáticas previsionales de manera eficiente y efectiva. Nos esforzamos por garantizar que cada cliente reciba el pago de su Renta Vitalicia Previsional con todos los derechos constitucionales que la amparan, satisfaciendo sus necesidades y expectativas.";
    const clientes = "En este mapa se puede apreciar el éxito alcanzados por nuestra empresa a lo largo y ancho del país. Cada punto en el mapa representa un lugar donde hemos trabajado con clientes, logrando resultados excepcionales y construyendo relaciones duraderas. Desde las bulliciosas calles de las grandes ciudades hasta los pintorescos rincones rurales, hemos dejado nuestra huella logrando la satisfacción del cliente. Además, para obtener más información sobre nuestros proyectos exitosos y posiblemente establecer una conexión, desde Iubilare le concedemos la posibilidad de poder contactarse si lo desea, con alguno de nuestros clientes que haya logrado finalizar el trámite con éxito.";

    return (
        <>
            {/* Separador 48px */}
            <div className="min-h-[48px]"></div>

            {/* Seccion Clientes Satisfechos */}
            <div className="hidden 2xl:block 2xl:justify-center">
            <div className="2xl:flex 2xl:justify-center 2xl:px-[115px] 2xl:flex-row 2xl:gap-[92px]">
                <div className="w-[526px] h-[600px] bg-background-violet-light rounded-lg px-[111px] py-[44px]">
                    {/* mapa Argentina */}
                    <img className="" src="./nosotros/map-arg.png" alt="" />
                </div>
                <div className="flex flex-col w-[454px]">
                    <h1 className="text-[30px] font-semibold text-left">Nuestros Clientes Satisfechos</h1>
                    <div className="h-[100px]"></div>
                    <p className="text-justify">{clientes}</p>
                    <div className="h-[55px]"></div>
                    <div>
                        <button className="md:active:text-background-violet md:hover:text-current md:inline-block md:py-2 md:px-4 md:bg-background-violet md:text-white rounded md:hover:bg-background-violet md:hover:text-white md:active:bg-background-violet md:outline-none md:focus:border md:focus:outline-none md:text-[14.14px]">Contactarme con un cliente</button>
                    </div>

                </div>
            </div>
            </div>

            {/* Separador 48px */}
            <div className="min-h-[48px]"></div>

            <div className="px-[16px] 2xl:px-[115px]">
                <div>
                    <h1 className="font-semibold text-[25px] 2xl:text-[35px]" >Equipo de Trabajo</h1>
                </div>

                    {/* Separador 16px Para Seccion Tablet min height 768px*/}
                    <div className="md:min-h-[16px] 2xl:min-h-[72px]"></div>
                    {/* Seccion Equipo de Tabajo para Tablet min height 768px */}
                    <div className="hidden md:flex md:flex-row md:justify-center md:gap-3 md:px-[41px] 2xl:gap-5">
                        <CardNosotros name={"Marcelo Visceglie"} status={"Fundador"} image={"./nosotros/image-1.png"} className="bg-background-violet shadow-avatar-shadow" textClassName="text-white" />
                        <CardNosotros name={"Cristian Pavlovsky"} status={"Fundador"} image={"./nosotros/image-1.png"} className="bg-background-violet shadow-avatar-shadow" textClassName="text-white"/>
                        <CardNosotros name={"Dr. Federico Sallustio"} status={"Abogado"} image={"./nosotros/image-1.png"} className="bg-white shadow-avatar-shadow text-black" textClassTitle="text-background-violet" />
                        <CardNosotros name={"Dr. Federico Sallustio"} status={"Abogado"} image={"./nosotros/image-1.png"} className="bg-white shadow-avatar-shadow text-black" textClassTitle="text-background-violet" />
                    </div>
                    {/* Separador 16px */}
                    <div className="hidden md:block md:min-h-[16px]"></div>
                    <button className="hidden  md:active:text-background-violet md:hover:text-current md:inline-block md:py-2 md:px-4 md:bg-background-violet md:text-white rounded md:hover:bg-background-violet md:hover:text-white md:active:bg-background-violet md:outline-none md:focus:border md:focus:outline-none md:w-[140.13px] md:text-[14.14px]">Ver al equipo</button>


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
                        <div className="min-w-[328px] min-h-[318px] flex justify-center items-center">
                            <button className=" w-1/2 active:text-active-green hover:text-inherit md:w-1/4 md:inline-block py-2 px-4 bg-button-green text-white rounded hover:bg-button-hover-green hover:text-white active:bg-active-green outline-none focus:border focus:outline-none md:text-[14.14px] 2xl:w-1/12 font-bold z-10">Ver Mapa</button>
                            <img className="hidden 2xl:block brightness-75 absolute" src="./nosotros/map-desktop.png" alt="" />
                            <img className="hidden md:block 2xl:hidden brightness-75 absolute" src="./nosotros/map-tablet.png" alt="" />
                            <img className="md:hidden brightness-75 absolute" src="./nosotros/map.png" alt="" />
                            {/* <GoogleMapWrapper  coordinates={{ latitude: -34.59964997287337, longitude: -58.384776132694014}} ></GoogleMapWrapper> */}
                        </div>
                    {/* Separador 15px */}
                    <div className="min-h-[15px] 2xl:h-[105px]"></div>

                </div>
                
            </div>
        </>
    )

};