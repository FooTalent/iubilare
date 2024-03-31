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
    "Nos comprometemos a brindar un asesoramiento experto y personalizado en todo lo referente a Rentas Vitalicias Previsionales y Jubilaciones. Buscamos proporcionar tranquilidad y confianza, para que nuestros clientes puedan resolver sus problemáticas previsionales de manera eficiente y garantizarles que reciban el pago de su Beneficio Previsional con todos los derechos que lo amparan.";
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
    <div className="mt-[140px]">
      {/* Separador 48px */}
      <div className="min-h-[48px] px-16 md:px-0 mb-16 md:mb-20">
        <h1 className="text-[25px] md:text-[31px] lg:text-[64px] font-semibold">
          Acerca de <span className="text-[#747DD6]">nosotros</span>
        </h1>
        <p className="text-[20px] lg:text-[31px]">
          Contamos con cobertura en todo el país{" "}
        </p>
      </div>

      {/* Seccion Clientes Satisfechos */}
      <div className="block justify-center mb-14  md:mb-24 lg:mb-48">
        <div className=" flex flex-col-reverse justify-center md:px-8 lg:px-[115px] md:flex-row md:gap-7 ">
          <div className=" flex  w-[22.313rem] h-[600px] px-4 md:h-[470px] lg:w-1/2 lg:h-[600px] rounded-lg z-0">
            {/* Leaflet Map */}
            <MapContainer
              center={[-34.609, -58.383]}
              zoom={3.5}
              scrollWheelZoom={true}
              className="md:h-[470px] lg:h-[600px] md:w-[551px] w-[333px] rounded-lg"
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
                    Clientes en Córdoba
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Córdoba.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-31.5375, -68.5364]} icon={customRedPinIcon}>
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
                    Clientes en San Juan
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20San%20Juan.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-28.4696, -65.7852]} icon={customRedPinIcon}>
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
                    Clientes en Catamarca
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Catamarca.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-26.3333, -60.5]} icon={customRedPinIcon}>
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
                    Clientes en Chaco
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Chaco.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-43.6846, -69.2746]} icon={customRedPinIcon}>
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
                    Clientes en Chubut
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Chubut.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-27.4684, -58.8344]} icon={customRedPinIcon}>
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
                    Clientes en Corrientes
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Corrientes.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-32.0589, -59.2014]} icon={customRedPinIcon}>
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
                    Clientes en Entre Ríos
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Entre%20Ríos.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-26.1775, -58.1781]} icon={customRedPinIcon}>
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
                    Clientes en Formosa
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Formosa.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-24.1858, -65.2995]} icon={customRedPinIcon}>
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
                    Clientes en Jujuy
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Jujuy.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker
                position={[-36.6147573, -64.2839209]}
                icon={customRedPinIcon}
              >
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
                    Clientes en La Pampa
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20La%20Pampa.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-29.4135, -66.8558]} icon={customRedPinIcon}>
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
                    Clientes en La Rioja
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20La%20Rioja.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-32.8895, -68.8458]} icon={customRedPinIcon}>
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
                    Clientes en Mendoza
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Mendoza.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-26.9377, -54.4342]} icon={customRedPinIcon}>
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
                    Clientes en Misiones
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Misiones.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-38.9516, -68.0591]} icon={customRedPinIcon}>
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
                    Clientes en Neuquén
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Neuquén.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-40.7344, -66.6176]} icon={customRedPinIcon}>
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
                    Clientes en Río Negro
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Río%20Negro.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-24.7859, -65.4117]} icon={customRedPinIcon}>
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
                    Clientes en Salta
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Salta.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-33.295, -66.3356]} icon={customRedPinIcon}>
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
                    Clientes en San Luis
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20San%20Luis.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-48.7514, -69.2493]} icon={customRedPinIcon}>
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
                    Clientes en Santa Cruz
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Santa%20Cruz.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-31.6324, -60.6995]} icon={customRedPinIcon}>
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
                    Clientes en Santa Fe
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Santa%20Fe.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-27.7951, -64.2615]} icon={customRedPinIcon}>
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
                    Clientes en Stgo. Del Estero
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Santiago%20Del%20Estero.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-54.3084, -67.7452]} icon={customRedPinIcon}>
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
                    Clientes en Tierra Del Fuego
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Tierra%20Del%20Fuego.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
              <Marker position={[-26.8083, -65.2176]} icon={customRedPinIcon}>
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
                    Clientes en Tucumán
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
                    href="https://api.whatsapp.com/send/?phone=593984774483&text=%C2%A1Hola%20Iubilare!%20Deseo%20contactarme%20con%20un%20cliente%20de%20Tucuman.&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    Contactarme
                  </a>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="flex flex-col w-full items-center md:w-[500px] lg:w-1/2 ">
            <h2 className="text-[20px] px-16 md:px-0 text-center md:text-[25px] lg:text-[30px] font-semibold md:text-left mb-12">
              Bienvenidos al mapa interactivo de Iubilare
            </h2>
            <div className="flex flex-col  text-pretty w-[327px] lg:w-full">
              <p className="text-justify mb-4 text-[16px] font-medium md:text-[18px] lg:text-[22px]">
                {clientes}
              </p>
              <p className="text-justify mb-4 text-[16px] font-medium md:text-[18px]  lg:text-[22px]">
                {clientes1}
              </p>
              <p className="text-justify mb-4 text-[16px] font-medium md:text-[18px]  lg:text-[22px]">
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
        <button
          className="hidden mt-16 font-semibold md:active:text-background-violet md:hover:text-current md:inline-block md:pt-[10px] md:pb-[49px] md:px-6 md:bg-background-violet md:text-white rounded md:hover:text-white  md:w-[27.563rem] md:h-11 md:text-[20px] lg:text-[25px] "
          onClick={() => setView(!view)}
        >
          {!view ? "Quiero conocer al resto del equipo" : "Ver menos"}
        </button>

        {/* Separador 16px */}

        <div className=" md:hidden">
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
              textClassTitle="text-[#747DD6] text-[16px] "
            />
          </div>
        </div>

        {/* Imagen separador */}
        <div className="flex justify-center mt-7 mb-7 md:hidden">
          <img src="./divider.png" alt="" />
        </div>

        {/* Seccion Abogados */}
        <div className=" md:hidden">
          <h3 className="text-[20px] mb-3">Abogados</h3>

          <div className=" flex justify-center gap-3">
            <CardNosotros
              name={"Federico Sallustio"}
              status={"Abogado"}
              image={"./nosotros/federico.png"}
              className="bg-white shadow-avatar-shadow text-black "
              textClassTitle="text-background-violet "
            />
            <CardNosotros
              name={"Cristina Fernandez"}
              status={"Coordinadora"}
              image={"./nosotros/cristina.png"}
              className="bg-white shadow-avatar-shadow text-black"
              textClassTitle="text-background-violet "
            />
          </div>
          <div></div>
        </div>

        {/* Seccion Ejecutivos */}
        <div className="mt-7  md:hidden">
          <h3 className="mb-3 px-16 text-[20px]">
            Ejecutivos en Gestión Previsional
          </h3>

          <div className="grid grid-cols-2 justify-center gap-3">
            <CardNosotros
              name={"Susan Guaragna"}
              status={"Gestión previsional"}
              image={"./nosotros/susana.png"}
              className="bg-white shadow-avatar-shadow text-black"
              textClassTitle="text-background-violet "
            />
            <CardNosotros
              name={"Silvia Di Nanno"}
              status={"Gestión previsional"}
              image={"./nosotros/silvia.png"}
              className="bg-white shadow-avatar-shadow text-black"
              textClassTitle="text-background-violet "
            />
            <CardNosotros
              name={"Carolina Dodds"}
              status={"Gestión previsional"}
              image={"./nosotros/carolina.png"}
              className="bg-white shadow-avatar-shadow text-black"
              textClassTitle="text-background-violet "
            />
            <CardNosotros
              name={"Josefina Prerovsky"}
              status={"Gestión previsional"}
              image={"./nosotros/josefina.png"}
              className="bg-white shadow-avatar-shadow text-black  "
              textClassTitle="text-background-violet "
            />
          </div>
          {/* <div className="w-full flex justify-center mt-2">
            <CardNosotros
              name={"Josefina Prerovsky"}
              status={"Gestión previsional"}
              image={"./nosotros/josefina.png"}
              className="bg-white shadow-avatar-shadow text-black"
              textClassTitle="text-background-violet "
            />
          </div> */}
        </div>

        {/* Seccion Secretarias */}
        <div className="mt-7 md:hidden">
          <h3 className="mb-3 text-[20px]">Secretarias</h3>
          {/* Separador 15px */}
          <div className="min-h-[15px]"></div>
          <div className="flex justify-center gap-3">
            <CardNosotros
              name={"Monica Montrasi"}
              status={"Secretaria"}
              image={"./nosotros/monica.png"}
              className="bg-white shadow-avatar-shadow text-black"
              textClassTitle="text-background-violet "
            />
            <CardNosotros
              name={"Eliana R. Prerovsky"}
              status={"Secretaria"}
              image={"./nosotros/eliana.png"}
              className="bg-white shadow-avatar-shadow text-black"
              textClassTitle="text-background-violet "
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
        <div id="mision" className="mb-14 md:mt-24 lg:mt-44 md:mb-20 lg:mb-40 ">
          <div>
            {" "}
            <h1 className="font-semibold text-[25px] mb-3 md:hidden">Misión</h1>
            <div>
              <CardInfo
                info={mision}
                classTitle="Misión"
                url="./nosotros/mision.png"
              />
            </div>
            <h1 className="font-semibold text-[25px] mt-7 mb-3 md:hidden">
              Visión
            </h1>
            <div className=" md:mt-[7.5rem]">
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
          <h1 className="font-semibold mb-4 md:text-[31px] md:mb-10 lg:text-[49px]">
            Dónde encontrarnos
          </h1>
          <div className="min-w-[328px] min-h-[318px] flex justify-center items-center">
            <div className="relative overflow-hidden w-full max-w-[329px] h-[318px] sm:max-w-[686px] sm:h-[263px] lg:max-w-[1292px] lg:h-[477px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4177.3877059145425!2d-58.38277614342871!3d-34.60849481901064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad1a260b5a3%3A0x8a1f9dd9f8b9d3ef!2sAv.%20de%20Mayo%20881%2C%20C1084AAD%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sco!4v1710770247526!5m2!1sen!2sco"
                // style={{ border: 0, width: "100%", height: "100%" }}
                className="h-full md:w-full"
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
