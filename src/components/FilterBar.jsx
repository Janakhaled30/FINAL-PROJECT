import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function FilterBar() {
    return (
        <div>
            <h5>Select Your Preferences</h5>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
            Outdoors
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
            Indoors
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
            Family
            </label>
            </div>
        </div>
    );
}

export default FilterBar;
