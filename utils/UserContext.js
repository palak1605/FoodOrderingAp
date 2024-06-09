import { createContext } from "react";

const UserContext= createContext({
    User:{
        name:"dummy",
        email:"palak.agrawal@gmail.com"
    }
})
export default UserContext;