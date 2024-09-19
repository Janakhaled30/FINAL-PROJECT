import React from "react";

function Place(props){
    const { placeName, placeImage, placeInfo } = props;
    const containerStyle = {
        minHeight: '100vh',
        textAlign: 'center',
    };
    return(
        <div style={containerStyle}>
            <h1>place</h1>
            <h1>{placeName}</h1>
            <img src={placeImage} alt={placeName}/>
            <h4>{placeInfo}</h4>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
            Visited
            </label>
        </div>
    )
}
export default Place;