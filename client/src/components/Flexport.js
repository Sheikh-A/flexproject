import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth"

function FlexportList() {

    const [FlexportList, setFlexportList] = useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:3300/api/flexport')
        .then(res => {
            console.log("users post response" , res.data);
            setFlexportList(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, []);


  return (
    <div>
        {(FlexportList.length > 0 )
        ? FlexportList.map(flexdata =>
            <div key={flexdata.id} className="data-card">
                <h3>Client ID: {flexdata.id}</h3>
                <h3>Client Name: {flexdata.client_name}</h3>
                <h3>Client Segment: {flexdata.client_segment}</h3>
            </div>

        ): localStorage.getItem('token')
        ? <h1>Loading....</h1>
        : <h1>Jokes on you! You need to log in!</h1>
    }

    </div>

    );
}

export default FlexportList;
