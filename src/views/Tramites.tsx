

export default function Tramites (){



    return (
      <div className="flex flex-col h-screen">
      {/* Primera Sección */}
        <div className="flex-1 mt-16">
          <div className="flex flex-col">
            <h2 className=" text-2xl font-semibold mt-10">Rentas vitalicias previsionales</h2>
            <p className="text-2xl mb-4 mt-3">¿Cuál es tu caso?</p>

            <div className="flex my-2 mx-5 border rounded justify-between items-center">
              <div className="flex flex-row justify align-middle py-5 w-2/3">
                <p className="ml-2 text-left font-semibold text-base">Cobra menos que la jubilación mínima</p>
              </div>
                <div className="w-1/3">
                  <button className="bg-747DD6 font-semibold flex flex-row py-0.5 px-2 text-sm text-white rounded">Ver más <img className="pt-2 pl-2" src="./arrow.png" alt="arrow" /></button>
                </div>
            </div>

            <div className="flex my-2 mx-5 border rounded justify-between items-center">
              <div className="flex flex-row justify align-middle py-5 w-1/3">
                <p className="ml-2 text-left font-semibold text-base">Renta anterior al 2002</p>
              </div>
              <div className="w-1/3">
                <button className="bg-747DD6 font-semibold flex flex-row py-0.5 px-2 text-sm text-white rounded">Ver más <img className="pt-2 pl-2" src="./arrow.png" alt="arrow" /></button>
              </div>
            </div>

            <div className="flex my-2 mx-5 border rounded justify-between items-center">
              <div className="flex flex-row justify align-middle py-5 w-3/5">
                <p className="ml-2 text-left font-semibold text-base">No recibe los aumentos que otorga el ANSES</p>
              </div>
              <div className="w-1/3">
                <button className="bg-747DD6 font-semibold flex flex-row py-0.5 px-2 text-sm text-white rounded">Ver más <img className="pt-2 pl-2" src="./arrow.png" alt="arrow" /></button>
              </div>
            </div>

        </div>
      </div>
    
            {/* Segunda Sección */}
            <div className="flex-1 flex justify-center items-center bg-blue-200">
                <p>Segunda Sección</p>
            </div>
    
            {/* Tercera Sección */}
            <div className="flex-1 flex justify-center items-center bg-blue-300">
                <p>Tercera Sección</p>
            </div>
    
            {/* Cuarta Sección */}
            <div className="flex-1 flex justify-center items-center bg-blue-400">
                <p>Cuarta Sección</p>
            </div>
      </div>
    );
    

}