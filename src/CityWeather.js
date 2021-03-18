import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom"




export default function CityWeather (props) {
    return (
        <div>
            <div>
                City Weather
            </div>
            <Link  to='/weather'>
                Map
            </Link>
        </div>
    )

}