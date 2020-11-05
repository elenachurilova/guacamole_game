import React, { useState } from 'react'

function Landing() {

    const [ instructions, showInstructions ] = useState(false)

    function show_instructions(){
        if (instructions) {
            showInstructions(false)
        } else {
            showInstructions(true)
        }
    }

    return (
        <div>
            <h1>Welcome to Guac-A-Mole!</h1>
            <h3>a fun twist on the original whack-a-mole game</h3>
            <button onClick={show_instructions} className="large_button">Instructions</button>
            <Instructions instructions={instructions}/>
        </div>
    )
}

function InstructionText(props) {
    return <div>
            <h3>Guac-A-Mole Instructions:</h3>
            <p>It's easy! Just click on avocado when it appears and score 100 points.</p>
            <p>If you miss, you'll lose one chip. You only have 5 chips per one game</p>
            <p>Enjoy!</p>
        </div>
}

function PlainText(props) {
    return <div></div>
}

function Instructions (props) {
    const instructions = props.instructions

    if (instructions) {
        return <InstructionText />;
    } else {
        return <PlainText />
    }

}

export default Landing

