import React, { useState } from 'react';
import axios from "axios";

const SearchBar = () => {
    const [data,setData] = useState([])
    const [city, setCity] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c5e74a1c7c91fa5e2e55bddc54bba2c`
    
    
        const searchCity = (event) => {
            if(event.key === 'Enter') {
                axios.get(url).then((res) => { 
                    setData(res.data)
                    console.log(res.data)
                    });
                setCity('')
                }
            }
            
            let dateObj = new Date();
            let month = dateObj.getUTCMonth() + 1; //months from 1-12
            let day = dateObj.getUTCDate();
            let year = dateObj.getUTCFullYear();
            
            let newdate = day + " - " + month + " - " + year + " ";
    return (
        <div>
            <div className="searchbar">
                
                <input value={city}
                onChange={event => setCity(event.target.value)}
                onKeyPress={searchCity}
                type="text" placeholder="Enter a city..." />
            </div>
            
        <div className="container flex">

            <div className="datatoday">
                <div className="datenow">{newdate}</div>
                <div>
                    <div className="flex wind humidity">
                        {data.main ? <p>Humidity - {data.main.humidity} %</p> : null }
                        {data.wind ? <p>Wind - {data.wind.speed} kph</p> : null }
                    </div>
                    <div className="pressure">
                        {data.main ? <p>Pressure - {data.main.pressure} hPa</p> : null }
                    </div>
                </div>
            </div>

            <div className="datafivenextday">

                <div className="dataoneday flex">
                    <div className="datetime">
                        {newdate}
                    </div>
                    <div className="degrees">
                        {data.main ? <p> {data.main.temp} °F</p> : null }
                    </div>
                </div>

                <div className="dataoneday flex">
                    <div className="datetime">
                        {newdate}
                    </div>
                    <div className="degrees">
                        {data.main ? <p>{data.main.temp} °F</p> : null }
                    </div>
                </div>

                <div className="dataoneday flex">
                    <div className="datetime">
                        {newdate}
                    </div>
                    <div className="degrees">
                        {data.main ? <p>{data.main.temp} °F</p> : null }
                    </div>
                </div>

                <div className="dataoneday flex">
                    <div className="datetime">
                        {newdate}
                    </div>
                    <div className="degrees">
                        {data.main ? <p>{data.main.temp} °F</p> : null }
                    </div>
                </div>

                <div className="dataoneday flex">
                    <div className="datetime">
                        {newdate}
                    </div>
                    <div className="degrees">
                        {data.main ? <p>{data.main.temp} °F</p> : null }
                    </div>
                </div>                
            </div>
        </div>
     </div> 
    );
};

export default SearchBar;