//import { Authors } from "../constants/mocks";
import React, { useState, useEffect, useReducer } from 'react'

const AuthorContext = React.createContext();

const initialState = {
    author: null,
    isLoading: true,
    isError: false
};

// {
//     type:"ACTION",
//     data: obj
// }

const reducer = (state, action) => {
    switch(action.type){
        case "REQUEST_LIST_AUTHOR_SUCCESS":
            return { ...state, author: action.data, isLoading:false }
        default:
            throw new Error();

    }
};

const AuthorProvider = (props) => {
    const [idSelected, setIdSelected] = useState("123");
    const [state, dispatch]= useReducer(reducer, initialState);

    useEffect(()=> {
        state.isLoading=true;
        fetch('https://api.itedu.me/instructor', {
            method: 'GET'
        }).then((response) => response.json())
            .then((json)=> dispatch({type: "REQUEST_LIST_AUTHOR_SUCCESS", data: json.payload}))
            .catch((error)=>{})
            .finally(()=>{
                state.isLoading=false;
            });
    }, []);
    //console.log("Author: ", state.isLoading);
    return <AuthorContext.Provider value={{ ...state, idSelected, setIdSelected}}>
        {props.children}
    </AuthorContext.Provider>
};

export { AuthorContext, AuthorProvider };