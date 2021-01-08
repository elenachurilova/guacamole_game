import React, { useRef, useEffect, useState } from 'react'

const GameOver = props => {
    
    return <div className="paragraph"> 
                <h3>The avocado got away!</h3>
                <h3>And the game is over...</h3>
                <img src={'./happy_avocado.jpg'}/>
            </div>

}

export default GameOver
