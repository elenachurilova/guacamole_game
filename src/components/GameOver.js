import React, { useRef, useEffect, useState } from 'react'
import happy_avocado from './happy_avocado.png'

const GameOver = props => {
    
    return <div className="paragraph"> 
                <h3>The avocado got away!</h3>
                <h3>And the game is over...</h3>
                <img src={happy_avocado}/>
            </div>

}

export default GameOver
