import React, { useState } from "react";
import { axiosWithAuth } from "./../axiosWithAuth/axiosWithAuth";

const Login = () => {

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
            });
    };

    return (
        <div>
            <h2>{loggedIn ? "You are logged in" : "Please log in"}</h2>
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