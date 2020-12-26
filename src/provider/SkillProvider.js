import React, { useState, useEffect, useReducer } from 'react'

const SkillContext = React.createContext();

const initialState = {
    category: null,
    isLoading: true,
    isError: false
};

const reducer = (state, action) => {
    switch(action.type){
        case "REQUEST_LIST_CATEGORY_SUCCESS":
            return { ...state, category: action.data, isLoading:false }
        default:
            throw new Error();

    }
};


const SkillProvider = (props) => {
    //const [idSelected, setIdSelected] = useState("123");
    const [state, dispatch]= useReducer(reducer, initialState);

    useEffect(()=> {
        state.isLoading=true;
        fetch('https://api.itedu.me/category/all', {
            method: 'GET'
        }).then((response) => response.json())
            .then((json)=> dispatch({type: "REQUEST_LIST_CATEGORY_SUCCESS", data: json.payload}))
            .catch((error)=>{})
            .finally(()=>{
                state.isLoading=false;
            });
    }, []);

    return <SkillContext.Provider value={{ state }}>
        {props.children}
    </SkillContext.Provider>
};

export { SkillContext, SkillProvider };