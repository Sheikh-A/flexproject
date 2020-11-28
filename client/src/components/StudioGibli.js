import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from "../utils/axiosWithAuth"

function StudioGibli() {


    const [StudioGibli, setStudioGibli] = useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:3300/api/jokes')
        .then(res => {
            console.log("users post response" , res.title);
            setStudioGibli(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, []);






  return (
    <div>
        {(StudioGibli.length > 0 )
        ? StudioGibli.map(joke =>
            <div key={joke.id} className="data-card">
                <h2>{joke.title}</h2>
            </div>

        ): localStorage.getItem('token')
        ? <h1>Loading....</h1>
        : <h1>Jokes on you! You need to log in!</h1>
    }

    </div>

    );
}

export default StudioGibli;
