
import {useState} from "react";

const Profile = (props) => {
    const [count , setCount] = useState(0);
    // const [count2 , setCount2] = useState(0);
    return (
        <div>
            <h1>Profile</h1>
            <h4>Name: {props.name}</h4>
            <h4>Count{count}</h4>
            {/* <h4>Count{count2}</h4> */}
            <button onClick={() => {
                setCount(1);
                // setCount2(2);
            }}>setCount</button>
        </div>
    )
}

export default Profile;