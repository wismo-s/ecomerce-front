import { createContext, useContext, useEffect, useState } from "react";
import { getUserDetails } from "../api/list.api";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export function UserProvider({children}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserDetails()
        .then((response) => {
            setUser(response)
        })
        .catch((error) => {
            setUser(null)
        })
    }, [])
    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}