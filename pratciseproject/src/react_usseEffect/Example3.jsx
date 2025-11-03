import React, { useEffect, useState } from 'react'

function Example3() {
    const[image,setImage]=useState('https://tse2.mm.bing.net/th/id/OIP.ou7llMAxYixZfY6G0dVkGwHaJ4?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3')
  
    useEffect(()=>{
console.log("Image has bee updated to this url "+image)
return()=>{
    console.log("your function is cleanedup")
}
    },[image])
    
    let changeMale=()=>{
        setImage('https://tse1.mm.bing.net/th/id/OIP.YIre5HGHiqBa7DCmrF4KwwHaJQ?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3')
    }

let changeFemale=()=>{
    setImage('https://cdn.pixabay.com/photo/2017/10/18/21/36/portrait-2865605_1280.jpg')
}
    return (
    <div style={{height:"600px",width:"700px",
        boxShadow:"0px 0px 10px red",margin:"0 auto"
    }}>
        <div style={{height:"300px",width:"400px",
        boxShadow:"0px 0px 10px green",margin:"0 auto",textAlign:"center"
    }}>
        <h1 style={{color:"blue",fontFamily:"cursive"}}>Upload a profile image</h1>
        <img src={image} alt='no-image' height="200px" width="200px"/>
    </div>
      <div style={{height:"300px",width:"400px",
        boxShadow:"0px 0px 10px green",margin:"0 auto",textAlign:"center",
        display:"flex",flexDirection:"column"
    }}>
        <h3 style={{color:"blue",fontFamily:"cursive"}}>Choose image file</h3>
        <img src={image} alt='no-image' height="150px" width="150px"
        style={{position:"relative",left:"130px"}}/>
        <button style={{margin:"10px"}} onClick={changeMale}>Male</button>
        <button style={{margin:"10px"}} onClick={changeFemale}>Female</button>
    </div>
    </div>
  )
}

export default Example3 