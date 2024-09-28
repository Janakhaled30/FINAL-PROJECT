import React from "react";
import SuggestedPlaces from "../components/SuggestedPlaces";

function Home(){
    return(
        <div style={{textAlign:'left'}}>
            <h1 style={{textAlign:center,color:#183661 , fontSize:40px , margin:24px 0px, fontWeight:800}}>Welcome to Alexplorer</h1>
            <SuggestedPlaces/>
        </div>
    )
}
export default Home
