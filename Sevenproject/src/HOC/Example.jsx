import React from "react";


function HOC(WrappedComponent){
    return (props)=>{
        let extra="This is an extra information"
      return <WrappedComponent
      {...props}
      name="Virat" extrainfo={extra}/>  
    }
       
}

function Hello({name,extrainfo}){
    return(
        <div>
            <h2>Hello {name}</h2>
            <p>{extrainfo}</p>
        </div>
    )
}

function Welcome({extrainfo}){
    return(
        <div>
            <h1>Weclome to react js class</h1>
        <p>{extrainfo}</p>
        </div>
    )
}

export let Result=HOC(Hello)
export let Result1=HOC(Welcome)