import React, { useEffect, useRef } from 'react'

function Example3() {
    let divref=useRef()
     let h3ref=useRef()
    // let getdivref=divref.current
    // console.log(getdivref)
    useEffect(()=>{
        divref.current.style.backgroundColor="lightblue"
        h3ref.current.style.color="red"
    },[])
   
  return (
    <div>
      <h1>Example of useref hook for accessing dom elements </h1>
   <div ref={divref} className='hello'>
    <h3 ref={h3ref}>Welcome to react js class</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, repellat voluptate fugiat laudantium, tempore, velit maxime repellendus cumque quibusdam provident veritatis dolor fuga rem ut porro ea aperiam quas? Aut.</p>
   </div>
    </div>
  )
}

export default Example3