import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./../axiosWithAuth/axiosWithAuth";

const Login = (props) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [loggedIn, setLoggedIn] = useState(false)


    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token ? setLoggedIn(true) : null);
    }, [])

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(
                "/api/login",
                credentials
            )
            .then(res => {
                console.log("res", res);

                localStorage.setItem("token", res.data.payload);
                if ("token" ? setLoggedIn(true) : null);
                // if ("token" ? props.getData() : null);
                props.history.push('/friends');
            });
    };

    return (
        <div>
            <h2>{loggedIn ? `Welcome back ${credentials.username}` : "Please log in"}</h2>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    );
}

export default Login;