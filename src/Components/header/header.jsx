import React from 'react'
import { Avatar } from '@mui/material'
import './header.css'


export default function ParteArribaHeader() {

  const [info, setInfo] = React.useState(false);

  const muestraInfo = () => {
    setInfo(!info);
  }

  

  return (
    <div className='header-container'>


      <button className='avatar-button' onClick={muestraInfo}>
        <Avatar src="/fotoperfil.jpg" />
      </button>
    
        <h1>Néstor Cantarero Pacheco</h1>
        <p>Desarrollador de software</p>

        {info && (
          <div>
            <h1>Info extra</h1>
          </div>
        )}

        
         
        
    </div>
     
  )
}
