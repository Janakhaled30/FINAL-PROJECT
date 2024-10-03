import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../components/Card";

function HiddenGems() {
    const [places, setPlaces] = useState([]);
    const hidden_gem = "true" //state to the backend
//get data from the backend
    const getHiddenPlaces = async (hidden_gem) => {
        try {
            const response = await axios.post(`http://127.0.0.1:5000/gem`, null, {
                params: {
                    hidden_gem: hidden_gem
                }
            });
            console.log(response.data);

            setPlaces(response.data);
        } catch (error) {
            console.error("Error fetching hidden gems ", error);
        }
    };
//call the function
    useEffect(() => {
        getHiddenPlaces(hidden_gem);
    }, [hidden_gem]);

    return ( //return cards
        <div className="container text-center">
            <div className="row g-2">
                {places.map((place) => (
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

export default HiddenGems;
