import {createContext} from "react";

const UserContext = createContext({
    user : {
        name : "dummyName",
        email: "shindeprashant967@gmail.com",
        },
    });

export default UserContext;