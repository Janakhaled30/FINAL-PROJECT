import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardStyle.css'


function Card(props) {
    const { placeName, placeImage,placeInfo} = props;

    return (
  <div className="card" style={{ 
    backgroundImage: `url(${placeImage})` 
}}>
    <div className="content">
      <h2 className="title">{placeName}</h2>
      <img className='CardImage' src={placeImage} alt={placeName} />
      <p className="copy">{placeInfo}</p>
      <a href={`/place/${placeName}`} className="btn">Wanna visit</a>
      </div>
  </div>
  
    );
}

export default Card;
