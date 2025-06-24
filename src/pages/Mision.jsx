import Menu from '../components/Menu'
import Footer from '../components/Footer'
import './paginas.css'

const Mision = () => {
    return (
        <div className="inicio-container">
            <Menu />
            <main className="inicio-main">
                <h1>Misión de MaFiEst</h1>
                <p>
                    Ofrecer clases pregrabadas y asesorías presenciales opcionales en matemáticas a través de nuestra plataforma web, 
                  con el fin de reforzar el aprendizaje de estudiantes de grados superiores, consolidando sus conocimientos 
                  de manera accesible, integral y flexible.
                </p>
            </main>
           
        </div>
    )
}

export default Mision;
