import React, { useState } from 'react'

function Example7() {
    const[data,setData]=useState({name:"virat",age:36,gender:"male",mail:"virat@gmail.com",company:'one8',location:"Bangalore",Description:'Virat Kohli is an Indian right-handed batsman and former captain of the Indian national cricket team, widely considered one of the greatest batters of all time. He is known for his exceptional run-scoring ability across all formats (Test, ODI, and T20I), leading India to major victories, including the 2011 Cricket World Cup and the 2024 T20 World Cup, and achieving numerous records, particularly in One Day Internationals. Kohli is also recognized for his aggressive on-field style, high fitness levels, and strong work ethic. ',image:"https://www.probatsman.com/wp-content/uploads/2025/02/Virat-Kohli-85.jpg"})
    let Anushka=()=>{
        setData({name:'Anushka',age:37,gender:"Female",mail:"anushka@gmail.com",company:'one8',location:"Mysore",Description:'Anushka Sharma is an Indian actress and film producer known for her work in Bollywood movies, a successful modeling career, and her marriage to cricketer Virat Kohli. Born on May 1, 1988, she made her acting debut in Rab Ne Bana Di Jodi (2008) and has since starred in many successful films like Sultan, PK, and Ae Dil Hai Mushkil. She is also a producer who co-founded the production company Clean Slate Films and is involved in philanthropy. ',image:"https://static.indiatvnews.com/ins-web/images/anushka-3082-1541034692.jpg"})
    }
    let virat=()=>{
        setData({name:'virat',age:36,gender:"male",mail:"virat@gmail.com",company:'one8',location:"Bangalore",Description:'Virat Kohli is an Indian right-handed batsman and former captain of the Indian national cricket team, widely considered one of the greatest batters of all time. He is known for his exceptional run-scoring ability across all formats (Test, ODI, and T20I), leading India to major victories, including the 2011 Cricket World Cup and the 2024 T20 World Cup, and achieving numerous records, particularly in One Day Internationals. Kohli is also recognized for his aggressive on-field style, high fitness levels, and strong work ethic. ',image:"https://www.probatsman.com/wp-content/uploads/2025/02/Virat-Kohli-85.jpg"})
    }
   
  return (
    <div style={{height:'100vh',width:'100%',display:'flex',flexDirection:'row'}}>
        <div style={{height:'100vh',width:'30%'}}>
            <img style={{height:'100vh',width:'100%'}}src={data.image} alt="no image" height="100vh" width="100%"/>
        </div>
        <div style={{height:'100vh',width:'70%',padding:'30px', fontSize:'20px'}}>
            <p><b>Name:  </b>{data.name}</p>
            <p><b>Age:  </b>{data.age}</p>
            <p><b>Gender:  </b>{data.gender}</p>
            <p><b>mail:  </b>{data.mail}</p>
            <p><b>Company:  </b>{data.company}</p>
            <p><b>Location:  </b>{data.location}</p>
            <p><b>Description:  </b>{data.Description}</p>
            <button style={{margin:'20px',backgroundColor:'lightgreen',borderRadius:'10px',border:'none',padding:'10px'}} onClick={virat}>Virat</button>
            <button style={{margin:'20px',backgroundColor:'lightgreen',borderRadius:'10px',border:'none',padding:'10px'}} onClick={Anushka}>Anushka</button>
            

        </div>
      
    </div>
  )
}

export default Example7