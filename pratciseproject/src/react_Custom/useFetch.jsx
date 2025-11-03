import React, { useEffect, useState } from "react";

function useFetch(url){
    const[data,setData]=useState(null)
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((json)=>{
           setData(Array.isArray(json)?json:[]) 
           console.log("Api response ",json)
        })
        .catch((err)=>{
            console.log("error while fetching ",err)
            setData([])
        })
    },[url])
    return data
}

export default useFetch