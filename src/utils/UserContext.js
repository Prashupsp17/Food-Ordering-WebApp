import {createContext} from "react";

const UserContext = createContext({
    user : {
        name : "Prashant Shinde",
        email: "shindeprashant967@gmail.com",
        },
    });

export default UserContext;