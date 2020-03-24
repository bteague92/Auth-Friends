import React, { useState } from "react";
import axios from "axios";
import NewFriend from "./newFriend.js";

const Friends = (props) => {

    return (
        <div>
            <NewFriend />
            {/* <button onClick={getData}>See Friends</button> */}
            {props.friends.map((f) => {
                return (
                    <h2>{f.name}, {f.age}, {f.email}</h2>
                )
            })
            }
        </div>
    );
}

export default Friends;