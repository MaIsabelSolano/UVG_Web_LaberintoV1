import { useState } from "react"
import { useEffect } from "react"

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
    const [inicio, setInicio] = useState(true)
    const [altura, setAltura] = useState(4)
    const [ancho, setAncho] = useState(4)

    const handleClick = () => {
        setInicio(false)
    }

    //get valores
    const getAltura = (cant) => {
        const alt = Number(cant.target.value)
        setAltura(alt)
    }

    const getAncho = (cant) => {
        const anch = Number(anch.target.value)
        setAncho(anch)
    }

    const Cuadro = () => {
        return (
            <form className="contenedor">
                <div>
                    <h1>Laberinto</h1>
                </div>
                <div>
                    <input id="altura" type="number" min={3} max={15} defaultValue={4} onChange={getAltura}/>
                    <input id="ancho" type="number" min={3} max={15} defaultValue={4} onChange={getAncho}/>
                    <button onClick={handleClick}>
                        Comenzar juego
                    </button>
                </div>
                    
            </form>
        )
    }
    

    const Laberinto = () => {


        return(
            <div>
                <h1>Imaginen que aparece un laberinto xd</h1>
                <div className="contenedor-laberinto">
                    <p>altura = {altura} y ancho = {ancho}</p>
                    
                </div>
            </div>
        )
    }

    

    return (
        inicio ? Cuadro(): Laberinto()
    )
}

export default App