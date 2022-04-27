import { useState } from "react"


const App = () => {
    const [inicio, setInicio] = useState(true)

    const handleClick = () => {
        setInicio(false)
        console.log(inicio)
    }

    const Cuadro = () => {
        return (
            <form className="contenedor">
                <div>
                    <h1>Laberinto</h1>
                </div>
                <div>
                    <input type="number" placeholder="altura" min={1}/>
                    <input type="number" placeholder="ancho" min={1}/>
                    <button onClick={handleClick}>
                        Comenzar juego
                    </button>
                </div>
                    
            </form>
        )
    }
    

    const Laberinto = () => {
        fetch('https://maze.juanelcaballo.club/?type=json&w=4&h=4')
        .then((response) => {
            return response.json()
        })
        .then((res) => {console.log(res)})
        

        return(
            <div>
                <h1>Imaginen que aparece un laberinto xd</h1>
                <div className="contenedor-laberinto">
                    <></>
                </div>
            </div>
        )
    }

    

    return (
        inicio ? Cuadro(): Laberinto()
    )
}

export default App