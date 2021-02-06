import React, {useState, useEffect} from 'react';
import WeatherStats from "./components/WeatherStats";
import Controls from "./components/Controls";
import './App.css';


const App = () => {
    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState('10036');

    const fetchWeatherData = async (e) => {
        try {
            e && e.preventDefault();

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${location},us&units=metric&appid=709847967f5e54b97308c1b2cae4dee5`);
            if(response.status === 200) {
                const data = await response.json();
                setWeatherData({
                    name: data.name,
                    icon: data.weather && `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
                    description: data.weather && data.weather[0].description,
                    temp: data.main && Math.round(data.main.temp),
                    tempMin: data.main && Math.round(data.main.temp_min),
                    tempMax: data.main && Math.round(data.main.temp_max)
                });
                // location && setLocation('');
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWeatherData();
    }, []);


    return (
        <div className="App">
            <WeatherStats {...weatherData} />
            <hr/>
            <Controls
                fetchWeatherData={fetchWeatherData}
                location={location}
                setLocation={setLocation}
            />
        </div>
    );
}

export default App;
