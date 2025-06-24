import React from 'react';
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import './paginas.css'

const Vision = () => {
    return (
        <div className="inicio-container">
            <Menu />
            <main className="inicio-main">
                <h1>Visión de MaFiEst</h1>
                <p>
                    Para el año 2030, MaFiEst habrá implementado las áreas de Física y Estadística, 
                  y será reconocida como una plataforma educativa innovadora y confiable, 
                  que apoya el éxito académico de estudiantes de secundaria a nivel nacional mediante 
                  contenido pregrabado de calidad y acompañamiento presencial cuando sea requerido.
                </p>
            </main>
            
        </div>
    )
}

export default Vision;
