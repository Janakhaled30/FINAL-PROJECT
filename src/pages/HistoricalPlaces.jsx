import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../components/Card";


function Historical() {
    const [places, setPlaces] = useState([]);
    const historical = "true"

    const getFamilyPlaces = async (historical) => {
        try {
            const response = await axios.post(`http://127.0.0.1:5000/history`, null, {
                params: {
                    historical: historical
                }
            });
            console.log(response.data);

            setPlaces(response.data);
        } catch (error) {
            console.error("Error fetching historical places", error);
        }
    };

    useEffect(() => {
        getFamilyPlaces(historical);
    }, [historical]);

    return (
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

export default Historical;
