import React, { useState } from 'react';
import './Example1.css'; // We'll create this CSS file

function Example1() {
  let [state, setState] = useState({ img: "", name: "", age: "", place: "", address: "" });
  let [data, setData] = useState("");
  
  let handleclick1 = () => {
    setState({ 
      img: "https://tse4.mm.bing.net/th/id/OIP.w7GS4k7fDKY6CyF7jRDA4gAAAA?pid=Api&P=0&h=180", 
      name: "Rohan Gowda K V", 
      age: "22", 
      place: "Mandya", 
      address: "Km Doddi,Maddur Tq,Mandya District" 
    });
    setData("Suguna G B");
  };
  
  let handleclick2 = () => {
    setState({ 
      img: "https://tse2.mm.bing.net/th/id/OIP.GSmmcj_aPQBVM6zXYEYIOAHaHa?pid=Api&P=0&h=180", 
      name: "Kousthubha B S", 
      age: "22", 
      place: "Maddur", 
      address: "Bangalore" 
    });
    setData("Latha");
  };

  return (
    <div className="profile-app">
      <h1 className="app-title">Profile Cards</h1>
      
      <div className="profile-card">
        <div className="profile-header">
          <img 
            src={state.img || "https://via.placeholder.com/100"} 
            alt="Profile" 
            className="profile-image"
          />
          <div className="profile-badge">Active</div>
        </div>
        
        <div className="profile-content">
          <h2 className="profile-name">{state.name || "Select a Profile"}</h2>
          
          <div className="profile-details">
            <div className="detail-item">
              <span className="detail-label">Mother's Name:</span>
              <span className="detail-value">{data || "-"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Age:</span>
              <span className="detail-value">{state.age || "-"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Place:</span>
              <span className="detail-value">{state.place || "-"}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Address:</span>
              <span className="detail-value address">{state.address || "-"}</span>
            </div>
          </div>
        </div>
        
        <div className="profile-actions">
          <button className="btn btn-primary" onClick={handleclick1}>
            Rohan
          </button>
          <button className="btn btn-secondary" onClick={handleclick2}>
            Kousthubha
          </button>
        </div>
      </div>
    </div>
  );
}

export default Example1;