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
      .post("https://aliport.herokuapp.com/api/flex", formData)
      .catch((err) => console.log(err));
    setFormData({
      client_name: "",
      client_segment: "",
    });
    setHome(true);
  };
  return (
    <div className="registerContainer negative-top-margin-adjustment">
      {home ? <Redirect to="/flexdata" /> : null}
      <div>
        <div>
          <h1> Add Client</h1>
        </div>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <div>
              <label htmlFor="client_name">Client Name</label>
              <input
                id="firstName"
                name="client_name"
                type="text"
                value={formData.client_name}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label htmlFor="client_segment">Client Segment</label>
              <input
                id="firstName"
                name="client_segment"
                type="text"
                value={formData.client_segment}
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        <button className="blackButton" type="submit">Add</button>
      </form>
    </div>
  </div>
  );
};

export default AddClient;
