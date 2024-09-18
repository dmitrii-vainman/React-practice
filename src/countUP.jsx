import React, { useState } from 'react';

function App() {

  const [oC, nC] = useState(0)
 
  const countU = () => {
    nC(oC + 1)
    console.log(oC)
  }
  const countR = () => {
    nC(0)
    console.log(oC)
  }


  return (
    <div>
      <h1>We are counting again: {oC} </h1>
      <p>
        <button onClick={countU}>Up it goes</button>
        <button onClick={countR}>Reset</button>
      </p>
    </div>
  );
}

export default App;