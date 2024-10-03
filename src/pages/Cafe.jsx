import React, { useState, useEffect } from 'react';
import axios from 'axios'; //axios library to commute with the backend
import Card from "../components/Card";


function Cafe() {
    const [cafes, setCafes] = useState([]);

    // get data from the backend
    useEffect(() => {
      axios.get('http://localhost:5000/cafe')
        .then(response => {
            setCafes(response.data);
            console.log(response.data);
        }) //in error case
        .catch(err => {
          console.error('Error fetching data');
        });
    }, []);

    return ( // return cards
            <div className="container text-center">
                <div className="row g-2">
                    {cafes.map((place) => (
                        <div className="col-6">
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
