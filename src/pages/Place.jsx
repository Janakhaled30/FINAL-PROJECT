import React, { useState } from "react";

function Place(props) {
  const { placeName, placeImage, placeInfo, mapsrc, imageWidth } = props;

  const containerStyle = {
    minHeight: "100vh",
    display: "flex", 
    flexDirection: "row",
  };

  const contentStyle = {
    flex: 1, 
    textAlign: "left",
    padding: "1rem", 
  };

  const imageStyle = {
    width: imageWidth || "500px", 
  };

  const buttonContainerStyle = {
    textAlign: "right", 
    marginTop: "1rem", 
  };

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      console.log('Button clicked, user is logged in');
    } else {
      console.log('User must be logged in to perform this action');
    }
  };

  return (
    <div className="main"style={containerStyle}>
      <img src={placeImage} Museum alt={placeImage} style={imageStyle} /> 
      <div style={contentStyle}>
        <h1>{placeName}</h1>
        <h4>{placeInfo}</h4>
    <div style={buttonContainerStyle}>
      {isLoggedIn && (
        <button onClick={handleButtonClick}>Visited</button>
      )}
    </div>
        <iframe
          src={mapsrc}
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Place;
