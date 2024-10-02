import React, { useState, useEffect } from 'react';
import FilterBar from "../components/FilterBar";
import Card from "../components/Card";
import axios from 'axios';
import { useParams } from 'react-router-dom';


function DisplayPage(){
    const category = useParams()
    const [weather, setWeather] = useState(null);
    const [places, setPlaces] = useState([]);

    const getPlaces = async (weather) => {
        try {
            const response = await axios.post(`http://127.0.0.1:5000/weather`, null, {
                params: {
                    weather: weather
                }
            });
        console.log(weather);
        console.log(response.data);

        setPlaces(response.data);
    } catch (error) {  
        console.error("Error fetching weather places", error);
    }
};

useEffect(() => {
    getPlaces(weather);
}, [weather]);
    
    return <div>
        <FilterBar style={{textAlign: 'left'}}/>
        <div className="container text-center">
                <div className="row g-2">
                    {places.map((place,image, index) => {
                        return (
                            <div className="col-6" key={index}>
                                <div className="p-3">
                                    <Card
                                        placeName={place} 
                                        placeImage={image}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
    </div>
}
export default DisplayPage