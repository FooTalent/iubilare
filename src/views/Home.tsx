import Form from "../components/form/Form"


export default function Home() {

    return (
        <>
            <div className="text-center mb-40" >
            27 años de experiencia. Asesoramiento personalizado. 
            Soluciones previsionales confiables en todo el país.
                <img src="/Youtubeplayer.png" alt="Hero" className="mx-auto" />
                <img src="/botoncontactodefault.png" alt="Hero" className="mx-auto" />
            </div>
            <div className="mb-50">
                Que hacemos
            </div>
            <div>
                Quienes somos
            </div>
            <div>
                Testomonios
                <Form></Form>
            </div>
            <footer className="text-center py-4">
            </footer>
        </>
    )
};