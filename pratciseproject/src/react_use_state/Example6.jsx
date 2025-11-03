import React, { useState } from 'react'
import './example6.css'
function Example6() {
    const[darkMode,setDarkMode]=useState(false)
    console.log(darkMode)
    let toggleTheme=()=>setDarkMode(!darkMode)
    
    let cardStyles={
  backgroundColor:darkMode?"black":"#ffff",
  color:darkMode?"#ffff":"black",
  borderRadius:"12px",
  padding:"20px",
  maxWidth:"350px",
  margin:"0 auto",
  boxshadow:"0px 0px black"
    }
    let toggletheme={
        backgroundColor:darkMode?"#ffff":"#121212",
        color:darkMode?"#121212":"#fff",
        minHeight:"100vh",
        padding:"2rem",
        transition:"all 0.3s ease-in-out"
    }
  return (
    <div>
      <div style={toggletheme}>

        <div className='toggle-conatiner'>
            <label className='switch'>
                <input type='checkbox' onChange={toggleTheme}/>
                <span className='slider round'></span>
            </label>
            <span>{darkMode?"Dark Mode":"Light Mode"}</span>
        </div>
        <div style={cardStyles}>
            <img src='https://tse1.mm.bing.net/th/id/OIP.uRYpeyDdgui_P7w_qY2FlgHaIR?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'
            alt='profile' style={{width:"100px",height:"100px",borderRadius:"50%",
                objectFit:"cover",marginBottom:"15px"
            }}/>
            <h2>Jhon Doe</h2>
            <p>Frontend Developer</p>
            <p>Bangalore India</p>
        </div>
      </div>
    </div>
  )
}

export default Example6