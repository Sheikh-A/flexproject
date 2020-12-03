import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth"

function CountryList() {

    setTimeout(function() {
        let token = localStorage.getItem('token');
        console.log(token);
    }, 1);

    const [CountryList, setCountryList] = useState([])

    useEffect(() => {
        axiosWithAuth().get('https://aliport.herokuapp.com/api/countries')
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
        ? CountryList.map(country =>
            <div key={country.id} className="data-card">
                <h2>{country.name}</h2>
                <img src={country.flag} alt="flag" className="country-image"/>
                <h3>Country Code: {country.alpha3Code}</h3>
                <h3>Country Region: {country.region}</h3>
                <h3>Country Subregion: {country.subregion}</h3>

            </div>

        ): setTimeout(50)
        ? <h1>You shall not pass....</h1>
        : <h1>You shall not pass, You need to log in!</h1>
    }

    </div>

    );
}

export default CountryList;
