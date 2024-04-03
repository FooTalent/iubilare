import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { useState } from "react";

const CardCualEsTuCaso = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [expanded2, setExpanded2] = useState<boolean>(false);
  const [expanded3, setExpanded3] = useState<boolean>(false);

  return (
    <div className=" w-10/12 m-auto flex gap-7">
      <div
        className={`${
          !expanded ? "bg-slate-50 h-[171px]" : "bg-background-violet h-[302px]"
        } flex flex-col items-center justify-center w-[341px] rounded-lg shadow-card-shadow`}
      >
        <p
          className={`${
            !expanded ? "text-black" : "text-white"
          } text-[21px] font-semibold mb-5`}
        >
          Jubilacion Ordinaria
        </p>
        <div
          className={`${
            !expanded
              ? "border-t border-747DD6 mb-5"
              : "border-t border-white mb-3"
          } w-[154px]`}
        ></div>
        {!expanded ? null : (
          <p className=" text-white px-10 mb-4">
            Si contás con los requisitos de edad (mujeres 60 y hombres 65 años)
            y aportes (30 años), podés acceder a tu jubilación. También existen
            moratorias para ayudarte a alcanzar los años requeridos.
          </p>
        )}
        <div>
          
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`${
            !expanded
              ? "bg-background-violet text-white"
              : "bg-white text-747DD6"
          } w-[150px] rounded-md py-1 flex justify-center items-center`}
        >
          {!expanded ? `Ver más` : "Ver menos"}
          <div className={`${!expanded ? null : "transform -rotate-180 flex justify-center items-center"}`}>
            <KeyboardArrowDownOutlined />
          </div>
        </button>
      </div>

      <div
        className={`${
          !expanded2
            ? "bg-slate-50 h-[171px]"
            : "bg-background-violet h-[302px]"
        } flex flex-col items-center justify-center w-[341px] rounded-lg shadow-card-shadow`}
      >
        <p
          className={`${
            !expanded2 ? "text-black" : "text-white"
          } text-[21px] font-semibold mb-5`}
        >
          Pensiones por fallecimiento
        </p>
        <div
          className={`${
            !expanded2
              ? "border-t border-747DD6 mb-5"
              : "border-t border-white mb-3"
          } w-[154px]`}
        ></div>
        {!expanded2 ? null : (
          <p className=" text-white px-10 mb-4">
            Tramitamos pensiones por fallecimiento a favor del
            cónyuge/conviviente o hijos menores o con discapacidad.
          </p>
        )}
        <button
          onClick={() => setExpanded2(!expanded2)}
          className={`${
            !expanded2
              ? "bg-background-violet text-white"
              : "bg-white text-747DD6"
          } w-[150px] rounded-md py-1 flex justify-center items-center`}
        >
          {!expanded2 ? `Ver más` : "Ver menos"}
          <div className={`${!expanded2 ? null : "transform -rotate-180 flex justify-center items-center"}`}>
            <KeyboardArrowDownOutlined />
          </div>
        </button>
      </div>

      <div
        className={`${
          !expanded3
            ? "bg-slate-50 h-[171px]"
            : "bg-background-violet h-[330px]"
        } flex flex-col items-center justify-center w-[341px] rounded-lg shadow-card-shadow`}
      >
        <p
          className={`${
            !expanded3 ? "text-black" : "text-white"
          } text-[21px] font-semibold mb-5`}
        >
          Pension Universal para Adultos Mayores (PUAM)
        </p>
        <div
          className={`${
            !expanded3
              ? "border-t border-747DD6 mb-5"
              : "border-t border-white mb-3"
          } w-[154px]`}
        ></div>
        {!expanded3 ? null : (
          <p className=" text-white px-10 mb-4">
            A partir de los 65 años de edad,podes jubilarte sin aportes,
            obteniendo un 80% de la jubilación mínima. Además Te ayudamos a
            transformar tu PUAM en una jubilación ordinaria
          </p>
        )}
        <button
          onClick={() => setExpanded3(!expanded3)}
          className={`${
            !expanded3
              ? "bg-background-violet text-white"
              : "bg-white text-747DD6"
          } w-[150px] rounded-md py-1 flex justify-center items-center`}
        >
          {!expanded3 ? `Ver más` : "Ver menos"}
          <div className={`${!expanded3 ? null : "transform -rotate-180 flex justify-center items-center"}`}>
            <KeyboardArrowDownOutlined />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardCualEsTuCaso;
