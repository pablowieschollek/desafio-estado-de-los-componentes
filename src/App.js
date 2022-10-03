import React, { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {

  const [state, setState] = useState ("");

  return (

    <div className='maincontainer'>
      <h5>Desafío Estado de los componentes</h5>
      <Input state={state} setState={setState}/>
        {state === "252525" && <Button />} 
    </div>
    
  );
}

export default App;
