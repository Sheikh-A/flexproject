import React, {useState} from 'react';
import axios from 'axios';

function Register(props) {



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
        axios.post('https://aliport.herokuapp.com/api/auth/register', user)
        .then(res => {
            props.history.push('/login');
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <div className="registerContainer negative-top-margin-adjustment">
        <div>
          <div>
            <h1>Register</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <div>
                    <input
                        id="firstName"
                        onChange={handleChange}
                        placeholder="username"
                        value={user.username}
                        name="username"
                    />
                </div>
                <div>
                        <input
                            id="firstName"
                            onChange={handleChange}
                            placeholder="password"
                            value={user.password}
                            name="password"
                            type="password"
                        />
                </div>
            </div>
        </div>
            <button className="blackButton" type="submit">Sign Up</button>
        </form>
    </div>
    </div>
    );
}

export default Register;
