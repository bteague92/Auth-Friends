import React, { useState, useEffect } from "react";
import axios from "axios";
import NewFriend from "./newFriend.js";

const Friends = (props) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/friends`, {
                headers: { authorization: localStorage.getItem("token") }
            })
            .then(res => {
                console.log(res)
                if ("token" ? props.setFriends(res.data) : props.setFriends([]));

            })
    }, [count])

    const deleteFriend = (id) => {
        axios
            .delete(`http://localhost:5000/api/friends/${id}`, {
                headers: { authorization: localStorage.getItem("token") }
            })
            .then(res => {
                setCount(count + 1)
            })
    }

    return (
        <div>
            <NewFriend setCount={setCount} count={count} />
            {/* <button onClick={getData}>See Friends</button> */}
            {props.friends.map((f) => {
                return (
                    <div>
                        <h2>{f.name}, {f.age}, {f.email}</h2>
                        <button onClick={() => deleteFriend(f.id)}>Delete</button>
                    </div>
                )
            })
            }
        </div>
    );
}

export default Friends;