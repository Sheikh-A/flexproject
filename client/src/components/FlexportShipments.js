import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth"

function FlexportShipmentList() {

    const [FlexportShipmentList, setFlexportShipmentList] = useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:3300/api/flexport/shipments')
        .then(res => {
            console.log("users post response" , res.data);
            setFlexportShipmentList(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, []);


  return (
    <div>
        {(FlexportShipmentList.length > 0 )
        ? FlexportShipmentList.map(flexdata =>
            <div key={flexdata.id} className="data-card">
                <h3>Shipment ID: {flexdata.id}</h3>
                <h3>Shipment Name: {flexdata.shipment_name}</h3>
                <h3>Client ID: {flexdata.client_id}</h3>
                <h3>Client Name: {flexdata.client_name}</h3>
            </div>

        ): localStorage.getItem('token')
        ? <h1>Loading....</h1>
        : <h1>Jokes on you! You need to log in!</h1>
    }

    </div>

    );
}

export default FlexportShipmentList;
