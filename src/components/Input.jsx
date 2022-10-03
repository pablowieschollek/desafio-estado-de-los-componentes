import React from 'react'

export const Input = ({state, setState}) => {
  return (
    <div>
      <div className='conatainernombre'>
        <label>Nombre:</label>
            <input className='nombre' type="text" placeholder='ingrese texto'></input>
      </div>
      <div className='conatainercontraseña'>
        <label>Contraseña:</label>
            <input className='contaseña' type="text" placeholder='ingrese contraseña'
            onChange={(e)=> setState(e.target.value)} value={state}></input>
      </div>  
    </div>
  )
}
