import { useEffect, useState } from "react";
import CardInfo from "../components/cardNosotros/CardInfo";
import CardNosotros from "../components/cardNosotros/CardNosotros";
import "leaflet/dist/leaflet.css"; // Make sure to import Leaflet's CSS
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function Nosotros() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [view, setView] = useState(false);
  const vision =
    "Ser reconocidos como líderes en el ámbito de las Rentas Vitalicias  Previsionales, siendo la opción preferida de las personas y familias que buscan seguridad y tranquilidad en el reclamo a realizar. Buscamos ser pioneros en defender sus derechos, ofreciendo soluciones integrales y personalizadas, que superen las expectativas de nuestros clientes.";
  const mision =
    "En IUBILARE, nos comprometemos a brindar un asesoramiento experto y personalizado en todo lo referente a Rentas Vitalicias Previsionales y Jubilaciones, respaldado por más de 29 años de experiencia y trayectoria en el mercado. Nuestro objetivo es proporcionar tranquilidad y confianza, para que nuestros clientes puedan resolver sus problemáticas previsionales de manera eficiente y efectiva. Nos esforzamos por garantizar que todas las personas reciban el pago de su Beneficio Previsional con todos los derechos constitucionales que la amparan, satisfaciendo sus necesidades y expectativas.";
  const clientes =
    "En este espacio, encontrará testimonios directos de nuestros clientes satisfechos en cada provincia. Lo invitamos a contactarse con ellos y conocer por qué somos la elección confiable para satisfacer tus necesidades previsionales. ";
  const clientes1 =
    "  Estamos comprometidos a ayudarte a asegurar tu bienestar financiero y tu tranquilidad en el futuro.";
  const clientes2 = "¡Estamos aquí para asistirlo en todo momento!";

  const personal = [
    {
      index: 1,
      name: "Carolina Dodds",
      status: "Gestión previsional",
      className:
        "flex px-5 flex-col items-center text-center min-w-fit bg-white shadow-avatar-shadow text-black  ",
      textClassName: "text-black",
      textClassTitle: "font-semibold text-[13px] xl:text-[25px] text-[#747DD6]",
      image: "./nosotros/carolina.png",
    },
    {
      index: 2,
      name: "Susana Guaragna",
      status: "Gestión previsional",
      className:
        "flex px-5 flex-col items-center text-center min-w-fit bg-white shadow-avatar-shadow text-black ",
      textClassName: "text-black",
      textClassTitle: "font-semibold text-[13px] xl:text-[25px] text-[#747DD6]",
      image: "./nosotros/susana.png",
    },
    {
      index: 3,
      name: "Silvia Di Nanno",
      status: "Gestión previsional",
      className:
        "flex px-5 flex-col items-center text-center min-w-fit bg-white shadow-avatar-shadow text-black ",
      textClassName: "text-black",
      textClassTitle: "font-semibold text-[13px] xl:text-[25px] text-[#747DD6]",
      image: "./nosotros/silvia.png",
    },
    {
      index: 4,
      name: "Josefina Prerovsky",
      status: "Gestión previsional",
      className:
        "flex px-5 flex-col items-center text-center min-w-fit bg-white shadow-avatar-shadow text-black ",
      textClassName: "text-black",
      textClassTitle: "font-semibold text-[13px] xl:text-[25px] text-[#747DD6]",
      image: "./nosotros/josefina.png",
    },
    {
      index: 5,
      name: "Monica Montrasi",
      status: "Secretaria",
      className:
        "flex px-5 flex-col items-center text-center min-w-fit bg-white shadow-avatar-shadow text-black ",
      textClassName: "text-black",
      textClassTitle: "font-semibold text-[13px] xl:text-[25px] text-[#747DD6]",
      image: "./nosotros/monica.png",
    },
    {
      index: 6,
      name: "Eliana R. Prerovsky",
      status: "Secretaria",
      className:
        "flex px-5 flex-col items-center text-center min-w-fit bg-white shadow-avatar-shadow text-black ",
      textClassName: "text-black",
      textClassTitle: "font-semibold text-[13px] xl:text-[25px] text-[#747DD6]",
      image: "./nosotros/eliana.png",
    },
  ];
  /* const asistentes = [
    {
      name: "Susan Guaragna",
      status: "Ejecutivo",
      className: "bg-white shadow-avatar-shadow text-black",
      textClassName: "text-black",
      textClassTitle: "text-background-violet",
      image: "./nosotros/image-3.png",
    },
    {
      name: "Susan Guaragna",
      status: "Ejecutivo",
      className: "bg-white shadow-avatar-shadow text-black",
      textClassName: "text-black",
      textClassTitle: "text-background-violet",
      image: "./nosotros/image-3.png",
    },
    {
      name: "Susan Guaragna",
      status: "Asistente legal",
      className: "bg-white shadow-avatar-shadow text-black",
      textClassName: "text-black",
      textClassTitle: "text-background-violet",
      image: "./nosotros/image-3.png",
    },
    {
      name: "Susan Guaragna",
      status: "Asistente legal",
      className: "bg-white shadow-avatar-shadow text-black",
      textClassName: "text-black",
      textClassTitle: "text-background-violet",
      image: "./nosotros/image-3.png",
    },
  ]; */
  const customRedPinIcon = new L.Icon({
    iconUrl: "/ubiIubilare.svg",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className="md:mt-[140px]">
      {/* Separador 48px */}
      <div className="min-h-[48px] mb-20">
        <h1 className="md:text-[31px] lg:text-[64px] font-semibold">
          Acerca de <span className="text-[#747DD6]">nosotros</span>
        </h1>
        <p className="md:text-[20px] lg:text-[31px]">
          Contamos con cobertura en todo el país{" "}
        </p>
      </div>

      {/* Seccion Clientes Satisfechos */}
      <div className="block justify-center md:mb-24 lg:mb-48">
        <div className="flex justify-center md:px-8 lg:px-[115px] flex-row md:gap-7 lg:gap-[92px]">
          <div className="w-[526px] md:h-[470px] lg:h-[600px] rounded-lg z-0">
            {/* Leaflet Map */}
            <MapContainer
              center={[-34.609, -58.383]}
              zoom={3.5}
              scrollWheelZoom={true}
              className="md:h-[470px] lg:h-[600px] w-full rounded-lg"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-34.609, -58.383]} icon={customRedPinIcon}>
                <Popup>
                  <p
                    style={{
                      margin: "0",
                      fontSize: "17px",
                      width: "100%",
                      letterSpacing: "2px",
                      fontWeight: "bolder",
                    }}
                  >
                    Clientes en Buenos Aires
                  </p>{" "}
                  <br />{" "}
                  <a
                    style={{
                      margin: "auto",
                      width: "131px",
                      height: "40px",
                      padding: "1.5px 7px",
                      color: "white",
                      background: "#439373",
                      borderRadius: "5px",
                      textAlign: "center",
                      marginTop: "",
                    }}
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Buenos%20Aires.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-31.401, -64.196]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Cordoba</Popup>
              </Marker>
              <Marker position={[-31.5375, -68.5364]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de San Juan</Popup>
              </Marker>
              <Marker position={[-28.4696, -65.7852]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Catamarca</Popup>
              </Marker>
              <Marker position={[-26.3333, -60.5]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Chaco</Popup>
              </Marker>
              <Marker position={[-43.6846, -69.2746]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Chubut</Popup>
              </Marker>
              <Marker position={[-27.4684, -58.8344]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Corrientes</Popup>
              </Marker>
              <Marker position={[-32.0589, -59.2014]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Entre Ríos</Popup>
              </Marker>
              <Marker position={[-26.1775, -58.1781]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Formosa</Popup>
              </Marker>
              <Marker position={[-24.1858, -65.2995]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Jujuy</Popup>
              </Marker>
              <Marker
                position={[-36.6147573, -64.2839209]}
                icon={customRedPinIcon}
              >
                <Popup>Quiero hablar con un cliente de La Pampa</Popup>
              </Marker>
              <Marker position={[-29.4135, -66.8558]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de La Rioja</Popup>
              </Marker>
              <Marker position={[-32.8895, -68.8458]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Mendoza</Popup>
              </Marker>
              <Marker position={[-26.9377, -54.4342]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Misiones</Popup>
              </Marker>
              <Marker position={[-38.9516, -68.0591]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Neuquén</Popup>
              </Marker>
              <Marker position={[-40.7344, -66.6176]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Río Negro</Popup>
              </Marker>
              <Marker position={[-24.7859, -65.4117]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Salta</Popup>
              </Marker>
              <Marker position={[-33.295, -66.3356]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de San Luis </Popup>
              </Marker>
              <Marker position={[-48.7514, -69.2493]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Santa Cruz </Popup>
              </Marker>
              <Marker position={[-31.6324, -60.6995]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Santa Fe </Popup>
              </Marker>
              <Marker position={[-27.7951, -64.2615]} icon={customRedPinIcon}>
                <Popup>
                  Quiero hablar con un cliente de Santiago del Estero{" "}
                </Popup>
              </Marker>
              <Marker position={[-54.3084, -67.7452]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Tierra del Fuego </Popup>
              </Marker>
              <Marker position={[-26.8083, -65.2176]} icon={customRedPinIcon}>
                <Popup>Quiero hablar con un cliente de Tucumán </Popup>
              </Marker>
              {/* Add more markers as needed */}
            </MapContainer>
          </div>
          <div className="flex flex-col w-[500px] ">
            <h2 className="md:text-[25px] lg:text-[30px] font-semibold text-left mb-24">
              Bienvenidos al mapa interactivo de Iubilare
            </h2>
            <div className="">
              <p className="text-justify mb-4 md:lg:text-[20px] lg:text-[22px]">
                {clientes}
              </p>
              <p className="text-justify mb-4 md:lg:text-[20px] lg:text-[22px]">
                {clientes1}
              </p>
              <p className="text-justify mb-4 md:lg:text-[20px] lg:text-[22px]">
                {clientes2}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 xl:px-[115px]">
        <div className="mb-16">
          <h1 className="font-semibold text-[25px] xl:text-[49px]">
            Equipo de Trabajo
          </h1>
        </div>

        {/* Separador 16px Para Seccion Tablet min height 768px*/}
        {/* <div className="md:min-h-[16px] 2xl:min-h-[72px]"></div> */}
        {/* Seccion Equipo de Tabajo para Tablet min height 768px */}
        <div className="hidden md:flex md:flex-row md:justify-center md:gap-3 xl:gap-5">
          <CardNosotros
            name={"Marcelo Visceglie"}
            status={"Fundador"}
            image={"./nosotros/marcelo.png"}
            className="border-2 border-[#747DD6] shadow-avatar-shado"
            textClassTitle="text-[#747DD6] "
          />
          <CardNosotros
            name={"Cristian Pavlovsky"}
            status={"Fundador"}
            image={"./nosotros/cristian.png"}
            className="border-2 border-[#747DD6] shadow-avatar-shadow "
            textClassTitle="text-[#747DD6] "
          />
          <CardNosotros
            name={"Federico Sallustio"}
            status={"Abogado"}
            image={"./nosotros/federico.png"}
            className="bg-white shadow-avatar-shadow text-black "
            textClassTitle="text-background-violet "
          />
          <CardNosotros
            name={"Cristina Fernandez"}
            status={"Coord. Gestión Previsional"}
            image={"./nosotros/cristina.png"}
            className="bg-white shadow-avatar-shadow text-black"
            textClassTitle="text-[#747DD6] "
          />
        </div>

        {view && (
          <div>
            <div className="hidden md:flex md:flex-wrap md:justify-center md:gap-3 md:px-[41px] xl:gap-5 mt-5 ">
              {personal.map((ele, index) => (
                <CardNosotros
                  key={index}
                  name={ele.name}
                  status={ele.status}
                  className={ele.className}
                  image={ele.image}
                  textClassName={ele.textClassName}
                  textClassTitle={ele.textClassTitle}
                ></CardNosotros>
              ))}
            </div>
            {/* <div className="min-h-[20px]"></div> */}
            {/*   <div className="hidden md:flex md:flex-row md:justify-center md:gap-3 md:px-[41px] 2xl:gap-5">
              {asistentes.map((ele, index) => (
                <CardNosotros
                  key={index}
                  name={ele.name}
                  status={ele.status}
                  className={ele.className}
                  image={ele.image}
                  textClassName={ele.textClassName}
                  textClassTitle={ele.textClassTitle}
                ></CardNosotros>
              ))}
            </div> */}
          </div>
        )}
        {/* Separador 16px */}
        {/* <div className="hidden md:block md:min-h-[16px]"></div> */}
        <button
          className="hidden mt-16 font-semibold md:active:text-background-violet md:hover:text-current md:inline-block md:pt-[10px] md:pb-[49px] md:px-6 md:bg-background-violet md:text-white rounded md:hover:bg-background-violet md:hover:text-white md:active:bg-background-violet md:outline-none md:focus:border md:focus:outline-none md:w-[363px] md:h-11 md:text-[20px] lg:text-[25px] "
          onClick={() => setView(!view)}
        >
          {!view ? "Quiero conocer al resto del equipo" : "Ver menos"}
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
              image={"./nosotros/marcelo.png"}
              className="border-2 border-[#747DD6] shadow-avatar-shadow"
              textClassTitle="text-[#747DD6] "
            />
            <CardNosotros
              name={"Cristian Pavlovsky"}
              status={"Fundador"}
              image={"./nosotros/cristian.png"}
              className="border-2 border-[#747DD6] shadow-avatar-shadow "
              textClassTitle="text-[#747DD6] "
            />
          </div>
        </div>

        {/* Separador 48px */}
        {/* <div className="min-h-[48px]"></div> */}

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
              name={"Federico Sallustio"}
              status={"Abogado"}
              image={"./nosotros/federico.png"}
              className="bg-white shadow-avatar-shadow text-black "
              textClassTitle="text-background-violet "
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
              name={"Monica Montrasi"}
              status={"Secretaria"}
              image={"./nosotros/monica.png"}
              className="bg-white shadow-avatar-shadow text-black"
            />
            <CardNosotros
              name={"Eliana R. Prerovsky"}
              status={"Secretaria"}
              image={"./nosotros/eliana.png"}
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
              name={"Cristina Fernandez"}
              status={"Coord. Gestión Previsional"}
              image={"./nosotros/cristina.png"}
              className="bg-white shadow-avatar-shadow text-black"
            />
            <CardNosotros
              name={"Susan Guaragna"}
              status={"Gestión previsional"}
              image={"./nosotros/susana.png"}
              className="bg-white shadow-avatar-shadow text-black"
            />
            <CardNosotros
              name={"Silvia Di Nanno"}
              status={"Gestión previsional"}
              image={"./nosotros/silvia.png"}
              className="bg-white shadow-avatar-shadow text-black"
            />
          </div>
        </div>

        {/* Separador 48px */}
        <div className="min-h-[48px] md:hidden"></div>

        {/* Seccion Asistentes */}
        {/*         <div className="px-[16px] md:hidden">
          <h3 className="text-[20px]">Asistentes legales</h3> */}
        {/* Separador 15px */}
        {/*  <div className="min-h-[15px]"></div>
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
        </div> */}

        {/* Seccion Mision */}
        <div id="mision" className="md:mt-24 lg:mt-44 md:mb-20 lg:mb-40 ">
          <div>
            {" "}
            <h1 className="font-semibold text-[25px] md:hidden">Misión</h1>
            <div>
              <CardInfo
                info={mision}
                classTitle="Misión"
                url="./nosotros/mision.png"
              />
            </div>
            <h1 className="font-semibold text-[25px] md:hidden">Visión</h1>
            <div className="mt-[7.5rem]">
              <CardInfo
                info={vision}
                classTitle="Visión"
                url="./nosotros/vision.png"
                classOptions="md:flex-row-reverse"
              />
            </div>
          </div>
        </div>

        {/* Seccion Vision */}
        {/* <div id="vision" className="px-[16px] md:px-[41px]">
          <h1 className="font-semibold text-[25px] md:hidden">Visión</h1>
          <div>
            <CardInfo
              info={vision}
              classTitle="Visión"
              url="./nosotros/vision.png"
              classOptions="md:flex-row-reverse"
            />
          </div>
        </div> */}

        {/* Seccion Mapa */}
        <div id="mapa" className="mb-28">
          <h1 className="font-semibold md:text-[31px] lg:text-[49px]">
            Dónde encontrarnos
          </h1>
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
