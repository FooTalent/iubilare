const TipoDeTramites = () => {
  return (
    <section className=" mb-[70px] flex flex-col items-center md:flex-row md:justify-center md:sitems-center gap-10 md:gap-40">
      <div className=" flex flex-col justify-center items-center w-full px-5 md:w-[280px] h-full ">
        <img
          className="w-[141px] h-[141px]"
          src="./tramites/soporte.png"
          alt="gestion online"
        />
        <div>
          <p className=" text-[20px] font-semibold">Gestión Online</p>
          <p className="h-[96px]">
            Los tramites se realizan de manera online para mayor eficacia y
            comodidad.
          </p>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center w-full px-5 md:w-[280px] h-[275px]">
        <img
          className="w-[141px] h-[141px]"
          src="./tramites/soporte.png"
          alt="soporte constante"
        />
        <p className=" text-[20px] font-semibold">Soporte constante</p>
        <p>
          Le brindamos una atención personalizada y lo mantenemos informado de
          los avances de su trámite ante ANSES.
        </p>
      </div>
    </section>
  );
};

export default TipoDeTramites;
