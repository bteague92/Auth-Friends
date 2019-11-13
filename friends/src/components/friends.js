import React, { useState } from "react";
import axios from "axios";

const Friends = () => {
    const [friends, setFriends] = useState([])

    const getData = () => {
        axios
            .get(`http://localhost:5000/api/friends`, {
                headers: { authorization: localStorage.getItem("token") }
            })
            .then(res => {
                console.log(res)
                if ("token" ? setFriends(res.data) : setFriends([]));

            })
    };

    getData();

    return (
        <div>
            {/* <button onClick={getData}>See Friends</button> */}
            {friends.map((f) => {
                return (
                    <h2>{f.name}, {f.age}, {f.email}</h2>
                )
            })
            }
        </div>
    );
}

export default Friends;