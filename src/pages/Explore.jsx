import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Explore() {
    const [places, setPlaces] = useState([]);

    const getFamilyPlaces = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/get_data`, null, {
                
            });
        // console.log(kids);
        console.log(response.data);

        setPlaces(response.data);
    } catch (error) {
        console.error("Error fetching family places", error);
    }
};

useEffect(() => {
    getFamilyPlaces();
}, []);

    return (
        <div>
            <Header />
            <div className='main'>
                    <div/>
                <div className="container text-center">
                <div className="row g-2">
                    {places.map((place, index) => (
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
                </div>
            <Footer />
        </div>
    );
}

export default Explore;