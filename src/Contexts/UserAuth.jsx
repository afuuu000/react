import { createContext, useState } from "react";


const UserAuthContext=createContext()

const UserAuthContextProvider=(props)=>{
    const[name, setName]=useState("")
    const[email, setEmail]=useState("")
    const[isLoggedIn, setIsLoggedIn]=useState(false)


    return(
        <UserAuthContext.Provider value={{name, setName, email, setEmail, isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </UserAuthContext.Provider>
    )

}



export default UserAuthContextProvider
export {UserAuthContext}