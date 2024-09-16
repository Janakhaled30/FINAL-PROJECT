import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
    const { placeName, placeImage } = props;

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={placeImage} alt={placeName} style={{height: '12rem', objectFit: 'cover'}} />
            <div className="card-body">
                <h5 className="card-title" style={{alignItems : "center"}}>{placeName}</h5>
                <a href="#" className="btn btn-primary" style={{alignItems : "center"}}>Wanna Visit</a>
            </div>
        </div>
    );
}

export default Card;