import React from 'react';

const WeatherStats = ({name, icon, description, temp, tempMin, tempMax}) => {
    return (
        <>
            <h1>{name} <img src={icon} alt={description}/></h1>
            <h3>{description}</h3>
            <div className="temp-current">{temp}˚</div>
            <div className="temp-minmax">
                <span>{tempMin}˚</span><span>{tempMax}˚</span>
            </div>
        </>
    )
}

export default WeatherStats;