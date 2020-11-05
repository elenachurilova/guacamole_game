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
        <div className="container">
            <div className="paragraph">
                <h1>Welcome to Guac-A-Mole!</h1>
                <h3>a fun twist on the original whack-a-mole game</h3>
            </div>
            <button onClick={show_instructions} type="button" className="btn btn-success">Instructions</button>
            <Instructions instructions={instructions}/>
        </div>
    )
}

function InstructionText(props) {
    return <div className="paragraph">
                <h5> It's easy! Just click on avocado when it appears and score 100 points.</h5>
                <h5>If you miss, you'll lose one chip. You only have 5 chips per one game. </h5>
                <h5>Enjoy!</h5>
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

