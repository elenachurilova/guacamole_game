import React, { useRef, useEffect, useState } from 'react'

const Chip = props => {
    
    const chipSource = './tortilla.png'
    
    return <img src={chipSource} width="150px" height="150px"/>

}
const chipArray = [Chip, Chip, Chip, Chip, Chip]

export default Chip
