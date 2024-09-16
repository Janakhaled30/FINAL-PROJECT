import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";

function SuggestedPlaces() {
    const [weather, setWeather] = useState(null);
    const api = "https://api.openweathermap.org/data/2.5/weather?q=alexandria&appid=e3f9787e87e2a1b46edcb0c315830d35&units=metric";

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => setWeather(data.weather[0].main))
            .catch(error => console.error('Error fetching weather data:', error));
    }, []);

    const giveSuggestion = () => {
        if (weather === null) {
            return <h4>Loading...</h4>;
        }
        else if (weather === 'Rain') {
            return (
                <Card
                placeName="Beautiful Cafe"
                placeImage="le" 
            />
            );
        } else {
            return (
                <div class="container text-center">
                    <div class="row g-2">
                        <div class="col-6">
                            <div class="p-3">      
                                <Card
                                    placeName="Beautiful Beach"
                                    placeImage="le" 
                                />
                            </div>
                        </div>
                    <div class="col-6">
                        <div class="p-3">                
                            <Card
                                placeName="Beautiful Beach"
                                placeImage="le" 
                            />
                        </div>
                        </div>
                        <div class="col-6">
                            <div class="p-3">                
                                <Card
                                    placeName="Beautiful Beach"
                                    placeImage="le" 
                            />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="p-3">                
                                <Card
                                    placeName="Beautiful Beach"
                                    placeImage="le" 
                                />
                            </div>
                        </div>
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
