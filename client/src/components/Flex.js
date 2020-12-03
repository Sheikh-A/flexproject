import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth"

function FlexList() {


    setTimeout(function() {
        let token = localStorage.getItem('token');
        console.log(token);
    }, 1);

    const [FlexList, setFlexList] = useState([])

    useEffect(() => {
        axiosWithAuth().get('https://aliport.herokuapp.com/api/flex')
        .then(res => {
            console.log("users post response" , res.data);
            setFlexList(res.data);
        })
        .catch(err => {

            console.log(err);
        })
    }, []);


  return (
    <div>
        {(FlexList.length > 0 )
        ? FlexList.map(flexdata =>
            <div key={flexdata.id} className="data-card">
                <h3>Client ID: {flexdata.id}</h3>
                <h3>Client Name: {flexdata.client_name}</h3>
                <h3>Client Segment: {flexdata.client_segment}</h3>
            </div>

        ): setTimeout(50)
        ? <h1>You shall not pass....</h1>
        : <h1>You shall not pass, You need to log in!</h1>
    }

    </div>

    );
}

export default FlexList;
