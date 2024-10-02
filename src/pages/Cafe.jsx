import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../components/Card";


function Cafe() {
    const [cafes, setCafes] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/cafe')
        .then(response => {
          // Handle success
            setCafes(response.data);
            console.log("hiii");
            console.log(response.data);
        })
        .catch(err => {
          console.error('Error fetching data');
        });
    }, []);

    return (
            <div className="container text-center">
                <div className="row g-2">
                    {cafes.map((place, index) => (
                        <div className="col-6" key={index}>
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
    );
}

export default Cafe;
