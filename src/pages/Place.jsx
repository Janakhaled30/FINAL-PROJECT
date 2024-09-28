import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Place.css'


function Place(props) {
  const { placeName } = useParams();
  const [place, setPlace] = useState(null);

 
  const containerStyle = {
    minHeight: "100vh",
    display: "flex", 
    flexDirection: "row",
  };
  
  const contentStyle = {
    flex: 1, 
    textAlign: "left",
    padding: "1rem", 
  };
  
  const imageStyle = {
    width:"300px",height:"auto" 
  };
  
  const buttonContainerStyle = {
    textAlign: "right", 
    marginTop: "1rem", 
  };
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);

 
useEffect(() => {
  getPlaceDetails(placeName); // Fetch details when component mounts
}, [placeName]);

const getPlaceDetails = async (name) => {
  try {
    const response = await axios.post(`http://127.0.0.1:5000/name`, null, {
      params: {
        name: placeName
    }
    });
    setPlace(response.data);  
    console.log(place);

  }
     catch (error) {
    console.error("Error fetching place details", error);
  }
};


  const handleButtonClick = () => {
    if (isLoggedIn) {
      console.log('Button clicked, user is logged in');
    } else {
      console.log('User must be logged in to perform this action');
    }
  };
if(place && place!==null)
{ 
  console.log("hii")
  console.log(place)
  return (
    <div className="main pl"style={containerStyle}>
      <img className='image' src={place[0].image_url} /> 
      <div className='info' style={contentStyle}>
        <h1>{place[0].name}</h1>
        <h4>{place[0].weather}</h4>
        <iframe
          src={place[0].location}
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
else
{
  return <h4>Loading...</h4>;
}
}

export default Place;
