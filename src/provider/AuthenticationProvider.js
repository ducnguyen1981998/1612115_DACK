import React, { useState, useEffect, useReducer } from 'react'
import { reducer } from '../reducers/AuthenticationReducer';
import { login } from '../actions/AuthenticationAction';

const AuthenticationContext = React.createContext();

const initialState = {
    isAuthenticated: false,
    userInfo: null,
    token: null,
    message: null
};


const AuthenticationProvider = (props) => {
    const [state, dispatch ] = useReducer(reducer, initialState);
    //console.log("State: ", state);
    //console.log("Auth: ", state.isAuthenticated);
    return <AuthenticationContext.Provider value={{ state, login: login(dispatch)}}>
        {props.children}
    </AuthenticationContext.Provider>
};

export { AuthenticationContext, AuthenticationProvider };
