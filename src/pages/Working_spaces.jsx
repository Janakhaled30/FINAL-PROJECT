import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../components/Card";


function Working_spaces() {
    const [spaces, setSpaces] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:5000/working_spaces')
        .then(response => {
          // Handle success
            setSpaces(response.data);
            console.log(response.data);
        })
        .catch(err => {
          console.error('Error fetching data');
        });
    }, []);
    if ( spaces.length === 0) {
            return <h4>Loading...</h4>;
    }
    else{return (
            <div className="container text-center">
                <div className="row g-2">
                    {spaces.map((place, index) => (
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
    );}
    
}

export default Working_spaces;
