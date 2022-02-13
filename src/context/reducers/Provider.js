import React, { createContext, useReducer } from "react";
import authStates from "../initialStates/authStates";
import bookStates from "../initialStates/bookStates";
import auth from "./auth";
import books from "./books";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
    const [authState, setAuthState] = useReducer(auth, authStates);
    const [bookState, setBookState] = useReducer(books, bookStates);
    return (
        <GlobalContext.Provider value={{ authState, bookState, setAuthState, setBookState }}>{children}</GlobalContext.Provider>
    )
}

export default GlobalProvider;