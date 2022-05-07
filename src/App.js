import { useState } from "react"
import { useEffect } from "react"
import MostrarLaberinto from "./Components/Laberinto"

//Laberinto
const GetMaze = async (ancho, alto) => {
    const JEC = 'https://maze.juanelcaballo.club/?type=json&w=#&h=%'
    const JEC_temp = JEC.replace('#',ancho)
    const JEC_mod = JEC_temp.replace('%', alto)
    //fetch
    const laberinto = await fetch(JEC_mod)
        .then((res) => res.json())
        .then((resJSON) => resJSON)
    return laberinto
}

//Aplicación
const App = () => {
    const [LABERINTO, setLABERINTO] = useState(null)
    const [inicio, setInicio] = useState(true)
    const [altura, setAltura] = useState(4)
    const [ancho, setAncho] = useState(4)

    const handleClick = () => {
        setInicio(false)
        NuevoLab()
    }

    //get valores
    const getAltura = (cant) => {
        const alt = Number(cant.target.value)
        setAltura(alt)
    }

    const getAncho = (cant) => {
        const anch = Number(cant.target.value)
        setAncho(anch)
    }

    const NuevoLab = async () => {
        const NM = await GetMaze(ancho, altura)
        setLABERINTO(NM)
    }

    const LABF = async (MN) => {
        setLABERINTO(MN)
    }


    const Cuadro = () => {
        return (
            <form className="contenedor">
                <div className="titulo">
                    <h1>Laberinto</h1>
                </div>
                <div className="inputs-wh">
                    <input id="altura" type="number" min={3} max={15} defaultValue={4} onChange={getAltura}/>
                    <input id="ancho" type="number" min={4} max={4} defaultValue={4} onChange={getAncho}/>
                </div>
                <div className="boton">
                <button onClick={handleClick}>
                        Start
                    </button>
                </div>
                    
            </form>
        )
    }
    

    const Laberinto = () => {
        return(
            <div className="all">
                <div className="contenedor2">
                    <h1>Laberintoooo</h1>
                </div>
                
                <div className="contenedor-laberinto">
                    <p className="gray">altura = {altura} y ancho = {ancho}</p>
                    <p> Ayuda al circulo a llevar al cuadrado amarillo</p>
                    {LABERINTO && <MostrarLaberinto laberinto={LABERINTO} altura={altura} ancho={ancho} turno={LABF} />}
                </div>
            </div>
        )
    }

    

    return (
        inicio ? Cuadro(): Laberinto()
    )
}

export default App