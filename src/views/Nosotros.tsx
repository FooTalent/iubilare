import CardInfo from "../components/cardNosotros/CardInfo";
import CardNosotros from "../components/cardNosotros/CardNosotros";
import "leaflet/dist/leaflet.css"; // Make sure to import Leaflet's CSS
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useRef, useEffect } from "react";
import L from 'leaflet';
import { useState } from "react";


export default function Nosotros() {
  // Desplazar la página hacia arriba cuando el componente se monta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const vision =
    "Ser reconocidos como líderes en el ámbito de las Rentas Vitalicias  Previsionales, siendo la opción preferida de las personas y familias que buscan seguridad y tranquilidad en el reclamo a realizar. Buscamos ser pioneros en defender sus derechos, ofreciendo soluciones integrales y personalizadas, que superen las expectativas de nuestros clientes.";
  const mision =
    "En IUBILARE, nos comprometemos a brindar un asesoramiento experto y personalizado en todo lo referente a su Renta Vitalicia Previsional, respaldado por más de 29 años de experiencia y trayectoria en el mercado. Nuestro objetivo es proporcionar tranquilidad y confianza a cada uno de nuestros más de 4500 clientes distribuidos por todo el país, resolviendo sus problemáticas previsionales de manera eficiente y efectiva. Nos esforzamos por garantizar que cada cliente reciba el pago de su Renta Vitalicia Previsional con todos los derechos constitucionales que la amparan, satisfaciendo sus necesidades y expectativas.";
  const clientes =
    "En este mapa se puede apreciar el éxito alcanzados por nuestra empresa a lo largo y ancho del país. Cada punto en el mapa representa un lugar donde hemos trabajado con clientes, logrando resultados excepcionales y construyendo relaciones duraderas. Desde las bulliciosas calles de las grandes ciudades hasta los pintorescos rincones rurales, hemos dejado nuestra huella logrando la satisfacción del cliente. Además, para obtener más información sobre nuestros proyectos exitosos y posiblemente establecer una conexión, desde Iubilare le concedemos la posibilidad de poder contactarse si lo desea, con alguno de nuestros clientes que haya logrado finalizar el trámite con éxito.";
  
  const customRedPinIcon = new L.Icon({
    iconUrl: '/red-pin.png',
    iconSize: [25, 41], 
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34], 
  });
  
  const [view, setView] = useState(false);
    console.log(view)
    
    const personal = [  {name: "Mariana Ruiz Perovsky", status:"Secretaria", className: "bg-white shadow-avatar-shadow text-black", textClassName:"text-black", textClassTitle: "text-background-violet", image:"./nosotros/image-2.png"}, 
                        {name: "Mariana Ruiz Perovsky", status:"Secretaria", className: "bg-white shadow-avatar-shadow text-black", textClassName:"text-black",  textClassTitle: "text-background-violet", image: "./nosotros/image-2.png"},
                        {name: "Mariana Ruiz Perovsky", status:"Secretaria", className: "bg-white shadow-avatar-shadow text-black", textClassName:"text-black",  textClassTitle: "text-background-violet", image: "./nosotros/image-2.png"}, 
                        {name: "Mariana Ruiz Perovsky", status:"Secretaria", className: "bg-white shadow-avatar-shadow text-black", textClassName:"text-black",  textClassTitle: "text-background-violet", image: "./nosotros/image-2.png"},
                    ];
    const asistentes = [
        {name: "Susan Guaragna", status:"Ejecutivo", className: "bg-white shadow-avatar-shadow text-black", textClassName:"text-black",  textClassTitle: "text-background-violet",  image: "./nosotros/image-3.png"}, 
        {name: "Susan Guaragna", status:"Ejecutivo", className: "bg-white shadow-avatar-shadow text-black", textClassName:"text-black",  textClassTitle: "text-background-violet", image: "./nosotros/image-3.png"}, 
        {name: "Susan Guaragna", status:"Asistente legal", className: "bg-white shadow-avatar-shadow text-black", textClassName:"text-black",  textClassTitle: "text-background-violet", image: "./nosotros/image-3.png"},
        {name: "Susan Guaragna", status:"Asistente legal", className: "bg-white shadow-avatar-shadow text-black", textClassName:"text-black",  textClassTitle: "text-background-violet", image: "./nosotros/image-3.png"},
    ]
   
  return (
    <div className="md:mt-[140px]">
      {/* Separador 48px */}
      <div className="min-h-[48px]"></div>

      {/* Seccion Clientes Satisfechos */}
      <div className="hidden 2xl:block 2xl:justify-center">
        <div className="2xl:flex 2xl:justify-center 2xl:px-[115px] 2xl:flex-row 2xl:gap-[92px]">
          <div className="w-[526px] h-[600px] rounded-lg px-[70px] py-[40px]">
            {/* Leaflet Map */}
            <MapContainer
              center={[-34.609, -58.383]}
              zoom={3.5}
              scrollWheelZoom={true}
              className="h-full w-full rounded-lg"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-34.609, -58.383]} icon={customRedPinIcon}>
                <Popup>
                  Nuestra officina: Av. de Mayo 881 - 4to D - CABA - CP:1084
                  Argentina
                </Popup>
              </Marker>
              <Marker position={[-31.401, -64.196]}>
                <Popup>Quier hablar con un cliente de Cordoba</Popup>
              </Marker>
              <Marker position={[-31.5375, -68.5364]}>
                <Popup>Quier hablar con un cliente de San Juan</Popup>
              </Marker>
              <Marker position={[-28.4696, -65.7852 ]}>
                <Popup>Quier hablar con un cliente de Catamarca</Popup>
              </Marker>
              <Marker position={[-26.3333, -60.5000]}>
                <Popup>Quier hablar con un cliente de Chaco</Popup>
              </Marker>
              <Marker position={[-43.6846 , -69.2746]}>
                <Popup>Quier hablar con un cliente de Chubut</Popup>
              </Marker>
              <Marker position={[-27.4684, -58.8344]}>
                <Popup>Quier hablar con un cliente de Corrientes</Popup>
              </Marker>
              <Marker position={[-32.0589, -59.2014]}>
                <Popup>Quier hablar con un cliente de Entre Ríos</Popup>
              </Marker>
              <Marker position={[-26.1775, -58.1781]}>
                <Popup>Quier hablar con un cliente de Formosa</Popup>
              </Marker>
              <Marker position={[-24.1858, -65.2995]}>
                <Popup>Quier hablar con un cliente de Jujuy</Popup>
              </Marker>
              <Marker position={[-36.61475730, -64.28392090]}>
                <Popup>Quier hablar con un cliente de La Pampa</Popup>
              </Marker>
              <Marker position={[-29.4135, -66.8558]}>
                <Popup>Quier hablar con un cliente de La Rioja</Popup>
              </Marker>
              <Marker position={[-32.8895, -68.8458]}>
                <Popup>Quier hablar con un cliente de Mendoza</Popup>
              </Marker>
              <Marker position={[-26.9377, -54.4342]}>
                <Popup>Quier hablar con un cliente de Misiones</Popup>
              </Marker>
              <Marker position={[-38.9516, -68.0591]}>
                <Popup>Quier hablar con un cliente de Neuquén</Popup>
              </Marker>
              <Marker position={[-40.7344, -66.6176]}>
                <Popup>Quier hablar con un cliente de Río Negro</Popup>
              </Marker>
              <Marker position={[-24.7859, -65.4117]}>
                <Popup>Quier hablar con un cliente de Salta</Popup>
              </Marker>
              <Marker position={[-33.2950, -66.3356]}>
                <Popup>Quier hablar con un cliente de San Luis </Popup>
              </Marker>
              <Marker position={[-48.7514, -69.2493]}>
                <Popup>Quier hablar con un cliente de Santa Cruz </Popup>
              </Marker>
              <Marker position={[-31.6324, -60.6995]}>
                <Popup>Quier hablar con un cliente de Santa Fe </Popup>
              </Marker>
              <Marker position={[-27.7951, -64.2615]}>
                <Popup>Quier hablar con un cliente de Santiago del Estero </Popup>
              </Marker>
              <Marker position={[-54.3084, -67.7452]}>
                <Popup>Quier hablar con un cliente de Tierra del Fuego </Popup>
              </Marker>
              <Marker position={[-26.8083, -65.2176]}>
                <Popup>Quier hablar con un cliente de Tucumán </Popup>
              </Marker>
              {/* Add more markers as needed */}
            </MapContainer>
          </div>
          <div className="flex flex-col w-[454px]">
            <h1 className="text-[30px] font-semibold text-left">
              Nuestros Clientes Satisfechos
            </h1>
            <div className="h-[100px]"></div>
            <p className="text-justify">{clientes}</p>
            <div className="h-[55px]"></div>
            <div>
              <button className="md:active:text-background-violet md:hover:text-current md:inline-block md:py-2 md:px-4 md:bg-background-violet md:text-white rounded md:hover:bg-background-violet md:hover:text-white md:active:bg-background-violet md:outline-none md:focus:border md:focus:outline-none md:text-[14.14px]">
                Contactarme con un cliente
              </button>

    

            {/* Separador 48px */}
            <div className="min-h-[48px] md:hidden 2xl:block"></div>

            <div className="px-[16px] 2xl:px-[115px]">
                <div>
                    <h1 className="font-semibold text-[25px] 2xl:text-[35px]" >Equipo de Trabajo</h1>
                </div>

                    {/* Separador 16px Para Seccion Tablet min height 768px*/}
                    <div className="md:min-h-[16px] 2xl:min-h-[72px]"></div>
                    {/* Seccion Equipo de Tabajo para Tablet min height 768px */}
                    <div className="hidden md:flex md:flex-row md:justify-center md:gap-3 md:px-[41px] 2xl:gap-5">
                        <CardNosotros name={"Marcelo Visceglie"} status={"Fundador"} image={"./nosotros/image-1.png"} className="bg-background-violet shadow-avatar-shadow" textClassName="text-white" textClassTitle="text-white" />
                        <CardNosotros name={"Cristian Pavlovsky"} status={"Fundador"} image={"./nosotros/image-1.png"} className="bg-background-violet shadow-avatar-shadow" textClassName="text-white"  textClassTitle ="text-white"/>
                        <CardNosotros name={"Dr. Federico Sallustio"} status={"Abogado"} image={"./nosotros/image-1.png"} className="bg-white shadow-avatar-shadow text-black" textClassTitle="text-background-violet" />
                        <CardNosotros name={"Dr. Federico Sallustio"} status={"Abogado"} image={"./nosotros/image-1.png"} className="bg-white shadow-avatar-shadow text-black" textClassTitle="text-background-violet" />
                    </div>

                    {
                        view && (
                            <div>
                            <div className="min-h-[20px]"></div>
                            <div className="hidden md:flex md:flex-row md:justify-center md:gap-3 md:px-[41px] 2xl:gap-5">
                                {personal.map((ele, index) => (
                                    <CardNosotros key={index} name={ele.name} status={ele.status} className={ele.className} image={ele.image} textClassName={ele.textClassName} textClassTitle={ele.textClassTitle}></CardNosotros>
                                ))}
                            </div>
                                <div className="min-h-[20px]"></div>
                            <div className="hidden md:flex md:flex-row md:justify-center md:gap-3 md:px-[41px] 2xl:gap-5">
                                {asistentes.map((ele, index) => (
                                    <CardNosotros key={index} name={ele.name} status={ele.status} className={ele.className} image={ele.image} textClassName={ele.textClassName} textClassTitle={ele.textClassTitle}></CardNosotros>
                                                        ))}
                            </div>
                            </div>
                        )

                    }
                    {/* Separador 16px */}
                    <div className="hidden md:block md:min-h-[16px]"></div>
                    <button className="hidden  md:active:text-background-violet md:hover:text-current md:inline-block md:py-2 md:px-4 md:bg-background-violet md:text-white rounded md:hover:bg-background-violet md:hover:text-white md:active:bg-background-violet md:outline-none md:focus:border md:focus:outline-none md:w-auto md:text-[14.14px] 2xl:w-[351px]" onClick={ () => setView(!view) }>{ !view ? "Quiero conocer al resto del equipo" : "Ver menos"}</button>


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
                    <h1 className="font-semibold text-[25px] md:hidden">Misión</h1>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                    <div>
                        <CardInfo info={mision} classTitle="Misión" url="./nosotros/mision.png"/>
                    </div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]"></div>

                {/* Seccion Vision */}
                <div className="px-[16px] md:px-[41px]">
                    <h1 className="font-semibold text-[25px] md:hidden" >Visión</h1>
                    {/* Separador 15px */}
                    <div className="min-h-[15px]"></div>
                    <div>
                        <CardInfo info={vision} classTitle="Visión" url="./nosotros/vision.png" classOptions="md:flex-row-reverse" />
                    </div>
                </div>

                {/* Separador 48px */}
                <div className="min-h-[48px]"></div>

                {/* Seccion Mapa */}
                <div className="px-[16px] md:px-[41px]">
                    <h1 className="font-semibold text-[25px]">Dónde encontrarnos</h1>
                        {/* Separador 15px */}
                        <div className="min-h-[15px]"></div>
                        <div className="min-w-[328px] min-h-[318px] flex justify-center items-center">
                        <div className="relative overflow-hidden w-full max-w-[329px] h-[318px] sm:max-w-[686px] sm:h-[263px] lg:max-w-[1292px] lg:h-[477px]">
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4177.3877059145425!2d-58.38277614342871!3d-34.60849481901064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad1a260b5a3%3A0x8a1f9dd9f8b9d3ef!2sAv.%20de%20Mayo%20881%2C%20C1084AAD%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sco!4v1710770247526!5m2!1sen!2sco"
                            style={{ border: 0, width: '100%', height: '100%' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        </div>
                    {/* Separador 15px */}
                    <div className="min-h-[15px] 2xl:h-[105px]"></div>

                </d
            </div>
          </div>
        </div>
      </div>

      {/* Separador 48px */}
      <div className="min-h-[48px] md:hidden 2xl:block"></div>

      <div className="px-[16px] 2xl:px-[115px]">
        <div>
          <h1 className="font-semibold text-[25px] 2xl:text-[35px]">
            Equipo de Trabajo
          </h1>
        </div>

        {/* Separador 16px Para Seccion Tablet min height 768px*/}
        <div className="md:min-h-[16px] 2xl:min-h-[72px]"></div>
        {/* Seccion Equipo de Tabajo para Tablet min height 768px */}
        <div className="hidden md:flex md:flex-row md:justify-center md:gap-3 md:px-[41px] 2xl:gap-5">
          <CardNosotros
            name={"Marcelo Visceglie"}
            status={"Fundador"}
            image={"./nosotros/image-1.png"}
            className="bg-background-violet shadow-avatar-shadow"
            textClassName="text-white"
          />
          <CardNosotros
            name={"Cristian Pavlovsky"}
            status={"Fundador"}
            image={"./nosotros/image-1.png"}
            className="bg-background-violet shadow-avatar-shadow"
            textClassName="text-white"
          />
          <CardNosotros
            name={"Dr. Federico Sallustio"}
            status={"Abogado"}
            image={"./nosotros/image-1.png"}
            className="bg-white shadow-avatar-shadow text-black"
            textClassTitle="text-background-violet"
          />
          <CardNosotros
            name={"Dr. Federico Sallustio"}
            status={"Abogado"}
            image={"./nosotros/image-1.png"}
            className="bg-white shadow-avatar-shadow text-black"
            textClassTitle="text-background-violet"
          />
        </div>
        {/* Separador 16px */}
        <div className="hidden md:block md:min-h-[16px]"></div>
        <button className="hidden  md:active:text-background-violet md:hover:text-current md:inline-block md:py-2 md:px-4 md:bg-background-violet md:text-white rounded md:hover:bg-background-violet md:hover:text-white md:active:bg-background-violet md:outline-none md:focus:border md:focus:outline-none md:w-[140.13px] md:text-[14.14px]">
          Ver al equipo
        </button>

        {/* Separador 16px */}
        <div className="min-h-[16px]"></div>

        <div className="px-[16px] md:hidden">
          <h3 className="text-[20px]">Fundadores</h3>
          {/* Separador 15px */}
          <div className="min-h-[15px]"></div>
          <div className="flex flex-row justify-center gap-3">
            <CardNosotros
              name={"Marcelo Visceglie"}
              status={"Fundador"}
              image={"./nosotros/image-1.png"}
              className="bg-background-violet shadow-avatar-shadow"
            />
            <CardNosotros
              name={"Cristian Pavlovsky"}
              status={"Fundador"}
              image={"./nosotros/image-1.png"}
              className="bg-background-violet shadow-avatar-shadow"
            />
          </div>
        </div>

        {/* Separador 48px */}
        <div className="min-h-[48px]"></div>

        {/* Imagen separador */}
        <div className="px-[16px] flex justify-center md:hidden">
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
            <CardNosotros
              name={"Dr. Federico Sallustio"}
              status={"Abogado"}
              image={"./nosotros/image-1.png"}
              className="bg-white shadow-avatar-shadow text-black"
            />
            <CardNosotros
              name={"Dr. Federico Sallustio"}
              status={"Abogado"}
              image={"./nosotros/image-1.png"}
              className="bg-white shadow-avatar-shadow text-black"
            />
          </div>
          <div></div>
        </div>

        {/* Separador 48px */}
        <div className="min-h-[48px] md:hidden"></div>

        {/* Seccion Secretarias */}
        <div className="px-[16px]  md:hidden">
          <h3 className="text-[20px]">Secretarias</h3>
          {/* Separador 15px */}
          <div className="min-h-[15px]"></div>
          <div className="flex justify-center gap-3">
            <CardNosotros
              name={"Mariana Ruiz Perovsky"}
              status={"Secretaria"}
              image={"./nosotros/image-2.png"}
              className="bg-white shadow-avatar-shadow text-black"
            />
            <CardNosotros
              name={"Mariana Ruiz Perovsky"}
              status={"Secretaria"}
              image={"./nosotros/image-2.png"}
              className="bg-white shadow-avatar-shadow text-black"
            />
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
            <CardNosotros
              name={"Susan Guaragna"}
              status={"Ejecutivo"}
              image={"./nosotros/image-3.png"}
              className="bg-white shadow-avatar-shadow text-black"
            />
            <CardNosotros
              name={"Susan Guaragna"}
              status={"Ejecutivo"}
              image={"./nosotros/image-3.png"}
              className="bg-white shadow-avatar-shadow text-black"
            />
          </div>
        </div>

        {/* Separador 48px */}
        <div className="min-h-[48px] md:hidden"></div>

        {/* Seccion Asistentes */}
        <div className="px-[16px] md:hidden">
          <h3 className="text-[20px]">Asistentes legales</h3>
          {/* Separador 15px */}
          <div className="min-h-[15px]"></div>
          <div className="flex justify-center gap-3">
            <CardNosotros
              name={"Susan Guaragna"}
              status={"Asistente legal"}
              image={"./nosotros/image-3.png"}
              className="bg-white shadow-avatar-shadow text-black"
            />
            <CardNosotros
              name={"Susan Guaragna"}
              status={"Asistente legal"}
              image={"./nosotros/image-3.png"}
              className="bg-white shadow-avatar-shadow text-black"
            />
          </div>
        </div>

        {/* Separador 48px */}
        <div className="min-h-[48px] md:hidden"></div>

        {/* Seccion Mision */}
        <div className="px-[16px] md:px-[41px]">
          <h1 className="font-semibold text-[25px] md:hidden">Misión</h1>
          {/* Separador 15px */}
          <div className="min-h-[15px]"></div>
          <div>
            <CardInfo
              info={mision}
              classTitle="Misión"
              url="./nosotros/mision.png"
            />
          </div>
        </div>

        {/* Separador 48px */}
        <div className="min-h-[48px]"></div>

        {/* Seccion Vision */}
        <div className="px-[16px] md:px-[41px]">
          <h1 className="font-semibold text-[25px] md:hidden">Visión</h1>
          {/* Separador 15px */}
          <div className="min-h-[15px]"></div>
          <div>
            <CardInfo
              info={vision}
              classTitle="Visión"
              url="./nosotros/vision.png"
              classOptions="md:flex-row-reverse"
            />
          </div>
        </div>

        {/* Separador 48px */}
        <div className="min-h-[48px]"></div>

        {/* Seccion Mapa */}
        <div className="px-[16px] md:px-[41px]">
          <h1 className="font-semibold text-[25px]">Dónde encontrarnos</h1>
          {/* Separador 15px */}
          <div className="min-h-[15px]"></div>
          <div className="min-w-[328px] min-h-[318px] flex justify-center items-center">
            <div className="relative overflow-hidden w-full max-w-[329px] h-[318px] sm:max-w-[686px] sm:h-[263px] lg:max-w-[1292px] lg:h-[477px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4177.3877059145425!2d-58.38277614342871!3d-34.60849481901064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad1a260b5a3%3A0x8a1f9dd9f8b9d3ef!2sAv.%20de%20Mayo%20881%2C%20C1084AAD%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sco!4v1710770247526!5m2!1sen!2sco"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Separador 15px */}
          <div className="min-h-[15px] 2xl:h-[105px]"></div>
        </div>
      </div>
    </div>
  );
}
