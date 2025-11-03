import React from "react";
function WithAuthentication(WrappedComponent){
    const isloggedIn=true
    return (props)=>{
        if(isloggedIn){
            return<WrappedComponent isloggedIn={isloggedIn} {...props}/>
        }
        else{
            return<h3>plese login to view the content</h3>
        }
    }
}

function AuthenticatedComponent({isloggedIn}){
    return(
        <div>
            {isloggedIn  ? (<h1>AuthenticatedComponent</h1>):(<h1>Not AuthenticatedComponent</h1>)}
        </div>
    )
}

let EnhancedComponent=WithAuthentication(AuthenticatedComponent)
export default EnhancedComponent