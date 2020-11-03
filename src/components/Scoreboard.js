import React, { useRef, useEffect, useState } from 'react'

function Scoreboard(props) {
    return (
        <div>
            <div>Score: {props.score}</div>
        </div>
    )
}

export default Scoreboard