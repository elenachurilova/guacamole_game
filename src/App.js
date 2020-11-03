import React from "react";
import Canvas from "./components/Canvas"


const score = 0; 
export const ScoreContext = React.createContext(0);

function App() {
  
  return (
    <div>
      <ScoreContext.Provider value={score}>
        <Canvas />
        <div className='container'></div>
      </ScoreContext.Provider>
    </div>
  )
}

export default App

