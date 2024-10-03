import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../components/Card";


function Sports() {
    const [sports, setSports] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/sports')
        .then(response => {
          // Handle success
            setSports(response.data);
            console.log(response.data);
        })
        .catch(err => {
          console.error('Error fetching data');
        });
    }, []);
    if ( sports.length === 0) {
            return <h4>Loading...</h4>;
    }
    else{return (
            <div className="container text-center">
                <div className="row g-2">
                    {sports.map((place) => (
                        <div className="col-6"}>
                            <div className="p-3">
                                <Card
                                    placeName={place.name}
                                    placeImage={place.image_url}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );}
    
}

export default Sports;
