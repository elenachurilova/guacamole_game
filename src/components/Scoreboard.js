import React, { useRef, useEffect, useState } from 'react'

function Scoreboard(props) {
    return (
        <div>
            <h5>Score: {props.score}</h5>
        </div>
    )
}

export default Scoreboard