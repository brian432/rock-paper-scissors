
const Juego = ({juego, handleClick, handleClickAgain}) => {
    
    if (juego.length === 3) {
        return (
            <div className="juego">
                {
                    juego.map((elemento, indice) => {
                        return (
                            <div className={`${elemento.clase} div-juegos pointer`} key={elemento.id} onClick={() => handleClick(elemento)} >
                                <img src={elemento.imagen} alt={elemento.clase} />
                            </div>
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <div className="resultado">
                <div className="mobile" id="you">
                    <p>YOU PICKED</p>
                    <div className={`${juego[0].clase} big div-juegos`} key={juego[0].id} >
                        <img src={juego[0].imagen} alt={juego[0].clase} />
                    </div>
                </div>
                <div className="resultadoJuego">
                    <h1>{juego[0].lose?"YOU LOSE":juego[0].win?"YOU WIN":"DRAW"}</h1>
                    <button className="btn btn-x" onClick={handleClickAgain}>PLAY AGAIN</button>
                </div>
                <div className="mobile" id="he">
                    <p>THE HOUSE PICKED</p>
                    <div className={`${juego[1].clase} big div-juegos`} key={juego[1].id} >
                        <img src={juego[1].imagen} alt={juego[1].clase} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Juego;