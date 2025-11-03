import React from 'react';

let url = ["/src/msd1.jpg","/src/msd2.jpg","/src/msd4.jpg"]  

let pic= url.map((ele, index) => {
  return <li><img  src={ele} alt="no-img" style={{ height: "200px", width: "200px"}} /></li>
});

function PicsList() {
  return (
    <div>
      {pic}
    </div>
  )
}

export default PicsList;