import React from "react";
import SuggestedPlaces from "../components/SuggestedPlaces.jsx";
import Carousel from "../components/Carousel.jsx";


function Home(){
    return(
        <div>
            <h1 style={{textAlign:`center`,color:`#183661` , fontSize:`40px` , margin:`24px 0px`, fontWeight:`800`}}>Welcome to Alexplorer</h1>
            <Carousel/>
            <SuggestedPlaces/>
        </div>
    )
}
export default Home
