import React, { useRef, useEffect, useState, useContext } from 'react'
import ScoreContext from "../App"
import Scoreboard from "./Scoreboard"
import Guacamole from "./Guacamole"
import Chip from "./Chip"

const Canvas = props => {
    
    const canvasRef = useRef(null)

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
    console.log(mainscore, "GLOBALTHING")
    const [score, setScore] = React.useState(0);
    console.log(score)

    // SET ALL CHIPS TO DISPLAY #TRUE
    const [missed1, setMissed1] = useState(true);
    const [missed2, setMissed2] = useState(true);
    const [missed3, setMissed3] = useState(true);
    const [missed4, setMissed4] = useState(true);
    const [missed5, setMissed5] = useState(true);

    const [countMisses, setCountMisses] = useState(5)

    //FUNCTION TO INCREMENT THE SCORE FOR A HIT
    function increment(score) {
        setScore(score + 100)
    }

    
    // let score = useContext(ScoreContext);
    console.log(score)

    function updateState() {
        const position = randomNumber(0, gameState.cells.length)
        const newCells = new Array(9).fill(false)
        newCells[position] = true
        setGameState( {cells: newCells, avoPosition: {x: avocado_positions[position].x, y: avocado_positions[position].y}} )
        console.log(`new position: ${position}`)
        console.log(gameState)
        console.log(`x: ${avocado_positions[position].x}, y: ${avocado_positions[position].y}`)
    }

    const newBoard = new Image()
    newBoard.src = './cuttingboard.png'
    const small_avocado = './small_avocado.png'
    const newAvocado = new Image()
    newAvocado.src = small_avocado

    function showAvocados(ctx) {

        for (const i in gameState.cells) {
            if (gameState.cells[i] === true) {
                displayAvocado(avocado_positions[i], ctx)
            }
        }
    }

    // const timer2 = setInterval(updateState, 8000)
    

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      };

    
    function displayAvocado(position, ctx) {

        // const small_avocado = '../../small_avocado.png'
        // const newAvocado = new Image()
        // newAvocado.src = small_avocado
        
        // console.log(position.x)
        // console.log(position.y)

        ctx.drawImage(newAvocado, position.x, position.y, 100, 100)
    }

    const draw = (ctx) => {
        ctx.drawImage(newBoard, 0, 0)
        showAvocados(ctx)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        draw(context)
        // handleClick()


    })
    function handleClick(event) {
        const xPosition = event.clientX
        const yPosition = event.clientY
        // alert(`x: ${xPosition} y:${yPosition}`)
        const gameStateX = gameState.avoPosition.x
        const gameStateY = gameState.avoPosition.y

        // i moved the tortilla chips to be aboev the canvas: this resulted in a 220 pixel difference between clicks and avocado positions.
        if (((gameStateX + 100) > xPosition && xPosition > gameStateX) && ((gameStateY + 220) > yPosition && yPosition > gameStateY)) {
            increment(score)
            alert("You got the avocado!")
                //  increase score count
                
                
            } else {
                alert("You Missed!")
                console.log(countMisses)
                if (countMisses===5){
                    setMissed5(false);   
                }
                if(countMisses===4){
                    setMissed4(false);
                }
                if(countMisses===3){
                    setMissed3(false);
                }
                if(countMisses===2){
                    setMissed2(false);
                }
                if(countMisses===1){
                    setMissed1(false);
                    //TRIGGER GAME OVER AND RESET!

                }
                setCountMisses(countMisses -1)
                console.log(countMisses, "COUNTMISSES")
                // decrease chips
                // check if chips == 0
            }

    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateState();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
            <div className="container">
                <h1>Guac-A-Mole</h1>
                <div className='row'>
                    <h5>Lives left:</h5>
                    {missed1 &&  <Chip />}
                    {missed2 &&  <Chip />}
                    {missed3 &&  <Chip />}
                    {missed4 &&  <Chip />}
                    {missed5 &&  <Chip />}
                </div>

                <div className="row">
                    <canvas id="canvas" onClick={handleClick} width="500px" height="500px" ref={canvasRef} {...props}/>
                </div>
                <div className= "row">
                    <div className = "col">
                        <Scoreboard score={score} />
                    </div>
                    <div className = "col">
                        <Guacamole />
                    </div>
                </div>

                
            </div>  
    )
  
}

export default Canvas
