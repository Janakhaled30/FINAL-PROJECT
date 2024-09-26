import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import axios from 'axios';

function SuggestedPlaces() {
    const places=[];
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
            console.log(response.data);
            for(let i = 0 ;i<4;i++)
                {
                    places.push(response.data[i]);
                    console.log(places[i]);
            
            }
        } catch (error) {
            console.error("Error fetching weather places", error);
        }
    };
    
    useEffect(() => {
        if(weather!=null)
        {
        getWeatherPlaces(weather);
        }
    }, [weather]);
    
    const giveSuggestion = () => {
        if (weather === null) {
            return <h4>Loading...</h4>;
        }
        else {
            return (
                <div className="container text-center">
                <div className="row g-2">
                    
                     <Card
                     placeName={places[0].name} 
                     placeImage={places[0].image_url}
                 />
                   
                </div>
            </div>
            );
        }
    };

    return (
        <div>
            <h4>Depending on the weather, you can go to:</h4>
            {giveSuggestion()}
        </div>
    );
}

export default SuggestedPlaces;
