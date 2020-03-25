import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./../axiosWithAuth/axiosWithAuth";

const NewFriend = (props) => {

    const [newFriend, setNewFriend] = useState({
        id: Date.now(),
        name: '',
        age: null,
        email: ''
    });

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    };

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(
                "/api/friends",
                newFriend
            )
            .then(res => {
                console.log("res for new friend", res);
                props.setCount(props.count + 1)
            });
    };
    // const getData = () => {
    //     axios
    //       .get(`http://localhost:5000/api/friends`, {
    //         headers: { authorization: localStorage.getItem("token") }
    //       })
    //       .then(res => {
    //         console.log(res)
    //         if ("token" ? setFriends(res.data) : setFriends([]));

    //       })
    //   };

    //   getData();

    return (
        <div>
            <form onSubmit={addFriend}>
                <input
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="age"
                    value={newFriend.age}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <button>Add Friend</button>
            </form>
        </div>
    );
}

export default NewFriend;