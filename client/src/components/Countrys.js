import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth"

function CountryList() {

    const [CountryList, setCountryList] = useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:3300/api/countries')
        .then(res => {
            console.log("users post response" , res.title);
            setCountryList(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, []);






  return (
    <div>
        {(CountryList.length > 0 )
        ? CountryList.map(joke =>
            <div key={joke.id} className="data-card">
                <h2>{joke.name}</h2>
            </div>

        ): localStorage.getItem('token')
        ? <h1>Loading....</h1>
        : <h1>Jokes on you! You need to log in!</h1>
    }

    </div>

    );
}

export default CountryList;
