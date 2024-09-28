import React from "react";
import SuggestedPlaces from "../components/SuggestedPlaces";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Home(){
    return(
        <div style={{textAlign:'left'}} className="main">
            <Header/>
            <SuggestedPlaces/>
            <Footer/>
        </div>
    )
}
export default Home