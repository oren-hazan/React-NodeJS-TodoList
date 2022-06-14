import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const token = localStorage.getItem('token');
    const INITIAL_STATE = token ? token : null

    const [userToken,seUserToken] = useState(INITIAL_STATE);

    const value = {userToken: userToken, setUserToken:  seUserToken}

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export default AuthContextProvider;