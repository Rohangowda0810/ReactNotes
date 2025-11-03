import React from 'react'
import Login from './Login'
import Loginerror from './Loginerror'

function Condition(condi) {
  if(condi){
    return<Login/>
  }
  else{
    return<Loginerror/>
  }
}

export default Condition
