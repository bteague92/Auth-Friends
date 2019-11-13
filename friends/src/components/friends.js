import React, { useState } from "react";
import axios from "axios";

const axiosWithAuth = () => {
    return axios.create({
        headers: {
            authorization: sessionStorage.getItem("token")
        }
    });
};

const Friends = () => {
    const [friends, setFriends] = useState([])

    const getData = () => {
        axios
            .get(`http://localhost:5000/api/friends`, {
                headers: { authorization: sessionStorage.getItem("token") }
            })
            .then(res => {
                console.log(res)
                setFriends(res.data)
            })
    };

    // const addFriend = (e) => {
    //     e.preventDefault();
    //     const [newFriend, setNewFriend] = useState({
    //         id: Date.now(),
    //         name: '',
    //         age: '',
    //         email: ''
    //     })
    //     axios
    //         .post(`http://localhost:5000/api/friends`, {
    //             headers: { authorization: sessionStorage.getItem("token") }
    //         })
    //         .then(res => {
    //             console.log(res)
    //             setFriends(...friends, newFriend)
    //         })
    // }

    return (
        <div>
            <button onClick={getData}>See Friends</button>
            <form>
                <input />
                <button>Add Friend</button>
            </form>
            <form>
                <input />
                <button>Delete Friend</button>
            </form>
            <form>
                <input />
                <button>Edit Friend</button>
            </form>
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