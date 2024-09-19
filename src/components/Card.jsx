import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardStyle.css'


function Card(props) {
    const { placeName, placeImage, placeInfo } = props;

    return (
  <div class="card">
    <div class="content">
      <h2 class="title">{placeName}</h2>
      <img src={placeImage} alt={placeName} />
      <p class="copy">{placeInfo}</p>
      <a href ='/place' class="btn">Wanna visit</a>
    </div>
  </div>
  
    );
}

export default Card;
