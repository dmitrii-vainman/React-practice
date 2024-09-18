import React, { useState } from 'react';

function App() {

  const [state, newState] = useState(false)
  const [old, newS] = useState('An')
 
  const toggleButton = () => {
    newState(!state)
    console.log(state)
  }
  const anAus = () => {
    if (state === false) {
      newS('Aus')
    } else {
      newS('An')
    }
  }

  return (
    <div>
      <h1>Beispiel Button</h1>
      <p>
        <button onClick={toggleButton}>{anAus}</button>
      </p>
    </div>
  );
}

export default App;

