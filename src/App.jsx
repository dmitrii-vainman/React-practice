import React, { useState } from 'react';

function ListComp() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);

  };

  return (
    <div>
      <h1>Liste: </h1>
      {}
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Text mit automatischem Zeilenumbruch"
        rows="10"  
        cols="50"  
        style={{ resize: 'both' }}  
      />
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Text mit automatischem Zeilenumbruch"
        rows="10" 
        cols="50"  
        style={{ resize: 'both' }}  
      />
    </div>
  );
}

export default ListComp;

