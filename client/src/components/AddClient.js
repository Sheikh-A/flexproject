import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { Redirect } from "react-router-dom";

const AddClient = () => {
  const [formData, setFormData] = useState({
    client_name: "",
    client_segment: "",

  });

  const [home, setHome] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:3300/api/flex", formData)
      .catch((err) => console.log(err));
    setFormData({
      client_name: "",
      client_segment: "",
    });
    setHome(true);
  };
  return (
    <div data-testid="data-card">
      {home ? <Redirect to="/flexdata" /> : null}
      <h1> Add Client</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="client_name">Client Name</label>
        <input
          name="client_name"
          type="text"
          value={formData.client_name}
          onChange={changeHandler}
        />
        <label htmlFor="client_segment">Client Segment</label>
        <input
          name="client_segment"
          type="text"
          value={formData.client_segment}
          onChange={changeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddClient;
