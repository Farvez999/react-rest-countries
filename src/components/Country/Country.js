import React from 'react';
import './Country.css'

const Country = (props) => {
    const { area, population, name } = props.country;
    return (
        <div className='country'>
            <h3>Country Name : {name.common}</h3>
            <p>Population : {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;