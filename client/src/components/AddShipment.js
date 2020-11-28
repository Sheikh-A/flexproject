import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { Redirect } from "react-router-dom";

const AddShipment = () => {
  const [formData, setFormData] = useState({
    shipment_name: "",
    client_id: "",

  });

  const [home, setHome] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:3300/api/flexport/shipments", formData)
      .catch((err) => console.log(err));
    setFormData({
      shipment_name: "",
      client_id: "",
    });
    setHome(true);
  };
  return (
    <div data-testid="data-card">
      {home ? <Redirect to="/flexportshipments" /> : null}
      <h1> Add Shipment</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="shipment_name">Shipment Name</label>
        <input
          name="shipment_name"
          type="text"
          value={formData.shipment_name}
          onChange={changeHandler}
        />
        <label htmlFor="client_id">Client ID</label>
        <input
          name="client_id"
          type="number"
          value={formData.client_id}
          onChange={changeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddShipment;
