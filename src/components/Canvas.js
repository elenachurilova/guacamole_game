import React, { useRef, useEffect, useState, useContext } from 'react'
import ScoreContext from "../App"
import Scoreboard from "./Scoreboard"
import Guacamole from "./Guacamole"
import Chip from "./Chip"
import GameOver from "./GameOver"

const Canvas = props => {
    
    const canvasRef = useRef(null)
    const AVOCADO = 1
    const FLASH = 2

    const avocado_positions = [
        { x: 50, y: 150,},
        { x: 100, y: 225},
        { x: 100, y: 300}, 
        { x: 150, y: 100},
        { x: 200, y: 175},
        { x: 200, y: 300},
        { x: 300, y: 50},
        { x: 300, y: 150},
        { x: 375, y: 225},
    ];

    const initState = { 
                        cells: new Array(9).fill(false),
                        avoPosition: {x: 0, y: 0}
                    }

    const [ gameState, setGameState ] = useState(initState)
    // trying to lift score state using useContext
    const mainscore = useContext(ScoreContext)
    const [score, setScore] = React.useState(0);

    const [lives, setLives] = useState(5)

    //FUNCTION TO INCREMENT THE SCORE FOR A HIT
    function increment(score) {
        setScore(score + 100)
    }

    function updateState() {
        const position = randomNumber(0, gameState.cells.length)
        const newCells = new Array(9).fill(false)
        newCells[position] = AVOCADO
        setGameState( {cells: newCells, avoPosition: {x: avocado_positions[position].x, y: avocado_positions[position].y}, position: position } )
    }

    const newBoard = new Image()
    newBoard.src = 'https://github.com/elenachurilova/guacamole_game/blob/gh-pages/cuttingboard.png'
    const newAvocado = new Image()
    newAvocado.src = 'https://github.com/elenachurilova/guacamole_game/blob/gh-pages/small_avocado.png'
    const newFlash = new Image()
    newFlash.src = 'https://github.com/elenachurilova/guacamole_game/blob/gh-pages/flash.png'

    function showAvocados(ctx) {
        for (const i in gameState.cells) {
            if (gameState.cells[i] === AVOCADO) {
                displayAvocado(avocado_positions[i], ctx)
            } else if (gameState.cells[i] === FLASH) {
                displayFlash(avocado_positions[i], ctx)
            }
            
        }
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      };

    
    function displayAvocado(position, ctx) {
        ctx.drawImage(newAvocado, position.x, position.y, 100, 100)
    };

    function displayFlash(position, ctx) {
        ctx.drawImage(newFlash, position.x, position.y, 100, 100)
    }

    const draw = (ctx) => {
        ctx.drawImage(newBoard, 0, 0)
        showAvocados(ctx)
    }

    useEffect(() => {
        if (canvasRef.current === null) {
            return
        }
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        draw(context)
    })

    useEffect(() => {
        var interval = setInterval(() => {
            updateState();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function handleClick(event) {
        const xPosition = event.clientX - event.target.offsetLeft
        const yPosition = event.clientY - event.target.offsetTop
        const gameStateX = gameState.avoPosition.x
        const gameStateY = gameState.avoPosition.y

        if (((gameStateX + 100) > xPosition && xPosition > gameStateX) && ((gameStateY + 220) > yPosition && yPosition > gameStateY)) {
            increment(score)
            // updating array with "FLASH"
            gameState.cells[gameState.position] = FLASH

            setGameState( {
                cells: gameState.cells, 
                position: gameState.position
            } )
                
            } else {
                // alert("You Missed!")
                setLives(lives -1)
            }
    }

    if (lives === 0) {
        return (
            <div className="container">
                    <div className="d-inline-block">
                        <GameOver />
                        <button type="button" className="btn btn-success" onClick={()=>setLives(5)}>Play Again?</button>
                    </div>
            </div>
            
        )
    }

    return (
            <div className="container">
                <h1>Guac-A-Mole</h1>
                <div>
                    <Scoreboard score={score} />
                </div>
                <h5>Lives left: {lives}</h5>
                <div className='row'>
                    {new Array(lives).fill(false).map(
                            (element, index)=><Chip key={index}/>
                        )
                    }
                </div>
                
                <div className="row">
                    <canvas id="canvas" onClick={handleClick} width="500px" height="500px" ref={canvasRef} {...props}/>
                </div>                
            </div>  
    )
  
}

export default Canvas
