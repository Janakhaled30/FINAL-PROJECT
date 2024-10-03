import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Place.css'


function Place() {
  const { placeName } = useParams();
  const [place, setPlace] = useState(null);
 
 //get the data from the backend 
  const getPlaceDetails = async (placeName) => {
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
  // call the function
  useEffect(() => {
    getPlaceDetails(placeName); // Fetch details when component mounts
  }, [placeName]);
  
if(place!==null)
{ 
  console.log(place)
  return (
    <div className='container'>
        <h1 className='heading'>{place[0].name}</h1>
      <img className='placeImg' src={place[0].image_url} /> 
      <div className='container2'>
        <h4 className='description'>{place[0].describtion}<a className='wiki' href={place[0].wikipedia_link}>....see more</a></h4>
        <iframe
          className='map'
          src={place[0].location}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='container3'>

      </div>
    </div>
  );
}
else
{
  return <h4 >Loading...</h4>;
}
}

export default Place;
