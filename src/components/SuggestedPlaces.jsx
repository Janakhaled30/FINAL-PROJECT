import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import axios from 'axios';

// const places=['beach','cafe',];
// const RainPlaces=['cafe','library']

function SuggestedPlaces() {
    // const places = [];
    const [places, setPlaces] = useState([]);
    const [weather, setWeather] = useState(null);
    const api = "https://api.openweathermap.org/data/2.5/weather?q=alexandria&appid=e3f9787e87e2a1b46edcb0c315830d35&units=metric";

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => setWeather(data.weather[0].main))
            .catch(error => console.error('Error fetching weather data:', error));
    },);

    const getWeatherPlaces = async (weather) => {
            try {
                const response = await axios.post(`http://127.0.0.1:5000/weather`, null, {
                    params: {
                        weather: weather
                    }
                });
            console.log(weather);
            console.log(response.data);

            //  for(let i = 0 ;i<4;i++)
            //     {
            //         places.push(response.data[i]);
            //         console.log(places[i]);
            
            // }
            setPlaces(response.data);
        } catch (error) {
            console.error("Error fetching weather places", error);
        }
    };
    
    useEffect(() => {
        getWeatherPlaces(weather);
    }, [weather]);
    
    const giveSuggestion = () => {
        if (weather === null || places.length === 0) {
            return <h4>Loading...</h4>;
        }
        else {

            return (
                <div>
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
            );
        }
    }
    return (
        <div>
            <h4>Depending on the weather, you can go to:</h4>
            {giveSuggestion()}
        </div>
    );
}

export default SuggestedPlaces;
