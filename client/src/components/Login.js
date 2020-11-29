import React, {useState} from 'react';
import axios from 'axios'

function Login(props) {


    const [user, setUser] = useState({
      username: "",
      password: "",
    })

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:3300/api/auth/login', user)
        .then(res => {
            console.log("login post response" , res);
            localStorage.setItem('token', JSON.stringify(res.data.token))
            props.setLogged(true);
            props.history.push('/flexdata');

        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
            onChange={handleChange}
            placeholder="username"
            value={user.username}
            name="username"
        />
        <input
            onChange={handleChange}
            placeholder="password"
            value={user.password}
            name="password"
            type="password"
        />
        <button type="submit">Login</button>
    </form>
    );
}

export default Login;
