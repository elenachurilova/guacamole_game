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
            <h1>Welcome to Guac-A-Mole!</h1>
            <h3>a fun twist on the original whack-a-mole game</h3>
            <button onClick={show_instructions} className="large_button">Instructions</button>
            <button className="large_button">Start</button>
            <Instructions instructions={instructions}/>
            <footer>Credits: <a href="https://github.com/elenachurilova">Elena Churilova</a>, <a href="https://github.com/LaRenaiocco">LaRena Iocco</a> and <a href="https://github.com/shhudspeth">Sarah Hudspeth</a> </footer>
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

