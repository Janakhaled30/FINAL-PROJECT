import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardStyle.css'


function Card(props) {
    const { placeName, placeImage} = props;

    return (
  <div class="card" style={{ 
    width: 500, 
    // height: 300, 

    backgroundImage: `url(${placeImage})` 
}}>
    <div class="content">
      <h2 class="title">{placeName}</h2>
      <img className='cardimg' src={placeImage} alt={placeName} />
      {/* <p class="copy">{placeInfo}</p> */}
      <a href={`/place/${placeName}`} className="btn">Wanna visit</a>
      </div>
  </div>
  
    );
}

export default Card;