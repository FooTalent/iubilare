
const TipoDeTramites = () => {
  return (
    <section className=" mb-[152px] flex justify-center items-center gap-40">
        <div className=" flex flex-col justify-center items-center w-[186px] h-[275px] ">
            <img src="./tramites/soporte.png" alt="gestion online" />
            <p className=" text-[21px] font-semibold">Gestión Online</p>
            <p>Los tramites se realizan de manera online para mayor eficacia y comodidad.</p>
        </div>

        <div className=" flex flex-col justify-center items-center w-[230px] h-[275px]">
            <img src="./tramites/soporte.png" alt="soporte constante" />
            <p className=" text-[21px] font-semibold">Soporte constante</p>
            <p>Le brindamos una atención personalizada y lo mantenemos informado de los avances de su trámite ante ANSES.</p>
        </div>
    </section>
  )
}

export default TipoDeTramites