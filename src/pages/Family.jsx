import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../components/Card";


function Family() {
    const [places, setPlaces] = useState([]);
    const kids = "Allowed"  //kids state in the bakend

    const getFamilyPlaces = async (kids) => { //get data from the backend 
        try {
            const response = await axios.post(`http://127.0.0.1:5000/Family`, null, {
                params: {
                    kids: kids
                }
            });
            console.log(response.data);

            setPlaces(response.data);
        } catch (error) {
            console.error("Error fetching family places", error);
        }
    };

    useEffect(() => { //call funtion
        getFamilyPlaces(kids);
    }, [kids]);

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

export default Family;
