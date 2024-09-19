import React from "react";
import FilterBar from "../components/FilterBar";
import Card from "../components/Card";

const places=['beach','cafe','home'];

function DisplayPage(){
    return <div>
        <FilterBar/>
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