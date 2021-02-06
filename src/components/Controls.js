import React from 'react';

const Controls = ({fetchWeatherData, location, setLocation}) => {
    return(
        <form className="controls" onSubmit={(e) => fetchWeatherData(e)}>
            <label htmlFor="zip">Zip Code:</label>
            <input
                id="zip"
                type="text"
                placeholder="Zip"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    )
}

export default Controls;